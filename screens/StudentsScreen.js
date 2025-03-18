import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { studentsPage as styles } from "../style/studentsPage";

export default StudentsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Les étudiants</Text>
            <View>

            </View>
            <TouchableOpacity 
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Retour</Text>
            </TouchableOpacity>
        </View>
    )
}