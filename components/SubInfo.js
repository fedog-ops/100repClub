import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, assets, SHADOWS,  } from '../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const Title = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary,
      }}
      >{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary,
      }}
      >{subTitle}</Text>
    </View>
  )
}
export const Price = ({price}) => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent:'space-between',
      }}>
        <Image source={assets.eth} 
        resizeMode ="contian"
        style={{width: 20, height: 20, marginRight: 2}}/>
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: FONTS.font,
            color: COLORS.primary,
        }}>{price}</Text>
      </View>
    )
  }
  export const ImageCmp = ({imgUrl, index}) => {
    return (
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    )
  }
  export const People = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {[ assets.person02, assets.person03, assets.person04]
        .map((imgUrl, index) => <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />)}
      </View>
    )
  }
  export const EndDate = () => {
    return (
      <View style={{
        backgroundColor: COLORS.white,
        paddingVertical:SIZES.base,
        paddingHorizontal:SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',

      }}>
        <Text style={{
            fontSize: FONTS.regular,
            color: COLORS.primary,
            fontSize: SIZES.small,
        }}>Reps</Text>
         <Text style={{
            fontSize: FONTS.semiBold,
            color: COLORS.primary,
            fontSize: SIZES.medium,
        }}>100+</Text>
      </View>
    )
  }
  export const SubInfo = () => {
    return (
      <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "lightblue",
        // opacity: 0.5
      }}>
       
        <People/>
        <EndDate/>

      </View>
    )
  }

export default SubInfo