import React from "react";
import { View, Image } from "react-native";

import Texto from '../../../componentes/Texto'

import { StyleSheet } from "react-native";

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={style.titulo}>{ titulo }</Texto>
        { lista.map(({ nome, imagem }) => {
            return <View key={nome} style={style.item}>
                <Image source={imagem} style={style.imagem}></Image>
                <Texto key={nome} style={style.nome}>{ nome }</Texto>
            </View>
        }) }
    </>
}

const style = StyleSheet.create({
    titulo: {
      color: '#464646',
      fontWeight: 'bold',
      marginTop: 32,
      marginBottom: 8,
      fontSize: 20,
      lineHeight: 32,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1, 
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        alignItems: 'center',
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
  })