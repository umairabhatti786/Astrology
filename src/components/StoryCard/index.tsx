import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { appStyles } from "../../utils/AppStyles";
import { images } from "../../assets/images";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";

type Props = {
  title?: string;
  img?: any;
  onPress?:()=>void
};
const StoryCard = ({ img, title,onPress }: Props) => {
  return (
    <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress}
      style={{
        gap: verticalScale(5),
        marginRight: scale(15),
      }}
    >
      <View
       style={{
        width: windowWidth / 2.4,
        height: verticalScale(85),
        borderRadius: scale(8),
        overflow:"hidden",
      }}
      >
      <Image
        style={{
          width:"100%",
          height:"100%",
        }}
        source={img}
      />

      </View>
     

      <CustomText
        text={title}
        fontWeight="600"
        fontFam={font.Poppins_Medium}
        size={12}
        color={colors.white}
      />
    </TouchableOpacity>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  backArrow: {
    width: scale(40),
    height: scale(40),
    justifyContent: "center",
  },
});
