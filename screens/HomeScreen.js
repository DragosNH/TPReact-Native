import { Text, View, TouchableOpacity } from 'react-native';
import { homePage as styles } from '../style/homePage';


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue sur notre application parcours sup</Text>
            <View>
                <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.primaryTxt}>S'inscrire</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryBtn}>
                    <Text style={styles.secondaryTxt}>Liste étudiants</Text>
                </TouchableOpacity>
            </View>
            <View></View>
        </View>
    );
}

