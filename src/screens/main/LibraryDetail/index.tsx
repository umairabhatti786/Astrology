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

const LibraryDetail = ({ navigation }: any) => {
  const characterData = [
    { img: images.charactor1 },
    { img: images.charactor2 },
    { img: images.charactor3 },
  ];
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
          <TopHeader/>
        </View>
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={styles.gradientBackground}
            source={images.gradient_star_back}
          >
            <ScrollView
            showsVerticalScrollIndicator={false}
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
                    flex: 1,
                    backgroundColor: "#FFFFFF80",
                    borderRadius: scale(15),
                    overflow: "hidden",
                    gap: verticalScale(8),
                  }}
                >
                  <Image
                    style={{ width: "100%", height: verticalScale(150) }}
                    source={images.walf}
                  />
                  <View
                    style={{
                      flex: 1,
                      paddingHorizontal: scale(15),
                      gap: verticalScale(12),
                      paddingBottom:verticalScale(15)
                    }}
                  >
                    <View
                      style={{
                        ...appStyles.row,
                        gap: scale(20),
                        marginTop: verticalScale(-5),
                      }}
                    >
                      <View style={{ ...appStyles.row, gap: scale(7) }}>
                        <Image
                          style={styles.like}
                          source={images.like}
                          resizeMode="contain"
                        />

                        <CustomText
                          text={"145"}
                          fontWeight="600"
                          fontFam={font.Poppins_Medium}
                          size={15}
                          style={{ paddingTop: verticalScale(5) }}
                          color={colors.black}
                        />
                      </View>

                      <View
                        style={{
                          ...appStyles.row,
                          gap: scale(7),
                          marginTop: verticalScale(5),
                        }}
                      >
                        <Image
                          style={styles.like}
                          source={images.un_like}
                          resizeMode="contain"
                        />

                        <CustomText
                          text={"04"}
                          fontWeight="600"
                          fontFam={font.Poppins_Medium}
                          size={15}
                          color={colors.black}
                        />
                      </View>
                    </View>

                    <CustomText
                      text={
                        "Acompaña a Coco, un conejo curioso, en su búsqueda del legendario lobo del bosque. Enfréntate a desafíos, toma decisiones clave, y descubre los secretos que aguardan en esta emocionante aventura interactiva."
                      }
                      fontWeight="600"
                      fontFam={font.Poppins_Medium}
                      size={15}
                      color={colors.black}
                    />

                    <View style={{ ...appStyles.row, gap: scale(10) }}>
                      <CustomText
                        text={"Géneros:"}
                        fontWeight="600"
                        fontFam={font.Poppins_Medium}
                        size={15}
                        color={colors.black}
                      />
                      {["Aventura", "Misterio"].map((item, index) => {
                        return (
                          <View style={styles.detailContainer}>
                            <CustomText
                              text={item}
                              fontWeight="600"
                              fontFam={font.Poppins_Medium}
                              size={14}
                              color={colors.likeSky}
                            />
                          </View>
                        );
                      })}
                    </View>

                    <View style={{ ...appStyles.row, gap: scale(10) }}>
                      <CustomText
                        text={"Dificultad:"}
                        fontWeight="600"
                        fontFam={font.Poppins_Medium}
                        size={15}
                        color={colors.black}
                      />
                      <View style={styles.detailContainer}>
                        <CustomText
                          text={"+4 Años"}
                          fontWeight="600"
                          fontFam={font.Poppins_Medium}
                          size={14}
                          color={colors.likeSky}
                        />
                      </View>
                    </View>

                    <View style={{ ...appStyles.row, gap: scale(10) }}>
                      <CustomText
                        text={"Longitud:"}
                        fontWeight="600"
                        fontFam={font.Poppins_Medium}
                        size={15}
                        color={colors.black}
                      />
                      <View style={styles.detailContainer}>
                        <CustomText
                          text={"8 Páginas"}
                          fontWeight="600"
                          fontFam={font.Poppins_Medium}
                          size={14}
                          color={colors.likeSky}
                        />
                      </View>
                    </View>

                    <View style={{gap:verticalScale(5)}}>
                      <CustomText
                        text={"Personajes:"}
                        fontWeight="600"
                        fontFam={font.Poppins_Medium}
                        size={15}
                        color={colors.black}
                      />
                      <View style={{ ...appStyles.row, gap: scale(5) }}>
                        {characterData.map((item, index) => {
                          return (
                            <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={()=>navigation.navigate("SaveCharacter")}
                            >
                                 <Image
                              style={{
                                width: scale(55),
                                height: scale(50),
                                borderRadius: scale(10),
                              }}
                              source={item.img}
                            />

                            </TouchableOpacity>
                           
                          );
                        })}
                      </View>
                    </View>
                    <GradientButton
                      onPress={() => navigation.navigate("ReadLibrary")}
                      text="Leer"
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  ...appStyles.rowjustify,
                  paddingHorizontal: scale(15),
                  paddingVertical: verticalScale(20),
                }}
              >
                <CustomButton
                  width={"46%"}
                  bgColor={"#3BD5BC"}
                  textColor={colors.black}
                  onPress={() => navigation.navigate("BottomTab")}
                  text="Publicar"
                />

                <CustomButton
                  width={"46%"}
                  bgColor={"#D31919"}
                  onPress={() => navigation.navigate("BottomTab")}
                  text="Eliminar"
                />
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LibraryDetail;

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
