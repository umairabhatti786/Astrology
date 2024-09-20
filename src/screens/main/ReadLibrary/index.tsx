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

const ReadLibrary = ({ navigation }: any) => {
  const [story1, setStory1] = useState(true);
  const [moreStory, setMoreStory] = useState(false);
  const [storyEnd, setStoryEnd] = useState(true);

  useEffect(() => {}, [story1, moreStory]);

  const story = {
    image: images.read_story1,
    text: "En un pequeño y acogeddor taller, un conejo blanco llamado Coco vivía rodeado de herramientas y libros de magia. Aunque a Coco le gustaba la tranquilidad de su hogar, sentía una profunda curiosidad por los secretos del bosque cercano. Un día, mientras leía sobre las leyendas del bosque, descubrió la historia de un lobo gigante que podía conceder deseos. Decidido a encontrar al lobo, Coco empaquetó algunas provisiones y se aventuró en el bosque.",
  };
  const story2 = {
    image: images.read_story2,
    text: "Después de caminar por horas, Coco finalmente llegó a un claro donde el gran lobo yacía descansando. Con valentía, el conejo se acercó al lobo y le explicó su deseo de aprender más sobre la magia. El lobo, impresionado por la valentía de Coco, le ofreció una elección: podría enseñarle a hacer una poderosa poción o revelarle el camino hacia un tesoro escondido.",
  };
  const story3 = {
    image: images.read_story3,
    text: "Coco tomó su decisión y se embarcó en una nueva aventura, siguiendo el consejo del lobo. Tras días de viaje y numerosos desafíos, llegó a un arco iluminado que brillaba en la oscuridad. Sabía que había llegado al final de su camino. Con el corazón lleno de emoción y las enseñanzas del lobo en su mente, Coco supo que este era solo el comienzo de muchas más aventuras.",
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
          <TopHeader
            onBackButtton={() => {
              if (storyEnd) {
                setStoryEnd(false);
                setMoreStory(true);
              } else if (moreStory) {
                setMoreStory(false);
                setStory1(true);
              } else {
                navigation.goBack();
              }
            }}
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
                  height: "90%",
                  backgroundColor: "#FFFFFF80",
                  borderRadius: scale(15),
                  overflow: "hidden",
                  gap: verticalScale(8),
                }}
              >
                <Image
                  style={{ width: "100%", height: verticalScale(150) }}
                  source={
                    story1
                      ? story.image
                      : moreStory
                      ? story2.image
                      : story3.image
                  }
                />
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: scale(15),
                    gap: verticalScale(12),
                    paddingBottom: verticalScale(15),
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <CustomText
                      text={
                        story1 ? story.text : story2 ? story2.text : story3.text
                      }
                      fontWeight="600"
                      fontFam={font.Poppins_Medium}
                      size={13}
                      color={colors.black}
                    />
                  </View>
                  {story1 ? (
                    <GradientButton
                      onPress={() => {
                        setStory1(false);

                        setMoreStory(true);
                      }}
                      text="Siguiente página"
                    />
                  ) : (
                    <>
                      {moreStory ? (
                        <View style={{ gap: verticalScale(10) }}>
                          <GradientButton
                            onPress={() => {
                              setStory1(false);

                              setMoreStory(false);
                              setStoryEnd(true);
                            }}
                            text="Aprender a hacer la poción."
                          />

                          <GradientButton
                            onPress={() => {
                              setStory1(false);

                              setMoreStory(false);
                              setStoryEnd(true);
                            }}
                            text="Buscar el tesoro escondido."
                          />
                        </View>
                      ) : (
                        <GradientButton
                            onPress={() => navigation.navigate("Feedback")}
                          text="Fin"
                        />
                      )}
                    </>
                  )}
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ReadLibrary;

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
