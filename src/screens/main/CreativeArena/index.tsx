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
import { useEffect, useState } from "react";
import CustomInput from "../../../components/CustomInput";
import LinearGradient from "react-native-linear-gradient";
import LoadingAlertModal from "../../../components/LoadingAlertModal";
import { windowWidth } from "../../../utils/Dimensions";
import CharacterModal from "../../../components/CharacterModal";
import MultiSelectDropdown from "../../../components/MultiSelectDropdown";

const CreativeArenaScreen = ({ navigation }: any) => {
  const [selectedDifficult, setSelectedDifficult] = useState(1);
  const [selectedLongLength, setSelectedLongLength] = useState(1);
  const [isCharacterModal, setIsCharacterModal] = useState(false);
  const [favoritosGeneros, setFavoritosGenero] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const [emojiData, setEmojiData] = useState<any>([]);

  return (
    <>
      <SafeAreaView
        edges={["right", "left"]}
        style={{
          ...appStyles.mainFlex,
          marginTop: Platform.OS == "ios" ? verticalScale(25) : 0,
        }}
      >
        <View style={{ gap: verticalScale(15), flex: 1 }}>
          <View
            style={{
              paddingHorizontal: scale(20),
              paddingTop: verticalScale(20),
            }}
          >
            <TopHeader title="Area de Creación" />
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.absoluteBuilding}
              source={images.arena}
              resizeMode="contain"
            />
            <ImageBackground
              style={styles.gradientBackground}
              source={images.gradient_star_back}
            >
              <ScrollView
                // style={{flex:1,paddingBottom:verticalScale(200)}}
                contentContainerStyle={{ paddingBottom: verticalScale(100) }} // Set paddingBottom instead of flex
                showsVerticalScrollIndicator={false}
              >
                <View
                  style={{
                    paddingHorizontal: scale(20),
                    paddingTop: verticalScale(15),
                    gap: verticalScale(15),
                    flex: 1,
                    marginBottom: verticalScale(30),
                  }}
                >
                  <CustomText
                    text={"Crea un nuevo cuento!"}
                    size={15}
                    color={colors.white}
                  />

                  <View
                    style={{
                      backgroundColor: "#FFFFFF80",
                      borderRadius: scale(15),
                      overflow: "hidden",
                      gap: verticalScale(10),
                      paddingVertical: verticalScale(10),
                      paddingHorizontal: scale(10),
                    }}
                  >
                    {/* <MultiSelectDropdown
                    label={"Generos:"}
                    placeholder={"Genero"}
                    data={generoFavoritosData}
                    /> */}
                    <MultiSelectDropdown
                    maxLength={2}
   label={"Generos:"}
   placeholder={"Genero"}
              data={generoFavoritosData}
              value={favoritosGeneros}
              setValue={setFavoritosGenero}
              // items={generoFavoritosData}
              // setItems={setGeneroFavoritosData}
            />
                   

                    {/* <CustomInput
                  label="Generos:"
                  borderRadius={scale(12)}
                  borderWidth={-1}
                  placeholder="Ingresa la moraleja del cuento..."
                  placeholderTextColor={"#00594D"}
                /> */}

                    <CustomInput
                      label="Moraleja:"
                      borderRadius={scale(12)}
                      borderWidth={-1}
                      inputWidth={windowWidth / 1.3}
                      maxLength={59}
                      placeholder="Ingresa la moraleja del cuento..."
                      placeholderTextColor={"#00594D"}
                    />

                    <View style={{ gap: verticalScale(5) }}>
                      <CustomText
                        text={"Personajes:"}
                        size={14}
                        fontFam={font.Poppins_Medium}
                        fontWeight="600"
                        color={colors.dark_black}
                      />
                      <View
                        style={{
                          // height: vertiscalScale(80),
                          backgroundColor: colors.white,
                          flexDirection: "row",
                          paddingHorizontal: scale(10),
                          paddingVertical: verticalScale(10),

                          // justifyContent: "center",
                          borderRadius: scale(12),
                        }}
                      >
                        <View style={{ ...appStyles.row, gap: scale(15) }}>
                          {emojiData.length > 0 && (
                            <>
                              {emojiData.map((item: any, index: any) => {
                                return (
                                  <View>
                                    <Image
                                      style={{
                                        width: scale(60),
                                        height: scale(60),
                                        borderRadius: scale(10),
                                      }}
                                      source={item?.img}
                                    />
                                    <TouchableOpacity
                                      onPress={() => {
                                        const filterEmoji = emojiData.filter(
                                          (it: any) => it.img != item?.img
                                        );
                                        setEmojiData(filterEmoji);
                                      }}
                                      style={{
                                        ...styles.emojiBox,
                                        position: "absolute",
                                        bottom: verticalScale(-5),
                                        right: scale(-5),
                                      }}
                                    >
                                      <Image
                                        style={{
                                          width: scale(12),
                                          height: scale(12),
                                          tintColor: "#10A189",
                                        }}
                                        source={images.cross}
                                      />
                                    </TouchableOpacity>
                                  </View>
                                );
                              })}
                            </>
                          )}
                          {emojiData.length < 2 && (
                            <TouchableOpacity
                              activeOpacity={0.5}
                              onPress={() => {
                                setIsCharacterModal(true);
                                // setEmojiData((prevData:any) => [
                                //   ...prevData,
                                //   { img: images.charactor1 },
                                // ]);
                              }}
                              style={{
                                ...styles.emojiBox,
                                width: scale(60),
                                height: scale(60),
                              }}
                            >
                              <Image
                                style={{
                                  width: scale(25),
                                  height: scale(25),
                                  tintColor: "#10A189",
                                }}
                                source={images.plus}
                              />
                            </TouchableOpacity>
                          )}
                        </View>
                      </View>
                    </View>
                    <CustomInput
                      label="Descripción:"
                      height={verticalScale(60)}
                      borderRadius={scale(12)}
                      borderWidth={-1}
                      maxLength={59}
                      multiline={true}
                      inputWidth={windowWidth / 1.3}
                      placeholder="Cuentanos cualquier cosa que quieras que ocurra..."
                      textAlignVertical={"top"}
                      placeholderTextColor={"#00594D"}
                    />
                    <View style={{ gap: verticalScale(5) }}>
                      <CustomText
                        text={"Longitud de cuento:"}
                        size={14}
                        fontFam={font.Poppins_Medium}
                        fontWeight="600"
                        color={colors.dark_black}
                      />
                      <View
                        style={{
                          ...appStyles.row,
                          gap: scale(5),
                        }}
                      >
                        {["Corto", "Mediano", "Largo"].map((item, index) => {
                          return (
                            <View>
                              <CustomButton
                                onPress={() => setSelectedLongLength(index)}
                                bgColor={colors.white}
                                textColor={colors.green}
                                paddingHorizontal={scale(20)}
                                borderRadius={scale(10)}
                                height={35}
                                borderWidth={
                                  selectedLongLength == index ? 2 : -1
                                }
                                borderColor={
                                  selectedLongLength == index
                                    ? "#10A189"
                                    : "transparent"
                                }
                                text={item}
                              />
                            </View>
                          );
                        })}
                      </View>
                    </View>

                    <View style={{ gap: verticalScale(5) }}>
                      <CustomText
                        text={"Dificultad:"}
                        size={14}
                        fontFam={font.Poppins_Medium}
                        fontWeight="600"
                        color={colors.dark_black}
                      />
                      <View
                        style={{
                          ...appStyles.row,
                          gap: scale(5),
                        }}
                      >
                        {["Facil", "Media", "Dificil"].map((item, index) => {
                          return (
                            <View>
                              <CustomButton
                                onPress={() => setSelectedDifficult(index)}
                                bgColor={colors.white}
                                textColor={colors.green}
                                paddingHorizontal={scale(20)}
                                borderRadius={scale(10)}
                                height={35}
                                borderWidth={
                                  selectedDifficult == index ? 2 : -1
                                }
                                borderColor={
                                  selectedDifficult == index
                                    ? "#10A189"
                                    : "transparent"
                                }
                                text={item}
                              />
                            </View>
                          );
                        })}
                      </View>
                    </View>

                    <LinearGradient
                      colors={["#10A189", "#2855AE"]} // Define the gradient colors
                      start={{ x: 0, y: 0 }} // Starting point for the gradient
                      end={{ x: 1, y: 1 }}
                      style={{
                        width: "100%",
                        height: verticalScale(41),
                        borderRadius: scale(8),
                        alignSelf: "center",
                      }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={() => {
                          setLoading(true);
                          setTimeout(() => {
                            setLoading(false);
                          }, 3000);
                        }}
                        style={styles.addCharacterBtn}
                      >
                        <View />

                        <CustomText
                          text={"Crear cuento!"}
                          color={colors.white}
                          size={15}
                          style={{ marginLeft: scale(20) }}
                          fontWeight="600"
                          fontFam={font.Poppins_SemiBold}
                        />

                        <View style={{ ...appStyles.row, gap: scale(10) }}>
                          <CustomText
                            text={"3"}
                            color={colors.white}
                            size={15}
                            fontWeight="600"
                            fontFam={font.Poppins_SemiBold}
                          />
                          <Image
                            style={{ width: scale(15), height: scale(15) }}
                            source={images.coin}
                            resizeMode="contain"
                          />
                        </View>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        </View>
      </SafeAreaView>

      <LoadingAlertModal modalVisible={loading} setModalVisible={setLoading} />
      <CharacterModal
        modalVisible={isCharacterModal}
        setModalVisible={setIsCharacterModal}
        onCardPress={(it: any) => {
          setEmojiData((prevData: any) => {
            // If item is an array, spread it into the state; otherwise, add it directly
            return Array.isArray(it) ? [...prevData, ...it] : [...prevData, it];
          });
          setIsCharacterModal(false);

          // console.log("cldncldk",it)
        }}
      />
    </>
  );
};
export default CreativeArenaScreen;

const styles = StyleSheet.create({
  absoluteBuilding: {
    width: scale(130),
    height: scale(110),
    position: "absolute",
    top: verticalScale(-20),
    right: scale(5),
    zIndex: 999,
    // backgroundColor:"red"
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
  emojiBox: {
    width: scale(22),
    height: scale(22),
    borderRadius: scale(5),
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#D9D9D9",
    shadowColor: "#000",
    shadowOffset: { width: -1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
