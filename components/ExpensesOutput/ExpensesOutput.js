import { View, StyleSheet, Text } from "react-native"

import ExpensesSummary from "./ExpensesSummary.js"
import ExpensesList from "./ExpensesList.js"
import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({ expenses, expensesPeriod, fallbackText }){
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expenses.length > 0){
        content = <ExpensesList expenses={expenses} />
    }

    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
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
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    }
})
