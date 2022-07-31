import HomeStack from "./src/HomeStack";
import ContactUsPage from "./src/ContactUsPage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="home_stack"
            component={HomeStack}
            options={{ title: "Home Board" }}
          />
          <Drawer.Screen
            name="contact_us"
            component={ContactUsPage}
            options={{ title: "Contact Us" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
