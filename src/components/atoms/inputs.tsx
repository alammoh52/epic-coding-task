import styled, { css } from "styled-components";
import { ENTER_ITEM, GREY, CHOOSE_COLUMN, SEARCH } from "./constants";
import { IInputProps, IStyledProps } from "./types";

const StyledInputCSS = css<IStyledProps>`
  text-transform: uppercase;
  height: ${(props) => props.height || "50"}px;
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "16"}px;
  border: solid 3px ${(props) => props.color || "white"};
  margin-bottom: 16px;
  background-color: #a2a7af;
  ::placeholder {
    color: ${(props) => props.color || "white"};
  }
`;

export const StyledInput = styled.input<IStyledProps>`
  ${StyledInputCSS}
`;

export const StyledSelect = styled.select<IStyledProps>`
  ${StyledInputCSS}
`;
export const StyledButton = styled.button<IStyledProps>`
  ${StyledInputCSS}
  background-color: ${GREY};
`;

export const SquareButton = styled.button`
  height: 25px;
  width: 25px;
  border-radius: 25%;
  border: solid 1px black;
  position: absolute;
  right: 4px;
  bottom: 6px;
`;

export const EnterItemInput = ({ onChange, value }: IInputProps) => (
  <StyledInput value={value} onChange={onChange} placeholder={ENTER_ITEM} />
);

export const SearchItemInput = ({ onChange, value }: IInputProps) => (
  <StyledInput
    value={value}
    onChange={onChange}
    height={25}
    placeholder={SEARCH}
  />
);

export const ChooseColumnDropDown = ({
  columnNames,
  selectedColumn,
  onChange,
}: any) => (
  <StyledSelect
    onChange={(e: any) => onChange(e.target.value)}
    value={selectedColumn}
  >
    <option value={0}>{CHOOSE_COLUMN}</option>
    {columnNames.map((column: string) => (
      <option value={column} key={`Column: ${column}`}>
        {`Column ${column}`}
      </option>
    ))}
  </StyledSelect>
);

export const AddItemBtn = ({ onClick, disabled }: { onClick: () => {}, disabled: boolean }) => (
  <StyledButton disabled={disabled} onClick={onClick}>Add item</StyledButton>
);
export const RemoveItemBtn = ({ onClick }: { onClick?: () => {} }) => (
  <SquareButton onClick={onClick}>X</SquareButton>
);
