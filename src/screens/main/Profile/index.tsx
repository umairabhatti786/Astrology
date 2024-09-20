import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../utils/AppStyles";
import TopHeader from "../../../components/TopHeader";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import GradientButton from "../../../components/GradientButton";
import { useEffect, useState } from "react";
import CustomInput from "../../../components/CustomInput";
import LinearGradient from "react-native-linear-gradient";
import { windowWidth } from "../../../utils/Dimensions";

const ProfileScreen = ({ navigation }: any) => {
  const [story1, setStory1] = useState(true);
  const [moreStory, setMoreStory] = useState(false);
  const [storyEnd, setStoryEnd] = useState(true);

  useEffect(() => {}, [story1, moreStory]);

  return (
    <SafeAreaView
      edges={[ "right", "left"]}
      style={{ ...appStyles.mainFlex,          marginTop: Platform.OS == "ios" ? verticalScale(25) : 0,
    }}
    >
      <View style={{ gap: verticalScale(15), flex: 1 }}>
        <View
          style={{
            paddingHorizontal: scale(20),
            paddingTop: verticalScale(20),
          }}
        >
          <TopHeader 
          BackButton
          hideProfile title="Profile" />
        </View>
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={styles.gradientBackground}
            source={images.gradient_star_back}
          >
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={{flex:1}}
            contentContainerStyle={{paddingBottom:verticalScale(100)}}
            >

            <View
              style={{
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(15),
                gap: verticalScale(20),
                flex: 1,
              }}
            >
              <CustomText
                fontFam={font.Poppins_Bold}
                text={"Juan"}
                size={24}
                style={{ textAlign: "center" }}
                color={colors.white}
              />

              <View
                style={{
                  backgroundColor: "#FFFFFF80",
                  borderRadius: scale(15),
                  overflow: "hidden",
                  gap: verticalScale(10),
                  paddingVertical: verticalScale(20),
                  paddingHorizontal: scale(10),
                }}
              >
                <CustomInput 
                                  inputWidth={windowWidth/1.3}

                label="Nombre:" placeholder="Juan" />

                <CustomInput
                                                  inputWidth={windowWidth/1.3}

                 label="Email:" placeholder="juan@gmail.com" />
                <CustomInput
                                                  inputWidth={windowWidth/1.3}

                  label="Intereses:"
                  placeholder="Fútbol, duendes, magia"
                />
              </View>

              <GradientButton         
          text="Guardar"
        />
             <GradientButton         
          text="Cerrar Sesión"
        />
             <CustomButton        
             bgColor={colors.red}
          text="Eliminar Cuenta"
        />
            </View>
            </ScrollView>

          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  absoluteBuilding: {
    width: scale(80),
    height: scale(80),
    position: "absolute",
    top: verticalScale(-30),
    right: scale(30),
    zIndex: 999,
  },
  gradientBackground: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    overflow: "hidden",
    marginTop: verticalScale(10),
  },
  like: { width: scale(20), height: scale(20) },
  detailContainer: {
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(4),
    borderRadius: 999,
    justifyContent: "center",
    backgroundColor: "#FFFFFF90",
  },

  addCharacterBtn: {
    height: verticalScale(41),
    backgroundColor: "transparent",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: scale(8),
    flexDirection: "row",
    paddingHorizontal: scale(35),
  },
});
