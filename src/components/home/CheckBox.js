import React from "react";
import styled from "styled-components";
import check from "../../constants/icons/check.svg";

const Checkbox = ({ id, checked, ...props }) => {
  return (
    <label>
      <CheckboxContainer>
        <HiddenCheckbox id={id} checked={checked} {...props} />
        <StyledCheckbox id={id} checked={checked}>
          <Icon src={check} />
        </StyledCheckbox>
      </CheckboxContainer>
    </label>
  );
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 16px;
  height: 16px;

  overflow: hidden;

  font-size: 0;
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;

  margin: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  vertical-align: top;

  width: 100%;
  height: 100%;

  background: ${(props) => (props.checked ? "white" : "none")};

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export default Checkbox;
