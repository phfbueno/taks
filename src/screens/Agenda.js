import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import moment from 'moment';
import 'moment/locale/pt-br';
import * as Font from 'expo-font';
import today from '../../assets/imgs/today.jpg'
import commonsStyle from '../commonStyle'
import Task from '../components/Task'


export default class Agenda extends Component {
    state = {
        fontLoaded: false,
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
                    <Task desc='tarefa pendente'
                        estimateAt={new Date()} doneAt={null} />
                    <Task desc='Tarefa Concluida'
                        estimateAt={new Date()} doneAt={new Date()} />
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
