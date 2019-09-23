import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList
} from 'react-native'
import moment from 'moment';
import 'moment/locale/pt-br';
import * as Font from 'expo-font';
import today from '../../assets/imgs/today.jpg'
import commonsStyle from '../commonStyle'
import Task from '../components/Task'


export default class Agenda extends Component {
    state = {
        fontLoaded: false,
        task: [
            {
                id: Math.random(), desc: 'Comprar Curso Reacr-Native',
                estimateAt: new Date(), doneAt: new Date()
            },
            {
                id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date,
                doneAt: null,
            },

        ]
    };
    async componentDidMount() {
        await Font.loadAsync({
            'lato': require('../../assets/fonts/Lato.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={today}
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.title}>Hoje</Text>) : null}
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.subtitle}>
                                    {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                                </Text>
                            ) : null}

                    </View>
                </ImageBackground>
                <View style={styles.taksContainer}>
                    {
                        this.state.fontLoaded ? (
                             <FlatList data={this.state.task} 
                             keyExtractor={item => `${item.id}`}
                              renderItem={({item}) => <Task {...item}/>}/>
                        ) : null}
                    
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
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'lato',
        color: commonsStyle.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10,
    },
    subtitle: {
        // fontFamily: 'lato',
        color: commonsStyle.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    taksContainer: {
        flex: 7
    }

})
