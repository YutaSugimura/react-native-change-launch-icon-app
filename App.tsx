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
import {changeIcon, getIcon} from 'react-native-change-icon';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const onChangeTheme = useCallback(async () => {
    const currentlyIcon = await getIcon();

    if (currentlyIcon === 'dark') {
      changeIcon('light');
      return;
    }

    changeIcon('dark');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button title="Change Theme" onPress={onChangeTheme} />
    </SafeAreaView>
  );
};

export default App;
