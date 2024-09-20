import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, View } from "react-native";
import { images } from "../../assets/images";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import PublicLibraryScreen from "../../screens/main/PublicLibrary";
import MyCharactersScreen from "../../screens/main/MyCharacters";
import CreativeArenaScreen from "../../screens/main/CreativeArena";
import CustomText from "../../components/CustomText";
import { font } from "../../utils/font";
import PersonalLibrary from "../../screens/main/PersonalLibrary";
import CharacterStack from "./CharacterStack";

const BottomTab = ({}: any) => {
  const Bottom = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        keyboardHidesTabBar: true,

        // tabBarColor: ({focused, size, color}) => {},
        // tabBarStyle:()=>{innerHeight:1000},
        tabBarStyle: {
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",

          borderTopWidth: -1,
          display: "flex",
          // paddingTop: 8,
          paddingBottom: -1,
          height: verticalScale(80),
          borderTopRightRadius: scale(10),
          borderTopLeftRadius: scale(10),
          overflow: "hidden",
        },
        headerShown: false,
      })}
    >
      <Bottom.Screen
        name="PublicLibrary"
        component={PublicLibraryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                  backgroundColor: focused ? colors.primary : colors.white,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.public_library}
                  style={{ ...style.img }}
                />
                <View style={{ width: scale(50) }}>
                  <CustomText
                    text={"Biblioteca Publica"}
                    fontWeight="600"
                    style={{ textAlign: "center" }}
                    fontFam={font.Poppins_Medium}
                    color={focused ? colors.white : colors.darkGray1}
                    size={10}
                  />
                </View>
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="PersonalLibrary"
        component={PersonalLibrary}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                  backgroundColor: focused ? colors.primary : colors.white,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.personal_library}
                  style={{ ...style.img }}
                />
                <CustomText
                  text={"Mi biblioteca"}
                  fontWeight="600"
                  fontFam={font.Poppins_Medium}
                  color={focused ? colors.white : colors.darkGray1}
                  size={10}
                />
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="MyCharacters"
        component={CharacterStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                  backgroundColor: focused ? colors.primary : colors.white,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.my_charactor}
                  style={{ ...style.img }}
                />
                <CustomText
                  text={"Mis Personajes"}
                  fontWeight="600"
                  fontFam={font.Poppins_Medium}
                  color={focused ? colors.white : colors.darkGray1}
                  size={10}
                />
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="CreativeArena"
        component={CreativeArenaScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                  backgroundColor: focused ? colors.primary : colors.white,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.creative_arena}
                  style={{ ...style.img }}
                />
                <View style={{ width: scale(50) }}>
                  <CustomText
                    text={"Area de Creación"}
                    fontWeight="600"
                    style={{ textAlign: "center" }}
                    fontFam={font.Poppins_Medium}
                    color={focused ? colors.white : colors.darkGray1}
                    size={10}
                  />
                </View>
              </View>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: "100%",
    height: verticalScale(80),
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: verticalScale(10),
    // position:"absolute",s
  },
  text: {
    color: colors.white,
  },
  img: {
    height: scale(50),
    width: scale(50),
  },
});
