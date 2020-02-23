import { ReactComponent as HoveredArrow } from "../../svg/hovered-arrow.svg";
import styled from "styled-components";
export const Title = styled.h1`
  font-size: 32px;
  margin: 40px 0px 24px;
`;
export const Image = styled.img`
  width: 364px;
  height: 243px;
  padding: 0 12px;
  box-sizing: border-box;
`;
export const Wrapper = styled.div`
  margin-bottom: 2.5rem;
  margin-left: -12px;
  display: block;
`;
export const ReversedHoveredArrow = styled(HoveredArrow)`
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
