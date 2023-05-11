import {Home, Login, SignUp, Welcome} from './src/screens';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Login: { /* params here */ };
  SignUp:{};
  Home:{};
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
         
             <Stack.Screen 
         name="SignUp"
         component={SignUp}
         />
            <Stack.Screen 
         name="Home"
         component={Home}
         />
      </Stack.Navigator>
  
</NavigationContainer>
  )   
}


