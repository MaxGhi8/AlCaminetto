import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerCard from "../components/HamburgerCard";

const HamburgerItalian = () => {
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
			ingredients:
				"Hamburger di manzo, cipolle, bacon, doppio cheddar, salsa burger.",
			ingredients_detailed: [
				{ ingred: "Hamburger di manzo da 150 grammi" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Bacon croccante" },
				{ ingred: "Doppio cheddar" },
				{ ingred: "Salsa burger" },
			],
			price: "12",
			photo: "DoppioCheddar",
			allergen: "Allergeni: glutine, uovo, latte, sesamo, senape.",
		},
		{
			name: "PIGGY-BURG",
			ingredients:
				"Maialino sfilacciato, scamorza affumicata, cipolle, bacon, salsa BBQ.",
			ingredients_detailed: [
				{ ingred: "Maialino sfilacciato" },
				{ ingred: "Scamorza affumicata" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Bacon croccante" },
				{ ingred: "Salsa BBQ" },
			],
			price: "13",
			photo: "PiggyBurg",
			allergen: "Allergeni: glutine, uovo, latte, sesamo, senape.",
		},
		{
			name: "SPICY-BURG",
			ingredients:
				"Hamburger di manzo, cipolle, pomodoro, insalata, bacon, formaggio, 'nduja.",
			ingredients_detailed: [
				{
					ingred: "Hamburger di manzo concio all'nduja da 150 grammi",
				},
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Pomodoro e insalata" },
				{ ingred: "Bacon croccante" },
				{ ingred: "Formaggio filante" },
				{ ingred: "'nduja" },
			],
			price: "12",
			photo: "HotBurg",
			allergen: "Allergeni: glutine, uovo, latte, sesamo.",
		},
		{
			name: "MONTEBORE-BURG",
			ingredients:
				"Hamburger di manzo, Montebore, cipolle, peperoni, bacon, crema alcolica al Montebore.",
			ingredients_detailed: [
				{ ingred: "Hamburger di manzo da 150 grammi" },
				{ ingred: "Formaggio Montebore" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Peperoni" },
				{ ingred: "Bacon croccante" },
				{ ingred: "Crema alcolica al Montebore" },
			],
			price: "14",
			photo: "MonteboreBurg",
			allergen: "Allergeni: glutine, uovo, latte, sesamo.",
		},
		{
			name: "UOVO-BURG",
			ingredients: "Hamburger di manzo, uovo, cipolle, bacon, formaggio.",
			ingredients_detailed: [
				{ ingred: "Hamburger di manzo da 150 grammi" },
				{ ingred: "Uovo all'occhio di bue" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Bacon croccante" },
				{ ingred: "Formaggio filante" },
			],
			price: "12",
			photo: "UovoBurg",
			allergen: "Allergeni: glutine, uovo, latte, sesamo.",
		},
		// {
		// 	name: "RIBS BURG",
		// 	ingredients: "Ribs sfilacciate, onion rings, bacon, cheddar, salsa BBQ.",
		// 	ingredients_detailed: [
		// 		{ ingred: "Ribs di maiale sfilacciate" },
		// 		{ ingred: "Anelli di cipolla fritti" },
		// 		{ ingred: "Bacon croccante" },
		// 		{ ingred: "Cheddar filante" },
		// 		{ ingred: "Salsa BBQ" },
		// 	],
		// 	price: "13",
		// 	photo: "RibsBurg",
		// 	allergen: "Allergeni: glutine, latte, sesamo.",
		// },
		{
			name: "HOT-DOG-GOURMET",
			ingredients: "Salamella, cipolle, brie, salsa a scelta.",
			ingredients_detailed: [
				{ ingred: "Salamella di maiale" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Formaggio Brie filante" },
				{ ingred: "Salsa a scelta (maionese, ketchup, senape, BBQ)" },
			],
			price: "11",
			photo: "HotDogGourmet",
			allergen: "Allergeni: glutine, uovo, latte, senape.",
		},
		{
			name: "CLASSIC-HOT-DOG",
			ingredients: "Wurstel, salsa a scelta.",
			ingredients_detailed: [
				{ ingred: "Wurstel di maiale" },
				{ ingred: "Salsa a scelta (maionese, ketchup, senape, BBQ)" },
			],
			price: "8",
			photo: "HotDogClassic",
			allergen: "Allergeni: glutine, uovo, senape.",
		},
		{
			name: "POLLO",
			ingredients:
				"Pollo impanato, cipolle, pomodoro, insalata, bacon, formaggio.",
			ingredients_detailed: [
				{ ingred: "Pollo impanato" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Pomodoro e insalata" },
				{ ingred: "Bacon croccante" },
				{ ingred: "Formaggio filante" },
			],
			price: "10",
			photo: "Pollo",
			allergen: "Allergeni: glutine, uovo, latte, sesamo.",
		},
		{
			name: "VEGETARIANO",
			ingredients:
				"Verdure grigliate, cipolle, Brie, pomodoro, insalata, salsa ai funghi.",
			ingredients_detailed: [
				{ ingred: "Verdure grigliate" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Formaggio Brie" },
				{ ingred: "Pomodoro e insalata" },
				{ ingred: "Salsa ai funghi porcini" },
			],
			price: "11",
			photo: "Vegetariano",
			allergen: "Allergeni: glutine, uovo, latte, sesamo, funghi.",
		},
	]);

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center">
			<ScrollView className="flex-1 px-4">
				{data.map((item, key) => (
					<HamburgerCard
						key={key}
						name={item.name}
						ingredients={item.ingredients}
						ingredients_detailed={item.ingredients_detailed}
						price={item.price}
						photo={item.photo}
						allergen={item.allergen}
						ingredienti={"Ingredienti"}
						contorno={"Contorno"}
						patate={"Patate al forno"}
					/>
				))}
				<View className="items-center justify-center pt-1 pb-2">
					<Text className="text-center text-white">
						Cliccare sulle schede per maggiori informazioni!
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HamburgerItalian;
