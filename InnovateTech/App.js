import { CompanyNameContext } from "./Context";
import Router from "./router";
import { NavigationContainer } from "@react-navigation/native"

export default function App() {

  return (
    <CompanyNameContext.Provider value="InnovateTech">
    <NavigationContainer>
        <Router />
    </NavigationContainer>
    </CompanyNameContext.Provider>
  );
}