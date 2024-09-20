import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

import { scale, verticalScale } from "react-native-size-matters";
import { windowWidth } from "../../utils/Dimensions";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { font } from "../../utils/font";
import GradientButton from "../GradientButton";
import { images } from "../../assets/images";
import CharacterCard from "../CharacterCard";

const CharacterModal = ({
  modalVisible,
  setModalVisible,
  width,
  title,
  onAccept,
  onCardPress
}: any) => {
  const CharactersData = [
    { img: images.character1, title: "Gatito Mario",id:1 },
    { img: images.character2, title: "Muñeco de nieve",id:2 },
    { img: images.character3, title: "Zombie Claudio",id:3 },
    { img: images.character1, title: "Gatito Mario",id:4 },
    { img: images.character3, title: "Zombie Claudio",id:5 },
    { img: images.character2, title: "Muñeco de nieve",id:6 },
    { img: images.character1, title: "Gatito Mario",id:7 },
    { img: images.character3, title: "Zombie Claudio",id:8 },




  ];

  const renderCharacter = ({ item, index }: any) => {
    return (
      <CharacterCard
        width={windowWidth / 2.7}
        textColor={colors.dark_black}
        height={verticalScale(120)}
        onPress={()=>onCardPress(item)}
        img={item.img}
        title={item.title}
      />
    );
  };
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: width || "97%",
          height: "90%",
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
          gap: verticalScale(10),
          paddingTop: verticalScale(20),
          paddingBottom: verticalScale(10),
          paddingHorizontal: scale(10),
          overflow: "hidden",
        }}
      >
        <CustomText
          color={colors.black}
          size={18}
          fontFam={font.Poppins_Bold}
          fontWeight={"700"}
          text={"Elige el personaje que quieras!"}
        />

        <CustomText
          color={colors.dark_black}
          size={13}
          // style={{ textAlign: "center" }}
          text={"Puedes crear más perosnajes desde la sección “Mis Personajes”"}
        />

        <FlatList
          data={CharactersData}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: verticalScale(5), alignSelf: "center" }}
          contentContainerStyle={{
            gap: scale(15),
            alignSelf: "center",
            // marginLeft: scale(15),
          }}
          renderItem={renderCharacter}
          numColumns={2}
        />
      </View>
    </Modal>
  );
};

export default CharacterModal;

const styles = StyleSheet.create({});
