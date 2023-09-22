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
  import Icon from "react-native-vector-icons/FontAwesome";
import Carousel from "../component/carousel";
import Card from "../component/card";
import Button from "../component/button";
import Information_card from "../component/information_card";
  

  export default function Home() {
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ScrollView className='relative'>
            <Carousel/>
            <View className='flex flex-row justify-between px-6 mt-4'>
                <View className='flex flex-col justify-start items-start'>
                <Text className='text-[24px] font-semibold'>Dr. Anuj Verma</Text>
                <Text className='text-[16px] mt-1 text-[#15AEB2]'>General Physician | MBBS, NBD</Text>
                </View>
                <Image source={require('../../assets/Chat.png')} className='rounded-full w-[56px] h-[56px]'/>
            </View>
            <View className='flex px-12 mt-4 justify-around flex-row'>
            <Card name='Consults' data='800+'/>
            <Card name='Experience' data='8 Yrs+'/>
            <Card name='Ratings' data='4.5'/>
            </View>
            <Information_card/>
        </ScrollView>
        <Button/>
      </>
    );
  }
  