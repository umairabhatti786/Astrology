import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../../screens/auth/SignIn";

const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
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
      <Stack.Screen name={"SignIn"} component={SignIn} />
    </Stack.Navigator>
  );
};
export default AppStack;
