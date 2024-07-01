import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    console.log('All Expenses:', expensesCtx.expenses);

    return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />;
}

export default AllExpenses;