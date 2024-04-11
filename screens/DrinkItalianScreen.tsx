import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const DrinkItalian = () => {
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
		{ title: "Acqua 0,5L (naturale/frizzante)", price: "1,00"},
		{ title: "Acqua 1L (naturale/frizzante)", price: "2,00"},
		{ title: "Coca cola", price: "2,50"},
		{ title: "Coca cola zero", price: "2,50"},
		{ title: "Fanta", price: "2,50"},
		{ title: "Sprite", price: "2,50"},
		{ title: "Schweppes al limone", price: "2,50"},
		{ title: "Schweppes tonica", price: "2,50"},
		{ title: "Estathè (pesca/limone)", price: "1,00"},
		{ title: "Succo di frutta (pera/pesca/albicocca/ananas)", price: "2,50"},
		{ title: "Crodino", price: "2,50"},
		{ title: "Birra alla spina Menabrea chiara piccola 0,2L", price: "3,00"},
		{ title: "Birra alla spina Menabrea chiara grande 0,4L", price: "4,00"},
		{ title: "Birra Ceres 33cL", price: "4,00"},
		{ title: "Birra Moretti 33cL", price: "3,50"},
		{ title: "Birra Moretti 66cL", price: "6,00"},
		{ title: "Birra 'kardinal' ambrata originale 50cL", price: "6,00"},
		{ title: "Amaro", price: "3,00"},
	];

	const caffe = [
		{ title: "Caffè", price: "1,00"},
		{ title: "Decaffeinato", price: "1,10"},
		{ title: "Cappuccino", price: "1,30"},
		{ title: "Ginseng", price: "1,10"},
		{ title: "Cioccolata calda", price: "3,00"},
		{ title: "Thè/infusi", price: "1,30"},
	];


	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">

					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							BEVANDE
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

					<View className="flex-1 items-center justify-center pt-3">
						<Text className="text-white text-2xl font-bold mt-4">
							CAFFE'
						</Text>
					</View>
					{/* Schema puntato per elencare i caffe*/}
					{caffe.map((item, key) => (
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

export default DrinkItalian;
