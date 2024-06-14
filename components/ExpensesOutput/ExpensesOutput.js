import { View } from "react-native"

import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

const DUMMY_EXPENSES =[
    {
        id: 'e1',
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e12',
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
]

function ExpensesOutput({ expenses, expensesPeriod }){
    return(
        <View>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList />
        </View>
    );
}

export default ExpensesOutput