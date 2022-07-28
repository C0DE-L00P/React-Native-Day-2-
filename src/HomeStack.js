import React from 'react'
import HomePage from './HomePage'
import DetailsPage from './DetailsPage'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack(){
    return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomePage} options={{title: 'Movies List'}}/>
      <Stack.Screen name="detail" component={DetailsPage} />
    </Stack.Navigator>
    )
}