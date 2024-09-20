import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
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
import DropDown from "../../../components/DropDown";
import { generoData, generoFavoritosData } from "../../../utils/Data";
import MultiSelectDropdown from "../../../components/MultiSelectDropdown";

type Props = {};

const RegisterScreen = ({ navigation }: any) => {
  const [securePassword, setSecurePasswoord] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPasswoord] = useState(true);

  const [genero, setGenero] = useState();
  const [favoritosGeneros, setFavoritosGenero] = useState([]);

  const generoFavoritosData = [
    { label: "Fantasía", value: "Fantasía" },
    { label: "Aventura", value: "Aventura" },
    { label: "Ciencia Ficción", value: "Ciencia Ficció" },
    { label: "Misterio", value: "Misterio" },
    { label: "Fábulas", value: "Fábulas" },
    { label: "Cuentos de Hadas", value: "Cuentos de Hada" },
    { label: "Realismo Mágico", value: "Realismo Mágico" },
    { label: "Humor", value: "Humor" },
    // Add more items as needed
  ];

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    interest: "",
    termAndPolicy: false,
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    birthdateError: "",
    interestError: "",
    termAndPolicyError: "",
    generoError: "",
    favoritosGenerosError: "",
  });

  const onRegister = () => {
    if (!values.name) {
      setErrors({ ...errors, nameError: "Campo de nombre obligatorio" });

      return;
    }
    if (!values.email) {
      setErrors({
        ...errors,
        emailError: "Campo de correo electrónico obligatorio",
      });

      return;
    }
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
    if (!values.birthdate) {
      setErrors({
        ...errors,
        birthdateError: "Campo de fecha de nacimiento obligatorio",
      });

      return;
    }
    if (!values.interest) {
      setErrors({ ...errors, interestError: "Campo de interés obligatorio" });

      return;
    }
    if (!genero) {
      setErrors({
        ...errors,
        generoError:
          "Se requiere aceptar los términos y la política de privacidad",
      });

      return;
    }
    if (favoritosGeneros.length == 0) {
      setErrors({
        ...errors,
        favoritosGenerosError:
          "Se requiere aceptar los términos y la política de privacidad",
      });

      return;
    }

    if (!values.termAndPolicy) {
      setErrors({
        ...errors,
        termAndPolicyError:
          "Se requiere aceptar los términos y la política de privacidad",
      });

      return;
    }

    navigation.navigate("BottomTab");
  };
  return (
    <GradientLayout>
      <View
        style={{
          marginHorizontal: verticalScale(20),
          marginTop:
            Platform.OS == "ios" ? verticalScale(50) : verticalScale(20),
          marginBottom: verticalScale(20),
        }}
      >
        <CustomText
          text={"Registrate?"}
          fontWeight="600"
          fontFam={font.Poppins_SemiBold}
          size={20}
          style={{ textAlign: "center" }}
          color={colors.white}
        />
      </View>

      <View style={styles.box}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              gap: verticalScale(13),
              marginTop: verticalScale(10),
              marginBottom: verticalScale(30),
            }}
          >
            <CustomInput
              placeholder="Nombre"
              value={values.name}
              error={errors.nameError}
              onChangeText={(value: string) => {
                setValues({ ...values, name: value });
                setErrors({ ...errors, nameError: "" });
              }}
            />
            <CustomInput
              value={values.email}
              error={errors.emailError}
              placeholder="Email"
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
            />
            <CustomInput
              placeholder="Contraseña"
              value={values.password}
              secureTextEntry={securePassword}
              onRightSource={() => setSecurePasswoord(!securePassword)}
              error={errors.passwordError}
              onChangeText={(value: string) => {
                setValues({ ...values, password: value });
                setErrors({ ...errors, passwordError: "" });
              }}
              rightSource={images.eye}
            />
            <CustomInput
              value={values.confirmPassword}
              error={errors.confirmPasswordError}
              secureTextEntry={secureConfirmPassword}
              onRightSource={() =>
                setSecureConfirmPasswoord(!secureConfirmPassword)
              }
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
            <CustomInput
              value={values.birthdate}
              error={errors.birthdateError}
              keyboard={"numeric"}
              maxLength={10}
              onChangeText={(text: string) => {
                const cleaned = text.replace(/[^0-9]/g, "");

                // Format the input as dd/mm/yyyy
                let formatted = cleaned;
                if (cleaned.length >= 3) {
                  formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
                }
                if (cleaned.length >= 5) {
                  formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(
                    2,
                    4
                  )}/${cleaned.slice(4)}`;
                }

                // Limit the length to 10 characters (dd/mm/yyyy)
                if (formatted.length > 10) {
                  formatted = formatted.slice(0, 10);
                }
                setValues({ ...values, birthdate: formatted });
                setErrors({ ...errors, birthdateError: "" });
              }}
              placeholder="Fecha de nacimiento"
            />
            <CustomInput
              value={values.interest}
              error={errors.interestError}
              maxLength={29}
              onChangeText={(value: string) => {
                setValues({ ...values, interest: value });
                setErrors({ ...errors, interestError: "" });
              }}
              placeholder="Intereses"
            />

            <DropDown
              error={errors.generoError}
              placeholder={"Genero"}
              dropWidth={"100%"}
              setValue={setGenero}
              value={genero}
              onSelect={(it: any) => {
                setErrors({ ...errors, generoError: "" });

                setGenero(it?.value);
              }}
              data={generoData.map((item, _index) => {
                return {
                  id: item?.id,
                  label: item?.label,
                  value: item?.value,
                };
              })}
            />
            <MultiSelectDropdown
              placeholder="Generos favoritos"
              data={generoFavoritosData}
              value={favoritosGeneros}
              setValue={setFavoritosGenero}
              // items={generoFavoritosData}
              // setItems={setGeneroFavoritosData}
            />

            <View>
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: scale(10),
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    setValues({
                      ...values,
                      termAndPolicy: !values.termAndPolicy,
                    });
                    setErrors({ ...errors, termAndPolicyError: "" });
                  }}
                  style={styles.termPolicyContainer}
                >
                  {values.termAndPolicy && (
                    <Image
                      source={images.tick}
                      style={{ width: scale(20), height: scale(20) }}
                    />
                  )}
                </TouchableOpacity>
                <View style={{ marginRight: scale(20) }}>
                  <CustomText
                    text={"Acepto los términos y la política de privacidad."}
                    size={15}
                    color={colors.dark_black}
                  />
                </View>
              </View>

              {errors.termAndPolicyError && (
                <View
                  style={{
                    marginTop: verticalScale(5),
                    alignSelf: "flex-start",
                  }}
                >
                  <CustomText
                    size={10}
                    text={errors.termAndPolicyError}
                    color={"#FF0000"}
                  />
                </View>
              )}
            </View>

            <GradientButton onPress={onRegister} text="Registrate!" />
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                gap: scale(5),
              }}
            >
              <CustomText
                text={"Ya tienes cuenta?"}
                size={13}
                color={colors.dark_black}
              />
              <TouchableOpacity onPress={onRegister}>
                <CustomText
                  text={"Inicia sesión!"}
                  textDecorationLine="underline"
                  fontFam={font.Poppins_SemiBold}
                  fontWeight="600"
                  size={13}
                  color={"#10A189"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </GradientLayout>
  );
};

export default RegisterScreen;
const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    alignItems: "center",
    paddingTop: verticalScale(10),
    paddingHorizontal: scale(15),
    gap: verticalScale(13),
  },
  termPolicyContainer: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(7),
    borderWidth: 1,
    borderColor: colors.green,
    backgroundColor: "#F7F8F9",
    alignItems: "center",
    justifyContent: "center",
  },
});
