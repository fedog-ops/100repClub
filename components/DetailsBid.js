import { View, Text, Image } from 'react-native'
import {COLORS, SIZES, FONTS} from '../constants'
import React from 'react'
import { Price } from './SubInfo'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2
    }}>
      <Image
        source={bid.image}
        resizeMethod="contain"
        style={{width: 48, height: 40}}
      />

      <View style={{}}>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}>Completed by {bid.name}</Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small -2,
          color: COLORS.secondary,
          marginTop: 3
        }}>Completed {bid.date}</Text>
      </View>
      <Price price={bid.price}/>
    </View>
  )
}

export default DetailsBid