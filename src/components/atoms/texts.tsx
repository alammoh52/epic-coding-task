import styled from "styled-components";
import { AQUAGREEN, BODY_TEXT } from "./constants";
import { IStyledProps } from "./types";

const WhiteItalicH1 = styled.h1`
  color: white;
  font-style: italic;
`;

export const StyledSpan = styled.span<IStyledProps>`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "16"}px;
`;

export const UpperCaseStyledSpan = styled(StyledSpan)<IStyledProps>`
  text-transform: uppercase;
`;

export const MarvelousText = () => <WhiteItalicH1>Marvelous!</WhiteItalicH1>;

export const LoremText = () => (
  <StyledSpan color={AQUAGREEN}>
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry.Lorem Ipsum has been the industry's standard dummy text ever since.
  </StyledSpan>
);

export const SearchItemText = () => (
  <UpperCaseStyledSpan fontSize={BODY_TEXT}>Search an item</UpperCaseStyledSpan>
);
