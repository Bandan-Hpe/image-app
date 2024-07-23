import { View, Text, ScrollView, Image, Button } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomeButton from "../components/CustomeButton.jsx";
import { StatusBar } from "expo-status-bar";
import { Redirect,router } from "expo-router";


export default function App() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless posibilities with {""}
              <Text className="text-secondary-100">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -right-8 -bottom-3"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100 mt-8 font-pregular text-center ">
            Where Creativity meets inovation : embark a journy with limitless
            exploration with Aora
          </Text>
          <CustomeButton title="Continue With Email" handlePress={()=>router.push('/sign-in')} containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
