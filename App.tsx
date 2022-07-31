/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback} from 'react';
import {Button, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {changeIcon} from 'react-native-change-icon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const onChangeTheme = useCallback(async () => {
    const storage = await AsyncStorage.getItem('icon');
    if (storage !== null) {
      if (storage === 'dark') {
        const result = await changeIcon('light');
        if (result) {
          await AsyncStorage.setItem('icon', 'light');
        }
        return;
      }
    }

    const result = await changeIcon('dark');
    if (result) {
      await AsyncStorage.setItem('icon', 'dark');
    }
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button title="Change Theme" onPress={onChangeTheme} />
    </SafeAreaView>
  );
};

export default App;
