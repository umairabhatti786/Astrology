import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { appStyles } from "../../utils/AppStyles";
import CustomButton from "../CustomButton";
import { font } from "../../utils/font";
import { useEffect, useState } from "react";
type Props = {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  multiline?: boolean;
  height?: any;
  width?: any;
  fontSize?: any;
  placeholderTextColor?: any;
  borderWidth?: any;
  borderRadius?: any;
  sourceWidth?: any;
  sourceHeight?: any;
  rightSource?: any;
  labelColor?: any;
  labelSize?: any;
  labeMarginLeft?: any;
  error?: any;
  textAlignVertical?: any;
  boxText1?:string,
  boxText2?:string
  onRightSource?:any
  secureTextEntry?:boolean
  inputWidth?:any
  
};

const CustomInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  props,
  isCenter,
  fontWeight,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  width,
  placeholderTextColor,
  borderWidth,
  borderRadius,
  sourceWidth,
  sourceHeight,
  rightSource,
  labelColor,
  labelSize,
  labeMarginLeft,
  textAlignVertical,
  error,
  boxText1,
  boxText2,
  onRightSource,
  secureTextEntry,
  inputWidth
}: Props) => {
  const [activeBox, setActiveBox] = useState(boxText1);

  return (
    <View style={{ ...props, width: width || "100%" }}>
        {label && (
        <View
        style={{marginBottom:verticalScale(5)}}
        
        >
          <CustomText
            size={14}
            text={label}
            fontFam={font.Poppins_Medium}
            fontWeight="600"
            color={colors.dark_black}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: scale(10),
          height: verticalScale(height || 42),
          borderColor: colors.gray,
          borderWidth: borderWidth || 1,

          alignItems: "center",
          borderRadius: scale(borderRadius || 8),
          backgroundColor: colors.half_white,
        }}
      >
      
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TextInput
            value={value}
            editable={editable}
            style={{
              fontSize: fontSize || 13,
              width: rightSource ? windowWidth / 2 : inputWidth  ||windowWidth / 1.2,
              height: "100%",
              padding:0,
              fontFamily: font.Poppins_Medium,
              fontWeight: "500",
              color: color || colors.dark_black,

              textAlignVertical: textAlignVertical,

              ...(isCenter && { alignSelf: "center" }),
            }}
            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={placeholderTextColor ||"#8391A1"}
            keyboardType={keyboard}
            maxLength={maxLength}
            secureTextEntry={secureTextEntry || false}
            onChangeText={onChangeText}
            onBlur={onBlur}
            autoCapitalize="none"
          />
        </View>
        {rightSource && (
          <TouchableOpacity
          activeOpacity={0.5}
          onPress={onRightSource}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height:"100%"
            }}
          >
            <Image
              source={rightSource}
              style={{
                width: sourceWidth || scale(16),
                height: sourceHeight || scale(16),
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <View style={{ marginTop: verticalScale(5), alignSelf: "flex-end" }}>
          <CustomText size={10} text={error} color={"#FF0000"} />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
