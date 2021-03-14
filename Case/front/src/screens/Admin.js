import React, {Component} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform
} from 'react-native'

import axios from 'axios'

import { server, showError, showSuccess } from '../common'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/today.jpg'
import UserAdmin from '../components/UserAdmin'

export default class App extends Component {
    state = {
        users: []
    }
    
    componentDidMount = () => {
        this.loadUsers()
    }

    loadUsers = async () => {
        try {
            const res = await axios.get(`${server}/users`)
            this.setState({ users: res.data })
        } catch(e) {
            showError(e)
        }
    }

    toggleState = async userId => {
        try{
            await axios.put(`${server}/users/${userId}/toggle`)
            await this.loadUsers()
        } catch(e) {
            showError(e)
        }
    }
    
    updateScreen = async userId => {
        // console.log(this.props.navigation)
        // this.props.navigation.navigate('Update', {userId})
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
                        renderItem={({item}) => 
                        <UserAdmin {...item} toggleState={this.toggleState}
                            // navigation={this.props.navigation}
                            onPress={()=> this.props.navigation.navigate('Update', {...item.id})}
                            // updateScreen={this.updateScreen()} 
                        />}
                    />
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