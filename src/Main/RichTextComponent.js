import React from "react";
import styled from "styled-components";
export const Header = styled.h2`
  font-size: 24px;
`;
export default props => {
  function createMarkup() {
    return { __html: props.block.metadata.text };
  }
  return (
    <div className={`col-${props.block.col}`}>
      <Header>{props.block.metadata.title}</Header>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
