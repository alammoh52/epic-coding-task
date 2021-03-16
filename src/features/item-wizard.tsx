import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  AddItemBtn,
  ChooseColumnDropDown,
  EnterItemInput,
  SearchItemInput,
} from "../components/atoms/inputs";
import {
  AddItemLabel,
  ColumnLabel,
  SearchItemLabel,
} from "../components/atoms/labels";
import {
  FlexColumn,
  FlexWrapper,
  TableWrapper,
  UnStyledList,
} from "../components/atoms/layout";
import { Item } from "../components/molecules/item";
import {
  addItem,
  deleteItem,
  updateItemTitle,
  updateSearchQuery,
  updateSelectedColumn,
} from "./actions";
import {
  selectColumnNames,
  selectColumns,
  selectColumnSelected,
  selectIsAddBtnDisabled,
  selectNewItemTitle,
  selectSearchQuery,
} from "./store";
import {
  IItem,
  IState,
  IWizardViewProps,
  IWizardViewStateProps,
} from "./types";

export const ItemWizardView = ({
  onItemTitleChange,
  columnNames,
  selectedColumn,
  onItemAdd,
  onSearchItemChange,
  columns,
  itemTitle,
  searchQuery,
  onColumnChange,
  isAddBtnDisabled,
  onItemRemove,
}: IWizardViewProps) => (
  <TableWrapper>
    <AddItemLabel />
    <FlexWrapper>
      <FlexColumn isControls>
        <EnterItemInput
          value={itemTitle}
          onChange={(e) => onItemTitleChange(e.target.value)}
        />
        <ChooseColumnDropDown
          onChange={onColumnChange}
          columnNames={columnNames}
          selectedColumn={selectedColumn}
        />
        <AddItemBtn
          disabled={isAddBtnDisabled}
          onClick={() => onItemAdd(itemTitle, selectedColumn)}
        />
        <SearchItemLabel />
        <SearchItemInput
          value={searchQuery}
          onChange={(e) => onSearchItemChange(e.target.value)}
        />
      </FlexColumn>
      {columns.map((column: IItem[], index) => (
        <FlexColumn key={`Column: ${index}`}>
          <ColumnLabel index={index + 1} />
          <UnStyledList>
            {column
              .filter((item) => item.title.includes(searchQuery))
              .map((item, i) => (
                <Item
                  onClick={() =>
                    onItemRemove(item.title, (index + 1).toString(), item.uuid)
                  }
                  key={`Item: ${item.title} - ${i}`}
                  title={item.title}
                />
              ))}
          </UnStyledList>
        </FlexColumn>
      ))}
    </FlexWrapper>
  </TableWrapper>
);

interface int {
  columnNames: string[];
}

const mapStateToProps = createStructuredSelector<IState, IWizardViewStateProps>(
  {
    columnNames: selectColumnNames,
    selectedColumn: selectColumnSelected,
    columns: selectColumns,
    itemTitle: selectNewItemTitle,
    searchQuery: selectSearchQuery,
    isAddBtnDisabled: selectIsAddBtnDisabled,
  }
);

const mapDispatchToProps = {
  onItemTitleChange: updateItemTitle,
  onItemAdd: addItem,
  onSearchItemChange: updateSearchQuery,
  onColumnChange: updateSelectedColumn,
  onItemRemove: deleteItem,
};

const ItemWizardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemWizardView);

export default ItemWizardContainer;
