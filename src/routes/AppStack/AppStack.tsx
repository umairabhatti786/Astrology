import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../../screens/auth/Onboarding";
import WelcomeScreen from "../../screens/auth/Welcome";
import LoginScreen from "../../screens/auth/Login";
import ForgetPasswordScreen from "../../screens/auth/ForgetPassword";
import TokenScreen from "../../screens/auth/TokenScreen";
import ResetPasswordScreen from "../../screens/auth/ResetPassword";
import BottomTab from "./BottomTab";
import Register from "../../screens/auth/Register";
import LibraryDetail from "../../screens/main/LibraryDetail";
import SaveCharacter from "../../screens/main/SaveCharacter";
import ReadLibrary from "../../screens/main/ReadLibrary";
import Feedback from "../../screens/main/Feedback";
import ProfileScreen from "../../screens/main/Profile";



const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      //  screenOptions={{ headerShown: false }
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
                 <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
                 <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
                 <Stack.Screen name={"ForgetPasswordScreen"} component={ForgetPasswordScreen} />
                 <Stack.Screen name={"TokenScreen"} component={TokenScreen} />
                 <Stack.Screen name={"ResetPasswordScreen"} component={ResetPasswordScreen} />
                 <Stack.Screen name={"RegisterScreen"} component={Register} />
                 <Stack.Screen name={"BottomTab"} component={BottomTab} />
                 <Stack.Screen name={"LibraryDetail"} component={LibraryDetail} />
                 <Stack.Screen name={"SaveCharacter"} component={SaveCharacter} />
                 <Stack.Screen name={"ReadLibrary"} component={ReadLibrary} />
                 <Stack.Screen name={"Feedback"} component={Feedback} />
                 <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />









           {/* <Stack.Screen name={"OnBoarding"} component={OnboardingScreen} /> */}






     

      








    </Stack.Navigator>
  );
};
export default AppStack;
