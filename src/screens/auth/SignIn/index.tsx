import React, { useState, useEffect } from "react";

import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";

const SignIn = () => {



  return (
   <ScreenLayout>
    <CustomText
    size={30}
    text={"Daily"}
    fontWeight="bold"
    fontFam={font.DMSans_Bold}
    color={colors.primary}
    />
   </ScreenLayout>
  );
};

export default SignIn;
