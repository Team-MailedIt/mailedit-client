import styled from "styled-components";

const MENU_HEIGHT = 20;

const FloatingButton = ({ position, actions }) => {
  const x = position.x;
  const y = position.y + MENU_HEIGHT;

  return (
    <div
      // className={styles.menuWrapper}
      style={{
        top: y,
        left: x,
        position: "absolute",
        width: "auto",
        height: "2.5rem",
        zIndex: "11",
      }}
    >
      <Menu>
        <MenuItem
          id="turn-into"
          // className={styles.menuItem}
          role="button"
          tabIndex="0"
          onClick={() => actions.turnIntoBlock()}
        >
          블록 만들기
        </MenuItem>
      </Menu>
    </div>
  );
};

const Menu = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: $box-shadow;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px #5c7cfa;
`;

const MenuItem = styled.span`
  width: 75px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

export default FloatingButton;
