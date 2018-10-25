const { createStore } = require("redux");

const initialState = {
    age: 21
}

const myReducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case "ADD":
            newState.age += action.val;
            break;
        case "SUBSTRACT":
            newState.age -= action.val;
            break;
        default:
            break;
    }

    return newState;
}


const store = createStore(myReducer);

store.subscribe(() => {
    console.log("Initial state: " + JSON.stringify(store.getState()));
})

store.dispatch({ type: "ADD", val: 10 });

store.dispatch({ type: "SUBSTRACT", val: 5 });

