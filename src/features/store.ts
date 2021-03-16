import { createStore, compose } from "redux";
import { createReducer } from "../components/utils";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM_TITLE, UPDATE_SEARCH_QUERY, UPDATE_SELECTED_COLUMN } from "./actions";
import { IActionProps, IState } from "./types";
import { v4 as uuid } from 'uuid';


const updateItemTitle = (state: IState, action: IActionProps) => ({
    ...state,
    newItemTitle: action.title,
});
const updateSelectedColumn = (state: IState, action: IActionProps) => ({
    ...state,
    columnSelected: action.index,
});
const addItem = (state: IState, action: IActionProps) => ({
    ...state,
    columns: {
        ...state.columns,
        [action.index]: [...state.columns[action.index], { title: action.title, uuid: uuid() }],
    },
    newItemTitle: ""
});
const updateSearchQuery = (state: IState, action: IActionProps) => ({
    ...state,
    searchQuery: action.query,
});
const deleteItem = (state: IState, action: IActionProps) => ({
    ...state,
    columns: {
        ...state.columns,
        [action.index]: state.columns[action.index].filter(item => item.uuid !== action.uuid),
    }
});

const handlers = {
    [UPDATE_ITEM_TITLE]: updateItemTitle,
    [UPDATE_SELECTED_COLUMN]: updateSelectedColumn,
    [ADD_ITEM]: addItem,
    [UPDATE_SEARCH_QUERY]: updateSearchQuery,
    [DELETE_ITEM]: deleteItem
};

const initialState: IState = {
    searchQuery: "",
    newItemTitle: "",
    columnSelected: "0",
    columns: {
        "1": [
            {
                title: "Drew",
                uuid: "00000000-Drew-Drew-Drew-000000000000"
            },
            {
                title: "John",
                uuid: "00000000-John-John-John-000000000000"
            }
        ],
        "2": [{
            title: "Nancy",
            uuid: "00000000-Nancy-Nancy-Nancy-000000000000"
        }]
    },
};


export const selectSearchQuery = (state: IState) => state.searchQuery;
export const selectNewItemTitle = (state: IState) => state.newItemTitle;
export const selectColumnSelected = (state: IState) => state.columnSelected;
export const selectColumns = (state: IState) => Object.values(state.columns);
export const selectColumnNames = (state: IState) => Object.keys(state.columns);
export const selectIsAddBtnDisabled = (state: IState) => state.newItemTitle == "" || state.columnSelected == "0"

const reducer = createReducer(initialState, handlers);


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
