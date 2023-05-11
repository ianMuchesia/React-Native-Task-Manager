import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
} from "react-native";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionOne}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/profile.jpg")}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Hi Ian</Text>
          <Text style={styles.pending}>6 Tasks are pending</Text>
        </View>
      </View>
      <View style={styles.sectionTwo}>
        <Text style={styles.task}>Data Structures and Algorithms</Text>
        <Text style={styles.time}>09:00-04:00</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, optio?
        </Text>
        <Text style={styles.progress} >In progres...<MaterialCommunityIcons name="progress-clock" size={24} color="white" /></Text>
      </View>
   
          <Text style={styles.sectionThreeHeaderIntro}>Weekly Review</Text>
      
      <View style={styles.sectionThree}>
        
      <View style={[styles.taskCount, styles.topLeft]}>
    <Text style={styles.taskNumber}>5</Text>
    <Text style={styles.taskStatus}>Done</Text>
  </View>
  <View style={[styles.taskCount, styles.topRight]}>
    <Text style={styles.taskNumber}>7</Text>
    <Text style={styles.sectionThreeHeader}>Progress</Text>
  </View>
  <View style={[styles.taskCount, styles.bottomLeft]}>
    <Text style={styles.taskNumber}>10</Text>
    <Text style={styles.sectionThreeHeader}>Ongoing</Text>
  </View>
  <View style={[styles.taskCount, styles.bottomRight]}>
    <Text style={styles.taskNumber}>12</Text>
    <Text style={styles.sectionThreeHeader}>Waiting for review</Text>
  </View>
        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#C4EFB7",
    padding:20,
  },
  sectionOne: {
    flex:2,
    flexDirection: "row",
    
    justifyContent: 'space-between',
    width:'100%',
  

  },
  imageContainer: {
    maxWidth: '45%',
    maxHeight: '100%',

  },
  image: {
    height: 200,
    width: 180,
    borderColor: 'white',
    borderWidth: 0,
    borderRadius: 15,
    resizeMode: 'center',
  },
  nameContainer: {
    minWidth: '50%',
    marginLeft:60,
    alignSelf: 'center',
   
   

  },
  name: {
    fontSize: 50,
    alignSelf: 'flex-start'
  },
  pending: {},
  sectionTwo: {
    flex:1,
    backgroundColor:'#012B00',
    color:'white',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
    
  },
  task: {
    color:'white',
    fontSize: 23,
  },
  time: {
    color:'white',
    
  },
  description: {
    color:'white'
  },
  progress: {
    color:'white',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionThree: {
    flex:2,

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    
  },

  sectionThreeHeaderIntro: {
    fontSize: 25,
    textAlign: "center",
  },
  sectionThreeHeader:{

  },
  taskCount: {
    flex: 1,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  topLeft: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  topRight: {
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  bottomLeft: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  bottomRight: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  taskNumber: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  taskStatus: {
    fontSize: 24,
    color: 'green',
  },
  sectionThreeHeader: {
    fontSize: 24,
    color: 'gray',
  },
});

export default HomeScreen;
