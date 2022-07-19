import {StatusBar} from 'expo-status-bar';
import React, {useState} from "react";
import {StyleSheet, View, FlatList} from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

const App = () => {

    const [listOfItems, setListOfItems] = useState([
        {id: 1, text: "Купить молоко"},
        {id: 2, text: "Почистить картошку"},
        {id: 3, text: "Отремонтировать машину"},
        {id: 4, text: "Сдать экзамен"}
    ])

    const addHandler = (text) => {
        setListOfItems((list) => {
            return [
                {id: Math.random().toString(36).substring(7), text: text},
                ...list
            ]
        })
    }
    const deleteHandler = (id) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.id !== id)
        })
    }

    return (
        <View style={styles.container}>
            <Header />
            <Form addHandler={addHandler}/>
            <View>
                <FlatList data={listOfItems} renderItem={({item}) => (
                    <ListItem deleteHandler={deleteHandler} el={item}/>
                )}/>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
