import { TouchableOpacity, ActivityIndicator } from "react-native";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { font } from "../../utils/font";
import { scale, verticalScale } from "react-native-size-matters";
import LinearGradient from "react-native-linear-gradient";
type Props = {
  text?: string;
  onPress?: any;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  disable?: boolean;
  borderWidth?: number;
  fontWeight?: string;
  paddingHorizontal?: number;
};

const GradientButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable,
  borderWidth,
  fontWeight,
  paddingHorizontal,
}: Props) => {
  return (
    <LinearGradient
      colors={["#10A189", "#2855AE"]} // Define the gradient colors
      start={{ x: 0, y: 0 }} // Starting point for the gradient
      end={{ x: 1, y: 1 }}
      style={{
        width: width || "100%",
        height: verticalScale(height || 41),
        borderRadius: scale(borderRadius || 8),

      }}
    >
      <TouchableOpacity
        onPress={onPress}
        disabled={disable}
        activeOpacity={0.3}
        style={{
          ...style,
          width: width || "100%",
          height: verticalScale(height || 41),
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: scale(borderRadius || 8),
          paddingHorizontal: paddingHorizontal,
          borderColor:borderColor,
          borderWidth:borderWidth
        }}
      >
        <CustomText
          text={text}
          color={textColor || colors.white}
          size={size || 15}
          fontWeight="600"
          fontFam={fontFam || font.Poppins_SemiBold}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default GradientButton;
