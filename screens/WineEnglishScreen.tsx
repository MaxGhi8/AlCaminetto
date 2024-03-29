import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const WineEnglish = () => {
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

	const vini_rossi = [
		{ title: "Croatina 'Romba'", year:"2021", prod: "La Colombera", origin:"Terre 'Derthona'", price: "13,00"},
		{ title: "Dolcetto", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "12,00"},
		{ title: "Barbera 'Vegia Rampana'", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "15,00"},

		{ title: "Barbera 'Canvera'", year:"2021", prod: "Cascina Giambolino", origin:"Terre Derthona", price: "12,00"},
		{ title: "Barbera 'Maior'", year:"2019", prod: "Cascina Giambolino", origin:"Terre Derthona", price: "16,00"},

		{ title: "Barbera 'Territorio'", year:"2020", prod: "Claudio Mariotto", origin:"Terre Derthona", price: "15,00"},
		{ title: "Barbera 'Poggio del Rosso'", year:"2016", prod: "Claudio Mariotto", origin:"Terre Derthona", price: "20,00"},

		{ title: "Barbera frizzante", year:"2021", prod: "Az.Agricola Prago", origin:"Oltrepò pavese", price: "12,00"},
		{ title: "Croatina dolce frizzante", year:"2021", prod: "Az.Agricola Prago", origin:"Oltrepò pavese", price: "13,00"},

		{ title: "Gutturnio frizzante", year:"2021", prod: "Az. Agricola Passerini", origin:"Colli piacentini", price: "13,00"},
		{ title: "Bonarda frizzante", year:"2021", prod: "Az. Agricola Passerini", origin:"Colli piacentini", price: "11,00"},

	];

	const vini_bianchi = [
		{ title: "Timorasso 'Derthona'", year:"2021", prod: "La Colombera", origin:"Terre 'Derthona'", price: "18,00"},
		{ title: "Cortese 'Bricco'", year:"2021", prod: "La Colombera", origin:"Terre 'Derthona'", price: "15,00"},
		{ title: "Cortese 'Meo' frizzante", year:"2021", prod: "La Colombera", origin:"Terre 'Derthona'", price: "15,00"},

		{ title: "Timorasso 'Derthona' frizzante", year:"2020", prod: "Claudio Mariotto", origin:"Terre Derthona", price: "20,00"},

		{ title: "Pinot nero frizzante", year:"2022", prod: "Az.Agricola Prago", origin:"Oltrepò pavese", price: "15,00"},

		{ title: "Ortugo frizzante", year:"2022", prod: "Az. Agricola Passerini", origin:"Colli piacentini", price: "13,00"},
	];

	const prosecchi = [
		{ title: "Prosecco 'Extra dri doc' millesimato", price: "22,00"},
		{ title: "Prosecco 'Glera extra dry'", price: "18,00"},
	];

	const vini_sfusi = [
		{title: "Red Barbera 0,25L", price: "3,00"},
		{title: "Red Barbera 0,5L", price: "6,00"},
		{title: "White Cortese 0,25L", price: "4,00"},
		{title: "White Cortese 0,5L", price: "7,00"},
		{title: "Wine glass", price: "4,00"},
	];


	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">
					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							Winery
						</Text>
					</View>

					{/* Schema puntato per elencare i vini rossi*/}
					<View className="px-5 pb-2">
						<Text className="text-white font-bold text-xl underline">
							Red wine:
						</Text>
					</View>
					{vini_rossi.map((item, key) => (
						<View className="flex-col w-full px-5 pb-3" key={key}>
							<View className="flex-row items-start justify-start">
								<View className="flex-1">
									<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
								</View>
								<View className="justify-end">
									<Text className="text-white text-base"> € {item.price}</Text>
								</View>
							</View>
							<View className="flex-col pl-5">
								<Text className="text-white text-sm">{item.prod}, {item.origin}</Text>
							</View>
						</View>
						))}

					{/* Schema puntato per elencare i vini bianchi*/}
					<View className="px-5 pb-2">
						<Text className="text-white font-bold text-xl underline">
							White wine:
						</Text>
					</View>
					{vini_bianchi.map((item, key) => (
						<View className="flex-col w-full px-5 pb-3" key={key}>
							<View className="flex-row items-start justify-start">
								<View className="flex-1">
									<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
								</View>
								<View className="justify-end">
									<Text className="text-white text-base"> € {item.price}</Text>
								</View>
							</View>
							<View className="flex-col pl-5">
								<Text className="text-white text-sm">{item.prod}, {item.origin}</Text>
							</View>
						</View>
						))}
					{prosecchi.map((item, key) => (
							<View className="flex-row px-5 pb-3" key={key}>
							<View className="flex-1 items-start justify-start">
								<Text className="text-white text-base">{'\u2022'} {item.title}</Text>
							</View>
							<View className="justify-end">
								<Text className="text-white text-base"> € {item.price}</Text>
							</View>
						</View>
						))}

					{/* Schema puntato per elencare i vini sfusi*/}
					<View className="px-5 pb-2">
						<Text className="text-white font-bold text-xl underline">
							Bulk wine:
						</Text>
					</View>
					{vini_sfusi.map((item, key) => (
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

export default WineEnglish;
