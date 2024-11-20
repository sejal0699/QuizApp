import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity } from 'react-native';
import { ScreenNames } from '../screenNames';
import { useNavigation } from '@react-navigation/native';
import Home from '../../screens/home';
import Find from '../../screens/find';
import Stats from '../../screens/stats';
import Profile from '../../screens/profile';
import { Icons } from '../../assets';


const Tab = createBottomTabNavigator();

function BottomStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#7F3DFF",
                tabBarLabelStyle: { fontSize: 12 }, 
            }}
        >
            <Tab.Screen 
                name={ScreenNames.Home} 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Icons.homeIcon}
                            style={{
                                width: 30, 
                                height: 30,
                                tintColor: focused ? "#7F3DFF" : undefined,
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={ScreenNames.Find}
                component={Find}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const navigation = useNavigation();
                        return (
                            <TouchableOpacity>
                                <Image
                                    source={Icons.searchIcon}
                                    style={{
                                        width: 22, 
                                        height: 22,
                                        tintColor: focused ? "#7F3DFF" : undefined, 
                                    }}
                                />
                            </TouchableOpacity>
                        );
                    },
                }}
            />

            <Tab.Screen 
                name={ScreenNames.Stats} 
                component={Stats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Icons.statsIcon}
                            style={{
                                width: 25, 
                                height: 25,
                                tintColor: focused ? "#7F3DFF" : undefined, 
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen 
                name={ScreenNames.Profile} 
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Icons.profileIcon}
                            style={{
                                width: 20, 
                                height: 20,
                                tintColor: focused ? "#7F3DFF" : undefined,
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomStack;
