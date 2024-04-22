import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

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

	const primi = [
		{ title: "Risotto with spring herbs, bacon and gorgonzola cheese", price: "8.00"},
		{ title: "Agnolotti with braised meat", price: "10.00"},
		{ title: "Taglierini with mushrooms", price: "10.00"},
	];
	
	const secondi = [
		{ title: "Mixed pork grill (salamella, sausage, ribs and meat skewer)", price: "12,00"},
		{ title: "Beef sliced, 300g", price: "15,00"},
		//{ title: "Veal tonnato", price: "10,00"},
		{ title: "Braised veal cheeks", price: "12,00"},
		{ title: "Roast veal nut", price: "9,00"},
		{ title: "Carpaccio with Montebore cheese", price: "9,00"},
	];	

	// const dessert = [
	// 	{ title: "Panna cotta", price: "5,00"},
	// 	{ title: "Tiramisù", price: "5,00"},
	// 	{ title: "Semifreddo al torroncino", price: "5,00"},
	// ];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">

					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							Starter
						</Text>
					</View>

					<View className="flex-row px-5 pb-3">
						<View className="flex-1 items-start justify-start">
							<Text className="text-white text-base">Mixed platter with:{`\n`}Salumi del Caminetto, Russian salad, 
							panissa, omelette, aubergines with basil and cheese flan.
							</Text>
						</View>
						<View className="justify-end">
							<Text className="text-white text-base"> € 10,00</Text>
						</View>
					</View>

					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							FIRST DISH
						</Text>
					</View>
					{/* Schema puntato per elencare i primi piatti*/}
					{primi.map((item, key) => (
							<View className="flex-row px-5 pb-3" key={key}>
							<View className="flex-1 items-start justify-start">
								<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
							</View>
							<View className="justify-end">
								<Text className="text-white text-base"> € {item.price}</Text>
							</View>
						</View>
						))}

					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							SECOND DISH
						</Text>
					</View>
					{/* Schema puntato per elencare i secondi piatti*/}
					{secondi.map((item, key) => (
							<View className="flex-row px-5 pb-3" key={key}>
							<View className="flex-1 items-start justify-start">
								<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
							</View>
							<View className="justify-end">
								<Text className="text-white text-base"> € {item.price}</Text>
							</View>
						</View>
						))}

					{/* <View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							DESSERT
						</Text>
					</View>
					{dessert.map((item, key) => (
							<View className="flex-row px-5 pb-3" key={key}>
							<View className="flex-1 items-start justify-start">
								<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
							</View>
							<View className="justify-end">
								<Text className="text-white text-base"> € {item.price}</Text>
							</View>
						</View>
						))} */}

			</ScrollView>
		</SafeAreaView>
	);
};

export default MenuEnglish;
