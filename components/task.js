import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Task = ({checkBoxDisplay, shiftIconDisplay, task}) => {

    
    
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                {checkBoxDisplay}
                <Text style = {styles.itemText}>{task}</Text>
            </View>   

            {shiftIconDisplay}
            
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

});
