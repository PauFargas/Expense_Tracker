import { View, StyleSheet, Text } from "react-native"
import Input from "./Input"

function ExpenseForm(){
    function amountChangedHandler(){}
    return (
    <View style={styles.formStyle}>
        <Text style={styles.title}>Les teves despeses</Text>
        <View style={styles.inputsRow}>
            <Input 
            style={styles.rowInput}
            label='Quantitat' textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangedHandler,
            }} />
            <Input 
            style={styles.rowInput}
            label='Data' textInputConfig={{
                placeholder: 'DD/MM/AAAA',
                maxLength: 10,
                onChangeText: () =>{}
            }} />
        </View>
        <Input label='Descripció' textInputConfig={{
            multiline: true,
            //autoCorrect : false si vulguessim
            //autoCapitalize : 'characters' 'words' 'sentences (default)'
        }} />
    </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    formStyle:{
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput:{
        flex: 1
    }
})