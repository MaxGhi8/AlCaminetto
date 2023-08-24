import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeCard from "../components/HomeCard";
import Carousel from "react-native-reanimated-carousel";
import { Photo1, Photo2, Photo3, Photo4, Photo5, Photo6 } from "../assets";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Linking } from "react-native";

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

	const [phoneNumber, setPhoneNumber] = useState("0131877653");

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

	const RenderItem = ({ item }) => {
		return (
			<View className="flex-1 items-center justify-center">
				<Image source={item.photo} className="w-60 h-60" />
			</View>
		);
	};
	return (
		<SafeAreaView className="bg-[#212121] flex-1">
			{/* Carousel */}
			<View className="items-center justify-center">
				<Carousel
					data={data}
					mode={"parallax"}
					ref={useRef(null)}
					renderItem={RenderItem}
					loop
					width={Dimensions.get("window").width}
					height={Dimensions.get("window").width / 2}
					autoPlay={true}
					scrollAnimationDuration={2500}
					panGestureHandlerProps={{
						activeOffsetX: [-10, 10],
					}}
				/>
			</View>
			{/* Menu */}
			<ScrollView className="flex-1">
				<View className="flex-1 pt-3">
					<View className="items-center pt-4">
						<Text className="text-2xl font-bold text-white">
							Menù:
						</Text>
					</View>
					{/* Sezione con scelte lingua */}
					<View className="flex-1 w-full items-center">
						{language.map((item) => (
							<HomeCard
								title={item.title}
								flag={item.flag}
								destination={item.destination}
							/>
						))}
					</View>
				</View>
				{/* Call us */}
				<View className="px-4 items-center justify-center pt-2">
					<TouchableOpacity
						className="rounded-lg px-3 py-2 border-2 border-[#292929] bg-[#1A1A1A] shadow"
						onPress={() => {
							Linking.openURL(`tel:${phoneNumber}`);
						}}
					>
						<View className="flex-row space-x-6 items-center justify-center">
							<Text className="text-white">
								Contat us for reservation
							</Text>
							<Feather
								name="phone-call"
								size={22}
								color="white"
							/>
						</View>
					</TouchableOpacity>
				</View>
				{/* Indirizzo */}

				<View className="px-4 items-center justify-center py-4">
					<TouchableOpacity
						className="rounded-lg px-3 py-2 border-2 border-[#292929] bg-[#1A1A1A] shadow"
						onPress={() => {
							Linking.openURL(
								"https://www.google.it/maps/place/Ristorante+Al+Caminetto/@44.7805366,8.9953796,17z/data=!3m1!4b1!4m6!3m5!1s0x47875b3b5ed37021:0xe1bed66358d287c6!8m2!3d44.7805366!4d8.9979545!16s%2Fg%2F1tf3y7t_?entry=ttu"
							);
						}}
					>
						<View className="flex-row items-center justify-center space-x-4">
							<View>
								<View className="items-center justify-center">
									<Text className="text-white">
										Restaurant "Al Caminetto":
									</Text>
								</View>
								<Text className="text-white">
									Piemonte, IT - Garbagna, AL - Via XIV Marzo
									25.
								</Text>
							</View>
							<View>
								<FontAwesome
									name="map-marker"
									size={28}
									color="white"
								/>
							</View>
						</View>
					</TouchableOpacity>
				</View>

				{/* Follow us */}
				<View className="flex-row justify-around pb-4 items-center">
					<TouchableOpacity
						onPress={() => {
							Linking.openURL(
								"https://instagram.com/rist_alcaminetto?igshid=MzNlNGNkZWQ4Mg=="
							);
						}}
					>
						<View className="flex-row space-x-2 items-center justify-center">
							<FontAwesome
								name="instagram"
								size={24}
								color="white"
							/>
							<Text className="text-white">
								@rist_alcaminetto
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							Linking.openURL(
								"https://www.facebook.com/profile.php?id=100042529223639"
							);
						}}
					>
						<View className="flex-row space-x-2 items-center justify-center">
							<FontAwesome
								name="facebook-f"
								size={20}
								color="white"
							/>
							<Text className="text-white">
								Ristorante al Caminetto
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
