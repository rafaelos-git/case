import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import commonStyles from '../commonStyles'

export default props => {
    // const ActivatedOrNot = !toggle ? 
    // {textDecorationline: 'line-through'} : {}
    return (
        <View style={styles.container}>
            <View style={styles.userImage}>
                {getUserImage()}
            </View>
            <View>
                <Text style={[styles.mainInfo]}>{props.name}</Text>
                <Text style={styles.otherinfo}>Email: {props.email}</Text>
                <Text style={styles.otherinfo}>CPF: {props.cpf}</Text>
            </View>
            <TouchableWithoutFeedback 
                onPress={() => props.toggle(props.id)}>
                <View style={styles.userState}>
                    <Text>
                        {props.state ? 'Desativar' : 'Ativar'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

function getUserImage() {
    return (
        <View>
            {/* <Icon name='check' size={20} color='#f0f'></Icon> */}
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
        width: '20%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})