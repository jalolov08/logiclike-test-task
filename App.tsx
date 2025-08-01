import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Typography from './src/components/Typography';
import {COLORS} from './src/constants/colors';
import Icon, {Icons} from './src/components/Icon';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Typography
        variant="h1"
        weight="bold"
        align="center"
        color={COLORS.white}>
        ПРИВЕТ МИР
      </Typography>
      <Icon name="home" size={24} color={COLORS.white} type={Icons.Feather} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default App;
