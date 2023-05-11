import React from "react";
import LottieView from "lottie-react-native";
import { Text, View, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import AnimatedLottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ImageWelcome}>
        <LottieView
          style={styles.Image}
          source={require("../../assets/lottie/welcome.json")}
          autoPlay
          loop
        />
      </View>
      <View style={styles.welcome_details}>
        <Text style={styles.welcome_details_main}>
          Manage Your Daily Tasks Here
        </Text>
        <Text style={styles.welcome_details_sub}>
          Organize Yourself and be accountable to yourself
        </Text>
      </View>
      <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress} style={styles.button}>
  <Text style={styles.buttonText}>Get Started</Text>
</Pressable>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#C4EFB7",
    flexDirection: "column",
  },
  ImageWelcome: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "80%",
    marginBottom: "20%",
   /*  backgroundColor: 'white', */
  },
  Image: {
    minWidth: "100%",
    height: "100%",
    resizeMode: 'fit',
  },
  welcome_details: {
    flex:1,
   paddingLeft: 5,
   paddingRight: 5,
   display: "flex",

    

  },
  welcome_details_main: {
    fontSize: 35,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  welcome_details_sub: {},
  buttonContainer: {
    flex: 1,
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
    
  },
  buttonText:{
    fontSize: 20,
    margin: 5,
   
  }
});

export default Welcome;
