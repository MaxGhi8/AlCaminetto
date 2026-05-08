import {
	Text,
	SafeAreaView,
	ScrollView,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	SfondoHamburger,
	SfondoCantina,
	SfondoDessert,
	SfondoDrink,
} from "../assets";

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
			<ScrollView className="flex flex-col w-full max-w-screen-lg px-4 pt-4">
				<View className="space-y-6">
					{/* Hamburger */}
					<View className="flex-1 w-full">
						<TouchableOpacity
							className="relative w-full rounded-2xl h-44 bg-[#1A1A1A] border-[0.5px] border-[#333]"
							onPress={() => navigation.navigate("HamburgerEnglish" as never)}>
							<ImageBackground
								className="absolute w-full h-full opacity-40 rounded-2xl"
								source={SfondoHamburger}
								imageStyle={{ borderRadius: 16 }}
							/>
							<View className="items-center justify-center flex-1 w-full rounded-2xl">
								<Text className="text-4xl font-bold tracking-widest text-white">
									Hamburger
								</Text>
							</View>
						</TouchableOpacity>
					</View>

					{/* Dolci */}
					<View className="flex-1 w-full">
						<TouchableOpacity
							className="relative w-full rounded-2xl h-44 bg-[#1A1A1A] border-[0.5px] border-[#333]"
							onPress={() => navigation.navigate("DessertEnglish" as never)}>
							<ImageBackground
								className="absolute w-full h-full opacity-40 rounded-2xl"
								source={SfondoDessert}
								imageStyle={{ borderRadius: 16 }}
							/>
							<View className="items-center justify-center flex-1 w-full rounded-2xl">
								<Text className="text-4xl font-bold tracking-widest text-white">
									Desserts
								</Text>
							</View>
						</TouchableOpacity>
					</View>

					{/* Bevande */}
					<View className="flex-1 w-full">
						<TouchableOpacity
							className="relative w-full rounded-2xl h-44 bg-[#1A1A1A] border-[0.5px] border-[#333]"
							onPress={() => navigation.navigate("DrinkEnglish" as never)}>
							<ImageBackground
								className="absolute w-full h-full opacity-40 rounded-2xl"
								source={SfondoDrink}
								imageStyle={{ borderRadius: 16 }}
							/>
							<View className="items-center justify-center flex-1 w-full rounded-2xl">
								<Text className="text-4xl font-bold tracking-widest text-white">
									Drinks
								</Text>
							</View>
						</TouchableOpacity>
					</View>

					{/* Cantina */}
					<View className="flex-1 w-full mb-6">
						<TouchableOpacity
							className="relative w-full rounded-2xl h-44 bg-[#1A1A1A] border-[0.5px] border-[#333]"
							onPress={() => navigation.navigate("WineEnglish" as never)}>
							<ImageBackground
								className="absolute w-full h-full opacity-40 rounded-2xl"
								source={SfondoCantina}
								imageStyle={{ borderRadius: 16 }}
							/>
							<View className="items-center justify-center flex-1 w-full rounded-2xl">
								<Text className="text-4xl font-bold tracking-widest text-white">
									Winery
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default English;
