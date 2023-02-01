import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayingSong from './components/PlayingSong';
import { StyleSheet, View } from 'react-native';
import { SongProvider } from './Context';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SongProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <View style={styles.container}>
            <PlayingSong />
          </View>
        </SafeAreaProvider>
      </SongProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})
