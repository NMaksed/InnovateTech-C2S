import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GeraAluno } from '../../service/randomUser/GeradorAluno';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TableAluno({ filtro }) {
  const navigation = useNavigation();
  const [internalData, setInternalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const MAX_PAGES = 20;

  useEffect(() => {
    fetchAlunos(true);
  }, [])

  function formataData(dataEntrada) {
    const data = new Date(dataEntrada);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  const getDataFromCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@app_data');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Não foi possível acessar o cache', e);
    }
  }

  const fetchAlunos = async (carregaMais) => {
    setLoadingMore(true);
    try {
      const cachedData = await getDataFromCache();
      if (cachedData !== null && !!carregaMais) {
        setInternalData(cachedData);
      } else {
        const response = await GeraAluno(page);
        const newData = response.map((student) => ({
          nome: student.name.first + ' ' + student.name.last,
          genero: student.gender,
          dataNascimento: formataData(student.dob.date),
          foto: student.picture.thumbnail,
          email: student.email,
          telefone: student.cell,
          nacionalidade: student.nat,
          pais: student.location.country,
          cidade: student.location.city,
          cep: student.location.postcode,
          estado: student.location.state,
          id: student.id.value
        }));
        setInternalData(prevData => {
          const updatedData = [...prevData, ...newData];
          AsyncStorage.setItem('@app_data', JSON.stringify(updatedData));
          return updatedData;
         });
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Erro ao buscar alunos!', error);
      setError(error.message);
    } finally {
      setLoadingMore(false);
    }
  };

  const renderItem = ({ item }) => {
    if (filtro && item.genero !== filtro) {
      return null;
    }

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ModalAluno', { userData: item })}>
          <View style={styles.rowContainer}>
            <View style={styles.leftContainer}>
              <Image source={{ uri: item.foto }} style={styles.userImage} />
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.userNameContainer}>
                <Text style={[styles.itemText, { fontWeight: 'bold', fontSize: 25 }]}>
                  {item.nome}
                </Text>
              </View>
              <View style={styles.userInfoContainer}>
                <Text style={styles.itemText}>{item.genero}</Text>
                <Text style={styles.itemText}>{item.dataNascimento}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#45acd0" />
  }

  if (error) {
    return <Text>Erro ao carregar dados: {error}</Text>;
  }

  if (internalData.length === 0) {
    return <ActivityIndicator size="large" color="#45acd0" />
  }

  const filteredData = internalData.filter(item => !filtro || item.genero === filtro);

  return (
    <SafeAreaView>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        onEndReached={() => {
          if (page <= MAX_PAGES && !loadingMore) {
            fetchAlunos(false);
          }
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loadingMore ? <ActivityIndicator size="large" color="#45acd0" /> : null}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderWidth: 1,
    width: '100%',
    borderRadius: 2,

    backgroundColor: '#faf9f5',
    marginTop: 5
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    width: '20%',
    height: '100%',
  },
  rightContainer: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 65
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 10,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginRight: 10,
    marginBottom: 10,
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 20,
    marginLeft: 10,
  },
});