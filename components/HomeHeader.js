import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { FONTS, COLORS, SIZES, assets } from '../constants'

const HomeHeader = () => {
  return (
   <View style={{
    backgroundColor: COLORS.primary,
    padding: SIZES.font,

   }}>
<View style={{
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems: 'center',
}}>
  <Image source={assets.logo} resizeMode="contain" style={{width:90, height:25}} />
      <View style={{width:45, height: 45}}>
          <Image  
            source={assets.person01} resizeMode="contain" style={{width:'100%', height:'100%'}}/>
          {/* <Image
          source={assets.badge} resizeMode="contain" 
          style={{postion: 'absolute', width:15, height:15,
          bottom:0, right:0}}/>*/}
      </View> 
</View>
</View>   
  ) 
}

export default HomeHeader