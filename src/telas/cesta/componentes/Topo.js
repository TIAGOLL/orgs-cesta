import React from "react";
import { Image, StyleSheet, Dimensions } from 'react-native'

import Texto from "../../../componentes/Texto"; //importa a estilização do texto normal ou bold
import topo from '../../../../assets/topo.png'; //importa imagens para serem usadas nessa tela


const width = Dimensions.get('screen').width; //pega a dimensão da tela do aparelho do usuário

export default function Topo() {
    return <>
        <Image source={topo} style={styles.topo} />
        <Texto style={styles.titulo}>Detalhe da cesta</Texto>
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
      
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 22,
        lineHeight: 26,
        color: 'white',
        padding: 16,
        fontWeight: 'bold'
    },
})