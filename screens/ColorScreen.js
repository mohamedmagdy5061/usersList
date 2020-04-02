import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([])

    const renderRGB = () => {
        const red = Math.floor( Math.random() * 256 );
        const green = Math.floor( Math.random() * 256 );
        const blue = Math.floor( Math.random() * 256 );
        return `rgb(${red}, ${green}, ${blue})`;
    }

    return (
        <View>
            <Button title='Add Color' onPress={() => setColors([ ...colors, renderRGB() ])} />
            <FlatList
            keyExtractor={ item => item }
            data={colors}
            renderItem={({ item }) =>  
                 <View style={{ width: 100, height: 100, backgroundColor: item }} />
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ColorScreen