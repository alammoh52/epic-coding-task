type TActionPayload = {
    [payload: string]: any;
};

export type TAction = {
    type: string;
} & TActionPayload;

export function createReducer<TState extends Object>(
    initialState: TState,
    handlers: {
        [key: string]: (x0: TState, x1: TActionPayload) => TState;
    }
) {
    return function reducer(
        state: TState = initialState,
        action: TAction
    ): TState {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action);
        }

        return state;
    };
}