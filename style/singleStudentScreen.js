import { StyleSheet } from "react-native";

export const studentsPage = StyleSheet.create({
    container:{
        container: {
            flex: 1,
            backgroundColor: '#205781',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    
        title:{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#F6F8D5'
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
    }
});