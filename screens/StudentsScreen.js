import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { studentsPage as styles } from "../style/studentsPage";
import { StudentDatabase } from "../components/db";

export default StudentsScreen = ({ navigation }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const loadStudents = async () => {
            try{
                const db = new StudentDatabase();
                const allStudents = await db.getStudents();
                setStudents(allStudents);
            } catch (e){
                console.error("Erreur lors du chargement: ", e);
            }
            
        }

        loadStudents();
    }, []);

    const renderStudents = ({item}) => {
        <View style={styles.container}>
            <Text style={styles.title}>Les étudiants</Text>
            <View>
                <Text>{item.lastName}</Text>
                <Text>{item.firstName}</Text>
                <Text>{item.grade}</Text>
            </View>
            <TouchableOpacity 
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Retour</Text>
            </TouchableOpacity>
        </View>
    };

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.title}>Les étudiants</Text>
            <View>
            {/* La ScrollView pour le scroll dans la liste des etudiants */}
            <FlatList 
                data={students}
                renderItem={renderStudents}
                keyExtractor={item => item.id.toString()}
            />
               


            </View>
            <TouchableOpacity 
                style={styles.primaryBtn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Retour</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}