import {
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CustomText from '../CustomText';
import { colors } from '../../utils/colors';
import { font } from '../../utils/font';
import { scale, verticalScale } from 'react-native-size-matters';
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

const CustomButton = ({
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
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.3}
      style={{
        ...style,
        width: width || '100%',
        height: verticalScale(height || 41),
        backgroundColor: bgColor || colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(borderRadius || 8),
        borderWidth: borderWidth || -1,
        borderColor: borderColor || colors.primary,
        paddingHorizontal: paddingHorizontal,
  
      }}>
      <CustomText
          text={text}
          color={textColor || colors.white}
          size={size ||  15}
          fontWeight='600'
          fontFam={fontFam || font.Poppins_SemiBold}
        />
    </TouchableOpacity>
  );
};
export default CustomButton;
