/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Foundation, AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, TabOneParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AlbumDetailScreen from '../screens/AlbumDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AccountScreen from '../screens/AccountScreen';
import PrivacityScreen from '../screens/PrivacityScreen';
import SecurityScreen from '../screens/SecurityScreen';
import LanguageSettingsScreen from '../screens/LanguageSettingsScreen';
import StorageScreen from '../screens/StorageScreen';
import InformationScreen from '../screens/InformationScreen';
import LoginScreen from '../screens/LoginScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <Foundation name="home" size={30} style={{ marginBottom: -3 }} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={LibraryScreen}
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <Ionicons name="library" size={24} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createNativeStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{headerShown:false}}>
      <TabOneStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: 'Home' }}
      />

      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />

      <TabOneStack.Screen
        name="AlbumDetailScreen"
        component={AlbumDetailScreen}
        options={{ headerTitle: 'Album' }}
      />

      <TabOneStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
      <TabOneStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerTitle: 'Settings' }}
      />
      <TabOneStack.Screen
        name="PrivacityScreen"
        component={PrivacityScreen}
        options={{ headerTitle: 'Settings' }}
      />
      <TabOneStack.Screen
        name="SecurityScreen"
        component={SecurityScreen}
        options={{ headerTitle: 'Settings' }}
      />
      <TabOneStack.Screen
        name="LanguagesScreen"
        component={LanguageSettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
      <TabOneStack.Screen
        name="StorageScreen"
        component={StorageScreen}
        options={{ headerTitle: 'Settings' }}
      />
      <TabOneStack.Screen
        name="InformationScreen"
        component={InformationScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </TabOneStack.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
