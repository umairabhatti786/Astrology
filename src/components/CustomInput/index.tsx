import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { font } from "../../utils/font";
type Props = {
  placeholder?: string;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  editable?: boolean;
  color?: string;
  maxLength?: number;
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
  error?: any;
  textAlignVertical?: any;
  onRightSource?: any;
  secureTextEntry?: boolean;
  inputWidth?: any;
};

const CustomInput = ({
  placeholder,
  keyboard,
  props,
  isCenter,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  editable,
  color,
  maxLength,
  width,
  placeholderTextColor,
  borderWidth,
  borderRadius,
  sourceWidth,
  sourceHeight,
  rightSource,
  textAlignVertical,
  error,
  onRightSource,
  secureTextEntry,
  inputWidth,
}: Props) => {
  return (
    <View style={{ ...props, width: width || "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: scale(10),
          height: verticalScale(height || 42),
          borderColor: colors.white + "10",
          borderWidth: borderWidth || 1,

          alignItems: "center",
          borderRadius: scale(borderRadius || 8),
          backgroundColor: colors.white + "20",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TextInput
            value={value}
            editable={editable}
            style={{
              fontSize: fontSize || 13,
              width: rightSource
                ? windowWidth / 2
                : inputWidth || windowWidth / 1.2,
              height: "100%",
              padding: 0,
              fontFamily: font.DMSans_Medium,
              fontWeight: "500",
              color: color || colors.white,

              textAlignVertical: textAlignVertical,

              ...(isCenter && { alignSelf: "center" }),
            }}
            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={placeholderTextColor || "#8391A1"}
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
              height: "100%",
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
