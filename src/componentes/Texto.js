import React from 'react'; //importa o react, essencial para a aplicação
import { Text, StyleSheet } from 'react-native' //importa as tags de marcação do JSX

export default function Texto({ children, style }) {
    let estilo = style.texto; //variavel que pode ser alterada

    //? == se o componete tiver um 'style.' ele vai verificar, se não tiver passa pra frente
    if (style?.fontWeight == 'bold') {
        estilo = style.textoNegrito
    }

    //muda a tag text, alterando o style, para a variavel 'estilo' que anteriormente define se o texto esta ou não em negrito
    return <Text style={[style, estilo]}>{ children }</Text> 
}

const style = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
})