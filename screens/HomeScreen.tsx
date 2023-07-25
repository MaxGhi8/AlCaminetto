import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	Dimensions,
	Image,
} from "react-native";
import { useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeCard from "../components/HomeCard";
import Carousel from "react-native-reanimated-carousel";
import { Photo1, Photo2, Photo3, Photo4, Photo5, Photo6 } from "../assets";
import call from "react-native-phone-call";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({}) => {
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitleAlign: "center",
			headerStyle: {
				backgroundColor: "#212121",
			},
			headerTitleStyle: {
				color: "white",
			},
			headerTintColor: "white",
			headerShadowVisible: false,
		});
	}, []);

	const language = [
		{ title: "Italiano", flag: "it", destination: "MenuItalian" },
		{ title: "English", flag: "gb", destination: "MenuEnglish" },
		{ title: "Deutsch", flag: "de", destination: "MenuDeutsch" },
		{ title: "Français", flag: "fr", destination: "MenuFrancais" },
	];

	const data = [
		{
			photo: Photo4,
		},
		{
			photo: Photo5,
		},
		{
			photo: Photo3,
		},
		{
			photo: Photo1,
		},
		{
			photo: Photo6,
		},
		{
			photo: Photo2,
		},
	];

	const args = {
		number: "9093900003", // String value with the number to call
		prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
		skipCanOpen: true, // Skip the canOpenURL check
	};

	const RenderItem = ({ item }) => {
		return (
			<View className="flex items-center justify-center">
				<Image source={item.photo} className="w-60 h-60" />
			</View>
		);
	};
	return (
		<SafeAreaView className="bg-[#212121] flex-1">
			{/* Carousel */}
			<View className="items-center justify-center pt-4">
				<Carousel
					data={data}
					// layout={"tinder"}
					ref={useRef(null)}
					renderItem={RenderItem}
					loop
					width={Dimensions.get("window").width}
					height={Dimensions.get("window").width / 2}
					autoPlay={true}
					scrollAnimationDuration={2000}
					panGestureHandlerProps={{
						activeOffsetX: [-10, 10],
					}}
				/>
			</View>
			{/* Menu */}
			<View className="flex-1 pt-4">
				<View className="items-center">
					<Text className="text-2xl font-bold text-white">Menù:</Text>
				</View>
				{/* Sezione con scelte lingua */}
				<View className="flex-1 items-center">
					<ScrollView className="w-4/5">
						{language.map((item) => (
							<HomeCard
								title={item.title}
								flag={item.flag}
								destination={item.destination}
							/>
						))}
					</ScrollView>
				</View>
			</View>
			{/* Call us */}
			{/* <View className="flex-1">
				<Text className="text-white">Contact us for reservation:</Text>
				<TouchableOpacity
					className="rounded-lg px-3 py-4 border-2 border-[#292929] bg-[#1A1A1A] shadow"
					onPress={() => call(args).catch(console.error)}
				>
					<View className="flex-1">
						<Text className="text-white">HELOOOO</Text>
					</View>
				</TouchableOpacity>
			</View> */}
		</SafeAreaView>
	);
};

export default HomeScreen;
