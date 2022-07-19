import React from "react";
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const ListItem = ({el, deleteHandler}) => {

    return (
        <TouchableOpacity onPress={() => deleteHandler(el.id)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

export default ListItem

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        width: "80%",
        marginHorizontal: "10%",
    }
});