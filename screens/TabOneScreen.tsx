import * as React from 'react';
import { StyleSheet } from 'react-native';
import ShoppingLists from '../components/ShoppingLists';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopaholic's Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ShoppingLists />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#F1FAEE",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#457B9D"
  },
  separator: {
    marginTop: 21,
    height: 1,
    width: '100%',
  },
});
