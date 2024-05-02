import React, { useContext, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { globalStyle } from "../styles/globalStyles"
import { CampoTexto } from "../../components/CampoTexto"
import TableAluno from "../../components/alunos/TableAlunos";
import { Feather } from "@expo/vector-icons";
import { styles } from '../../components/CampoTexto'
import { CompanyNameContext } from "../../Context";

export default function ConsultaAluno() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState('');
  const companyName = useContext(CompanyNameContext)

  const filtrar = (busca) => {
      setFiltro(busca);
  }

  return (
    <>
      <View style={globalStyle.container}>
        <Text style={{ marginTop: 100, fontWeight: 'bold' }}>{companyName}</Text>
        <View style={globalStyle.centeredView}>
          <View style={{ width: "95%", marginTop: 60 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CampoTexto
                placeholder="Busca..."
                onChangeText={setBusca}
                style={{
                  ...styles.input,
                  flex: 1,
                  marginRight: 10,
                }}
              />
              <TouchableOpacity onPress={() => filtrar(busca)}>
                <Feather name="filter" color='#45acd0' size={30} />
              </TouchableOpacity>
            </View>
            <View style={{ height: '90%' }}>
              <TableAluno
                filtro={filtro} />
            </View>
          </View>
        </View>
      </View>
    </>
  )
}