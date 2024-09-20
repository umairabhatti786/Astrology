import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import GradientLayout from "../../../components/GradientLayout";
import { images } from "../../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import GradientButton from "../../../components/GradientButton";
import CustomInput from "../../../components/CustomInput";

type Props = {};

const ResetPasswordScreen = ({ navigation }: any) => {
  const [securePassword,setSecurePasswoord]=useState(true)
  const [secureConfirmPassword,setSecureConfirmPasswoord]=useState(true)

  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    passwordError: "",
    confirmPasswordError: "",
  });

  const onReset = () => {
    if (!values.password) {
      setErrors({
        ...errors,
        passwordError: "Campo de contraseña obligatorio",
      });

      return;
    }
    if (!values.confirmPassword) {
      setErrors({
        ...errors,
        confirmPasswordError: "Campo de confirmación de contraseña obligatorio",
      });
      return;
    }

    navigation.navigate("LoginScreen");
  };
  return (
    <GradientLayout>
      <Image
        source={images.un_lock}
        resizeMode="contain"
        style={{
          width: scale(240),
          height: scale(240),
          marginTop: Platform.OS == "ios" ? "40%" : "30%",
          alignSelf: "center",
          // backgroundColor:"red"
        }}
      />
      <View
        style={{
          marginBottom: verticalScale(20),
          gap: Platform.OS == "ios" ? 0 : verticalScale(-7),
        }}
      >
        <CustomText
          text={"Restablecer"}
          fontWeight="600"
          fontFam={font.Poppins_SemiBold}
          size={20}
          style={{ textAlign: "center" }}
          color={colors.white}
        />
        <CustomText
          text={"contraseña"}
          fontWeight="600"
          fontFam={font.Poppins_SemiBold}
          size={20}
          style={{ textAlign: "center" }}
          color={colors.white}
        />
      </View>

      <View style={styles.box}>
        <CustomInput
          value={values.password}
          secureTextEntry={securePassword}
          onRightSource={()=>setSecurePasswoord(!securePassword)}
          error={errors.passwordError}
          onChangeText={(value: string) => {
            setValues({ ...values, password: value });
            setErrors({ ...errors, passwordError: "" });
          }}
          placeholder="Contraseña"
          rightSource={images.eye}
        />
        <CustomInput
          value={values.confirmPassword}
          error={errors.confirmPasswordError}
          secureTextEntry={secureConfirmPassword}
          onRightSource={()=>setSecureConfirmPasswoord(!secureConfirmPassword)}
          onChangeText={(value: string) => {
            setValues({ ...values, confirmPassword: value });

            if (value.length != 0) {
              if (value != values.password) {
                setErrors({
                  ...errors,
                  confirmPasswordError:
                    "La confirmación de la contraseña no coincide",
                });
              } else {
                setErrors({ ...errors, confirmPasswordError: "" });
              }
            } else {
              setErrors({ ...errors, confirmPasswordError: "" });
            }
          }}
          placeholder="Confirmar contraseña"
          rightSource={images.eye}
        />

        <GradientButton onPress={onReset} text="Restablecer" />
      </View>
    </GradientLayout>
  );
};

export default ResetPasswordScreen;
const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    alignItems: "center",
    paddingTop: verticalScale(60),
    paddingHorizontal: scale(15),
    gap: verticalScale(13),
  },
});
