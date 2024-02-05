import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatListScreen, SettingScreen } from '../screens/'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerTitle: "",
                headerShadowVisible: false,
            }}
        >
            <Tab.Screen
                name="ChatList"
                component={ChatListScreen}
                options={{
                    tabBarLabel: "Chats",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble-ellipses" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator