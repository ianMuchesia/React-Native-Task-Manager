import React from 'react'
import {Text, SafeAreaView, StyleSheet , StatusBar} from 'react-native'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    
     
        backgroundColor: "#C4EFB7",
    }
})

export default HomeScreen