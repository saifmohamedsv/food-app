import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        Result: ResultScreen
    },
    {
        initialRouteName: "Search",
        defaultNavigationOptions: {title: "Food Search"},
    }
);

export default createAppContainer(navigator);
