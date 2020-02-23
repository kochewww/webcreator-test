import React from "react";
import styled from "styled-components";
const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.25);
  align-items: center;
`;
const HeaderText = styled.h2`
  display: flex;
  font-size: 16px;
  color: #323232;
`;
export default function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderText>Тестовое задание</HeaderText>
      </div>
    </HeaderWrapper>
  );
}
