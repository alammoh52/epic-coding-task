import styled from "styled-components";
import { GREY } from "./constants";
import { IColumnProps } from "./types";

export const AppWrapper = styled.div`
  padding: 16px;
  background-color: ${GREY};
`;

export const MainWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;

export const TopTextWrapper = styled.div`
  max-width: 45%;
`;

export const TableWrapper = styled.div`
  margin-top: 32px;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;
export const FlexColumn = styled.div<IColumnProps>`
  flex-grow: 1;
  width: 33%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.isControls ? "transparent" : "white")};
  padding-right:${(props) => (props.isControls ? 8 : 0)}px;
`;

export const UnStyledList = styled.ul`
  padding: 0px;
  list-style-type: none;
  margin: 0px;
`;
