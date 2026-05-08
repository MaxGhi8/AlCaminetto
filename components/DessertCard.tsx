import { View, Text, Image } from "react-native";
import React from "react";

import {
	BunetImage,
	CheesecakeMandorleImage,
	CheesecakePistacchioImage,
	MeringaImage,
	TiramisuImage,
	GelatoFragoleImage,
	BavareseCaffeImage,
	BavareseCiliegieImage,
	CrostataFruttaImage,
	CheesecakeGianduiaLamponiImage,
	SfogliataImage,
	ZuppaIngleseImage,
	TortaMeleImage,
	CheesecakeLimoneImage,
	ZuccottoImage,
	PannacottaCaramelloImage,
	PannacottaFruttiBoscoImage,
} from "../assets";

const images: { [key: string]: any } = {
	Bunet: BunetImage,
	CheesecakeMandorle: CheesecakeMandorleImage,
	CheesecakePistacchio: CheesecakePistacchioImage,
	CheesecakeGianduiaLamponi: CheesecakeGianduiaLamponiImage,
	CheesecakeLimone: CheesecakeLimoneImage,
	Meringa: MeringaImage,
	Tiramisu: TiramisuImage,
	GelatoFragole: GelatoFragoleImage,
	BavareseCaffe: BavareseCaffeImage,
	BavareseCiliegie: BavareseCiliegieImage,
	CrostataFrutta: CrostataFruttaImage,
	Sfogliata: SfogliataImage,
	ZuppaInglese: ZuppaIngleseImage,
	TortaMele: TortaMeleImage,
	Zuccotto: ZuccottoImage,
	PannacottaCaramello: PannacottaCaramelloImage,
	PannacottaFruttiBosco: PannacottaFruttiBoscoImage,
};

interface DessertCardProps {
	photo: string;
	title: string;
	description: string;
	price: string;
}

const DessertCard = React.memo(
	({ photo, title, description, price }: DessertCardProps) => {
		return (
			<View
				className="mb-4 w-full rounded-2xl overflow-hidden border-[0.5px] border-[#333] bg-[#1A1A1A]"
				accessible={true}
				accessibilityLabel={`${title}, price: ${price} Euro`}
				accessibilityHint="Displays dessert details">
				<View className="flex-row">
					<View className="w-1/3 aspect-square">
						<Image
							source={images[photo]}
							className="w-full h-full"
							resizeMode="cover"
						/>
					</View>
					<View className="flex-1 p-4 justify-between">
						<View>
							<Text className="text-lg font-bold text-white mb-1">{title}</Text>
							<Text
								className="text-gray-400 text-xs leading-4"
								numberOfLines={3}>
								{description}
							</Text>
						</View>
						<Text className="text-white font-semibold self-end">€ {price}</Text>
					</View>
				</View>
			</View>
		);
	},
);

export default DessertCard;
