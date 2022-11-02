// React
import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// Components
import { List } from '@/Components'

// Services
import { useLazyGetTodoQuery } from '@/Services/modules/todos'

// Assets
// import { AddOutline } from '@/Components/Svg' // ! Issue

const TodoList = () => {
  // Hooks
  const [getTodo, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetTodoQuery()

  useEffect(() => {
    getTodo()
  }, [getTodo])

  // Handlers
  const onCreateTodo = () => {
    alert('wkwkwk')
  }

  const onDeleteList = () => {
    alert(true)
  }

  return (
    <View>
      <View style={styles.content}>
        <View>
          <List title="ngapain lo?" onDelete={onDeleteList} />
          <List title="ngapain yaaa?" onDelete={onDeleteList} />
          {/* <Text>wkwkwk</Text> */}
        </View>
        <View style={styles.buttonCreateTodoWrapper}>
          <TouchableOpacity
            onPress={onCreateTodo}
            style={styles.buttonCreateTodo}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    paddingTop: 18,
    paddingHorizontal: 35,
  },
  buttonCreateTodoWrapper: {
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
  },
  buttonCreateTodo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    backgroundColor: '#87A2FB',
    borderRadius: 35,
  },
})

export default TodoList
