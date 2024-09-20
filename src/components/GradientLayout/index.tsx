import React from "react";
import { View, Text, Image, Platform, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../utils/AppStyles";
import LinearGradient from "react-native-linear-gradient";
import { images } from "../../assets/images";

const GradientLayout = ({ children, edges }: any) => {
  return (
    <SafeAreaView edges={["left","right"]} style={{ ...appStyles.mainFlex }}>
      <ImageBackground
      style={{flex:1}}
      source={images.gradient_back}
      >
           {children}
        </ImageBackground>
      {/* <LinearGradient
        colors={["#10A189", "#2855AE"]} // Define the gradient colors
        start={{ x: 0, y: 0 }} // Starting point for the gradient
        end={{ x: 1, y: 1 }}
        style={{ ...appStyles.mainFlex }}
      >
        {children}
      </LinearGradient> */}
    </SafeAreaView>
  );
};

export default GradientLayout;
