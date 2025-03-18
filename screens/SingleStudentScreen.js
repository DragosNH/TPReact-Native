import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { studentsPage as styles } from "../style/studentsPage";

export default SingleStudentScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Etudient</Text>
            <View>
                <Text>Nom</Text>
                <Text>Prenom</Text>
                <Text>age</Text>
                <Text>email</Text>
                <Text>Telephone</Text>
                <Text>moyenne</Text>
            </View>
            <TouchableOpacity
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.primaryTxt}>Retour</Text>
            </TouchableOpacity>
        </View>
    )
}