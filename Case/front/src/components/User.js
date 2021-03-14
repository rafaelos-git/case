import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TextPropTypes
} from 'react-native'

import commonStyles from '../commonStyles'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.userImage}>
                {getUserImage()}
            </View>
            <View style={{ width: '55%' }}>
                <Text>{props.users}</Text>
                <Text style={[styles.mainInfo]}>{props.name}</Text>
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
                <TouchableWithoutFeedback>
                    <Text  style={styles.distanceComponents}>Editar</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

function getUserImage() {
    return (
        <View>
            <Text>Imagem</Text>
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
    userImage: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
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