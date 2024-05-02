import React from "react"
import { StyleSheet, TextInput, TextInputProps } from "react-native"

export function CampoTexto(props: TextInputProps) {


  return (
    <TextInput placeholderTextColor="#727272" style={styles.input} {...props} />
  )
}

export const styles = StyleSheet.create({
  input: {
    borderColor: "#1D013F",
    paddingHorizontal: 8,
    color: "#000",
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginBottom: 16,
  }
})

