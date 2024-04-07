import { Text, SafeAreaView, ScrollView, View, ImageBackground, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HamburgerItalian from "./HamburgerItalianScreen";
import MenuItalian from "./MenuItalianScreen";
import DessertItalian from "./DessertItalianScreen";
import WineItalian from "./WineItalianScreen";
import DrinkItalian from "./DrinkItalianScreen";
import {SfondoMenu, SfondoHamburger, SfondoCantina, SfondoDessert, SfondoDrink} from "../assets";


const Italian = () => {
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

	const d = new Date(); // Get the current date

	return (
		<SafeAreaView className="bg-[#212121] flex-1 items-center justify-center">
			<ScrollView className="flex flex-col space-y-5 w-full px-4 max-w-screen-lg">

				{d.getDay() === 4 ?
				// Hambureger
				<View className="flex-1 w-full">
				<TouchableOpacity className="relative w-full rounded-3xl h-44 bg-[#1A1A1A]"
					onPress={ () => navigation.navigate("HamburgerItalian") }>
					<ImageBackground  className="absolute w-full h-full opacity-40 rounded-3xl"
						source={SfondoHamburger}
						imageStyle={{ borderRadius: 24}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Hamburger
						</Text>
					</View>
					</TouchableOpacity>
				</View>
				:
				// Menu
				<View className="flex-1 w-full">
					<TouchableOpacity className="w-full rounded-3xl"
					style={{
						backgroundColor: '#1A1A1A',
						height: 180,
						position: 'relative'
					}}
					onPress={() => navigation.navigate("MenuItalian" as never)}>
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
				</View>}

				{/* Dolci */}
				<View className="flex-1 w-full">
					<TouchableOpacity className="relative w-full rounded-3xl h-44 bg-[#1A1A1A]"
					onPress={ () => navigation.navigate("DessertItalian") }>
					<ImageBackground  className="absolute w-full h-full opacity-40 rounded-3xl"
						source={SfondoDessert}
						imageStyle={{ borderRadius: 24}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Dolci
						</Text>
					</View>
					</TouchableOpacity>
				</View>

				{/* Bevande */}
				<View className="flex-1 w-full">
				<TouchableOpacity className="relative w-full rounded-3xl h-44 bg-[#1A1A1A]"
					onPress={ () => navigation.navigate("DrinkItalian") }>
					<ImageBackground  className="absolute w-full h-full opacity-40 rounded-3xl"
						source={SfondoDrink}
						imageStyle={{ borderRadius: 24}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								Bevande
						</Text>
					</View>
					</TouchableOpacity>
				</View>

				{/* Cantina */}
				<View className="flex-1 w-full">
				<TouchableOpacity className="relative w-full rounded-3xl h-44 bg-[#1A1A1A]"
					onPress={ () => navigation.navigate("WineItalian") }>
					<ImageBackground  className="absolute w-full h-full opacity-40 rounded-3xl"
						source={SfondoCantina}
						imageStyle={{ borderRadius: 24}}
					/>
					<View className="flex-1 w-full items-center justify-center rounded-3xl">
						<Text className="text-4xl tracking-widest font-bold text-white">
								La nostra cantina
						</Text>
					</View>
					</TouchableOpacity>
				</View>

			</ScrollView>
		</SafeAreaView>
	);
};

export default Italian;
