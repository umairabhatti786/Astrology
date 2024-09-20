import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import GradientLayout from "../../../components/GradientLayout";
import { images } from "../../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import GradientButton from "../../../components/GradientButton";
import { Spacer } from "../../../components/Spacer";

type Props = {};

const WelcomeScreen = ({navigation}: any) => {
  return (
    <GradientLayout>
      <View
        style={{
          width: "100%",
          height: "47%",
          marginLeft: scale(10),
          marginTop: Platform.OS=="ios"?verticalScale(40):  verticalScale(10),
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={images.welcome}
          resizeMode="contain"
        />
      </View>
      <View
        style={styles.box}
      >
        <CustomText
          text={"Bienvenido a CreAventura"}
          fontWeight="600"
          fontFam={font.Poppins_SemiBold}
          size={17}
          color={colors.secondry}
        />
        <CustomText
          text={
            "¡Explora un mundo de cuentos interactivos donde tú decides el rumbo de la aventura! Encuentra cuentos llenos de magia y decisiones divertidas que transforman la lectura en una experiencia única."
          }
          size={15}
          style={{
            textAlign: "center",
            marginTop: verticalScale(5),
            marginBottom: verticalScale(30),
          }}
        />
        <GradientButton
        onPress={()=>navigation.navigate("LoginScreen")}
        text="Iniciar Sesión" />
        <Spacer height={verticalScale(10)} />
        <CustomButton
          text="Registrate"
          bgColor={"transparent"}
          textColor={colors.secondry}
          borderColor={colors.primary}
          borderWidth={1}
        />
      </View>
    </GradientLayout>
  );
};

export default WelcomeScreen;
const styles=StyleSheet.create({

    box:{
        backgroundColor: colors.white,
        flex: 1,
        marginTop: verticalScale(40),
        borderTopRightRadius: scale(30),
        borderTopLeftRadius: scale(30),
        alignItems: "center",
        paddingVertical: verticalScale(30),
        paddingHorizontal: scale(15),
      }

})
