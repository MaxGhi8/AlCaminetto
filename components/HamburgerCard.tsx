import {
	View,
	Text,
	TouchableOpacity,
	Image,
	LayoutAnimation,
	Platform,
	UIManager,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
	DoppioCheddarImage,
	HotBurgImage,
	MonteboreBurgImage,
	UDuppio2Image,
	PiggyBurgImage,
	PolloImage,
	UovoBurgImage,
	VegetarianoImage,
	HotDogClassicImage,
	PistacchiottoImage,
} from "../assets";

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const images = {
	DoppioCheddar: DoppioCheddarImage,
	HotBurg: HotBurgImage,
	Vegetariano: VegetarianoImage,
	UovoBurg: UovoBurgImage,
	MonteboreBurg: MonteboreBurgImage,
	UDuppio2: UDuppio2Image,
	PiggyBurg: PiggyBurgImage,
	Pollo: PolloImage,
	HotDogClassic: HotDogClassicImage,
	Pistacchiotto: PistacchiottoImage,
};

const HamburgerCard = React.memo(
	({
		name,
		ingredients,
		ingredients_detailed,
		price,
		photo,
		allergen,
		ingredienti,
		contorno,
		patate,
	}: {
		name: string;
		ingredients: string;
		ingredients_detailed: { ingred: string }[];
		price: string;
		photo: string;
		allergen: string;
		ingredienti: string;
		contorno: string;
		patate: string;
	}) => {
		const [expanded, setExpanded] = useState(false);

		const toggleExpand = () => {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
			setExpanded(!expanded);
		};

		return (
			<View className="mb-4 mx-2">
				<TouchableOpacity
					activeOpacity={0.9}
					className={`rounded-2xl border-[0.5px] border-[#333] bg-[#1A1A1A] overflow-hidden ${expanded ? "shadow-2xl" : ""}`}
					onPress={toggleExpand}
					accessibilityRole="button"
					accessibilityState={{ expanded }}
					accessibilityLabel={`${name}, ${price} Euro. Tap to ${expanded ? "collapse" : "expand"} details.`}
					style={{ elevation: expanded ? 8 : 0 }}>
					{/* Header Section: Always Visible */}
					<View className="p-4 flex-row justify-between items-center">
						<View className="flex-1 pr-4">
							<Text className="text-xl font-extrabold text-white tracking-tight mb-1">
								{name}
							</Text>
							{!expanded && (
								<Text
									className="text-gray-400 text-sm leading-5"
									numberOfLines={2}>
									{ingredients}
								</Text>
							)}
						</View>
						<View className="items-end">
							<Text className="text-white font-bold text-lg mb-1">
								{price} €
							</Text>
							<Feather
								name={expanded ? "chevron-up" : "chevron-down"}
								size={20}
								color="#666"
							/>
						</View>
					</View>

					{/* Expanded Content Section */}
					{expanded && (
						<View className="px-4 pb-6">
							{/* Featured Image */}
							<View className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-[#252525]">
								<Image
									source={images[photo as keyof typeof images]}
									className="w-full h-full"
									resizeMode="contain"
								/>
							</View>

							{/* Ingredients Section */}
							<View className="mb-6">
								<Text className="text-gray-500 text-xs font-black uppercase tracking-[2px] mb-4">
									{ingredienti}
								</Text>
								<View className="space-y-3">
									{ingredients_detailed.map((item, index) => (
										<View key={index} className="flex-row items-start">
											<View className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3" />
											<Text className="text-white text-base leading-6 flex-1">
												{item.ingred}
											</Text>
										</View>
									))}
								</View>
							</View>

							{/* Bottom Details (Side & Allergens) */}
							<View className="pt-5 border-t border-[#292929]">
								<View className="flex-row items-baseline mb-3">
									<Text className="text-gray-500 text-xs font-bold uppercase tracking-wider mr-2">
										{contorno}:
									</Text>
									<Text className="text-gray-300 text-sm italic">{patate}</Text>
								</View>
								<Text className="text-gray-600 text-[11px] leading-4">
									{allergen}
								</Text>
							</View>
						</View>
					)}
				</TouchableOpacity>
			</View>
		);
	},
);

export default HamburgerCard;
