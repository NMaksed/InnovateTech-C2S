import { createStackNavigator } from "@react-navigation/stack";
import TabRouter from "./tab.router";
import ConsultaAluno from "../screens/aluno/ConsultaAluno";
import { ModalAluno } from "../screens/aluno/modal/ModalAluno";

const Stack = createStackNavigator();

export default function StackRouter(){
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabRouter}/>
      <Stack.Screen name="ConsultaAluno" component={ConsultaAluno} />
      <Stack.Screen name="ModalAluno" component={ModalAluno} />
    </Stack.Navigator>
  )
}