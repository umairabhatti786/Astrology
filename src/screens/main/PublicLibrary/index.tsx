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

const PublicLibraryScreen = ({navigation}:any) => {
  const storyData = [
    { img: images.story1, title: "Nombre de cuento 01" },
    { img: images.story2, title: "Nombre de cuento 02" },
    { img: images.story3, title: "Nombre de cuento 03" },
    { img: images.story4, title: "Nombre de cuento 04" },
    { img: images.story5, title: "Nombre de cuento 05" },
    { img: images.story1, title: "Nombre de cuento 06" },
    { img: images.story4, title: "Nombre de cuento 04" },
    { img: images.story3, title: "Nombre de cuento 03" },
    { img: images.story2, title: "Nombre de cuento 02" },
    { img: images.story2, title: "Nombre de cuento 02" },
    { img: images.story2, title: "Nombre de cuento 02" },
    { img: images.story2, title: "Nombre de cuento 02" },



  ];
  const renderStory = ({ item, index }: any) => {
    return <StoryCard
    onPress={()=>navigation.navigate("LibraryDetail")}
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
          <TopHeader title="Biblioteca pública" />
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
            source={images.house}
          />
          <ImageBackground
            style={styles.gradientBackground}
            source={images.gradient_star_back}
          >
            <View style={{ paddingVertical: verticalScale(15),paddingLeft:scale(25),gap:verticalScale(5) }}>
              <CustomText
                text={"Cuentos populares"}
                fontWeight="600"
                fontFam={font.Poppins_Medium}
                size={15}
                color={colors.white}
              />
              <CustomText
                text={"Empieza a descubrir nuevas aventuras! "}
                size={11}
                color={colors.white}
              />
            </View>
            <FlatList
              data={storyData}
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 ,}}
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
export default PublicLibraryScreen;

const styles=StyleSheet.create({
  absoluteBuilding:{
    width: scale(90),
    height: scale(90),
    position: "absolute",
    top: verticalScale(-30),
    right: scale(20),
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
