import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { CatProfile } from '../../components/CatSpace/CatProfile';

const CatSpace = () => {
  return (
    <View
      style={styles.mainContainer}>
      <Text style={styles.pageHeader}>Cat Space</Text>
      <CatProfile
        avatar="https://reactnative.dev/docs/assets/p_cat1.png"
        firstName="Jesse"
        lastName="Meowmington"
      />
      <CatProfile
        avatar="https://reactnative.dev/docs/assets/p_cat2.png"
        firstName="Jackie"
        lastName="Fluffy"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeader: {
    fontSize: 20,
    marginTop: 30
  },
  catProfileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  mainContainer: { alignItems: 'center' },
  image: { width: 200, height: 200 },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    marginBottom: 15,
  }
});

export default CatSpace;
