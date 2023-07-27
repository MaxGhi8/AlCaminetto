import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

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
	const navigation = useNavigation();

	return (
		<View className="flex-1 py-2">
			<TouchableOpacity
				className="flex-1 rounded-lg px-3 py-2 border-2 border-[#292929] bg-[#1A1A1A] shadow"
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
				}}
			>
				<View className="flex-1">
					<View className="justify-center items-center">
						<Text className="text-xl font-bold text-white">
							{name}
						</Text>
					</View>
					<View className="flex-row space-x-1 py-2 justify-between">
						<View className="flex-1 items-start">
							<Text className="text-white text-md">
								{ingredients}
							</Text>
						</View>
						<View className="absolute bottom-0 right-0">
							<Text className="text-white">{price} €</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default HamburgerCard;
