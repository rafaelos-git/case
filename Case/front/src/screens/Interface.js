import React, {Component} from 'react'
import { Text, StyleSheet } from 'react-native'

import axios from 'axios'
import commonStyles from '../commonStyles'

export default class App extends Component {
    render (){
        return (
            <Text style={styles.title}>{getInfo}</Text>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
})