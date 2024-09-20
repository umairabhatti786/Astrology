import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { appStyles } from "../../utils/AppStyles";
import { images } from "../../assets/images";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { useNavigation } from "@react-navigation/native";
import { TouchEventType } from "react-native-gesture-handler/lib/typescript/TouchEventType";

type Props = {
  title?: string;
  BackButton?: boolean;
  onBackButtton?:any
  hideProfile?:boolean
};

const TopHeader = ({ title, BackButton,onBackButtton,hideProfile }: Props) => {

  const navigation=useNavigation()
  return (
    <View
      style={{
        ...appStyles.rowjustify,
      }}
    >
      <View style={{ ...appStyles.row, gap: scale(5) }}>
        {BackButton && (
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=> onBackButtton?onBackButtton(): navigation.goBack()}
            style={{
              width: scale(31),
              height: scale(31),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: scale(10),
              backgroundColor: colors.primary,
            }}
          >
            <Image
              style={{
                width: scale(15),
                height: scale(15),
              }}
              resizeMode="contain"
              source={images.back_arrow}
            />
          </TouchableOpacity>
        )}

        {title && (
          <CustomText
            text={title}
            fontWeight="600"
            style={{ width: windowWidth / 2 }}
            numberOfLines={1}
            fontFam={font.Poppins_SemiBold}
            size={19}
            color={colors.primary}
          />
        )}
      </View>

      <View style={{ ...appStyles.row, gap: scale(10), alignSelf: "flex-end",marginBottom:verticalScale(3) }}>
        <View
          style={{
            ...appStyles.row,
            gap: scale(5),
            paddingHorizontal: scale(12),
            paddingTop: verticalScale(2),
            borderRadius: 999,
            borderWidth: 1,
            borderColor: colors.primary,
            justifyContent: "center",
            backgroundColor: "#4EBAC130",
          }}
        >
          <Image
            style={{
              width: scale(15),
              height: scale(15),
              marginBottom: verticalScale(3),
            }}
            // resizeMode="contain"
            source={images.coin}
          />
          <CustomText
            text={"100"}
            fontWeight="600"
            fontFam={font.Poppins_SemiBold}
            size={14}
            color={"#242424"}
          />
        </View>

        {
            !hideProfile&&(
              <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>navigation.navigate("ProfileScreen")}
          
              >
                
                 <Image
                style={{
                  width: scale(32),
                  height: scale(32),
                  borderRadius: scale(32),
                }}
                resizeMode="contain"
                source={images.profile}
              />
      
              </TouchableOpacity>
              
            )
          }
       
       
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  backArrow: {
    width: scale(40),
    height: scale(40),
    justifyContent: "center",
  },
});
