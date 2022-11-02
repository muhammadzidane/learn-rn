/* eslint-disable react/sort-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Button } from 'react-native'

const List = ({ title, onDelete }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <Button onPress={onDelete} title="DEL" />
    </View>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 6,
    marginBottom: 12,
  },
})

export default List
