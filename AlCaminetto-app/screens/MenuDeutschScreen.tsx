import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { useLayoutEffect, useState } from "react";
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
				"Rindfleischburger, Zwiebeln, Speck, doppelter Cheddar, Burgersauce.",
			ingredients_detailed: [
				{ ingred: "150 Gramm Rindfleischburger" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "doppelter Cheddar" },
				{ ingred: "Burgersauce" },
			],
			price: "12",
			photo: "DoppioCheddar",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam, Senf.",
		},
		{
			name: "PIGGY BURG",
			ingredients:
				"Zerkleinertes Ferkel, geräucherter Käse, Zwiebeln, Speck, Grillsoße.",
			ingredients_detailed: [
				{ ingred: "Zerkleinertes Ferkel" },
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
				"Rindfleischburger, Montebore, Zwiebeln, Pfeffer, Speck, Alkoholsoße.",
			ingredients_detailed: [
				{ ingred: "150 Gramm Rindfleischburger" },
				{ ingred: "Käse Montebore" },
				{ ingred: "Gedünstete Zwiebeln" },
				{ ingred: "Pfeffer" },
				{ ingred: "Knuspriger Speck" },
				{ ingred: "Alkoholsoße" },
			],
			price: "14",
			photo: "MonteboreBurg",
			allergen: "Allergene: Gluten, Ei, Milch, Sesam.",
		},
		{
			name: "UOVO BURG",
			ingredients: "Rindfleischburger, Ei, Zwiebeln, Speck, Käse.",
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
				"Paniertes Hähnchen, Zwiebeln, Tomate, Salat, Speck, Käse.",
			ingredients_detailed: [
				{ ingred: "Paniertes Hähnchen" },
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
			</ScrollView>
		</SafeAreaView>
	);
};

export default MenuDeutsch;
