import React, { Component,useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Mylist from "./todo"

function App () {
  const [value,setvalue]=useState("")
  const [todo,settodo]=useState([])
    

  
  
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 35, color: "blue" }}> My Todo List</Text>
        <TextInput
          style={styles.Textin}
          placeholder="Enter Task Name Then Press Enter"
          onChangeText={(xvar) => {
            setvalue(xvar)
          }}
          returnKeyType="done"
          onSubmitEditing={() => {
            let task = [...todo]
            task.push(value)
            settodo(task)
            setvalue("")
            
          }
          }
          value={value}
        />
        <FlatList
          data={todo}
          renderItem={({ item, index }) => {
            return (
            <Mylist task={item} deletee={() => {
              let task =[...todo]
              task.splice(index, 1)
              settodo(task)
            }} />)
          }}
        />

      </View>
    )
  };

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  Textin: {

    width: "95%",
    height: 45,
    borderWidth: 1,
    marginTop: 25,
    marginBottom: 10,
     
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10

  }
});
export default App
