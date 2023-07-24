import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MenuItalian from "./screens/MenuItalianScreen";
import MenuEnglish from "./screens/MenuEnglishScreen";
import MenuDeutsch from "./screens/MenuDeutschScreen";
import MenuFrancais from "./screens/MenuFrancaisScreen";
import HamburgerScreen from "./screens/HamburgerScreen";
import { StatusBar } from "react-native";

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
					options={{ title: "Al caminetto" }}
				/>
				<Stack.Screen
					name="MenuItalian"
					component={MenuItalian}
					options={{ title: "Al caminetto" }}
				/>
				<Stack.Screen
					name="MenuEnglish"
					component={MenuEnglish}
					options={{ title: "Al caminetto" }}
				/>
				<Stack.Screen
					name="MenuDeutsch"
					component={MenuDeutsch}
					options={{ title: "Al caminetto" }}
				/>
				<Stack.Screen
					name="MenuFrancais"
					component={MenuFrancais}
					options={{ title: "Al caminetto" }}
				/>
				<Stack.Screen
					name="Hamburger"
					component={HamburgerScreen}
					options={{ title: "Al caminetto" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
