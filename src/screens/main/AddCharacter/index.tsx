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
import LoadingAlertModal from "../../../components/LoadingAlertModal";
import { windowWidth } from "../../../utils/Dimensions";
import CustomAlertModal from "../../../components/CustomAlertModal";

const AddCharacter = ({ navigation }: any) => {
  const [story1, setStory1] = useState(true);
  const [moreStory, setMoreStory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isWarningModal,setIsWarningModal]=useState(false)


  const [name,setName]=useState("")
  const [nameError,setNameError]=useState("")

  const [error,setError]=useState("")

  useEffect(() => {}, [story1, moreStory]);


  const onCreate=()=>{

    if(!name){
      setNameError("Campo de nombre obligatorio")

      return
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      navigation.navigate("CharacterInfoScreen")
    }, 3000);


  }

 
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
          <TopHeader title="Crear Personaje" BackButton />
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
            <View
              style={{
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(15),
                gap: verticalScale(15),
                flex: 1,
              }}
            >
              <View>
                <CustomText
                  text={"Crea tus propios "}
                  size={15}
                  color={colors.white}
                />
                <CustomText
                  text={"personajes!"}
                  size={15}
                  color={colors.white}
                />
              </View>

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
                value={name}
                error={nameError}
                inputWidth={windowWidth/1.3}
                onChangeText={(value:string)=>{
                  setName(value)
                  setNameError("")

                }}
                 placeholder="Nombre del personaje:" />

                <CustomInput
                  height={verticalScale(100)}
                  textAlignVertical={"top"}
                  multiline={true}
                  inputWidth={windowWidth/1.3}

                  placeholder="Descripción:"
                />

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
                    onPress={onCreate}
                    style={styles.addCharacterBtn}
                  >
                    <View />

                    <CustomText
                      text={"Crear!"}
                      color={colors.white}
                      size={15}
                      style={{ marginLeft: scale(20) }}
                      fontWeight="600"
                      fontFam={font.Poppins_SemiBold}
                    />

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
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
          <LoadingAlertModal modalVisible={loading} setModalVisible={setLoading} />

          <CustomAlertModal
    modalVisible={isWarningModal}
    title="Warning!"
    buttonTitle={"Okay"}
    description={"Unable to create new story please check internet connection."}
    
    onAccept={()=>{
        setIsWarningModal(false)
        // setTimeout(() => {
        //     navigation.navigate("PublicLibrary")
            
        // }, 500);
    }}
    setModalVisible={setIsWarningModal}
    />
    </>
   

  );
};
export default AddCharacter;

const styles = StyleSheet.create({
  absoluteBuilding: {
    width: scale(100),
    height: scale(100),
    position: "absolute",
    top: verticalScale(-20),
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
