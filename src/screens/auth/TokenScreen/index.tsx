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

const TokenScreen = ({ navigation }: any) => {
  const [secureToken, setSecureToken] = useState(false);

  const [values, setValues] = useState({
    token: "",
  });

  const [errors, setErrors] = useState({
    tokenError: "",
  });

  const onToken = () => {
    if (!values.token) {
      setErrors({
        ...errors,
        tokenError: "Campo de token obligatorio",
      });

      return;
    }

    navigation.navigate("ResetPasswordScreen");
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
      <View style={{ marginVertical: verticalScale(50) }}>
        <CustomText
          text={"Ingresa el token"}
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
          placeholder="Token"
          secureTextEntry={secureToken}
          onRightSource={() => setSecureToken(!secureToken)}
          value={values.token}
          error={errors.tokenError}
          onChangeText={(value: string) => {
            setValues({ ...values, token: value });
            setErrors({ ...errors, tokenError: "" });
          }}
          rightSource={images.eye}
        />

        <GradientButton onPress={onToken} text="Enviar" />
      </View>
    </GradientLayout>
  );
};

export default TokenScreen;
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
