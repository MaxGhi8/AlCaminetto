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
		{ title: "Risotto al timorasso", price: "8,00"},
		{ title: "Agnolotti al brasato", price: "10,00"},
		{ title: "Fettuccine coi funghi", price: "10,00"},
		{ title: "Penne al pomodoro", price: "7,00"},
	];

	const secondi = [
		{ title: "Grigliata mista", price: "12,00"},
		{ title: "Arrosto di vitello", price: "9,00"},
		{ title: "Vitello tonnato", price: "9,00"},
	];

	const dessert = [
		{ title: "Panna cotta", price: "5,00"},
		{ title: "Tiramisù", price: "5,00"},
		{ title: "Semifreddo al torroncino", price: "5,00"},
	];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">

					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							ANTIPASTO
						</Text>
					</View>

					<View className="flex-row px-5 pb-3">
						<View className="flex-1 items-start justify-start">
							<Text className="text-white text-base">Piatto misto con: salumi del Caminetto, insalata russa, tortino ai formagi, 
							frittatina alle erbe, panissa, mini flan agli asparagi.
							</Text>
						</View>
						<View className="justify-end">
							<Text className="text-white text-base"> € 10,00</Text>
						</View>
					</View>

					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							PRIMI
						</Text>
					</View>
					{/* Schema puntato per elencare i primi piatti*/}
					{primi.map((item, key) => (
							<View className="flex-row px-5 pb-3">
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
							SECONDI
						</Text>
					</View>
					{/* Schema puntato per elencare i secondi piatti*/}
					{secondi.map((item, key) => (
							<View className="flex-row px-5 pb-3">
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
							DESSERT
						</Text>
					</View>
					{/* Schema puntato per elencare i dolci*/}
					{dessert.map((item, key) => (
							<View className="flex-row px-5 pb-3">
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

export default MenuEnglish;
