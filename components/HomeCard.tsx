import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Flag from "react-world-flags";

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
		<View className="flex-1 py-2">
			<TouchableOpacity
				className="flex-1 w-full rounded-lg px-3 py-4 border-2 border-[#292929] bg-[#1A1A1A] shadow"
				onPress={() => navigation.navigate(destination)}
			>
				<View className="flex-row space-x-16 justify-center">
					<View>
						<Flag
							code={flag}
							height="26"
							fallback={<span>Unknown</span>}
						/>
					</View>
					<View>
						<Text className="text-xl font-extrabold text-white">
							{title}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default HomeCard;
