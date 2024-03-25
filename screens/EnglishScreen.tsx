import { Text, SafeAreaView, ScrollView, View, ImageBackground, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerEnglish from "./HamburgerEnglishScreen";
import MenuEnglish from "./MenuEnglishScreen";
import DessertEnglish from "./DessertEnglishScreen";
import WineEnglish from "./WineEnglishScreen";
import DrinkEnglish from "./DrinkEnglishScreen";
import {SfondoMenu, SfondoHamburger, SfondoCantina, SfondoDessert, SfondoDrink} from "../assets";


const English = () => {
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


	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center">
			<ScrollView className="flex flex-col space-y-5 w-full px-4 max-w-screen-lg">

				{/* Menu */}
				{/* <View className="flex-1 w-full">
					<TouchableOpacity className="w-full rounded-3xl"
					style={{
						backgroundColor: '#1A1A1A',
						height: 180,
						position: 'relative'
					}}
					onPress={() => navigation.navigate(MenuEnglish)}>
					<ImageBackground  className="w-full"
						source={SfondoMenu}
						imageStyle={{ borderRadius: 24}}
						style={{
						height: 180,
						opacity: 0.35,
						position: 'absolute',
						}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Menù
						</Text>
					</View>
					</TouchableOpacity>
				</View> */}

				{/* Hamburger */}
				<View className="flex-1 w-full">
					<TouchableOpacity className="w-full rounded-3xl"
					style={{
						backgroundColor: '#1A1A1A',
						height: 180,
						position: 'relative'
					}}
					onPress={() => navigation.navigate(HamburgerEnglish)}>
					<ImageBackground  className="w-full"
						source={SfondoHamburger}
						imageStyle={{ borderRadius: 24}}
						style={{
						height: 180,
						opacity: 0.35,
						position: 'absolute',
						}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Hamburger
						</Text>
					</View>
					</TouchableOpacity>
				</View>

				{/* Dolci */}
				<View className="flex-1 w-full">
					<TouchableOpacity className="w-full rounded-3xl"
					style={{
						backgroundColor: '#1A1A1A',
						height: 180,
						position: 'relative'
					}}
					onPress={() => navigation.navigate(DessertEnglish)}>
					<ImageBackground  className="w-full"
						source={SfondoDessert}
						imageStyle={{ borderRadius: 24}}
						style={{
						height: 180,
						opacity: 0.35,
						position: 'absolute',
						}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Dessert
						</Text>
					</View>
					</TouchableOpacity>
				</View>

				{/* Bevande */}
				<View className="flex-1 w-full">
					<TouchableOpacity className="w-full rounded-3xl"
					style={{
						backgroundColor: '#1A1A1A',
						height: 180,
						position: 'relative'
					}}
					onPress={() => navigation.navigate(DrinkEnglish)}>
					<ImageBackground  className="w-full"
						source={SfondoDrink}
						imageStyle={{ borderRadius: 24}}
						style={{
						height: 180,
						opacity: 0.35,
						position: 'absolute',
						}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Drinks
						</Text>
					</View>
					</TouchableOpacity>
				</View>

				{/* Cantina */}
				<View className="flex-1 w-full">
					<TouchableOpacity className="w-full rounded-3xl"
					style={{
						backgroundColor: '#1A1A1A',
						height: 180,
						position: 'relative'
					}}
					onPress={() => navigation.navigate(WineEnglish)}>
					<ImageBackground  className="w-full"
						source={SfondoCantina}
						imageStyle={{ borderRadius: 24}}
						style={{
						height: 180,
						opacity: 0.35,
						position: 'absolute',
						}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Winery
						</Text>
					</View>
					</TouchableOpacity>
				</View>

			</ScrollView>
		</SafeAreaView>
	);
};

export default English;
