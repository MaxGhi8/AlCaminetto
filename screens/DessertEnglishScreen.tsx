import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const DessertEnglish = () => {
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

	const dessert = [
		{ title: "Coffee tiramisu", price: "5,00"},
		{ title: "Pistachio cheesecake", price: "5,00"},
		{ title: "Amaretti and chocolate bunet", price: "5,00"},
		// { title: "Strawberry bavarian cream", price: "5,00"},
		{title: "Meringue filled with ice cream, cream and strawberries", price: "5,00"},
	];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">
					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							DESSERTS
						</Text>
					</View>
					{/* Schema puntato per elencare i dolci*/}
					{dessert.map((item, key) => (
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

export default DessertEnglish;