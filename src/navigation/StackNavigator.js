import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { ChatSettingsScreen, NewChatScreen, ChatScreen } from '../screens'

const screenOptions = {
    headerShown: false,
    gestureEnabled: true,
};
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={screenOptions}
                />
                <Stack.Screen
                    name="ChatSetting"
                    component={ChatSettingsScreen}
                    options={screenOptions}
                />
                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={screenOptions}
                />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "containedModal" }}>
                <Stack.Screen name="NewChat" component={NewChatScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;