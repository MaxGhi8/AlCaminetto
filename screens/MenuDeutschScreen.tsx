import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerCard from "../components/HamburgerCard";

const MenuDeutsch = () => {
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
			name: "DOPPIO CHEDDAR",
			ingredients:
				"Rindfleischburger, Zwiebeln, Speck, doppelter Cheddar, Burgersoße.",
			ingredients_detailed: [
				{ ingred: "150 Gramm Rindfleischburger" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "doppelter Cheddar" },
				{ ingred: "Burgersoße" },
			],
			price: "12",
			photo: "DoppioCheddar",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam, Senf.",
		},
		{
			name: "PIGGY BURG",
			ingredients:
				"Klein geschnittenes Schweinefleisch, geräucherter Käse, Zwiebeln, Speck, Grillsoße.",
			ingredients_detailed: [
				{ ingred: "Klein geschnittenes Schweinefleisch" },
				{ ingred: "Geräucherter Käse" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "Grillsoße" },
			],
			price: "13",
			photo: "PiggyBurg",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam, Senf.",
		},
		{
			name: "HOT BURG",
			ingredients:
				"Rindfleischburger, Zwiebeln, Tomate, Salat, Speck, Käse, 'nduja.",
			ingredients_detailed: [
				{
					ingred: "150 Gramm Rindfleischburger",
				},
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Tomate und Salat" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "Geschmolzener Käse" },
				{ ingred: "'nduja" },
			],
			price: "12",
			photo: "HotBurg",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam.",
		},
		{
			name: "MONTEBORE BURG",
			ingredients:
				"Rindfleischburger, Montebore, Zwiebeln, Paprika, Speck, Alkoholsoße.",
			ingredients_detailed: [
				{ ingred: "150 Gramm Rindfleischburger" },
				{ ingred: "Käse Montebore" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Paprika" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "Alkoholsoße" },
			],
			price: "14",
			photo: "MonteboreBurg",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam.",
		},
		{
			name: "UOVO BURG",
			ingredients: "Rindfleischburger, Spiegelei, Zwiebeln, Speck, Käse.",
			ingredients_detailed: [
				{ ingred: "150 Gramm Rindfleischburger" },
				{ ingred: "Spiegelei" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "Geschmolzener Käse" },
			],
			price: "12",
			photo: "UovoBurg",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam.",
		},

		{
			name: "POLLO",
			ingredients:
				"Paniertes Hünchen, Zwiebeln, Tomate, Salat, Speck, Käse.",
			ingredients_detailed: [
				{ ingred: "Paniertes Hünchen" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Tomate und Salat" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "Geschmolzener Käse" },
			],
			price: "10",
			photo: "Pollo",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam.",
		},
		{
			name: "VEGETARIANO",
			ingredients:
				"Gegrilltes Gemüse, Zwiebeln, Brie, Tomate, Salat, Pilz Sauce.",
			ingredients_detailed: [
				{ ingred: "Gegrilltes Gemüse" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Käse Brie" },
				{ ingred: "Tomate und Salat" },
				{ ingred: "Pilz Sauce" },
			],
			price: "11",
			photo: "Vegetariano",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam, funghi.",
		},
	]);

	return (
		<SafeAreaView className="bg-[#212121] flex-1">
			<ScrollView className="px-4">
				{data.map((item, index) => (
					<HamburgerCard
						name={item.name}
						ingredients={item.ingredients}
						ingredients_detailed={item.ingredients_detailed}
						price={item.price}
						photo={item.photo}
						allergen={item.allergen}
						ingredienti={"Zutat"}
						contorno={"Beilage"}
						patate={"Gebackenen Kartoffeln"}
					/>
				))}
				<View className="pt-1 pb-2 items-center justify-center">
					<Text className="text-white text-center">
						Klicken Sie auf die Registerkarten für weitere
						Informationen!
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default MenuDeutsch;
