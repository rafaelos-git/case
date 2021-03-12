import React, {Component} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    FlatList 
} from 'react-native'

import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/today.jpg'

import User from '../components/User'

export default class App extends Component {
    state = {
        users: [{
            id: Math.random(),
            name: 'Rafael Oliveira Silva',
            cpf: '42439446874',
            email: 'rafael.oliveiratdm@outlook.com',
            toggle: true
        }, {
            id: Math.random(),
            name: 'Edson Fonseca Silva',
            cpf: '14841735895',
            email: 'edsonfonseca1971@outlook.com',
            toggle: true
        }, {
            id: Math.random(),
            name: 'Márcia Costa de Oliveira Silva',
            cpf: '24585766804',
            email: 'marcia.oliveirasilva@gmail.com',
            state: true
        }]
    }

    toggle = userId => {
        const users = [...this.state.users]
        users.forEach(users => {
            if(users.id === userId) {
                users.state = !users.state
            }
        })

        this.setState({ users: users })
    }

    render (){
        return (
            <View style={styles.container}>
                <ImageBackground source={backgroundImage}
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Informações</Text>
                    </View>
                </ImageBackground>
                <View style={styles.userList}>
                    <FlatList data={this.state.users}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <User {...item} toggle={this.toggle} />}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 2,
    },
    userList: {
        flex: 8,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    }
  })