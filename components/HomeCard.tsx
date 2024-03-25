import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CountryFlag from "react-native-country-flag";

const HomeCard = ({
	title,
	flag,
	destination,
}: {
	title: string;
	flag: string;
	destination: string;
}) => {
	const navigation = useNavigation();

	return (
		<View className="flex-1 w-4/5 py-2">
			<TouchableOpacity
				className="rounded-lg px-3 py-5 border-2 border-[#292929] bg-[#1A1A1A] shadow"
				onPress={() => navigation.navigate(destination)}
			>
				<View className="flex-row space-x-16 justify-center items-center">
					<View>
						<CountryFlag isoCode={flag} size={26} />
					</View>
					<View>
						<Text className="text-2xl font-extrabold text-white">
							{title}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default HomeCard;
