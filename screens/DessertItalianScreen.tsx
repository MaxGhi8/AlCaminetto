import { Text, SafeAreaView, ScrollView, View, Image} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DessertCard from "../components/DessertCard";

const DessertItalian = () => {
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
		{ photo: "Tiramisu", title: "Tiramisù", description: "Tiramisu al caffè con Savoiardi", price: "5,00"},
		//{ photo: "CheesecakePistacchio", title: "Cheesecake", description: "Cheesecake al pistacchio con granella di pistacchio", price: "5,00"},
		{ photo: "CheesecakeMandorle", title: "Cheesecake", description: "Cheesecake con cioccolato bianco, mandorle e granella di nocciole", price: "5,00"},
		{ photo: "Bunet", title: "Bunet", description: "Bunet con amaretti e cioccolato", price: "5,00"},
		{ photo: "Meringa", title: "Meringa", description: "Meringa ripiena di gelato, panna e fragole", price: "5,00"},
		{ photo: "GelatoFragole", title: "Gelato", description: "Coppa di gelato con fragole", price: "5,00"},		
	];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<View className="items-center pb-3">
				<Text className="text-white text-2xl font-bold mt-4">
					DOLCI
				</Text>
			</View>
			{/* Schema puntato per elencare i dolci*/}
			{ /* {dessert.map((item, key) => (
					<View className="flex-row px-5 pb-3" key={key}>
					<View className="flex-1 items-start justify-start">
						<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
					</View>
					<View className="justify-end">
						<Text className="text-white text-base"> € {item.price}</Text>
					</View>
				</View>
				))} */}
			
			{/* Dolci con foto */}
			<ScrollView className="flex-1 px-3">
				{dessert.map((item, key) => (
					<DessertCard
						key={key}
						photo={item.photo}
						title={item.title}
						description={item.description}
						price={item.price}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default DessertItalian;