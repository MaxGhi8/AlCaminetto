import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerCard from "../components/HamburgerCard";

const MenuEnglish = () => {
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
				"Pulled pork, smoked cheese, onions, bacon, BBQ sauce.",
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
			name: "HOT BURG",
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
			price: "12",
			photo: "HotBurg",
			allergen: "Allergen: gluten, egg, milk, sesame.",
		},
		{
			name: "UOVO BURG",
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
		{
			name: "DOPPIO CHEDDAR",
			ingredients:
				"Beef burger, onions, bacon, double cheddar, burger sauce.",
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
			name: "POLLO",
			ingredients:
				"Fried chicken, onions, tomato, lettuce, bacon, cheese.",
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
			name: "MONTEBORE BURG",
			ingredients:
				"Beef burger, Montebore, onions, peppers, bacon, alcohol sauce.",
			ingredients_detailed: [
				{ ingred: "150 gram beef burger" },
				{ ingred: "Montebore cheese" },
				{ ingred: "Stewed onions" },
				{ ingred: "Peppers" },
				{ ingred: "Crispy bacon" },
				{ ingred: "Alcohol sauce" },
			],
			price: "14",
			photo: "MonteboreBurg",
			allergen: "Allergen: gluten, egg, milk, sesame.",
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
							ingredienti={"Ingredients"}
							contorno={"Side dish"}
							patate={"Baked potatoes"}
						/>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default MenuEnglish;
