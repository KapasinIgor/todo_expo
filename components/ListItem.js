import React from "react";
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const ListItem = ({el, deleteHandler}) => {

    return (
        <View>
            <TouchableOpacity onPress={() => deleteHandler(el.key)}>
                <Text style={styles.text}>{el.text}</Text>
            </TouchableOpacity>
        </View>
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
        marginLeft: "20%",
    }
});