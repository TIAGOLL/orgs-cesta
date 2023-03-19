import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto'; //importa o arquivo onde está as fontes, assim permitindo ser usada nas telas
import Logo from '../../../../assets/logo.png'; //importa a imagem de logo da fazenda

export default function Detalhes({ nome, nomeFazenda, logoFazenda, preco, descricao }) {
    return <>
        <Texto style={styles.nome}>{ nome }</Texto>
        <View style={styles.fazenda}>
        <Image source={ logoFazenda } style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={styles.descricao}>{ descricao }</Texto>
        <Texto style={styles.preco}>{ preco }</Texto>
    </>
}

const styles = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontserratRegular',
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'MontserratRegular',
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
  },
})