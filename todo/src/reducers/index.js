export const initialState = [{
    task: 'Babysit Gracie',
    completed: false,
    id: 155626262, 
},
{
    task: 'Exercise',
    completed: false,
    id: 155626263, 
}, 
{
    task: 'Bake cookies',
    completed: false,
    id: 155626264, 
},
{
    task: 'Do laundry',
    completed: false,
    id: 155626265, 
}
]

export function toDoReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case "ADD_ITEM":
            const newTodo = {
                id: new Date(),
                task: action.payload,
                completed: false,
            }
            return [...state, newTodo]
        case "TOGGLE_TASK":
            console.log(action.payload);
            return state.map((item) => (item.id === action.payload ? {...item, completed: !item.completed } : item ))
        case "CLEAR_COMPLETED":
            console.log(action.payload);
            return state.filter((item) => item.completed === false);
        default:
            return state;
    }
}
