import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckMark } from "../../svg/check.svg";
const CheckBoxLabel = styled.label`
  margin-left: 1rem;
`;

const CheckBox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;

  border: 1px solid #c9c9c9;
  box-sizing: border-box;
  border-radius: 2px;
`;
const CheckBoxWrapper = styled.div`
  margin-top: 19px;
  display: flex;
`;
const MarkWrapper = styled.div`
  position: absolute;
  left: 7px;
  margin-top: 3px;
  display: inline;
  z-index: 0;
`;
export default props => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  function createMarkup(span) {
    return { __html: span };
  }
  return props.fields
    .filter(field => field.name === "agreement")
    .map(field => (
      <CheckBoxWrapper key={field.name} className="form-group">
        <CheckBox type={field.type} required={true} onClick={handleClick} />
        {isChecked && (
          <MarkWrapper onClick={handleClick}>
            <CheckMark />
          </MarkWrapper>
        )}

        <CheckBoxLabel className="form-check-label">
          <div dangerouslySetInnerHTML={createMarkup(field.label)} />
        </CheckBoxLabel>
      </CheckBoxWrapper>
    ));
};
