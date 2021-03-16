import styled from "styled-components";
import { BODY_TEXT } from "./constants";
import { UpperCaseStyledSpan } from "./texts";

export const Label = styled.div`
  justify-content: center;
  background-image: linear-gradient(white, #a3b2c5, #8999af);
  min-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddItemLabel = () => (
  <Label>
    <UpperCaseStyledSpan>Add an item</UpperCaseStyledSpan>
  </Label>
);

export const ColumnLabel = ({ index }: { index: number }) => (
  <Label>
    <UpperCaseStyledSpan>Column {index}</UpperCaseStyledSpan>
  </Label>
);

export const SearchItemLabel = () => (
    <UpperCaseStyledSpan fontSize={BODY_TEXT}>Search an item</UpperCaseStyledSpan>
  );
