import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, View, Text, TextInput, Platform } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function UserIdenfication() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    const navigation = useNavigation();

    function handleSubmit() {
        navigation.navigate('Confirmation');
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}  >
                <View style={styles.content}>

                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😄' : '😃'}
                            </Text>

                            <Text style={styles.text}>
                                Como podemos {'\n'}
                                chamar você ?
                            </Text>
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: colors.green }
                            ]}
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>

                            <Button title="Confirmar"
                                onPress={handleSubmit} />

                        </View>

                    </View>

                </View>

            </KeyboardAvoidingView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 25
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center'

    }
})