//arquivo onde fica a tela da aplicação, com textos, estilos, botões, imagens, etc

import React from 'react'; //importa o react, essencial para a aplicação
import { StyleSheet, View } from 'react-native'; //importa as tags de marcação do JSX

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes';


//layout da página
export default function Cesta() {
  return <>
    <Topo /> 
    <View style={styles.cesta}> 
      <Detalhes />
    </View>
  </>
}

//variáveis de estilos
const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});