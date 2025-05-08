import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerCard from "../components/HamburgerCard";

const HamburgerEnglish = () => {
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

	const [data, setData] = useState([
		{
			name: "DOPPIO-CHEDDAR",
			ingredients: "Beef burger, onions, bacon, double cheddar, burger sauce.",
			ingredients_detailed: [
				{ ingred: "150 gram beef burger" },
				{ ingred: "Stewed onions" },
				{ ingred: "Crispy bacon" },
				{ ingred: "Double cheddar" },
				{ ingred: "Burger sauce" },
			],
			price: "12",
			photo: "DoppioCheddar",
			allergen: "Allergen: gluten, egg, milk, sesame, mustard.",
		},
		{
			name: "PIGGY-BURG",
			ingredients: "Pulled pork, smoked cheese, onions, bacon, BBQ sauce.",
			ingredients_detailed: [
				{ ingred: "Pulled pork" },
				{ ingred: "Smoked cheese" },
				{ ingred: "Stewed onions" },
				{ ingred: "Crispy bacon" },
				{ ingred: "BBQ sauce" },
			],
			price: "13",
			photo: "PiggyBurg",
			allergen: "Allergen: gluten, egg, milk, sesame, mustard.",
		},
		{
			name: "PISTACCHIOTTO-BURG",
			ingredients: "Beef burger, mortadella, stracciatella, pistachio pesto.",
			ingredients_detailed: [
				{ ingred: "150 gram beef burger" },
				{ ingred: "Grilled mortadella" },
				{ ingred: "Stracciatella cheese" },
				{ ingred: "Pistachio pesto" },
			],
			price: "14",
			photo: "Pistacchiotto",
			allergen: "Allergeni: gluten, milk, sesame, mustard, pistachio.",
		},
		{
			name: "SPICY-BURG",
			ingredients:
				"Beef burger, onions, tomato, lettuce, bacon, cheese, 'nduja.",
			ingredients_detailed: [
				{
					ingred: "150 gram beef burger",
				},
				{ ingred: "Stewed onions" },
				{ ingred: "Tomato and lettuce" },
				{ ingred: "Crispy bacon" },
				{ ingred: "Melted cheese" },
				{ ingred: "'nduja" },
			],
			price: "13",
			photo: "HotBurg",
			allergen: "Allergen: gluten, egg, milk, sesame.",
		},
		{
			name: "MONTEBORE-BURG",
			ingredients:
				"Beef burger, Montebore, onions, peppers, bacon, alcoholic cream with montebore.",
			ingredients_detailed: [
				{ ingred: "150 gram beef burger" },
				{ ingred: "Montebore cheese" },
				{ ingred: "Stewed onions" },
				{ ingred: "Peppers" },
				{ ingred: "Crispy bacon" },
				{ ingred: "Alcoholic cream with montebore" },
			],
			price: "14",
			photo: "MonteboreBurg",
			allergen: "Allergen: gluten, egg, milk, sesame.",
		},
		{
			name: "UOVO-BURG",
			ingredients: "Beef burger, egg, onions, bacon, cheese.",
			ingredients_detailed: [
				{ ingred: "150 gram beef burger" },
				{ ingred: "Fried egg" },
				{ ingred: "Stewed onions" },
				{ ingred: "Crispy bacon" },
				{ ingred: "Melted cheese" },
			],
			price: "12",
			photo: "UovoBurg",
			allergen: "Allergen: gluten, egg, milk, sesame.",
		},
		// {
		// 	name: "RIBS-BURG",
		// 	ingredients: "Shredded ribs, onion rings, bacon, cheddar, BBQ sauce.",
		// 	ingredients_detailed: [
		// 		{ ingred: "Shredded pork ribs" },
		// 		{ ingred: "Fried onion rings" },
		// 		{ ingred: "Crispy bacon" },
		// 		{ ingred: "Melted Cheddar" },
		// 		{ ingred: "BBQ sauce" },
		// 	],
		// 	price: "13",
		// 	photo: "RibsBurg",
		// 	allergen: "Allergen: gluten, milk, sesame.",
		// },
		// {
		// 	name: "HOT-DOG-GOURMET",
		// 	ingredients: "Sausage, onions, brie, sauce of your choice.",
		// 	ingredients_detailed: [
		// 		{ ingred: "Pork sausage" },
		// 		{ ingred: "Stewed onions" },
		// 		{ ingred: "Melted Brie" },
		// 		{ ingred: "Sauce of your choice (mayonnaise, ketchup, mustard, BBQ)" },
		// 	],
		// 	price: "11",
		// 	photo: "HotDogGourmet",
		// 	allergen: "Allergen: gluten, egg, milk, musterd.",
		// },
		{
			name: "POLLO",
			ingredients: "Fried chicken, onions, tomato, lettuce, bacon, cheese.",
			ingredients_detailed: [
				{ ingred: "Fried chicken" },
				{ ingred: "Stewed onions" },
				{ ingred: "Tomato and lettuce" },
				{ ingred: "Crispy bacon" },
				{ ingred: "Melted cheese" },
			],
			price: "10",
			photo: "Pollo",
			allergen: "Allergen: gluten, egg, milk, sesame.",
		},
		{
			name: "VEGETARIANO",
			ingredients:
				"Grilled vegetables, onions, brie, tomato, lettuce, mushroom sauce.",
			ingredients_detailed: [
				{ ingred: "Grilled vegetables" },
				{ ingred: "Stewed onions" },
				{ ingred: "Brie cheese" },
				{ ingred: "Tomato and lettuce" },
				{ ingred: "Mushroom sauce" },
			],
			price: "11",
			photo: "Vegetariano",
			allergen: "Allergen: gluten, egg, milk, sesame, mushroom.",
		},
		{
			name: "CLASSIC-HOT-DOG",
			ingredients: "Wurstel, sauce of your choice.",
			ingredients_detailed: [
				{ ingred: "Pork Wurstel" },
				{ ingred: "Sauce of your choice (mayonnaese, ketchup, mustard, BBQ)" },
			],
			price: "8",
			photo: "HotDogClassic",
			allergen: "Allergen: gluten, egg, mustard.",
		},
	]);

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center">
			<ScrollView className="px-4">
				{data.map((item, key) => (
					<HamburgerCard
						key={key}
						name={item.name}
						ingredients={item.ingredients}
						ingredients_detailed={item.ingredients_detailed}
						price={item.price}
						photo={item.photo}
						allergen={item.allergen}
						ingredienti={"Ingredients"}
						contorno={"Side dish"}
						patate={"Baked potatoes"}
					/>
				))}
				<View className="items-center justify-center pt-1 pb-2">
					<Text className="text-center text-white">
						Click on the tabs for more information!
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HamburgerEnglish;
