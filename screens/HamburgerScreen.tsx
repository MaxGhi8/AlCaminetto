import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	FlatList,
	Image,
} from "react-native";
import { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	DoppioCheddarImage,
	HotBurgImage,
	MonteboreBurgImage,
	PiggyBurgImage,
	PolloImage,
	UovoBurgImage,
	VegetarianoImage,
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
		<SafeAreaView className="flex-1 bg-[#212121]">
			{/* Nome */}
			<View className="items-center justify-center pt-2">
				<View className="items-center justify-center py-2 rounded-lg  border-2 border-[#292929] bg-[#1A1A1A] shadow-xl shadow-orange-400">
					<Text className="text-white font-bold text-2xl px-5">
						{name}
					</Text>
				</View>
			</View>
			{/* Colonna a sx */}
			<View className="flex-row space-x-4 pt-4">
				<View className="w-1/3">
					{/* <Image className="flex-1" source={require(`${photo}`)} /> */}
					<Image source={images[photo]} className="h-96 w-32" />
				</View>
				<View className="flex-shrink pr-4">
					<Text className="underline underline-offset-2 font-semibold text-xl pt-5 text-white">
						{ingredienti}:
					</Text>
					<View className="pt-6">
						<FlatList
							className="w-auto"
							data={ingredients_detailed}
							renderItem={({ item }) => {
								return (
									<View className="pb-6">
										<Text className="text-white text-lg">
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
			<View className="flex-row space-x-4 justify-start pl-4 pt-6 items-center">
				<View className="items-center">
					<Text className="underline underline-offset-2 font-semibold text-xl text-white">
						{contorno}:
					</Text>
				</View>
				<View className="flex-shrink">
					<Text className="text-white text-lg">{patate}</Text>
				</View>
			</View>
			{/* Allergeni */}
			<View className="pl-4 pt-10">
				<Text className="text-white">{allergen}</Text>
			</View>
		</SafeAreaView>
	);
}

export default HamburgerScreen;
