import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native"
import IconButton from "../components/UI/IconButton.js";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button.js";
import { ExpensesContext } from "../store/expenses-context.js";
import ExpenseForm from "../components/ManageExpense/ExpenseForm.js";
import { storeExpense } from "../util/http.js";

function ManageExpense({route, navigation}){
    const expensesCtx = useContext(ExpensesContext)

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find(
        expense => expense.id === editedExpenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler(){
        expensesCtx.deleteExpense(editedExpenseId)
        navigation.goBack();

    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData){
        if(isEditing){
            expensesCtx.updateExpense(
                editedExpenseId, expenseData)
        } else {
            storeExpense(expenseData)
            expensesCtx.addExpense(expenseData)
        }
        navigation.goBack();
    }


    return ( 
    <View style={styles.container}>
        <ExpenseForm 
        onSubmit={confirmHandler}
        onCancel={cancelHandler} 
        submitButtonLabel={isEditing ? 'Update': 'Add'}
        defaultValues={selectedExpense}/>        
        {isEditing && (
        <View style={styles.deleteContainer}> 
            <IconButton 
            icon="trash" 
            color={GlobalStyles.colors.error500} 
            size={36} onPress={deleteExpenseHandler}/>
        </View>
    )}
    </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    
})