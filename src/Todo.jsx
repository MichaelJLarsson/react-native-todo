import React, { useState } from 'react' ;
import { View, StyleSheet } from 'react-native';
import { Text, Button, Divider, List, ListItem, Input } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';

export const Todo = () => {
    const [text, setText] = useState('')
    
    const todoItems = [
        {
            id: 0,
            text: 'Buy milk'
        },
        {
            id: 1,
            text: 'Pick up dry-cleaning'
        },
        {
            id: 2,
            text: 'Do something else'
        }
    ];
    
    const TodoListItem = ({ item }) => (
        <ListItem title={`${item.text} ${item.id}`} />
    );

    const PlusIcon = () => (
        <Icon
            name='plus-circle-outline'
            fill='#ffffff'
            style={styles.plusIcon}
        />
    );

    return (
        <View style={styles.todoContainer}>
            <View style={styles.header}>
                <Text category='h3'>Welcome to the todo app!</Text>
            </View>
            
            {/* Add a new todo item */}
            <Text category='label'>Add a new todo</Text>
            <View style={[
                styles.addTodoForm
                // ,debug.blueDashedBorder
            ]}>
                <Input value={text}  placeholder="What do you want to do?" onChangeText={text => setText(text)} style={styles.todoInput} />
                <Button accessoryLeft={PlusIcon}>Add it!</Button>
            </View>

            {/* List all the todo items */}
            <List
                style={styles.todoListContainer}
                data={todoItems}
                ItemSeparatorComponent={Divider}
                renderItem={TodoListItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        width: '100%',
    },
    header: {
        alignItems: 'center'
    },
    plusIcon: {
        width: 24,
        height: 24
    },
    todoListContainer: {
        maxHeight: 200,
    },
    addTodoForm: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
    todoInput: {
        flexGrow: 1
    }
});

const debug = StyleSheet.create({
    blueDashedBorder: {
        borderStyle: 'dashed',
        borderColor: '#00F',
        borderWidth: 1
    },
    redDashedBorder: {
        borderStyle: 'dashed',
        borderColor: '#F00',
        borderWidth: 1
    }
})
