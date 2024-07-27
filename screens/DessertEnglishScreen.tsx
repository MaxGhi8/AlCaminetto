import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DessertCard from "../components/DessertCard";

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
		{
			photo: "Tiramisu",
			title: "Tiramisu",
			description: "Tiramisu with coffee and Savoiardi",
			price: "5,00",
		},
		{
			photo: "TortaMele",
			title: "Apple pie",
			description: "Shortcrust pastry cake with apples",
			price: "5,00",
		},
		// {
		// 	photo: "Sfogliata",
		// 	title: "Sfogliata",
		// 	description: "Sfogliata with pastry cream",
		// 	price: "5,00",
		// },
		// {
		// 	photo: "CrostataFrutta",
		// 	title: "Fruit tart",
		// 	description: "Fruit tart with pastry cream",
		// 	price: "5,00",
		// },
		// {
		// 	photo: "CheesecakeGianduiaLamponi",
		// 	title: "Cheesecake",
		// 	description: "Cheesecake with gianduia chocolate",
		// 	price: "5,00",
		// },
		// {
		// 	photo: "CheesecakePistacchio",
		// 	title: "Cheesecake",
		// 	description: "Pistachio cheesecake with pistachio grains",
		// 	price: "5,00",
		// },
		//{
		//photo: "CheesecakeMandorle",
		//title: "Cheesecake",
		//description:
		//"Cheesecake with white chocolate, almonds and hazelnut crumbs",
		//price: "5,00",
		//},
		// {
		// photo: "BavareseCaffe",
		// title: "Bavarese",
		// description: "Coffee Bavarian cream",
		// price: "5,00",
		// },
		// {
		// 	photo: "BavareseCiliegie",
		// 	title: "Bavarese",
		// 	description: "Bavarian cream with cherries",
		// 	price: "5,00",
		// },
		{
			photo: "Bunet",
			title: "Bunet",
			description: "Bunet with macaroons and chocolate",
			price: "5,00",
		},
		{
			photo: "Meringa",
			title: "Meringaue",
			description: "Meringue filled with ice cream, cream and fresh fruits",
			price: "5,00",
		},
		//{
		//photo: "GelatoFragole",
		//title: "Ice cream",
		//description: "Cup of ice cream with strawberries",
		//price: "5,00",
		//},
		{
			photo: "ZuppaInglese",
			title: "Zuppa Inglese",
			description: "Zuppa Inglese with chocolate and custard",
			price: "5,00",
		},
	];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<View className="items-center pb-3">
				<Text className="mt-4 text-2xl font-bold text-white">DESSERTS</Text>
			</View>
			{/* Schema puntato per elencare i dolci*/}
			{/* {dessert.map((item, key) => (
					<View className="flex-row px-5 pb-3" key={key}>
					<View className="items-start justify-start flex-1">
						<Text className="text-base text-white">{'\u2022'} {item.title}</Text>
					</View>
					<View className="justify-end">
						<Text className="text-base text-white"> € {item.price}</Text>
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

export default DessertEnglish;
