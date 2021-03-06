import React, { useState } from 'react' ;
import { View, StyleSheet } from 'react-native';
import { Text, Button, Divider, List, ListItem, Input, CheckBox } from '@ui-kitten/components';
import { Icon } from 'react-native-eva-icons';

export const Todo = () => {
    const [text, setText] = useState('')
    const [todos, setTodo] = useState([
        {
            text: 'Buy milk',
            done: true,
            deleted: false
        },
        {
            text: 'Pick up dry-cleaning',
            done: false,
            deleted: false
        },
        {
            text: 'Do something else',
            done: false,
            deleted: false
        },
        {
            text: 'Do something else',
            done: true,
            deleted: true
        }
    ]);

    
    const handleSubmit = () => {
        const newTodo = { text: text, done: false, deleted: false };
        setTodo([...todos, newTodo])
        setText('');
    }

    const setChecked = (isDone, index) => {
        const updatedTodos = todos;
        updatedTodos[index].done = isDone;
        setTodo([...updatedTodos]);
    }

    const handleDelete = index => {
        const updatedTodos = todos;
        updatedTodos.splice(index, 1);
        setTodo([...updatedTodos]);
    }

    const handleEdit = () => {
        // ...
    }
    
    const TodoListItem = ({ item, index }) => (
        <ListItem key={index} style={[styles.todoListItem]}>
            <CheckBox
                checked={item.done}
                style={styles.checkbox}
                onChange={nextChecked => setChecked(nextChecked, index)}>
            </CheckBox>
            <Text style={[styles.toDoText, item.done ? styles.listItemDone : {}]}>{ item.text }</Text>
            <Button accessoryLeft={PenIcon} appearance={'ghost'} onPress={ () => handleEdit(index) }></Button>
            <Button accessoryLeft={TrashIcon} appearance={'ghost'} onPress={ () => handleDelete(index) }></Button>
        </ListItem>
    );

    const TodoIcon = ({ name }) => (
        <Icon
            name={name}
            fill='#3366ff'
            style={styles.trashIcon}
        />
    );

    const PlusIcon = () => (
        <Icon
            name='plus-circle-outline'
            fill='#ffffff'
            style={styles.plusIcon}
        />
    );
    
    const TrashIcon = () => <TodoIcon name='trash-outline' />;
    
    const PenIcon = () => <TodoIcon name='edit-outline' />;

    return (
        <View style={styles.todoContainer}>
            
            {/* Add a new todo item */}
            <View style={[ styles.addTodoForm ]}>
                <Input
                    value={text}
                    placeholder="What do you want to do?"
                    onChangeText={text => setText(text)}
                    style={[styles.todoInput]}
                />
                <Button accessoryLeft={PlusIcon} style={styles.addTodoButton} onPress={handleSubmit}>Add it!</Button>
            </View>

            {/* List all the todo items */}
            <List
                style={styles.todoListContainer}
                data={todos}
                ItemSeparatorComponent={Divider}
                renderItem={TodoListItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        width: '100%',
        padding: 20
    },
    header: {
        alignItems: 'center'
    },
    todoListContainer: {
    todoListItem: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    listItemDone: {
        color: '#aaaaaa',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    addTodoForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'stretch',
        height: 60,
        marginBottom: 25

    },
    todoInput: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '50%',
        flexDirection: 'row'
    },
    addTodoButton: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto'
    },
    plusIcon: {
        width: 24,
        height: 24
    },
    trashIcon: {
        width: 24,
        height: 24,
    },
    penIcon: {
        width: 24,
        height: 24,
    },
    checkbox: {
        marginRight: 10,
    },
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
