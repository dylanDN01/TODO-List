import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


    const Task = ({checkBoxDisplay, task}) => {
    
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                {checkBoxDisplay}
                <Text style = {styles.itemText}>{task}</Text>
            </View>   

            <View style = {styles.circular}>

            </View>
            
        </View>
    );
}

export default Task;


const styles = StyleSheet.create({


    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    itemLeft: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    itemText: {
        maxWidth: '80%',
        fontSize: 15,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'lightgray',
        borderWidth: 3,
        borderRadius: 6
    },
});
