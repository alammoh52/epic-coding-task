import styled from "styled-components";
import { GREY, LESS_GREY } from "../atoms/constants";
import { RemoveItemBtn } from "../atoms/inputs";

export const ItemWrapper = styled.li`
  position: relative;
  padding: 16px;
  text-transform: uppercase;
  background: ${GREY};
  color: white;
  :nth-child(odd) {
    background: ${LESS_GREY};
    color: black;
  }
`;

export const Item = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => {};
}) => (
  <ItemWrapper>
    {title}
    <RemoveItemBtn onClick={onClick} />
  </ItemWrapper>
);
