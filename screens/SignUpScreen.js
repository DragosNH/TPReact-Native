import React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { signUpPage as styles } from "../style/signUpPage";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { DatePickerInput } from 'react-native-paper-dates';

// Docummentation Date Picker https://web-ridge.github.io/react-native-paper-dates/docs/intro

export default SignUpScreen = () => {
    const [lastName, onChangeLastName] = React.useState('');
    const [firstName, onChangeFirstName] = React.useState('');
    const [inputDate, setInputDate] = React.useState(undefined)
    const [email, onChangeEmail] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [grade, onChangeGrade] = React.useState('');

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
                        />

                        {/* --- Inssert grade --- */}
                        <Text style={styles.txtInput}>Moyenne Génerale</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeGrade}
                            value={grade}
                        />


                    </SafeAreaView>
                </SafeAreaProvider>

            </ScrollView>
            {/* --- Submit button --- */}
            <TouchableOpacity style={styles.primaryBtn}>
                <Text style={styles.primaryTxt}>
                    Valider
                </Text>
            </TouchableOpacity>
        </View>
    );
}