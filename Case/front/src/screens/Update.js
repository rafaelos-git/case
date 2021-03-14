import React, {Component} from 'react'
import { 
  ImageBackground, 
  Text, 
  StyleSheet, 
  View, 
  TextInput, 
  TouchableOpacity,
  Platform,
} from 'react-native'

import backgroundImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
}

export default class App extends Component {
    state = {
        ...initialState
    }

    update = async userId => {
        try {
            const res = await axios.put(`${server}/users/`, {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        })

        this.props.navigation.navigate('Admin', res.data)

        } catch(e) {
          showError(e)
        }
      }

    render (){
        const validations = []
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)
        
        if(this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim().length >= 3)
            validations.push(this.state.password === this.state.confirmPassword)
            validations.push(this.state.cpf && this.state.cpf.length == 11)
        }

        const validForm = validations.reduce((t, a) => t && a)
        return (
            <View style={styles.container}>
                <ImageBackground source={backgroundImage}
                    style={styles.background}>
                    <TouchableWithoutFeedback>
                        <Text style={styles.back}>
                            Voltar
                        </Text>
                    </TouchableWithoutFeedback>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Editar Dados</Text>
                    </View>
                </ImageBackground>
                <View style={styles.edit}>
                    <View style={styles.formContainer}>
                        <TextInput placeholder='Novo E-mail' value={this.state.email} 
                            style={styles.input} 
                            onChangeText={email => this.setState({ email })}/>
                        <TextInput placeholder='Nova senha' value={this.state.password} 
                            style={styles.input} secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}/>
                        <TextInput placeholder='Confirmação nova senha' 
                            value={this.state.confirmPassword} 
                            style={styles.input} secureTextEntry={true}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}/>
                        <TouchableOpacity onPress={this.update}
                            disabled={!validForm}>
                            <View style={[styles.button, validForm ? {} : { backgroundColor: '#AAA' }]}>
                                <Text style={styles.buttonText}>
                                    Salvar
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    background: {
      flex: 3,
    },
    edit: {
        paddingTop: 60,
        flex: 7,
        alignItems: 'center',
        backgroundColor: '#AAA',
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
    input: {
        backgroundColor: '#FFF',
        marginTop: 10,
        padding: Platform.OS === 'ios' ? 15 : 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%',
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    },
    back: {
        width: '15%',
        fontSize: 15,
        backgroundColor: '#AAA',
        marginTop: Platform.OS === 'ios' ? 40 : 10,
        marginLeft: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    }
  })