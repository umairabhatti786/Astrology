import {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {scale, verticalScale} from 'react-native-size-matters';
import { images } from '../../assets/images';
import { colors } from '../../utils/colors';
import { font } from '../../utils/font';
import CustomText from '../CustomText';

const DropDown = ({
  data,
  value,
  placeholderColor,
  placeholder,
  dropWidth,
  borderWidth,
  onSelect,
  error,
  label
}: any) => {
  const [open, setOpen] = useState(false);

  const renderRightIcon = () => (
    <View style={styles.iconStyle}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={images.drop}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <View>
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

<Dropdown
        // disable={isDisable}
        style={{
          ...styles.dropdown,
          width: dropWidth || '100%',
          borderWidth: borderWidth || 1,
          borderColor: "#C2C2C2",
        //   paddingLeft: innerPadding || '30%',
          backgroundColor:"#EDEDED",
        }}
        
        containerStyle={{
          backgroundColor:colors.white,
          minHeight: 100,
          borderWidth: 1,
          borderRadius: scale(4),
          overflow: 'hidden',
          width: "92%",
        }}
        
        placeholderStyle={{
          ...styles.placeholderStyle,
          color: placeholderColor || "#8391A1",
          fontWeight:"500",
          fontFamily:font.Poppins_Medium,
          fontSize:14
        }}
        selectedTextStyle={{
          fontSize: 15,
          color: colors.black,
          fontFamily: font.Poppins_Medium,
          alignSelf: 'center',
        }}
        inputSearchStyle={styles.inputSearchStyle}
        renderRightIcon={renderRightIcon}
        itemTextStyle={styles.inputTextStyle}
        renderItem={item => {
          console.log("cldncdlc",item)
          return (
            <View
              style={{
                height: verticalScale(30),
                justifyContent: 'center',
                paddingHorizontal: scale(10),
                backgroundColor: colors.white,
             
              }}>
              <CustomText
                text={item.label}
                fontWeight={'600'}
                size={15}
                fontFam={font.Poppins_Medium}
                color={colors.black}
              />
            </View>
          );
        }}
        data={data}
        // search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={placeholder || 'Select'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={onSelect}
      />

{error && (
        <View style={{ marginTop: verticalScale(5), alignSelf: "flex-end" }}>
          <CustomText size={10} text={error} color={"#FF0000"} />
        </View>
      )}

    </View>
     
   
  );
};

export default DropDown;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scale(4),
    borderWidth:1,
    height: verticalScale(42),
  },
  dropdown: {
    borderRadius: scale(5),
    height: verticalScale(42),
    paddingHorizontal: 16,
    backgroundColor:"red"
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    height: scale(13),
    width: scale(13),
  },
  inputSearchStyle: {
    color: colors.white,
    fontSize: 16,
    height: verticalScale(30),
  },
  inputTextStyle: {
    // backgroundColor: 'red',
    color: colors.black,
    fontSize:  15,
    fontWeight:"500",

    fontFamily:font.Poppins_Medium
  },
  label: {
    backgroundColor: colors.black,
    color: colors.black,
    fontSize:15,
    left: 22,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 8,
    zIndex: 999,
    fontWeight:"500",

    fontFamily:font.Poppins_Medium
  },
  placeholderStyle: {
    fontSize: 15,
    fontWeight:"500",
    fontFamily:font.Poppins_Medium

  },
  selectedTextStyle: {
    color: colors.black,
    fontSize:  15,
    fontWeight:"500",

    fontFamily:font.Poppins_Medium
  },
});
