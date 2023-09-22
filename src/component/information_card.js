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
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Carousel from "../component/carousel";
import { useState } from "react";
import Profile from "./profile";
import Availability from "./availability";
import Fees from "./fees";
import Review from "./review";

export default function Information_card() {
  const [index, setindex] = useState(0);

  return (
    <>
      <View className="mx-10 rounded mt-4 bg-white ">
        <View className="flex flex-row justify-start items-center">
          <TouchableOpacity
            className="h-full px-6 flex flex-row items-center justify-center  py-2"
            onPress={() => {
              setindex(0);
            }}
          >
            {index == 0 ? (
              <Text className="text-[#EA1A65] text-[14px] font-normal">
                Profile
              </Text>
            ) : (
              <Image source={require("../../assets/profile.png")} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            className="h-full px-6 flex items-center justify-center  py-3"
            onPress={() => {
              setindex(1);
            }}
          >
            {index == 1 ? (
              <Text className="text-[#EA1A65] text-[14px] font-normal">
                Availibility
              </Text>
            ) : (
              <Image source={require("../../assets/availability.png")} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            className="h-full px-6 flex items-center justify-center  py-3"
            onPress={() => {
              setindex(2);
            }}
          >
            {index == 2 ? (
              <Text className="text-[#EA1A65] text-[14px] font-normal">
                Fees
              </Text>
            ) : (
              <Image source={require("../../assets/fees.png")} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            className="h-full px-6 flex items-center justify-center  py-3"
            onPress={() => {
              setindex(3);
            }}
          >
            {index == 3 ? (
              <Text className="text-[#EA1A65] text-[14px] font-normal">
                Reviews
              </Text>
            ) : (
              <Image source={require("../../assets/reviews.png")} />
            )}
          </TouchableOpacity>
        </View>
        {index == 0 ? (
            <Profile />
          ) : index == 1 ? (
            <Availability />
          ) : index == 2 ? (
            <Fees />
          ) : index == 3 ? (
            <Review />
          ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#00000024", // You may need to adjust this value
    shadowOffset: {
      width: 20,
      height: 2, // Only vertical offset (height) is considered here
    },
    shadowRadius: 25,
    shadowOpacity: 1, // 24% opacity
    elevation: 3, // this is for shadow on Android, adjust as needed
  },
});
