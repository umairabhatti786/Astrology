import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from '../../utils/colors';
import { verticalScale } from 'react-native-size-matters';
import CustomText from '../CustomText';
import { font } from '../../utils/font';

const MultiSelectDropdown = ({label,placeholder,data,setValue,value,maxLength=3}:any) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(data);

  const handleSetValue = (callback:any) => {
    setValue((currentValues:any) => {
      // Get the new values
      const newValues = callback(currentValues);

      // Limit to a maximum of three items
      if (newValues.length > maxLength) {
        return currentValues;
      }
      return newValues;
    });
  };

  return (
    <View style={{ flex: 1,}}>
       {label && (
        <View
        style={{marginBottom:verticalScale(5)}}
        
        >
          <CustomText
            size={14}
            text={label}
            fontFam={font.Poppins_Medium}
            fontWeight="600"
            color={colors.dark_black}
          />
        </View>
      )}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleSetValue}
        setItems={setItems}
        badgeTextStyle={{color:colors.black,fontFamily:font.Poppins_Medium}}
        placeholderStyle={{color:"#8391A1",fontFamily:font.Poppins_Medium}}
        multiple={true} // Enable multi-select
        mode="BADGE"   // Use badge mode for selected items display
        placeholder={placeholder}
        closeAfterSelecting={false} // Keeps the dropdown open

        style={{ width: "100%",backgroundColor:"#EDEDED",borderColor:"#C2C2C2" ,}}
        dropDownContainerStyle={{ width: "100%" ,borderColor:"#C2C2C2",}}
      />
     </View>
  );
};

export default MultiSelectDropdown;
