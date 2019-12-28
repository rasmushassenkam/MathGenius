import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen } from "./app/screens/HomeScreen/HomeScreen";
import { QuestionScreen } from "./app/screens/QuestionScreen/QuestionScreen";

export default function App() {
	return (
		<AppContainer />
	);
}

const AppContainer = createAppContainer(
	createSwitchNavigator(
		{
			Home: HomeScreen,
			Question: QuestionScreen
		}
	)
);
