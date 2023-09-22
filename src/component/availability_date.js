import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import { StyleSheet } from 'react-native';
  import Icon from "react-native-vector-icons/AntDesign";
import Carousel from "../component/carousel";
import { useState } from "react";
  

  export default function Availability_date({date ,day,active}) {

      return (
      <>
      <View className={`flex px-3 py-2 flex-col rounded-xl items-center ${active?'bg-[#39AAB4]':'bg-[#EEEEEE]'}`}>
      <Text className='text-[16px] mb-4 font-semibold'>{date}</Text>
      <Text className='text-[9px] font-normal'>{day}</Text>
      </View>
      </>
    );
  }
