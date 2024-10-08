import { Text, SafeAreaView, ScrollView, View } from "react-native";
import React, { useLayoutEffect } from "react";
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
		{
			title: "Risotto with beer and guanciale",
			price: "8,00",
		},
		// { title: "Fondue and cherry pansoti with butter and sage", price: "10,00" },
		//{ title: "Gnocchi with Montebore cream", price: "8,00" },
		{
			title: "Ravioli with milk cream, butter and sage",
			price: "10,00",
		},
		{
			title: "Fettuccine with mushrooms sauce",
			price: "10,00",
		},
		// { title: "Cherry lasagne", price: "9,00" },
		// { title: "Gnocchi with rabbit ragu and artichokes", price: "10,00" },
	];

	const secondi = [
		{ title: "Veal with tuna sauce", price: "10,00" },
		{
			title: "Mixed pork grill (salamella, sausage, ribs and meat skewer)",
			price: "12,00",
		},
		{ title: "English-style roast beef with black truffle", price: "13,00" },
		// { title: "Beef sliced, 300g", price: "15,00" },
		// { title: "Braised veal cheeks", price: "12,00" },
		{ title: "Baked veal nut", price: "9,00" },
	];

	// const dessert = [
	// 	{ title: "Panna cotta", price: "5,00"},
	// 	{ title: "Tiramisù", price: "5,00"},
	// 	{ title: "Semifreddo al torroncino", price: "5,00"},
	// ];

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center pb-3">
			<ScrollView className="w-full">
				<View className="items-center justify-center flex-1 pb-3">
					<Text className="mt-4 text-2xl font-bold text-white">Starter</Text>
				</View>

				<View className="flex-row px-5 pb-3">
					<View className="items-start justify-start flex-1">
						<Text className="text-base text-white">
							Mixed platter with:{`\n`}Caminetto's cold cuts, Russian salad,
							soused zucchinis, savoury pie, herb omelette and panissa.
						</Text>
					</View>
					<View className="justify-end">
						<Text className="text-base text-white"> € 10,00</Text>
					</View>
				</View>

				<View className="items-center justify-center flex-1 pb-3">
					<Text className="mt-4 text-2xl font-bold text-white">FIRST DISH</Text>
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
					<Text className="mt-4 text-2xl font-bold text-white">
						SECOND DISH
					</Text>
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
						))} */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default MenuEnglish;
