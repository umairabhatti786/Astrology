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
import CharacterInfo from "../../screens/main/CharacterInfo";
import MyCharactersScreen from "../../screens/main/MyCharacters";
import AddCharacter from "../../screens/main/AddCharacter";



const CharacterStack = () => {
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
                 <Stack.Screen name={"MyCharactersScreen"} component={MyCharactersScreen} />
                 <Stack.Screen name={"CharacterInfoScreen"} component={CharacterInfo} />
                 <Stack.Screen name={"AddCharacter"} component={AddCharacter} />
















     

      








    </Stack.Navigator>
  );
};
export default CharacterStack;
