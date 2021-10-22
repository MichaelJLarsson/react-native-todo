import React, {useState} from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';

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

    const Item = ({ text }) => (
        <View>
            <Text>{ text }</Text>
        </View>
    );
    
    const TodolistItem = ({ item }) => (
        <Item title={item.text} />
    );
    
    return (
        <View>
            <Text>Welcome to todo app!</Text>
            
            {/* Add a new todo item */}
            <Text>Add a new todo</Text>
            <TextInput type="string" defaultValue={text} onChangeText={text => setText(text)} placeholder="Add your todo" />
            <Button title="Press my button!" />

            {/* List all the todo items */}
            <FlatList data={todoItems} renderItem={TodolistItem} keyExtractor={item => item.id} />
        </View>
    )
}
