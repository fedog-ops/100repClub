import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES, assets } from "../constants";

const HomeHeader = ({onSearch}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Image source={assets.logo} resizeMode="contain" style={{width:90, height:25}} /> */}
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,
            fontWeight: "bold",
          }}
        >
          100 Reps Club
        </Text>
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          {/* <Image
          source={assets.badge} resizeMode="contain" 
          style={{postion: 'absolute', width:15, height:15,
          bottom:0, right:0}}/>*/}
        </View>
      </View>
<View>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: FONTS.small,
          color: COLORS.white,
        }}
      >
        Hello 👋
      </Text>
     

</View>

<View style={{marginTop: SIZES.font}}>
  <View style={{
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: "grey",
    flexDirection:"row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small -2
  }}>
    <Image source={assets.search} resizeMode="contain" style={{width:20, height: 20, marginRight:SIZES.base}}/>
    <TextInput placeholder="search" style={{flex:1}} onChangeText={onSearch} />
  </View>
</View>

    </View>
  );
};

export default HomeHeader;
