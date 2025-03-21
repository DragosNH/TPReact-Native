import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { signUpPage as styles } from "../style/signUpPage";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DatePickerInput } from 'react-native-paper-dates';
import { StudentDatabase } from "../components/db";

// Docummentation Date Picker https://web-ridge.github.io/react-native-paper-dates/docs/intro

export default SignUpScreen = ({ navigation }) => {

    const [lastName, onChangeLastName] = React.useState('');
    const [firstName, onChangeFirstName] = React.useState('');
    const [inputDate, setInputDate] = React.useState(undefined)
    const [email, onChangeEmail] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [grade, onChangeGrade] = React.useState('');

    const [saveStudent, setSaveStudent] = React.useState(null);

    // Pour valider toutes les champs
    const handleSignUp = () => {
        if (
            lastName.trim() &&
            firstName.trim() &&
            inputDate &&
            email.trim() &&
            phone.trim() &&
            grade.trim()
        ) {
            navigation.navigate('Students')
        }
        else {
            alert("Toutes les chapms sont obligatoires!")
        }
    }

    useEffect(() => {
        const saveStudent = async () => {
            try {
                const db = new StudentDatabase();
                db.DBInit();

                const student = {
                    lastName: lastName,
                    firstName: firstName,
                    birthDate: inputDate,
                    email: email,
                    phone: phone,
                    grade: grade
                };
                
                await db.addStudents(student);
                setSaveStudent(student);
            } catch (e) {  
                console.error("Erreur lors de l'enregistrement: ", e);
            }
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inserivez-vous</Text>
            <ScrollView>
                <SafeAreaProvider>
                    <SafeAreaView style={styles.areaView}>

                        {/* --- Inssert last name --- */}
                        <Text style={styles.txtInput}>Nom</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeLastName}
                            value={lastName}
                        />

                        {/* --- Inssert first name --- */}
                        <Text style={styles.txtInput}>Prénom</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeFirstName}
                            value={firstName}
                        />

                        <SafeAreaProvider>
                            {/* --- Inssert date de naissance --- */}
                            <Text style={styles.txtInput}>Date de naissance</Text>
                            <DatePickerInput
                                style={styles.dateInput}
                                locale="en"
                                value={inputDate}
                                onChange={(d) => setInputDate(d)}
                                mode="outlined"

                            />
                        </SafeAreaProvider>


                        {/* --- Inssert email adress --- */}
                        <Text style={styles.txtInput}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                        />

                        {/* --- Inssert phone number --- */}
                        <Text style={styles.txtInput}>Télephone</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePhone}
                            value={phone}
                            keyboardType="numeric"
                        />

                        {/* --- Inssert grade --- */}
                        <Text style={styles.txtInput}>Moyenne Génerale</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeGrade}
                            value={grade}
                            keyboardType="numeric"
                        />


                    </SafeAreaView>
                </SafeAreaProvider>

            </ScrollView>
            {/* --- Submit button --- */}
            <TouchableOpacity
                style={styles.primaryBtn}
                onPress={handleSignUp}
            >
                <Text style={styles.primaryTxt}>
                    Valider
                </Text>
            </TouchableOpacity>
        </View>
    );
}