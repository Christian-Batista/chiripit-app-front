import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../profile/screens/ProfileScreen";
import Home from "../home/screens/Home";
import ServicesScreen from "../service/screens/ServicesScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Group>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Services" component={ServicesScreen}></Tab.Screen>
            <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
        </Tab.Group>
    );
}

export default BottomTab;