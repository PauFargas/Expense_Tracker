import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: "Steam Game",
        amount: 19.99,
        date: new Date('2021-12-20')
    },
    {
        id: 'e3',
        description: "Christmas Party",
        amount: 104.83,
        date: new Date('2021-12-25')
    },
    {
        id: 'e4',
        description: "Bananas",
        amount: 5.12,
        date: new Date('2022-01-02')
    },
    {
        id: 'e5',
        description: "Book",
        amount: 20,
        date: new Date('2022-02-12')
    },
    {
        id: 'e6',
        description: "Wartales",
        amount: 10.00,
        date: new Date('2022-02-14')
    },
    {
        id: 'e7',
        description: "Mitjons",
        amount: 5.00,
        date: new Date('2022-02-14')
    },
    {
        id: 'e8',
        description: "Bonpreu",
        amount: 36.74,
        date: new Date('2022-02-15')
    },
    {
        id: 'e9',
        description: "La Sirena",
        amount: 10.52,
        date: new Date('2022-02-15')
    },
    {
        id: 'e10',
        description: "Poco",
        amount: 2.00,
        date: new Date('2022-02-17')
    },
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
});

function expensesReducer(state, action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id },...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense)=> expense.id === action.payload.id) //Podrem saber la ID perquè al dispatch del Update li enviem
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;

        case 'DELETE':
            return state.filter((expense)=> expense.id !== action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}){
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);//DUMMY EXPENSES FA DE VALOR INICIAL

    function addExpense(expenseData){
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id){
        dispatch({ type: 'DELETE', payload: id })
    }

    function updateExpense(id, expenseData){
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData}})
    }

    return <ExpensesContext.Provider></ExpensesContext.Provider>
}

export default ExpensesContextProvider;