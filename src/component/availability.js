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
import Availability_date from "./availability_date";
  

  export default function Availability() {

      return (
      <>
      <View className='rounded my-4 bg-white'>
        <View className='mx-6 flex flex-row justify-center items-center'>
        <Text className='text-[18px] mr-2 font-semibold text-center'>November, 2021</Text>
        <Icon name="down" size={15} color={'black'}/>
      </View>
      <View className='mt-9 mb-8 flex flex-row justify-around items-center'>
      <Availability_date day='MON' date='13' active={false} />
      <Availability_date day='TUE' date='14' active={true} />
      <Availability_date day='WED' date='15' active={false} />
      <Availability_date day='THU' date='16' active={false} />
      <Availability_date day='FRI' date='17' active={false} />
      <Availability_date day='SAT' date='18' active={false} />
      </View>
      </View>
      </>
    );
  }
