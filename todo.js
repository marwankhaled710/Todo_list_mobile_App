import React, { Component,useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import App from"./App"

function Mylist(props) {
   
    const [check,setcheck]=useState(false)

        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.checkbox, check ? {
                    backgroundColor: "grey"
                } : {}]} onPress={() => {
                    setcheck(!check)
                }}>
                    {check && <Image
                        source={require("./check.png")}
                        style={{width:30,height:30}}

                    />}
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.tex}>
                    {props.task} </Text>


                <TouchableOpacity style={styles.deletestyle}
                    onPress={() => {
                        props.deletee()

                    }}>
                    <Image
                        source={require("./trash.png")}
                        style={{width:30,height:30,marginRight:40}}

                    />
                </TouchableOpacity>

            </View>

        )
    };


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "95%",
        height: 65,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "grey",
        alignItems: "center",
        paddingHorizontal: 10
    },
    checkbox: {

        width: 25,
        height: 25,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: "grey",
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    tex: {
        fontSize: 18,
        marginLeft: 10,
        width: 300,
    },
    deletestyle: {
        height: 20,
        width: 40,
        
        justifyContent: "center",
        alignItems: "center",
        
        marginRight:150
    }
});
export default Mylist