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
  import Iconi from "react-native-vector-icons/EvilIcons";
import Carousel from "../component/carousel";
import { useState } from "react";
  

  export default function Review() {

      return (
      <>
      <View className='rounded flex flex-col mx-6 bg-white '>
        <View className='flex items-center flex-row justify-between my-2'>
        <Text className='text-[13px] font-semibold'>Profile Review</Text>
        <TouchableOpacity className='flex bg-[#51B7B7] rounded-full p-1'>
            <Icon name='plus' size={15} color={'white'}/>
        </TouchableOpacity>
      </View>
      <View className='h-[1px] mt-1 bg-gray-200'></View>
      <View className='flex flex-col'>
        <View className='flex flex-row justify-between items-start'>
            <View className='mt-2 flex flex-row items-center'>
            <Image source={require("../../assets/pic.png")} />
            <View className='flex flex-col items-start ml-4'>
            <Text className='text-[14px] font-medium'>Maggie Rhee</Text>
            <Text className='text-[12px] mt-2 font-normal text-[#7B7A79]'>Visited for Pain</Text>
            <View className='mt-2 flex items-center flex-row'>
            <Image source={require("../../assets/y-star.png")} />
            <Image source={require("../../assets/y-star.png")} />
            <Image source={require("../../assets/y-star.png")} />
            <Image source={require("../../assets/y-star.png")} />
            <Iconi name="star" size={20}/>
            </View>
            </View>
            </View>
            <Text className='text-[#077EE9] mt-2 text-[10px]'>16 days ago</Text>
        </View>
      </View>
      <Text className='text-[10.5px] text-center my-4 font-medium'>“Great caring doctor & practice. Very accessible, especially during these times.Highly recommend.”</Text>
      </View>
      </>
    );
  }
