import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const DrinkEnglish = () => {
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

	const bevande = [
		{ title: "Water 0,5L (still/sparkling)", price: "1,00"},
		{ title: "Water 1L (still/sparkling)", price: "2,00"},
		{ title: "Coca cola", price: "2,50"},
		{ title: "Coca cola zero", price: "2,50"},
		{ title: "Fanta", price: "2,50"},
		{ title: "Schweppes lemon", price: "2,50"},
		{ title: "Schweppes tonic", price: "2,50"},
		{ title: "Estathè (peach/lemon)", price: "1,00"},
		{ title: "Fruit juice (pear/peach/albicocca/ananas)", price: "2,50"},
		{ title: "Crodino", price: "2,50"},
		{ title: "Small light draft beer Menabrea 0,2L", price: "3,00"},
		{ title: "Big light draft beer Menabrea 0,4L", price: "4,00"},
		{ title: "Ceres beer 33cL", price: "4,00"},
		{ title: "Moretti beer 33cL", price: "3,50"},
		{ title: "Moretti beer 66cL", price: "6,00"},
	];


	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">

					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							DRINKS
						</Text>
					</View>
					{/* Schema puntato per elencare i dolci*/}
					{bevande.map((item, key) => (
							<View className="flex-row px-5 pb-3" key={key}>
							<View className="flex-1 items-start justify-start">
								<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
							</View>
							<View className="justify-end">
								<Text className="text-white text-base"> € {item.price}</Text>
							</View>
						</View>
						))}

			</ScrollView>
		</SafeAreaView>
	);
};

export default DrinkEnglish;
