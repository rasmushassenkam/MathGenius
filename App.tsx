import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { HomeScreen } from "./app/screens/HomeScreen/HomeScreen";
import { QuestionScreen } from "./app/screens/QuestionScreen/QuestionScreen";
import { HomeLoadingScreen } from "./app/screens/HomeLoadingScreen/HomeLoadingScreen";

export default function App() {
	return (
		<AppContainer />
	);
}

const AppContainer = createAppContainer(
	createSwitchNavigator(
		{
			HomeLoading: HomeLoadingScreen,
			Home: HomeScreen,
			Question: QuestionScreen
		},
		{
			initialRouteName: "HomeLoading"
		}
	)
);
