import {
  ActivityIndicator,
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

const LoadingAlertModal = ({
  modalVisible,
  setModalVisible,
  width,
  title,
  onAccept,
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
          borderRadius: scale(10),
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
          fontFam={font.Poppins_SemiBold}
          fontWeight={"600"}
          text={title || "Por favor espera."}
        />

        <ActivityIndicator size={"large"} color={colors.green} />
      </View>
    </Modal>
  );
};

export default LoadingAlertModal;

const styles = StyleSheet.create({});
