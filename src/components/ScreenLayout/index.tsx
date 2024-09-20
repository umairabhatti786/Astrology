import React from 'react';
import { View, Text,Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appStyles } from '../../utils/AppStyles';
import { verticalScale } from 'react-native-size-matters';

const ScreenLayout=({children,edges}:any)=> {
  return (
    <SafeAreaView
    edges={edges}
    style={{...appStyles.main,}}
    >
        {children}

    </SafeAreaView>
    
   
  );
}

export default ScreenLayout
