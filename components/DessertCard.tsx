import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
	BunetImage,
	CheesecakeMandorleImage,
	CheesecakePistacchioImage,
	MeringaImage,
	TiramisuImage,
	GelatoFragoleImage,
	BavareseCaffeImage,
	BavareseCiliegieImage,
} from "../assets";

const DessertCard = ({
	photo,
	title,
	description,
	price,
}: {
	photo: string;
	title: string;
	description: string;
	price: string;
}) => {
	const navigation = useNavigation();

	const images = {
		Bunet: BunetImage,
		CheesecakeMandorle: CheesecakeMandorleImage,
		CheesecakePistacchio: CheesecakePistacchioImage,
		Meringa: MeringaImage,
		Tiramisu: TiramisuImage,
		GelatoFragole: GelatoFragoleImage,
		BavareseCaffe: BavareseCaffeImage,
		BavareseCiliegie: BavareseCiliegieImage,
	};

	const windowWidth = Dimensions.get("window").width / 4;

	return (
		<View className="mt-3 flex-1 w-full rounded-lg px-3 border-2 border-[#292929] bg-[#1A1A1A] drop-shadow-xl">
			<View className="flex-row flex-1 pt-2">
				<Image
					source={images[photo]}
					className="items-center justify-center"
					style={{
						width: windowWidth,
						height: windowWidth,
						borderRadius: 10,
						maxWidth: 200,
					}}
				/>
				<View className="flex-col flex-1 pl-5">
					<View className="items-center justify-center pt-1">
						<Text className="text-xl font-bold text-white">{title}</Text>
					</View>
					<View className="items-start justify-center flex-1 pt-1">
						<Text className="flex-1 text-white">{description}</Text>
					</View>
					<View className="items-end justify-end pb-1">
						<Text className="text-white">€ {price}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default DessertCard;
