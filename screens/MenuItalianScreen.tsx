import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerCard from "../components/HamburgerCard";

const MenuItalian = () => {
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
			name: "HOT BURG",
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
			name: "UOVO BURG",
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
		{
			name: "DOPPIO CHEDDAR",
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
		{
			name: "MONTEBORE BURG",
			ingredients:
				"Hamburger di manzo, Montebore, cipolle, peperoni, bacon, salsa alcolica.",
			ingredients_detailed: [
				{ ingred: "Hamburger di manzo da 150 grammi" },
				{ ingred: "Formaggio Montebore" },
				{ ingred: "Cipolle caramellate" },
				{ ingred: "Peperoni" },
				{ ingred: "Bacon croccante" },
				{ ingred: "Salsa alcolica" },
			],
			price: "14",
			photo: "MonteboreBurg",
			allergen: "Allergeni: glutine, uovo, latte, sesamo.",
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
							ingredienti={"Ingredienti"}
							contorno={"Contorno"}
							patate={"Patate al forno"}
						/>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default MenuItalian;
