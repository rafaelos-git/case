import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'

import commonStyles from '../commonStyles'

export default props => {
    console.log("User Props",props)
    return (
        <View style={styles.container}>
            <View style={{ width: '75%', paddingLeft: 20 }}>
                {/* <Text>{props.users}</Text> */}
                <Text style={[styles.mainInfo]}>{props.name }</Text>
                <Text style={styles.otherinfo}>Email: {props.email}</Text>
                <Text style={styles.otherinfo}>CPF: {props.cpf}</Text>
            </View>
            <View style={styles.userState}>
                <TouchableWithoutFeedback 
                    onPress={() => props.toggleState(props.id)}>
                    <View>
                        <Text>
                            {props.toggle ? 'Desativar' : 'Ativar'}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {props.onPress()}}>
                    <Text  style={styles.distanceComponents}>Editar</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 30,
    },
    mainInfo: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    otherinfo: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
    },
    userState: {
        width: '25%',
        alignItems: 'center',
        
    },
    distanceComponents :{
        paddingTop: 20,
    }
})