import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Italian from "./screens/ItalianScreen";
import English from "./screens/EnglishScreen";
// import Deutsch from "./screens/DeutschScreen";
// import Francais from "./screens/FrancaisScreen";
import MenuItalian from "./screens/MenuItalianScreen";
import MenuEnglish from "./screens/MenuEnglishScreen";
// import MenuDeutsch from "./screens/MenuDeutschScreen";
// import MenuFrancais from "./screens/MenuFrancaisScreen";
import DessertItalian from "./screens/DessertItalianScreen";
import DessertEnglish from "./screens/DessertEnglishScreen";
// import DessertDeutsch from "./screens/DessertDeutschScreen";
// import DessertFrancais from "./screens/DessertFrancaisScreen";
import DrinkItalian from "./screens/DrinkItalianScreen";
import DrinkEnglish from "./screens/DrinkEnglishScreen";
// import DrinkDeutsch from "./screens/DrinkDeutschScreen";
// import DrinkFrancais from "./screens/DrinkFrancaisScreen";
import WineItalian from "./screens/WineItalianScreen";
import WineEnglish from "./screens/WineEnglishScreen";
// import WineDeutsch from "./screens/WineDeutschScreen";
// import WineFrancais from "./screens/WineFrancaisScreen";
import HamburgerItalian from "./screens/HamburgerItalianScreen";
import HamburgerEnglish from "./screens/HamburgerEnglishScreen";
// import HamburgerDeutsch from "./screens/HamburgerDeutschScreen";
// import HamburgerFrancais from "./screens/HamburgerFrancaisScreen";
import HamburgerScreen from "./screens/HamburgerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	NativeWindStyleSheet.setOutput({
		default: "native",
	});
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Al caminetto"
					component={HomeScreen}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="Italian"
					component={Italian}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="English"
					component={English}
					options={{ title: "Al Caminetto" }}
				/>
				{/* <Stack.Screen
					name="Deutsch"
					component={Deutsch}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="Francais"
					component={Francais}
					options={{ title: "Al Caminetto" }}
				/> */}
				<Stack.Screen
					name="MenuItalian"
					component={MenuItalian}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="MenuEnglish"
					component={MenuEnglish}
					options={{ title: "Al Caminetto" }}
				/>
				{/* <Stack.Screen
					name="MenuDeutsch"
					component={MenuDeutsch}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="MenuFrancais"
					component={MenuFrancais}
					options={{ title: "Al Caminetto" }}
				/> */}
				<Stack.Screen
					name="DessertItalian"
					component={DessertItalian}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="DessertEnglish"
					component={DessertEnglish}
					options={{ title: "Al Caminetto" }}
				/>
				{/* <Stack.Screen
					name="DessertDeutsch"
					component={DessertDeutsch}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="DessertFrancais"
					component={DessertFrancais}
					options={{ title: "Al Caminetto" }}
				/> */}
				<Stack.Screen
					name="DrinkItalian"
					component={DrinkItalian}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="DrinkEnglish"
					component={DrinkEnglish}
					options={{ title: "Al Caminetto" }}
				/>
				{/* <Stack.Screen
					name="DrinkDeutsch"
					component={DrinkDeutsch}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="DrinkFrancais"
					component={DrinkFrancais}
					options={{ title: "Al Caminetto" }}
				/> */}
				<Stack.Screen
					name="WineItalian"
					component={WineItalian}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="WineEnglish"
					component={WineEnglish}
					options={{ title: "Al Caminetto" }}
				/>
				{/* <Stack.Screen
					name="WineDeutsch"
					component={WineDeutsch}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="WineFrancais"
					component={WineFrancais}
					options={{ title: "Al Caminetto" }}
				/> */}
				<Stack.Screen
					name="HamburgerItalian"
					component={HamburgerItalian}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="HamburgerEnglish"
					component={HamburgerEnglish}
					options={{ title: "Al Caminetto" }}
				/>
				{/* <Stack.Screen
					name="HamburgerDeutsch"
					component={HamburgerDeutsch}
					options={{ title: "Al Caminetto" }}
				/>
				<Stack.Screen
					name="HamburgerFrancais"
					component={HamburgerFrancais}
					options={{ title: "Al Caminetto" }}
				/> */}
				<Stack.Screen
					name="Hamburger"
					component={HamburgerScreen}
					options={{ title: "Al Caminetto" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
