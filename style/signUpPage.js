import { StyleSheet } from "react-native";

export const signUpPage = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#205781',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 50,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F6F8D5'
    },

    input: {
        height: 40,
        width: 250,
        margin: 12,
        backgroundColor: '#F6F8D5',
        color: '#205781',
        padding: 10,
    },

    dateInput:{
        width: 150,
        height: 50,
        margin: 12,
        backgroundColor: '#F6F8D5',
        color: '#205781',
    },  

    txtInput:{
        color:  '#F6F8D5',
    },

    primaryBtn:{
        width: 150,
        height: 50,
        margin: 10,
        backgroundColor: '#F6F8D5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,    
    },

    primaryTxt:{
        color: '#205781',
        fontWeight: 'bold',
    },
})