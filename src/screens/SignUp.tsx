import React from "react";
import LottieView from "lottie-react-native";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("Login");
  };

  const handleLoginPress=()=>{
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.SignUpheader}>Sign Up </Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder="Full Name"
          inputMode="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          inputMode="email"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
        />
          <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder=" Confirm Password"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>I already have an account? </Text>
        <TouchableOpacity  onPress={handlePress}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

    paddingTop: 60,
    backgroundColor: "#C4EFB7",
    paddingBottom: 50,
    paddingLeft: 6,
    paddingRight: 6,
  },
  headerContainer: {
    flex: 1,

    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  SignUpheader: {
    fontSize: 60,
  },
  inputContainer: {
    flex: 4,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  input: {
    width: "90%",
    margin: 12,
    borderWidth: 2,
    padding: 15,
    borderRadius: 5,
    fontSize: 25,
  },
  buttonContainer: {
    flex: 1,
    justifyContent:'center',
   
  },
  button: {
    width: "100%",
    backgroundColor:'black',
    padding:10,
    borderRadius: 10,
    
  },
  buttonText: {
    color:'white',
    textAlign:'center',
    fontSize: 30,
  },
  linkContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  linkText: {
    fontSize: 20,
  },
  link: {
    fontSize: 20,
    color: 'red',
  },
});

export default SignUp;
