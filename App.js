import React from "react";
// Necessário importar NavigationContainer e createBottomTabNavigator
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importar as páginas/componentes para que seja possível a navegação
import Home from "./src/pages/home";
import Contact from "./src/pages/contacts";

export default function App() {

  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"
          component={Home}
        />
        <Tab.Screen 
          name="Contact"
          component={Contact}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}