import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HamburgerCard = ({
	name,
	ingredients,
	ingredients_detailed,
	price,
	photo,
	allergen,
	ingredienti,
	contorno,
	patate,
}: {
	name: string;
	ingredients: string;
	ingredients_detailed: { ingred: string }[];
	price: string;
	photo: string;
	allergen: string;
	ingredienti: string;
	contorno: string;
	patate: string;
}) => {
	type RootStackParamList = {
		Hamburger: {
			name: string;
			ingredients_detailed: { ingred: string }[];
			photo: string;
			allergen: string;
			ingredienti: string;
			contorno: string;
			patate: string;
		};
	};

	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	return (
		<View className="w-full py-1">
			<TouchableOpacity
				className="rounded-lg px-3 py-2 border-2 border-[#292929] bg-[#1A1A1A] drop-shadow-xl"
				onPress={() => {
					navigation.navigate("Hamburger", {
						name: name,
						ingredients_detailed: ingredients_detailed,
						photo: photo,
						allergen: allergen,
						ingredienti: ingredienti,
						contorno: contorno,
						patate: patate,
					});
				}}>
				<View className="flex-col">
					<View className="items-center justify-center">
						<Text className="text-xl font-bold text-white">{name}</Text>
					</View>
					<View className="items-start">
						<Text className="text-white text-md">{ingredients}</Text>
					</View>
					<View className="items-end">
						<Text className="text-white text-md">{price} €</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default HamburgerCard;
