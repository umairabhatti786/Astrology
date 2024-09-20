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
  
  const CharacterInfo = ({ navigation }: any) => {
  
  
  
    return (
      <SafeAreaView
      edges={[ "right", "left"]}
      style={{ ...appStyles.mainFlex,marginTop:Platform.OS=="ios"?verticalScale(25):0 }}
      >
        <View style={{ gap: verticalScale(15), flex: 1 }}>
          <View
            style={{
              paddingHorizontal: scale(20),
              paddingTop: verticalScale(20),
            }}
          >
            <TopHeader
            title="Información"
             
              BackButton
            />
          </View>
          <View style={{ flex: 1 }}>
            <ImageBackground
              style={styles.gradientBackground}
              source={images.gradient_star_back}
            >
              <View
                style={{
                  paddingHorizontal: scale(20),
                  paddingTop: verticalScale(15),
                  gap: verticalScale(15),
                  flex: 1,
                }}
              >
                <CustomText
                  text={"El lobo y el conjeo"}
                  fontWeight="600"
                  fontFam={font.Poppins_SemiBold}
                  size={17}
                  color={colors.white}
                />
                <View
                  style={{
                
                    backgroundColor: "#FFFFFF80",
                    borderRadius: scale(15),
                    overflow: "hidden",
                    gap: verticalScale(8),
                  }}
                >
                  <Image
                    style={{ width: "100%", height: verticalScale(150) }}
                    source={
                     images.character4
                    }
                  />
                  <View
                    style={{
               
                      paddingHorizontal: scale(15),
                      gap: verticalScale(12),
                      paddingBottom: verticalScale(15),
                    }}
                  >
                      <CustomText
                        text={
                            "Mario es un gatito aventurero que siempre sueña con explorar el espacio exterior. Con su traje de astronauta, está listo para descubrir nuevos planetas y hacer amigos cósmicos. Su curiosidad no tiene límites, y siempre encuentra la forma de salir adelante, incluso en las situaciones más difíciles. Mario nos enseña que con valentía y un poco de imaginación, cualquier sueño puede hacerse realidad."
                        }
                        fontWeight="600"
                        fontFam={font.Poppins_Medium}
                        size={13}
                        color={colors.black}
                      />
                 
               
                  </View>

                 
                </View>
                <CustomButton
                bgColor={colors.red}
                width={"50%"}
                style={{alignSelf:"center",marginTop:verticalScale(30)}}
                           
                              text="Eliminar"
                            />
              </View>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  export default CharacterInfo;
  
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
    },
    like: { width: scale(20), height: scale(20) },
    detailContainer: {
      paddingHorizontal: scale(12),
      paddingVertical: verticalScale(4),
      borderRadius: 999,
      justifyContent: "center",
      backgroundColor: "#FFFFFF90",
    },
  });
  