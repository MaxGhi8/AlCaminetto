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
import Carousel from "react-native-snap-carousel";

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
		{ title: "Italiano", flag: "ita", destination: "MenuItalian" },
		{ title: "English", flag: "gbr", destination: "MenuEnglish" },
		{ title: "Deutsch", flag: "deu", destination: "MenuDeutsch" },
		{ title: "Français", flag: "fra", destination: "MenuFrancais" },
	];

	const data = [
		{
			photo: require("../assets/photo4.png"),
		},
		{
			photo: require("../assets/photo5.png"),
		},
		{
			photo: require("../assets/photo3.png"),
		},
		{
			photo: require("../assets/photo1.png"),
		},
		{
			photo: require("../assets/photo6.png"),
		},
		{
			photo: require("../assets/photo2.png"),
		},
	];

	const RenderItem = ({ item }) => {
		return (
			<View className="flex items-center justify-center">
				<Image className="w-60 h-60" source={item.photo} />
			</View>
		);
	};
	return (
		<SafeAreaView className="bg-[#212121] flex-1">
			{/* Carousel */}
			<View className="items-center justify-center pt-4">
				<Carousel
					data={data}
					layout={"stack"}
					ref={useRef(null)}
					renderItem={RenderItem}
					sliderWidth={Dimensions.get("window").width}
					itemWidth={Dimensions.get("window").width}
					itemHeight={Dimensions.get("window").height / 2}
					loop={true}
					// autoplay={true}
					// autoplayInterval={2000}
					// inactiveSlideOpacity={0.4}
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
		</SafeAreaView>
	);
};

export default HomeScreen;
