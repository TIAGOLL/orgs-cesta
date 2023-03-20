//arquivo onde fica a tela da aplicação, com textos, estilos, botões, imagens, etc

import React from 'react'; //importa o react, essencial para a aplicação
import { FlatList, StyleSheet, View } from 'react-native'; //importa as tags de marcação do JSX

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto'

//layout da página
export default function Cesta({ topo, detalhes, itens }) {
  return <>
    <FlatList data={itens.lista} renderItem={Item} keyExtractor={({ nome }) => nome} ListHeaderComponent={ () => {
      return <>
        <Topo {...topo}/>
        <View style={style.cesta}>
        <Detalhes {...detalhes} />
        <Texto style={style.titulo}>{ itens.titulo }</Texto>
      </View>
      </>
    } } />
  </>
}

//variáveis de estilos
const style = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
},
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
