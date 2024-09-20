import { FlatList, Image, ImageBackground, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../utils/AppStyles";
import TopHeader from "../../../components/TopHeader";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import StoryCard from "../../../components/StoryCard";

const PersonalLibrary = () => {
  const storyData = [
    { img: images.story7, title: "Nombre de cuento 01" },
    { img: images.story8, title: "Nombre de cuento 02" },
    { img: images.story9, title: "Nombre de cuento 03" },
    { img: images.story10, title: "Nombre de cuento 04" },
    { img: images.story11, title: "Nombre de cuento 05" },
    { img: images.story9, title: "Nombre de cuento 03" },
    { img: images.story10, title: "Nombre de cuento 04" },
    { img: images.story7, title: "Nombre de cuento 01" },
    { img: images.story10, title: "Nombre de cuento 04" },
    { img: images.story8, title: "Nombre de cuento 02" },





  ];
  const renderStory = ({ item, index }: any) => {
    return <StoryCard img={item.img} title={item.title} />;
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
          <TopHeader title="Mi Biblioteca" />
          <CustomText
            text={"Hola, Juan!"}
            fontWeight="600"
            fontFam={font.Poppins_SemiBold}
            size={22}
            color={colors.primary}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.absoluteBuilding}
            source={images.library}
          />
          <ImageBackground
            style={styles.gradientBackground}
            source={images.gradient_star_back}
          >
            <View style={{ padding: scale(15) }}>
              <CustomText
                text={"Accede a tus cuentos"}
                fontWeight="600"
                fontFam={font.Poppins_Medium}
                size={15}
                color={colors.white}
              />
              <CustomText
                text={"Vuelve a leerlos!"}
                size={11}
                color={colors.white}
              />
            </View>
            <FlatList
              data={storyData}
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: scale(15),
                alignSelf: "center",
                marginLeft: scale(15),
                paddingBottom:verticalScale(100)

              }}
              renderItem={renderStory}
              numColumns={2}
            />
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PersonalLibrary;

const styles=StyleSheet.create({
  absoluteBuilding:{
    width: scale(80),
    height: scale(80),
    position: "absolute",
    top: verticalScale(-30),
    right: scale(30),
    zIndex: 999,
  },
  gradientBackground:{
    width: "100%",
    height: "100%",
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    overflow: "hidden",
  }
})
