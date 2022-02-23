import React, { Component, useState } from 'react';
import {CheckBox, Text, View, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity}from 'react-native';

export default function LoginScreen () {   

  const [isSelected, setSelection] = useState(false);

    return (
      <KeyboardAvoidingView style={styles.container02}>
        <View>

          <Text style={styles.title}>MEU APP</Text>
          <Text style={styles.subtitle}>Aventure-se!</Text>

          <TextInput
          style={styles.inputemail}
          placeholder='Email'
          />

          <TextInput
          style={styles.inputsenha}
          secureTextEntry={true}
          placeholder='Senha'
          />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.lembrardemim}>Lembrar de mim</Text>
        </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaotext}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoesquecisenha}>
            <Text style={styles.botaoesquecisenhatext}>Esqueci minha senha</Text>
          </TouchableOpacity>
          
        </View>
      </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
  container02: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  title: {
    marginLeft: 62,
    top: -100,
    left: 57,
    fontSize: 36
  },
  subtitle: {
    marginLeft: 67,
    top: -110,
    fontSize: 24,
    left: 72
  },
  inputemail: {
    width: 275,
    height: 42,
    marginTop: 38,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 5,
    borderBottomWidth: 1, //Linha no input!
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  inputsenha: {
    marginTop: 10,
    width: 275,
    height: 42,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 5,
    borderBottomWidth: 1, //Linha no input!
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: "center"
  },
  lembrardemim: {
    fontSize: 14,
    marginTop: 10,
    margin: 8
  },
  botao: {
    width: 230,
    height: 42,
    left: 20,
    backgroundColor: "#179BFF",
    marginTop: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  botaotext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white"
  },
  botaoesquecisenha: {
    fontSize: 18,
    alignItems: "center",
    marginTop: 20

  },
  botaoesquecisenhatext: {
    fontSize: 14,
    marginLeft: -10
  }  
})
