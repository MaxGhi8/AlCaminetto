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
		{
			title: "Risotto con zucchine, pancetta affumicata e pecorino",
			price: "8,00",
		},
		{ title: "Fettuccine con sugo di funghi", price: "10,00" },
		// { title: "Agnolotti al brasato", price: "10,00" },
		{
			title: "Ravioloni di grano saraceno al pomodoro e basilico",
			price: "10,00",
		},
		// { title: "Lasagne alle ciliegie", price: "9,00" },
		// { title: "Gnocchi con ragù di coniglio e carciofi", price: "10,00" },
	];

	const secondi = [
		{ title: "Vitello tonnato", price: "10,00" },
		{
			title:
				"Grigliata mista di maiale (salamino, salsiccia, costina e spiedino)",
			price: "12,00",
		},
		// { title: "Tagliata di manzo, 300g", price: "15,00" },
		// { title: "Carpaccio con formaggio Grattone", price: "10,00" },
		{ title: "Guance di manzo brasate", price: "12,00" },
		{ title: "Noce di vitello al forno", price: "9,00" },
	];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">
				<View className="items-center justify-center flex-1 pb-3">
					<Text className="mt-4 text-2xl font-bold text-white">ANTIPASTO</Text>
				</View>

				<View className="flex-row px-5 pb-3">
					<View className="items-start justify-start flex-1">
						<Text className="text-base text-white">
							Piatto misto con:{`\n`}Salumi del Caminetto, insalata russa,
							panissa, melanzane al basilico, mini flan agli asparagi, zucchine
							in carpione e torta salata calda.
						</Text>
					</View>
					<View className="justify-end">
						<Text className="text-base text-white"> € 10,00</Text>
					</View>
				</View>

				<View className="items-center justify-center flex-1 pb-3">
					<Text className="mt-4 text-2xl font-bold text-white">PRIMI</Text>
				</View>
				{/* Schema puntato per elencare i primi piatti*/}
				{primi.map((item, key) => (
					<View className="flex-row px-5 pb-3" key={key}>
						<View className="items-start justify-start flex-1">
							<Text className="text-base text-white">
								{"\u2022"} {item.title}
							</Text>
						</View>
						<View className="justify-end">
							<Text className="text-base text-white"> € {item.price}</Text>
						</View>
					</View>
				))}

				<View className="items-center justify-center flex-1 pb-3">
					<Text className="mt-4 text-2xl font-bold text-white">SECONDI</Text>
				</View>
				{/* Schema puntato per elencare i secondi piatti*/}
				{secondi.map((item, key) => (
					<View className="flex-row px-5 pb-3" key={key}>
						<View className="items-start justify-start flex-1">
							<Text className="text-base text-white">
								{"\u2022"} {item.title}
							</Text>
						</View>
						<View className="justify-end">
							<Text className="text-base text-white"> € {item.price}</Text>
						</View>
					</View>
				))}

				{/* <View className="items-center justify-center flex-1 pb-3">
						<Text className="mt-4 text-2xl font-bold text-white">
							DESSERT
						</Text>
					</View>
					{dessert.map((item, key) => (
							<View className="flex-row px-5 pb-3" key={key}>
							<View className="items-start justify-start flex-1">
								<Text className="text-base text-white">{'\u2022'} {item.title}</Text>
							</View>
							<View className="justify-end">
								<Text className="text-base text-white"> € {item.price}</Text>
							</View>
						</View>
						))}
 */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default MenuItalian;
