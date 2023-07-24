import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerCard from "../components/HamburgerCard";

const MenuFrancais = () => {
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
			name: "PIGGY BURG",
			ingredients:
				"Porcelet déchiqueté, fromage fumé, oignons, bacon, sauce barbecue.",
			ingredients_detailed: [
				{ ingred: "Porcelet déchiqueté" },
				{ ingred: "Fromage fumé" },
				{ ingred: "Oignons caramélisés" },
				{ ingred: "Bacon croustillant" },
				{ ingred: "Sauce barbecue" },
			],
			price: "13",
			photo: "PiggyBurg",
			allergen: "Allergènes: gluten, œuf, lait, sésame, moutarde.",
		},
		{
			name: "HOT BURG",
			ingredients:
				"Burger de boeuf, oignons, tomate, salade, bacon, fromage, 'nduja.",
			ingredients_detailed: [
				{
					ingred: "Burger de bœuf de 150 grammes",
				},
				{ ingred: "Oignons caramélisés" },
				{ ingred: "Tomate et salade" },
				{ ingred: "Bacon croustillant" },
				{ ingred: "Fromage fondu" },
				{ ingred: "'nduja" },
			],
			price: "12",
			photo: "HotBurg",
			allergen: "Allergènes: gluten, œuf, lait, sésame.",
		},
		{
			name: "UOVO BURG",
			ingredients: "Burger de boeuf, œuf, oignons, bacon, fromage.",
			ingredients_detailed: [
				{ ingred: "Burger de bœuf de 150 grammes" },
				{ ingred: "œuf all'occhio di bue" },
				{ ingred: "Oignons caramélisés" },
				{ ingred: "Bacon croustillant" },
				{ ingred: "Fromage fondu" },
			],
			price: "12",
			photo: "UovoBurg",
			allergen: "Allergènes: gluten, œuf, lait, sésame.",
		},
		{
			name: "DOPPIO CHEDDAR",
			ingredients:
				"Burger de boeuf, oignons, bacon, cheddar double, sauce burger.",
			ingredients_detailed: [
				{ ingred: "Burger de bœuf de 150 grammes" },
				{ ingred: "Oignons caramélisés" },
				{ ingred: "Bacon croustillant" },
				{ ingred: "Cheddar double" },
				{ ingred: "Sauce burger" },
			],
			price: "12",
			photo: "DoppioCheddar",
			allergen: "Allergènes: gluten, œuf, lait, sésame, moutarde.",
		},
		{
			name: "POLLO",
			ingredients:
				"Poulet frit, oignons, tomate, salade, bacon, fromage.",
			ingredients_detailed: [
				{ ingred: "Poulet frit" },
				{ ingred: "Oignons caramélisés" },
				{ ingred: "Tomate et salade" },
				{ ingred: "Bacon croustillant" },
				{ ingred: "Fromage fondu" },
			],
			price: "10",
			photo: "Pollo",
			allergen: "Allergènes: gluten, œuf, lait, sésame.",
		},
		{
			name: "VEGETARIANO",
			ingredients:
				"Légumes grillés, oignons, Brie, tomate, salade, sauce aux cèpes.",
			ingredients_detailed: [
				{ ingred: "Légumes grillés" },
				{ ingred: "Oignons caramélisés" },
				{ ingred: "Fromage Brie" },
				{ ingred: "Tomate et salade" },
				{ ingred: "Sauce aux cèpes" },
			],
			price: "11",
			photo: "Vegetariano",
			allergen: "Allergènes: gluten, œuf, lait, sésame, champignons.",
		},
		{
			name: "MONTEBORE BURG",
			ingredients:
				"Burger de boeuf, Montebore, oignons, poivrons, bacon, sauce à l'alcool.",
			ingredients_detailed: [
				{ ingred: "Burger de bœuf de 150 grammes" },
				{ ingred: "Fromage Montebore" },
				{ ingred: "Oignons caramélisés" },
				{ ingred: "Poivrons" },
				{ ingred: "Bacon croustillant" },
				{ ingred: "Sauce à l'alcool" },
			],
			price: "14",
			photo: "MonteboreBurg",
			allergen: "Allergènes: gluten, œuf, lait, sésame.",
		},
	]);

	return (
		<SafeAreaView className="bg-[#212121] flex-1">
			<View className="flex-1 items-center">
				<ScrollView className="px-4">
					{data.map((item, index) => (
						<HamburgerCard
							name={item.name}
							ingredients={item.ingredients}
							ingredients_detailed={item.ingredients_detailed}
							price={item.price}
							photo={item.photo}
							allergen={item.allergen}
							ingredienti={"Ingrédients"}
							contorno={"Accompagnement"}
							patate={"Pommes de terre cuites"}
						/>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default MenuFrancais;
