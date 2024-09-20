import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
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

const SaveCharacter = ({ navigation }: any) => {
  const characterData = [
    { img: images.charactor1 },
    { img: images.charactor2 },
    { img: images.charactor3 },
    { img: images.charactor1 },
  ];
  return (
    <SafeAreaView
      edges={["bottom", "right", "left"]}
      style={{ ...appStyles.mainFlex }}
    >
      <View style={{ gap: verticalScale(15), flex: 1 }}>
        <View
          style={{
            paddingHorizontal: scale(20),
            paddingTop: verticalScale(20),
          }}
        >
          <TopHeader BackButton={true} title="Guardar Persona" />
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
                  gap: verticalScale(15),
                  flex: 1,
                }}
              >
                <CustomText
                  text={"Quieres guardar algún personaje?"}
                  fontWeight="600"
                  fontFam={font.Poppins_Medium}
                  size={17}
                  style={{ marginRight: scale(70) }}
                  color={colors.white}
                />
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF80",
                    borderRadius: scale(15),
                    overflow: "hidden",
                    gap: verticalScale(20),
                    paddingHorizontal: verticalScale(15),
                    paddingTop: verticalScale(30),
                    paddingBottom: verticalScale(15),
                  }}
                >
                  <View style={{ ...appStyles.rowjustify, width: "100%" }}>
                    {characterData.map((item, index) => {
                      return (
                        <Image
                          style={{
                            width: scale(60),
                            height: scale(57),
                            borderRadius: scale(10),
                          }}
                          source={item.img}
                        />
                      );
                    })}
                  </View>
                  <GradientButton
                    onPress={() => navigation.navigate("BottomTab")}
                    text="Guardar"
                  />
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SaveCharacter;

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
