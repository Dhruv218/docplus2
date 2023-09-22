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
  

  export default function Card({name,data}) {
    const img=name=='Consults'?require('../../assets/Consults.png'):
    name=='Experience'?require('../../assets/Experience.png'):
    name=='Ratings'?require('../../assets/Ratings.png'):null
    return (
      <>
       <TouchableOpacity className='flex rounded-xl flex-col items-center px-4 py-2 bg-[#FFFFFF]'>
        <Text className='text-[10.5px] text-center text-[#7B7A79]'>{name}</Text>
        <View className='flex flex-row justify-center items-center text-center'>
        <Image source={img} className='mt-2'/>
        <Text className='text-[14px] font-extrabold ml-[5px] mt-2'>{data}</Text>

        </View>
       </TouchableOpacity>
      </>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 12,
      flexDirection: 'column',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: '#FFFFFF',
    },
  });