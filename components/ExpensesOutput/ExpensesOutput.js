import { View, StyleSheet } from "react-native"

import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }){
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    );
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 12,
        backgroundColor: GlobalStyles.colors.primary700
    }
})
