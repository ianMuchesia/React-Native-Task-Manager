import {Login, Welcome} from './src/screens';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: { /* params here */ };
};

const Stack = createNativeStackNavigator<RootStackParamList>();




export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen 
        name="Welcome"
         component={Welcome}
         />
         <Stack.Screen 
        name="Login"
         component={Login}
         />
      </Stack.Navigator>
  
</NavigationContainer>
  )   
}


