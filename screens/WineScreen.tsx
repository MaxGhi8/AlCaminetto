import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const WineScreen = () => {
	const navigation = useNavigation();
	const route = useRoute();
	const isItalian = route.name === "WineItalian";

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
	}, [navigation]);

	const labels = {
		mainTitle: isItalian ? "LA NOSTRA CANTINA" : "Winery",
		redTitle: isItalian ? "Vini Rossi:" : "Red wine:",
		whiteTitle: isItalian ? "Vini Bianchi:" : "White wine:",
		bulkTitle: isItalian ? "Vini sfusi in caraffa:" : "Bulk wine:",
	};

	const vini_rossi = [
		{
			title: "Croatina 'Romba'",
			year: "2021",
			prod: "La Colombera",
			origin: "Terre Derthona",
			price: "16,00",
		},
		{
			title: "Dolcetto",
			year: "2021",
			prod: "La Colombera",
			origin: "Terre Derthona",
			price: "15,00",
		},
		{
			title: "Barbera 'Canvera'",
			year: "2021",
			prod: "Cascina Giambolino",
			origin: "Terre Derthona",
			price: "13,00",
		},
		{
			title: "Barbera 'Territorio'",
			year: "2020",
			prod: "Claudio Mariotto",
			origin: "Terre Derthona",
			price: "18,00",
		},
		{
			title: "Barbera 'Pra Dü Riva'",
			year: "2021",
			prod: "Az. Agricola Le Praie",
			origin: "Terre Derthona",
			price: "15,00",
		},
		{
			title: "Freisa 'Braghè'",
			year: "2020",
			prod: "Claudio Mariotto",
			origin: "Terre Derthona",
			price: "17,00",
		},
		{
			title: "Bonarda frizzante",
			year: "2021",
			prod: "Az. Agricola Prago",
			origin: "Oltrepò pavese",
			price: "15,00",
		},
		{
			title: "Barbera",
			year: "2021",
			prod: "Az. Agricola Prago",
			origin: "Oltrepò pavese",
			price: "15,00",
		},
		{
			title: "Gutturnio frizzante",
			year: "2021",
			prod: "Az. Agricola Passerini",
			origin: "Colli piacentini",
			price: "15,00",
		},
	];

	const vini_bianchi = [
		{
			title: "Timorasso 'Derthona'",
			year: "2021",
			prod: "La Colombera",
			origin: "Terre Derthona",
			price: "20,00",
		},
		{
			title: "Cortese 'Bricco'",
			year: "2021",
			prod: "La Colombera",
			origin: "Terre Derthona",
			price: "15,00",
		},
		{
			title: "Cortese 'Meo' frizzante",
			year: "2021",
			prod: "La Colombera",
			origin: "Terre Derthona",
			price: "15,00",
		},
		{
			title: "Timorasso 'Il Montino'",
			year: "2021",
			prod: "La Colombera",
			origin: "Terre Derthona",
			price: "35,00",
		},
		{
			title: "Timorasso 'Derthona'",
			year: "2020",
			prod: "Claudio Mariotto",
			origin: "Terre Derthona",
			price: "25,00",
		},
		{
			title: "Pinot nero frizzante",
			year: "2022",
			prod: "Az. Agricola Prago",
			origin: "Oltrepò pavese",
			price: "15,00",
		},
		{
			title: "Pinot vino spumante extra dry",
			year: "2022",
			prod: "Az. Agricola Prago",
			origin: "Oltrepò pavese",
			price: "16,00",
		},
		{
			title: "Riesling",
			year: "2022",
			prod: "Az. Agricola Prago",
			origin: "Oltrepò pavese",
			price: "13,00",
		},
		{
			title: "Ortugo frizzante",
			year: "2022",
			prod: "Az. Agricola Passerini",
			origin: "Colli piacentini",
			price: "13,00",
		},
	];

	const prosecchi = [{ title: "Prosecco 'Glera extra dry'", price: "18,00" }];

	const vini_sfusi = isItalian
		? [
				{ title: "Rosso Barbera 0,25L", price: "3,00" },
				{ title: "Rosso Barbera 0,5L", price: "6,00" },
				{ title: "Bianco Cortese 0,25L", price: "4,00" },
				{ title: "Bianco Cortese 0,5L", price: "7,00" },
				{ title: "Calice di vino", price: "4,00" },
			]
		: [
				{ title: "Red Barbera 0,25L", price: "3,00" },
				{ title: "Red Barbera 0,5L", price: "6,00" },
				{ title: "White Cortese 0,25L", price: "4,00" },
				{ title: "White Cortese 0,5L", price: "7,00" },
				{ title: "Wine glass", price: "4,00" },
			];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">
				<View className="items-center justify-center flex-1 pb-3">
					<Text className="mt-6 mb-8 text-3xl font-bold text-center text-white">
						{labels.mainTitle}
					</Text>
				</View>

				{/* Schema puntato per elencare i vini rossi*/}
				<View className="px-5">
					<Text className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
						{labels.redTitle}
					</Text>
				</View>
				{vini_rossi.map((item, key) => (
					<View className="flex-col w-full px-5 mb-6" key={key}>
						<View className="flex-row items-start justify-between">
							<View className="flex-1">
								<Text className="text-base font-medium text-white">
									{item.title}
								</Text>
							</View>
							<View className="justify-end">
								<Text className="text-base text-white">€ {item.price}</Text>
							</View>
						</View>
						<View className="flex-col">
							<Text className="text-sm text-gray-500">
								{item.prod}, {item.origin}
							</Text>
						</View>
					</View>
				))}

				{/* Schema puntato per elencare i vini bianchi*/}
				<View className="px-5 mt-4">
					<Text className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
						{labels.whiteTitle}
					</Text>
				</View>
				{vini_bianchi.map((item, key) => (
					<View className="flex-col w-full px-5 mb-6" key={key}>
						<View className="flex-row items-start justify-between">
							<View className="flex-1">
								<Text className="text-base font-medium text-white">
									{item.title}
								</Text>
							</View>
							<View className="justify-end">
								<Text className="text-base text-white">€ {item.price}</Text>
							</View>
						</View>
						<View className="flex-col">
							<Text className="text-sm text-gray-500">
								{item.prod}, {item.origin}
							</Text>
						</View>
					</View>
				))}
				{prosecchi.map((item, key) => (
					<View className="flex-row px-5 mb-6" key={key}>
						<View className="items-start justify-start flex-1">
							<Text className="text-base font-medium text-white">
								{item.title}
							</Text>
						</View>
						<View className="justify-end">
							<Text className="text-base text-white">€ {item.price}</Text>
						</View>
					</View>
				))}

				{/* Schema puntato per elencare i vini sfusi*/}
				<View className="px-5 mt-4">
					<Text className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
						{labels.bulkTitle}
					</Text>
				</View>
				{vini_sfusi.map((item, key) => (
					<View className="flex-row px-5 mb-6" key={key}>
						<View className="items-start justify-start flex-1">
							<Text className="text-base font-medium text-white">
								{item.title}
							</Text>
						</View>
						<View className="justify-end">
							<Text className="text-base text-white">€ {item.price}</Text>
						</View>
					</View>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

export default WineScreen;
