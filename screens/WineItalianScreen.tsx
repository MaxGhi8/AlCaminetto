import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const WineItalian = () => {
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
		{ title: "Croatina 'Romba'", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "13,00"},
		{ title: "Dolcetto", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "12,00"},
		{ title: "Barbera 'Vegia Rampana'", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "15,00"},

		{ title: "Barbera 'Canvera'", year:"2021", prod: "Cascina Giambolino", origin:"Terre Derthona", price: "12,00"},
		{ title: "Barbera 'Maior'", year:"2019", prod: "Cascina Giambolino", origin:"Terre Derthona", price: "18,00"},

		{ title: "Barbera 'Territorio'", year:"2020", prod: "Claudio Mariotto", origin:"Terre Derthona", price: "18,00"},
		{ title: "Barbera 'Poggio del Rosso'", year:"2016", prod: "Claudio Mariotto", origin:"Terre Derthona", price: "22,00"},

		{title: "Barbera 'Poggio delle Amarene'", year:"2016", prod: "Boveri Luigi", origin:"Terre Derthona", price: "20,00"},

		{ title: "Bonarda frizzante", year:"2021", prod: "Az.Agricola Prago", origin:"Oltrepò pavese", price: "12,00"},
		{ title: "Croatina dolce frizzante", year:"2021", prod: "Az.Agricola Prago", origin:"Oltrepò pavese", price: "13,00"},

		{ title: "Gutturnio frizzante", year:"2021", prod: "Az. Agricola Passerini", origin:"Colli piacentini", price: "13,00"},
		{ title: "Bonarda frizzante", year:"2021", prod: "Az. Agricola Passerini", origin:"Colli piacentini", price: "11,00"},

	];

	const vini_bianchi = [
		{ title: "Timorasso 'Derthona'", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "18,00"},
		{ title: "Cortese 'Bricco'", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "15,00"},
		{ title: "Cortese 'Meo' vivace", year:"2021", prod: "La Colombera", origin:"Terre Derthona", price: "15,00"},

		{ title: "Timorasso 'Derthona'", year:"2020", prod: "Claudio Mariotto", origin:"Terre Derthona", price: "20,00"},

		{ title: "Cortese 'Terre del prete' (fermo o vivace)", year:"2022", prod: "Boveri Luigi", origin:"Terre Derthona", price: "15,00"},
		
		{ title: "Pinot nero frizzante", year:"2022", prod: "Az.Agricola Prago", origin:"Oltrepò pavese", price: "15,00"},
		{title: "Chardonnay vivace", year:"2022", prod: "Az.Agricola Prago", origin:"Oltrepò pavese", price: "13,00"},

		{ title: "Ortugo frizzante", year:"2022", prod: "Az. Agricola Passerini", origin:"Colli piacentini", price: "13,00"},
	];

	const prosecchi = [
		{ title: "Prosecco 'Extra dry doc' millesimato", price: "22,00"},
		{ title: "Prosecco 'Glera extra dry'", price: "18,00"},
	];

	const vini_sfusi = [
		{title: "Rosso Barbera 0,25L", price: "3,00"},
		{title: "Rosso Barbera 0,5L", price: "6,00"},
		{title: "Bianco Cortese 0,25L", price: "4,00"},
		{title: "Bianco Cortese 0,5L", price: "7,00"},
		{title: "Calice di vino 0,25L", price: "4,00"},
	];


	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">
					<View className="flex-1 items-center justify-center pb-3">
						<Text className="text-white text-2xl font-bold mt-4">
							LA NOSTRA CANTINA
						</Text>
					</View>

					{/* Schema puntato per elencare i vini rossi*/}
					<View className="px-5 pb-2">
						<Text className="text-white font-bold text-2xl underline">
							Vini Rossi:
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
					<View className="px-5 py-2">
						<Text className="text-white font-bold text-2xl underline">
							Vini Bianchi:
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
					<View className="px-5 py-2">
						<Text className="text-white font-bold text-2xl underline">
							Vini sfusi in caraffa:
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

export default WineItalian;
