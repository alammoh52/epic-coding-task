export interface IItem {
  title: string;
  uuid: string;
}

export interface IState {
  searchQuery: string;
  newItemTitle: string;
  columnSelected: string;
  columns: { [key: string]: IItem[] };
}

export interface IActionProps {
  title?: any;
  index?: any;
  query?: any;
  uuid?: any;
}

export interface IWizardViewDispatchProps {
  onItemTitleChange: (value: string) => {};
  onItemAdd: (title: string, index: string) => {};
  onSearchItemChange: (value: string) => {};
  onColumnChange: (index: string) => {};
  onItemRemove: (title: string, index: string, uuid: string) => any;
}
export interface IWizardViewStateProps {
  columnNames: string[];
  selectedColumn: string;
  columns: Array<IItem[]>;
  itemTitle: string;
  searchQuery: string;
  isAddBtnDisabled: boolean;
}

export interface IWizardViewProps
  extends IWizardViewStateProps,
    IWizardViewDispatchProps {}
