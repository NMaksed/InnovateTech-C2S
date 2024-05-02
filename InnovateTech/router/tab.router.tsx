import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons";
import ConsultaAluno from "../screens/aluno/ConsultaAluno";
import React from "react";
const Tab = createBottomTabNavigator();

export default function TabRouter() {

  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="aluno"
        component={ConsultaAluno}
        options={{
          title: "Alunos",
          headerStyle: {
            backgroundColor: "#45acd0",
            elevation: 4,
          },
          tabBarStyle: {
            backgroundColor: "#45acd0",
            elevation: 4,
          },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => <Feather name="user" color="#FFF" size={size} />,
          tabBarLabel: "Usuário",
          tabBarLabelStyle: {
            color: "#FFF"
          }
        }} />
    </Tab.Navigator>
  )
}