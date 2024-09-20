import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
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
import GradientButton from "../../../components/GradientButton";
import { useState } from "react";
import CustomAlertModal from "../../../components/CustomAlertModal";

const Feedback = ({ navigation }: any) => {
  const [selectedDifficultLevel, setSelectedDifficultLevel] = useState(1);
  const [selectedStrongLength, setSelectedStrongLength] = useState(2);
  const [selectedLike, setSelectedLike] = useState(0);
  const [isThankyouModal,setIsThankyouModal]=useState(false)

  const difficultyLevel = [
    { emoji: images.easy_emoji, title: "Facil" },
    { emoji: images.perfect_emoji, title: "Perfecto" },
    { emoji: images.hard_emoji, title: "Dificil" },
  ];
  const strongLengthData = [
    { emoji: images.perfect_emoji, title: "Perfecto" },
  ];
  const likeData = [
    { emoji: images.like, title: "Si!",tintColor:"#05A802" },
    { emoji: images.un_like, title: "No!",tintColor:"#FF2525" },

  ];
  return (
<>
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
          <TopHeader BackButton={true} title="Feedback" />
        </View>
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={styles.gradientBackground}
            source={images.gradient_star_back}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  paddingHorizontal: scale(20),
                  paddingTop: verticalScale(15),
                  gap: verticalScale(40),
                  flex: 1,
                }}
              >
                <CustomText
                  text={"Califica tu experiencia!"}
                  size={17}
                  style={{ marginRight: scale(70) }}
                  color={colors.white}
                />
                <View style={{ gap: verticalScale(5) }}>
                  <CustomText
                    text={"Nivel de dificultad"}
                    size={15}
                    style={{ textAlign: "center" }}
                    fontFam={font.Poppins_SemiBold}
                    fontWeight="600"
                    color={colors.white}
                  />
                  <View
                    style={{
                      ...appStyles.row,
                      ...styles.emojiMain
                    
                    }}
                  >
                    {difficultyLevel.map((item, index) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => setSelectedDifficultLevel(index)}
                          style={{
                            flexDirection: "row",

                            ...styles.emojiContainer,
                            backgroundColor:
                              selectedDifficultLevel == index
                                ? "#FFFFFF99"
                                : "transparent",
                          }}
                        >
                          <Image
                            style={{
                              width: scale(20),
                              height: scale(20),
                            }}
                            source={item.emoji}
                          />
                          <CustomText
                            text={item.title}
                            size={14}
                            fontFam={font.Poppins_Medium}
                            fontWeight="600"
                            color={
                              selectedDifficultLevel == index
                                ? colors.dark_black
                                : colors.white
                            }
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  
                </View>

                <View style={{ gap: verticalScale(5) }}>
                  <CustomText
                    text={"Largo del cuento"}
                    size={15}
                    style={{ textAlign: "center" }}
                    fontFam={font.Poppins_SemiBold}
                    fontWeight="600"
                    color={colors.white}
                  />
                  <View
                    style={{
                      ...appStyles.row,
                      ...styles.emojiMain
                    
                    }}
                  >
                    {strongLengthData.map((item, index) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => setSelectedStrongLength(index)}
                          style={{
                            flexDirection: "row",

                            ...styles.emojiContainer,
                            backgroundColor:
                              selectedStrongLength == index
                                ? "#FFFFFF99"
                                : "transparent",
                          }}
                        >
                          <Image
                            style={{
                              width: scale(20),
                              height: scale(20),
                            }}
                            source={item.emoji}
                          />
                          <CustomText
                            text={item.title}
                            size={14}
                            fontFam={font.Poppins_Medium}
                            fontWeight="600"
                            color={
                              selectedStrongLength == index
                                ? colors.dark_black
                                : colors.white
                            }
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  
                </View>


                <View style={{ gap: verticalScale(5) }}>
                  <CustomText
                    text={"Te gustó el cuento?"}
                    size={15}
                    style={{ textAlign: "center" }}
                    fontFam={font.Poppins_SemiBold}
                    fontWeight="600"
                    color={colors.white}
                  />
                  <View
                    style={{
                      ...appStyles.row,
                      ...styles.emojiMain,
                    
                    }}
                  >
                    {likeData.map((item, index) => {
                      return (
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => setSelectedLike(index)}
                          style={{
                            flexDirection: "row",

                            ...styles.emojiContainer,
                            paddingHorizontal:scale(10),
                            borderRadius:scale(8),
                            backgroundColor:
                            selectedLike == index
                                ? "#FFFFFF99"
                                : "transparent",
                                paddingVertical:verticalScale(7)
                          }}
                        >
                          <Image
                            style={{
                              width: scale(20),
                              height: scale(20),
                              tintColor:item.tintColor
                            }}
                            source={item.emoji}
                          />
                          <CustomText
                            text={item.title}
                            size={14}
                            fontFam={font.Poppins_Medium}
                            fontWeight="600"
                            color={
                                selectedLike == index
                                ? colors.dark_black
                                : colors.white
                            }
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  
                </View>

                <GradientButton
                  onPress={() => {
                    setIsThankyouModal(true)

                  }}
                  borderWidth={1}
                  borderColor={colors.white}
                  text="Enviar"
                />
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
    <CustomAlertModal
    modalVisible={isThankyouModal}
    onAccept={()=>{
        setIsThankyouModal(false)
        setTimeout(() => {
            navigation.navigate("PublicLibrary")
            
        }, 500);
    }}
    setModalVisible={setIsThankyouModal}
    />
</>
   
  );
};
export default Feedback;

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

  emojiContainer: {
    gap: scale(5),
    borderWidth: 1,
    paddingHorizontal: scale(6),
    borderColor: colors.white,
    paddingVertical: verticalScale(5.5),
    borderRadius: scale(12),
  },
  emojiMain:{  width: "100%",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: scale(7),}
});
