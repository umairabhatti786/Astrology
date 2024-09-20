import React, { useState } from "react";
import {Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";

type Props = {
  title?: string;
  img?: any;
  onPress?: () => void;
  width?:any;
  height?:any
  textColor?:any
};
const CharacterCard = ({ img, title, onPress,width,height,textColor }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        gap: verticalScale(5),
        marginRight: scale(20),
      }}
    >
      <CustomText
        text={title}
        fontWeight="600"
        fontFam={font.Poppins_Medium}
        size={12}
        color={ textColor|| colors.white}
      />
      <View
       style={{
        width:width || windowWidth / 2.6,
        height: height ||verticalScale(130),
        borderRadius: scale(10),
        overflow:"hidden"
      }}
      >
      <Image
        style={{
          width:"100%",
          height: "100%",
        }}
        // resizeMode="contain"
        source={img}
      />

      </View>
     
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  backArrow: {
    width: scale(40),
    height: scale(40),
    justifyContent: "center",
  },
});
