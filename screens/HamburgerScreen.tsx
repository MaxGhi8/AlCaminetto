import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	FlatList,
	Image,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	DoppioCheddarImage,
	HotBurgImage,
	MonteboreBurgImage,
	PiggyBurgImage,
	PolloImage,
	UovoBurgImage,
	VegetarianoImage,
	// RibsBurgImage,
	HotDogClassicImage,
	PistacchiottoImage,
	// HotDogGourmetImage,
} from "../assets";

function HamburgerScreen({ route }) {
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

	// const images = {
	// 	DoppioCheddar: require("../assets/DoppioCheddar.png"),
	// 	HotBurg: require("../assets/HotBurg.png"),
	// 	Vegetariano: require("../assets/Vegetariano.png"),
	// 	UovoBurg: require("../assets/UovoBurg.png"),
	// 	MonteboreBurg: require("../assets/MonteboreBurg.png"),
	// 	PiggyBurg: require("../assets/PiggyBurg.png"),
	// 	Pollo: require("../assets/Pollo.png"),
	// };

	const images = {
		DoppioCheddar: DoppioCheddarImage,
		HotBurg: HotBurgImage,
		Vegetariano: VegetarianoImage,
		UovoBurg: UovoBurgImage,
		MonteboreBurg: MonteboreBurgImage,
		PiggyBurg: PiggyBurgImage,
		Pollo: PolloImage,
		// RibsBurg: RibsBurgImage,
		HotDogClassic: HotDogClassicImage,
		Pistacchiotto: PistacchiottoImage,
		// HotDogGourmet: HotDogGourmetImage,
	};

	const {
		name,
		ingredients_detailed,
		photo,
		allergen,
		ingredienti,
		contorno,
		patate,
	} = route.params as {
		name: string;
		ingredients_detailed: { ingred: string }[];
		photo: string;
		allergen: string;
		ingredienti: string;
		contorno: string;
		patate: string;
	};

	return (
		<SafeAreaView className="flex-1 bg-[#212121] items-center py-8">
			{/* Nome */}
			<View className="items-center justify-center pt-2">
				<View className="items-center justify-center py-2 rounded-lg  border-2 border-[#292929] bg-[#1A1A1A] drop-shadow-xl shadow-orange-400">
					<Text className="px-5 text-2xl font-bold text-white">{name}</Text>
				</View>
			</View>
			{/* Colonna a sx */}
			<View className="flex-row justify-between w-full pt-4 space-x-4">
				<View className="w-1/3">
					{/* <Image className="flex-1" source={require(`${photo}`)} /> */}
					<Image source={images[photo]} className="w-32 h-96" />
				</View>
				<View className="flex-1 pr-4">
					<Text className="pt-5 text-xl font-semibold text-white underline underline-offset-2">
						{ingredienti}:
					</Text>
					<View className="pt-6">
						<FlatList
							className="w-auto"
							data={ingredients_detailed}
							renderItem={({ item }) => {
								return (
									<View className="pb-6">
										<Text className="text-lg text-white">
											{`\u2022 ${item.ingred}`}
										</Text>
									</View>
								);
							}}
						/>
					</View>
				</View>
			</View>
			{/* Contorno */}
			<View className="flex-row inline-block pt-6 pl-4 space-x-4 align-text-top">
				<View className="">
					<Text className="text-xl font-semibold text-white underline underline-offset-2">
						{contorno}:
					</Text>
				</View>
				<View className="flex-shrink">
					<Text className="text-lg text-white">{patate}</Text>
				</View>
			</View>
			{/* Allergeni */}
			<View className="pt-10 pl-4">
				<Text className="text-white">{allergen}</Text>
			</View>
		</SafeAreaView>
	);
}

export default HamburgerScreen;
