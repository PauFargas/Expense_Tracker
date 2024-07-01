import { View, StyleSheet } from "react-native"

import ExpensesSummary from "./ExpensesSummary.js"
import ExpensesList from "./ExpensesList.js"
import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({ expenses, expensesPeriod }){
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses} />
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
