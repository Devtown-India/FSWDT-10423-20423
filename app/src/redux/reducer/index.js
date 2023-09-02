
export const todosReducer = (state , action) => {
    switch(action.type) {
        case "ADD_TODO":
            const {todos} = state
            return {
                ...state,
                todos: [...todos, action.payload]
            }
        default:
            return state
    }
}
