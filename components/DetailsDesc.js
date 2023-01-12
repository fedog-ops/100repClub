import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { Price, Title } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0,100))
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <Price price={data.price} />
      </View>
      <View style={{ paddingVertical: SIZES.font}}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base, left: 0 }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regualr,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
            onPress={()=>{
              if(!readMore){
                  setText(data.description)
                  setReadMore(true)
              } else{
                  setText(data.description.slice(0,100))
                  setReadMore(false)
              }
            }}
          >
            {text} {!readMore && '...'}
            <Text style={{fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
              }}>{readMore ? 'Show Less' : 'Read More'}</Text>
          </Text>
         
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
