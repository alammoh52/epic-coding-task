export const UPDATE_ITEM_TITLE = "UPDATE_ITEM_TITLE";
export const UPDATE_SELECTED_COLUMN = "UPDATE_SELECTED_COLUMN";
export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";
export const DELETE_ITEM = "DELETE_ITEM";

export const updateItemTitle = (title: string) => ({ type: UPDATE_ITEM_TITLE, title })

export const updateSelectedColumn = (index: string) => ({ type: UPDATE_SELECTED_COLUMN, index })

export const addItem = (title: string, index: string) => ({ type: ADD_ITEM, title, index })

export const updateSearchQuery = (query: string) => ({ type: UPDATE_SEARCH_QUERY, query })

export const deleteItem = (title: string, index: string, uuid: string) => ({ type: DELETE_ITEM, title, index, uuid })


