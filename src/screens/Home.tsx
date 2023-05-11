import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AddTask, HomeScreen, Profile, Task } from '../components';

type iconName = 'ios-home-outline'|'ios-list'|'ios-person'|'ios-add-circle';


const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={
       
        ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Task') {
              iconName = 'ios-list';
            } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            } else if (route.name === 'AddTask') {
              iconName = 'ios-add-circle';
            }else{
              iconName = 'ios-home-outline'
            }
  
            // You can return any component that you like here!
            return <Ionicons name={iconName as iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'green',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#C4EFB7",
          height: 60,
          paddingBottom:10,
          paddingTop:10,
          // set your desired background color here
          },
        })
       }
   
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Task" component={Task} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="AddTask" component={AddTask} />
    </Tab.Navigator>
  )
}

export default Home