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
  import Icon from "react-native-vector-icons/FontAwesome";
import Carousel from "../component/carousel";
import { useState } from "react";
  

  export default function Profile() {

      return (
      <>
      <View className='mx-6 rounded mt-4 bg-white '>
        <View className=' flex flex-col justify-center  items-center w-full'>
        <Image source={require("../../assets/pic.png")} />
        <Text  className='text-[14px] mt-3 font-semibold'>Dr. Anuj Verma</Text>
        </View>
        <View className='mt-4 flex flex-col items-start'>
          <Text className='text-[12px] mb-1 font-medium'>Total Patient Attended: 60</Text>
          <Text  className='text-[12px] mb-3 font-medium '>Consultation Time: 9AM - 6PM</Text>

        </View>
      </View>
      </>
    );
  }
