import React from "react";
import ContentEditable from "react-contenteditable";
import getSelection from "../../utils/getSelection";
import getCaretCoordinates from "../../utils/getCaretCoordinates";
import FloatingButton from "./FloatingButton";
import COLORS from "../../constants/colors";

class EditableBlock extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = {
      // htmlBackup: null,
      html: "",
      tag: "p",
      flag: 0,
      previousKey: null,
      actionMenuOpen: false,
      actionMenuPosition: { x: null, y: null },
      selectionStart: 0,
      selectionEnd: 0,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.calculateActionMenuPosition =
      this.calculateActionMenuPosition.bind(this);
    this.openActionMenu = this.openActionMenu.bind(this);
    this.closeActionMenu = this.closeActionMenu.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      html: this.props.html,
      tag: this.props.tag,
      flag: this.props.flag,
    });
    // set eventListener
    this.contentEditable.current.addEventListener("paste", (e) => {
      e.preventDefault();

      // get plain text
      let text = (e.originalEvent || e).clipboardData.getData("text/plain");
      this.setState({ html: this.state.html + text });
    });
  }

  componentWillUnmount() {
    // In case, the user deleted the block, we need to cleanup all listeners
    document.removeEventListener("click", this.closeActionMenu, false);
  }

  // component render 최적화
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.html !== nextState.html ||
      this.state.flag !== nextState.flag ||
      this.state.actionMenuOpen !== nextState.actionMenuOpen
    ) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    const htmlChanged = prevState.html !== this.state.html;
    const tagChanged = this.props.tag !== this.state.tag;
    const blockChanged = prevState.flag !== this.state.flag;

    if (htmlChanged || tagChanged || blockChanged) {
      this.props.updatePage({
        id: this.props.id,
        html: this.state.html,
        tag: this.state.tag,
        flag: this.state.flag,
      });
    }
  }

  onChangeHandler(e) {
    this.setState({
      ...this.state,
      html: e.target.value,
    });
  }

  onKeyDownHandler(e) {
    if (e.key === "Enter") {
      if (
        e.nativeEvent.isComposing === false &&
        this.state.previousKey !== "Shift"
      ) {
        e.preventDefault();
        const { selectionStart } = getSelection(this.contentEditable.current);
        this.props.addBlock({
          command: e.key,
          id: this.props.id,
          html: this.state.html,
          position: selectionStart,
          flag: this.state.flag,
          ref: this.contentEditable.current,
        });
      }
    } else if (
      e.key === "Backspace" &&
      (this.state.html === "" || this.state.html === "<br>")
    ) {
      e.preventDefault();
      this.props.deleteBlock({
        command: e.key,
        id: this.props.id,
        ref: this.contentEditable.current,
      });
    }

    if (e.key !== "Enter") {
      this.setState({ previousKey: e.key });
    }
  }

  calculateActionMenuPosition(parent, initiator) {
    switch (initiator) {
      case "TEXT_SELECTION":
        const { x: endX, y: endY } = getCaretCoordinates(false); // fromEnd
        const { x: startX, y: startY } = getCaretCoordinates(true); // fromStart
        const middleX = startX + (endX - startX) / 2;

        return { x: middleX, y: endY + startY - startY };
      // case 'DRAG_HANDLE_CLICK':
      //   const x =
      //     parent.offsetLeft - parent.scrollLeft + parent.clientLeft - 90;
      //   const y = parent.offsetTop - parent.scrollTop + parent.clientTop + 35;
      //   return { x: x, y: y };
      default:
        return { x: null, y: null };
    }
  }
  openActionMenu(parent, trigger, start, end) {
    // floating point x, y value
    const { x, y } = this.calculateActionMenuPosition(parent, trigger);
    this.setState({
      ...this.state,
      actionMenuPosition: { x: x, y: y },
      actionMenuOpen: true,
      selectionStart: start,
      selectionEnd: end,
    });

    // Add listener asynchronously to avoid conflicts with
    // the double click of the text selection
    setTimeout(() => {
      document.addEventListener("click", this.closeActionMenu, false);
    }, 100);
  }
  closeActionMenu() {
    this.setState({
      ...this.state,
      actionMenuPosition: { x: null, y: null },
      actionMenuOpen: false,
    });
    document.removeEventListener("click", this.closeActionMenu, false);
  }

  handleMouseUp() {
    const block = this.contentEditable.current;
    const { selectionStart, selectionEnd } = getSelection(block);
    if (selectionStart !== selectionEnd) {
      // set position
      this.setState({
        ...this.state,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
      });
      this.openActionMenu(
        block,
        "TEXT_SELECTION",
        selectionStart,
        selectionEnd
      );
    }
  }

  render() {
    return (
      <>
        {this.state.actionMenuOpen && (
          <FloatingButton
            position={this.state.actionMenuPosition}
            actions={{
              turnIntoBlock: () =>
                this.props.updateBlock({
                  id: this.props.id,
                  html: this.state.html,
                  tag: this.state.tag,
                  flag: this.state.flag,
                  startPoint: this.state.selectionStart,
                  endPoint: this.state.selectionEnd,
                }),
            }}
          />
        )}

        <ContentEditable
          //disabled={false} // use true to disable editing
          style={{
            width: "calc(100% - 3.5rem)",
            padding: "4px 12px",
            marginTop: "6px",
            marginBottom: "6px",

            background: this.props.flag ? COLORS.blockBackground : "none",
            border: this.props.flag ? `1px solid ${COLORS.blockBorder}` : null,
            outlineColor: "#4C6EF5",
            borderRadius: "2px",
          }}
          innerRef={this.contentEditable}
          html={this.state.html}
          flag={this.props.flag}
          tagName={this.state.tag}
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onMouseUp={this.handleMouseUp}
          className={this.props.id}
        />
      </>
    );
  }
}
export default EditableBlock;
