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

export default function Fees() {
  return (
    <>
      <View className="mx-6 rounded my-4 bg-white ">
        <View className="flex mb-4 flex-row justify-between items-center shadow shadow-[#0C9595] px-3 py-3 rounded-l-lg">
          <View className="flex flex-row items-center">
            <View className="rounded-full p-2 bg-white shadow-lg shadow-[#0C9595]">
              <Image
                source={require("../../assets/profile.png")}
                className="w-[16px] h-[14px]"
              />
            </View>
            <Text className="ml-2 text-[12px] font-semibold">
              In-Clinic Appointment{" "}
            </Text>
          </View>
          <View className="flex flex-col items-end">
            <Text className="text-[11px] font-bold">Fees: $ 80.70</Text>
            <Text className="text-[11px] font-bold">₹ 1400</Text>
          </View>
        </View>
        <View className="flex mb-4 flex-row justify-between items-center shadow shadow-[#0C9595] px-3 py-3 rounded-l-lg">
          <View className="flex flex-row items-center">
            <View className="rounded-full p-2 bg-white shadow-lg shadow-[#0C9595]">
              <Image
                source={require("../../assets/profile.png")}
                className="w-[16px] h-[14px]"
              />
            </View>
            <Text className="ml-2 text-[12px] font-semibold">
              In-Clinic Appointment{" "}
            </Text>
          </View>
          <View className="flex flex-col items-end">
            <Text className="text-[11px] font-bold">Fees: $ 80.70</Text>
            <Text className="text-[11px] font-bold">₹ 1400</Text>
          </View>
        </View>
        <View className="flex mb-4 flex-row justify-between items-center shadow shadow-[#0C9595] px-3 py-3 rounded-l-lg">
          <View className="flex flex-row items-center">
            <View className="rounded-full p-2 bg-white shadow-lg shadow-[#0C9595]">
              <Image
                source={require("../../assets/profile.png")}
                className="w-[16px] h-[14px]"
              />
            </View>
            <Text className="ml-2 text-[12px] font-semibold">
              In-Clinic Appointment{" "}
            </Text>
          </View>
          <View className="flex flex-col items-end">
            <Text className="text-[11px] font-bold">Fees: $ 80.70</Text>
            <Text className="text-[11px] font-bold">₹ 1400</Text>
          </View>
        </View>
        <View className="flex mb-4 flex-row justify-between items-center shadow shadow-[#0C9595] px-3 py-3 rounded-l-lg">
          <View className="flex flex-row items-center">
            <View className="rounded-full p-2 bg-white shadow-lg shadow-[#0C9595]">
              <Image
                source={require("../../assets/profile.png")}
                className="w-[16px] h-[14px]"
              />
            </View>
            <Text className="ml-2 text-[12px] font-semibold">
              In-Clinic Appointment{" "}
            </Text>
          </View>
          <View className="flex flex-col items-end">
            <Text className="text-[11px] font-bold">Fees: $ 80.70</Text>
            <Text className="text-[11px] font-bold">₹ 1400</Text>
          </View>
        </View>
      </View>
    </>
  );
}
