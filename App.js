//aquivo onde ficam o layout da pagina, configurações de fontes, e cofigurações do app em geral

import React from 'react';

import { StatusBar, SafeAreaView, View } from 'react-native'; //importa as tags de marcação do JSX
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'; //importa as fontes depois de baixa-las

import Cesta from './src/telas/cesta'; //importa a função que inicia o app
import Mock from './src/mocks/cesta' //importa o objeto de texto



export default function App() {
  const [fonteCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  }) //Define os nomes das fontes para facilitar o uso

  if (!fonteCarregada) {
    return <View />
  }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Cesta {...Mock}/>
      </SafeAreaView>
    ); //define o layout
}
