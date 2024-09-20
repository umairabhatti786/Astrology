import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
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

type Props = {};

const LoginScreen = ({ navigation }: any) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const [securePassword,setSecurePasswoord]=useState(true)
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // Keyboard is open
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // Keyboard is closed
      }
    );

    // Cleanup the listeners on component unmount
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onLogin = () => {
    if (!values.email) {
      setErrors({ ...errors, emailError: "Campo de correo electrónico obligatorio" });

      return;
    }
    if (!values.password) {
      setErrors({ ...errors, passwordError: "Campo de contraseña obligatorio" });
      return;
    }

    navigation.navigate("BottomTab");
  };
  return (
    <GradientLayout>
      <ScrollView
      contentContainerStyle={{flex:1}}
      >

      <View
        style={{
          width: scale(140),
          height: scale(140),
          marginTop: isKeyboardVisible?"7%":  Platform.OS == "ios" ? "30%" : "20%",
          alignSelf: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={images.logo}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          marginTop: verticalScale(40),
          marginBottom:  isKeyboardVisible?"10%":"20%",
          gap: Platform.OS == "ios" ? 0 : verticalScale(-7),
        }}
      >
        <CustomText
          text={"Bienvenido!"}
          fontWeight="600"
          fontFam={font.Poppins_SemiBold}
          size={20}
          style={{ textAlign: "center" }}
          color={colors.white}
        />
        <CustomText
          text={"Inicia sesión!"}
          fontWeight="600"
          fontFam={font.Poppins_SemiBold}
          size={20}
          style={{ textAlign: "center" }}
          color={colors.white}
        />
      </View>

      <View style={{...styles.box}}>
    
        <CustomInput
          value={values.email}
          error={errors.emailError}
          onChangeText={(value:string) => {
            setValues({ ...values, email:value });

            if(value.length>0){

              let isValid = emailFormatRegex.test(value);
  
              if(!isValid){
  
                setErrors({ ...errors, emailError: "Correo electrónico inválido" });
                return
              }
              setErrors({ ...errors, emailError: "" });

            }

            else {
              setErrors({ ...errors, emailError: "" });


            }
         





          }}
          placeholder="Ingresa tu email"
        />
        <CustomInput
          value={values.password}
          error={errors.passwordError}
          secureTextEntry={securePassword}
          onRightSource={()=>setSecurePasswoord(!securePassword)}
          

  
          onChangeText={(value:string) => {

            setValues({ ...values, password:value });
              setErrors({ ...errors, passwordError: "" });
            


          }}
          placeholder="Contraseña"
          rightSource={images.eye}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate("ForgetPasswordScreen")}
          style={{ alignSelf: "flex-start" }}
        >
          <CustomText
            text={"Olvidaste tu contraseña?"}
            size={13}
            color={colors.dark_black}
          />
        </TouchableOpacity>

        <GradientButton onPress={onLogin} text="Iniciar Sesión" />
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: scale(5),
          }}
        >
          <CustomText
            text={"No tienes cuenta?"}
            size={13}
            color={colors.dark_black}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <CustomText
              text={"Registrate!"}
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

    </GradientLayout>
  );
};

export default LoginScreen;
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
