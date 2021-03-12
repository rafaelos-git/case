import React, {Component} from 'react'
import { Text, StyleSheet } from 'react-native'

export default class App extends Component {
    render (){
        return (
            <Text style={styles.title}>Mind</Text>
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
})