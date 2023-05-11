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

const Login = () => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("MyOtherPage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.loginheader}>Login </Text>
      </View>
      <View style={styles.inputContainer}>
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
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>You don't have an account? </Text>
        <TouchableOpacity style={styles.link} onPress={handlePress}>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

    paddingTop: 80,
    backgroundColor: "#C4EFB7",
    paddingBottom: 80,
    paddingLeft: 6,
    paddingRight: 6,
  },
  headerContainer: {
    flex: 1,

    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  loginheader: {
    fontSize: 60,
  },
  inputContainer: {
    flex: 2,
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
  },
  linkText: {},
  link: {},
});

export default Login;
