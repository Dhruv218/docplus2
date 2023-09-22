import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";

const { width } = Dimensions.get("window");

const Carousel = () => {
  const data = [" 1", " 2", " 3", "a 4"];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={{
                uri: "https://hips.hearstapps.com/hmg-prod/images/1-alec-holland-hamptons-house-1661876383.jpg",
              }}
              className="w-full h-full"
            />
            <View style={styles.slideno}>
                <Text style={styles.textprop}>{index+1}/{data.length}</Text>
            </View>
            <View style={styles.slideno_2}>
                <Icon name="hearto" color={'red'} size={20}/>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  slide: {
    width,
    position:'relative',
    justifyContent: "center",
    alignItems: "center",
    height:300
  },
  slideno:{
    position:'absolute',
    bottom:20,
    right:20,
    backgroundColor:'gray',
   paddingHorizontal:15,
   paddingVertical:5,
   flex:1,
   justifyContent:'center',
   alignContent:'center',
   borderRadius:3,
  },slideno_2:{
    position:'absolute',
    top:20,
    right:20,
    backgroundColor:'white',
   paddingHorizontal:10,
   paddingVertical:10,
   flex:1,
   justifyContent:'center',
   alignContent:'center',
   borderRadius:100000,
  },
  textprop:{
    fontSize:14,
    lineHeight:14,
    color:'white'
  }
});

export default Carousel;
