import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
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
import StoryCard from "../../../components/StoryCard";
import CharacterCard from "../../../components/CharacterCard";
import LinearGradient from "react-native-linear-gradient";
import { windowHeight } from "../../../utils/Dimensions";

const MyCharactersScreen = ({navigation}:any) => {
  const CharactersData = [
    { img: images.character1, title: "character1" },
    { img: images.character2, title: "Muñeco de nieve" },
    { img: images.character3, title: "Zombie Claudio" },
    { img: images.character2, title: "Muñeco de nieve" },
    { img: images.character1, title: "character1" },


  ];
  const renderCharacter = ({ item, index }: any) => {
    return <CharacterCard
    onPress={()=>navigation.navigate("CharacterInfoScreen")}
     img={item.img} title={item.title} />;
  };
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
          <TopHeader BackButton title="Mis Personajes" />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.absoluteBuilding}
            source={images.character}
            resizeMode="contain"
          />
          <ImageBackground
            style={styles.gradientBackground}
            source={images.gradient_star_back}
          >
            <View style={{ paddingVertical: verticalScale(15),paddingLeft:scale(25),gap:verticalScale(5) }}>
              <CustomText
                text={"Crea tus propios "}
                size={15}
                color={colors.white}
              />
              <CustomText text={"personajes!"} size={15} color={colors.white} />

              <View style={{height:windowHeight/2}}>
                <FlatList
                  data={CharactersData}
                  showsVerticalScrollIndicator={false}
                  style={{ marginTop: verticalScale(15) }}
                  contentContainerStyle={{
                    gap: scale(15),
                    alignSelf: "center",
                    // marginLeft: scale(15),
                  }}
                  renderItem={renderCharacter}
                  numColumns={2}
                />
              </View>
            </View>

            <LinearGradient
              colors={["#10A189", "#2855AE"]} // Define the gradient colors
              start={{ x: 0, y: 0 }} // Starting point for the gradient
              end={{ x: 1, y: 1 }}
              style={{
                width: "90%",
                height: verticalScale(41),
                borderRadius: scale(8),
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={()=>navigation.navigate("AddCharacter")}
                style={styles.addCharacterBtn}
              >
                <View />
                <View
                  style={{
                    ...appStyles.row,
                    gap: scale(10),
                    marginLeft: scale(20),
                  }}
                >
                  <Image
                    style={{ width: scale(15), height: scale(15) }}
                    source={images.plus}
                    resizeMode="contain"
                  />
                  <CustomText
                    text={"Crear Personaje "}
                    color={colors.white}
                    size={15}
                    fontWeight="600"
                    fontFam={font.Poppins_SemiBold}
                  />
                </View>

                <View style={{ ...appStyles.row, gap: scale(10) }}>
                  <CustomText
                    text={"1"}
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
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MyCharactersScreen;

const styles = StyleSheet.create({
  absoluteBuilding: {
    width: scale(100),
    height: scale(90),
    position: "absolute",
    top: verticalScale(-12),
    right: scale(20),
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
  addCharacterBtn:{
    height: verticalScale(41),
    backgroundColor: "transparent",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: scale(8),
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: scale(25),
  }
});
