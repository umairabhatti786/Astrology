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
import { emailFormatRegex } from "../../../utils/Regex";

type Props = {};

const ForgetPasswordScreen = ({ navigation }: any) => {
  const [values, setValues] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
  });

  const onForget = () => {
    if (!values.email) {
      setErrors({
        ...errors,
        emailError: "Campo de correo electrónico obligatorio",
      });

      return;
    }

    navigation.navigate("TokenScreen");
  };
  return (
    <GradientLayout>
      <Image
        source={images.lock}
        resizeMode="contain"
        style={{
          width: scale(210),
          height: scale(210),
          marginTop: Platform.OS == "ios" ? "40%" : "30%",
          alignSelf: "center",
        }}
      />

      <View
        style={{
          marginVertical: verticalScale(20),
          gap: Platform.OS == "ios" ? 0 : verticalScale(-7),
        }}
      >
        <CustomText
          text={"Ups !"}
          fontWeight="600"
          fontFam={font.Poppins_SemiBold}
          size={20}
          style={{ textAlign: "center" }}
          color={colors.white}
        />
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
        <View style={{ alignSelf: "flex-start" }}>
          <CustomText
            text={
              "Por favor ingresá tu email. Recibirás un token para restablecer tu contraseña."
            }
            size={13}
            color={colors.dark_black}
          />
        </View>
        <CustomInput
          value={values.email}
          error={errors.emailError}
          onChangeText={(value: string) => {
            setValues({ ...values, email: value });

            if (value.length > 0) {
              let isValid = emailFormatRegex.test(value);

              if (!isValid) {
                setErrors({
                  ...errors,
                  emailError: "Correo electrónico inválido",
                });
                return;
              }
              setErrors({ ...errors, emailError: "" });
            } else {
              setErrors({ ...errors, emailError: "" });
            }
          }}
          placeholder="Ingresa tu email"
        />

        <GradientButton onPress={onForget} text="Enviar" />
      </View>
    </GradientLayout>
  );
};

export default ForgetPasswordScreen;
const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    alignItems: "center",
    paddingTop: verticalScale(40),
    paddingHorizontal: scale(15),
    gap: verticalScale(13),
  },
});
