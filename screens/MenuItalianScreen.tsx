import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

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

	const primi = [
		{ title: "Risotto alle erbette primaverili, speck e gorgonzola", price: "8,00"},
		{ title: "Agnolotti al brasato", price: "10,00"},
		{ title: "Taglierini ai funghi", price: "10,00"},
	];

	const secondi = [
		{ title: "Grigliata mista di maiale (salamino, salsiccia, costina e spiedini)", price: "12,00"},
		{ title: "Tagliata di manzo, 300g", price: "15,00"},
		//{ title: "Vitello tonnato", price: "10,00"},
		{ title: "Guance di vitello brasate", price: "12,00"},
		{ title: "Noce di vitello arrosto", price: "9,00"},
		{ title: "Carpaccio con Montebore", price: "9,00"},
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
							ANTIPASTO
						</Text>
					</View>

					<View className="flex-row px-5 pb-3">
						<View className="flex-1 items-start justify-start">
							<Text className="text-white text-base">Piatto misto con:{`\n`}Salumi del Caminetto, insalata russa,
							panissa, frittatina, melanzane al basilico e tortino al formaggio. 
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
							SECONDI
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
						))}
 */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default MenuItalian;
