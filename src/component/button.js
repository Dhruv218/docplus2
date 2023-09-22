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
  

  export default function Button({name,data}) {
    const img=name=='Consults'?require('../../assets/Consults.png'):
    name=='Experience'?require('../../assets/Experience.png'):
    name=='Ratings'?require('../../assets/Ratings.png'):null
    return (
      <>
      <View className='absolute bottom-0 flex justify-end bg-white w-full px-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] h-[70px]'>
       <TouchableOpacity activeOpacity={0.8} className='py-2 px-4 rounded-md bg-[#39AAB4] flex flex-row justify-between items-center'>
        <View className='flex flex-col items-start'>
        <Text className='text-[12px] text-[#FFFFFF]'>Next Available</Text>
        <Text className='text-[14px] mt-1 text-[#FFFFFF] font-semibold'>Now</Text>
        </View>
        <View>
            <View className='flex flex-row items-center'>
        <Text className='text-[14px] mr-3 text-[#FFFFFF] font-semibold'>Book</Text>
        <Icon style={{color:'white'}} size={20}  name="caretright" />
        </View>
        </View>
       </TouchableOpacity>
       </View>
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