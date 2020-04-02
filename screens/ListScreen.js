import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', age: '25' },
        { name: 'friend #2', age: '25' },
        { name: 'friend #3', age: '25' },
        { name: 'friend #4', age: '25' },
        { name: 'friend #5', age: '25' },
        { name: 'friend #6', age: '25' },
        { name: 'friend #7', age: '25' },
        { name: 'friend #8', age: '25' },
        { name: 'friend #9', age: '25' },
        { name: 'friend #10', age: '25' },
        { name: 'friend #11', age: '25' },
        { name: 'friend #12', age: '25' },
    ]
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name }
            data={friends}
            renderItem={({ item }) => ( <Text style={styles.textStyle} >{ item.name }</Text> )}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,

    }
})

export default ListScreen