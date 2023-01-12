import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts} from 'expo-font'
import Homescreen from './screens/Homescreen';
import Home from './screens/Home';
import Details from './screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
   ...DefaultTheme.colors,
    background: "transparent"
  }
};

const App = () => {

const [loaded] = useFonts({
  InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  InterLight: require("./assets/fonts/Inter-Light.ttf"),
})

if(!loaded) return null;
 return (
  <NavigationContainer theme={theme}>
    <Stack.Navigator screenOptions={{headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  </NavigationContainer>
 );
}
 export default App;