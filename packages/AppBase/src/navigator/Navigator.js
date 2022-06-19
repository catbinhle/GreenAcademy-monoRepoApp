import React from "react"
import {Image} from 'react-native'
// import Home from '../modules/Home/Home'
// import Cities from "../modules/Cities/Cities"
// import DetailCity from "../modules/DetailCity/DetailCity"
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome' // tham khảo: https://github.com/oblador/react-native-vector-icons/blob/master/FONTAWESOME5.md
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Map from "../modules/Map/Map" 
// import Login from "../modules/Login/Login"
// import Setting from "../modules/Setting/Setting"
// import { useSelector } from 'react-redux'
import Home from '@green/home'

const HomeStack = createNativeStackNavigator()
// const ToursStack = createNativeStackNavigator()
// const SettingStack = createNativeStackNavigator()
// const LoginStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#7f5bc7',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerBackTitle: ''
        }}
    >
        <HomeStack.Screen name="Home" component={Home}/>
        {/* <HomeStack.Screen
            name="DetailCity"
            component={DetailCity}
            options={({ route }) => ({ title: route.params.name })}
        />
        <HomeStack.Screen
            name="Map"
            component={Map}
            options={({ route }) => ({ title: route.params.name })}
        /> */}
    </HomeStack.Navigator>
)

// const ToursStackScreen = () => (
//     <ToursStack.Navigator>
//         <ToursStack.Screen name="Tours" component={Cities} />
//     </ToursStack.Navigator>
// )

// const LoginStackScreen = () => (
//     <LoginStack.Navigator>
//         <LoginStack.Screen name="Login" component={Login} />
//     </LoginStack.Navigator>
// )

// const SettingStackScreen = () => (
//     <SettingStack.Navigator>
//         <SettingStack.Screen name="Setting" component={Setting} />
//     </SettingStack.Navigator>
// )

const TabsScreen = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home'
                } else if (route.name === 'Booking') {
                    iconName = 'route'
                } else {
                    iconName = 'user'
                }
                // return <FontAwesome5 name={iconName}/>
                return <Image/>
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#81898a',
            size: 24,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#7f5bc7'
            }
        })}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Booking" component={HomeStackScreen} />
    </Tab.Navigator>
)

const Navigator = () => {
    // const app = useSelector(state => state.app)
    // const state = useSelector(state => state)
    // console.log('GREEN LOG APP REDUCER AT APP MAIN: ', state)
    return (
        <NavigationContainer>
            {/* {
                state?.app?.userInfo?.accessToken
                ?
                <TabsScreen />
                :
                <LoginStackScreen />
            } */}
            <TabsScreen />
        </NavigationContainer>
    )
}

export default Navigator