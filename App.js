//aquivo onde ficam o layout da pagina, configurações de fontes, e cofigurações do app em geral

import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native'; //importa as tags de marcação do JSX
import Cesta from './src/telas/cesta/index.js'; //importa a função que inicia o app
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'; //importa as fontes depois de baixa-las

export default function App() {
  const [fonteCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  }) //Define os nomes das fontes para facilitar o uso

  if (!fonteCarregada) {
    return <View />
  }

    return (
      <SafeAreaView>
        <StatusBar />
        <Cesta />
      </SafeAreaView>
    ); //define o layout
}
