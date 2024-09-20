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

const CustomAlertModal = ({
  modalVisible,
  setModalVisible,
  width,
  title,
  onAccept,
  description,
  buttonTitle
}: any) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={{ flex: 1 }}
    >
      <View
        style={{
          width: width || "97%",
          maxHeight: windowWidth / 1.3,
          backgroundColor: colors.white,
          borderRadius: scale(15),
          alignSelf: "center",
          alignItems: "center",
          gap: verticalScale(15),
          paddingTop: verticalScale(20),
          paddingBottom: verticalScale(10),
          paddingHorizontal: scale(10),
        }}
      >
        <CustomText
          color={colors.black}
          size={20}
          fontFam={font.Poppins_Bold}
          fontWeight={"700"}
          text={title || "Gracias!"}
        />

        <CustomText
          color={colors.dark_black}
          size={15}
          style={{ textAlign: "center" }}
          text={
            description ||
            "Tu calificación nos sirve para pesonalizar aún más tus futuras creaciones!"
          }
        />

        <GradientButton
          width={scale(100)}
          height={verticalScale(30)}
          onPress={onAccept}
         
          text={ buttonTitle||"Aceptar"}
        />
      </View>
    </Modal>
  );
};

export default CustomAlertModal;

const styles = StyleSheet.create({});
