import React, { useState } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

const CatProfile = (props: any) => {
  const [isHungry, setIsHungry] = useState(true);

  const getFullName = (firstName: string, lastName: string) => {
    return firstName + ' ' + lastName;
  };

  const [name, setNewName] = useState(getFullName(props.firstName, props.lastName));

  return (
    <View
      style={styles.catProfileContainer}>
      <Image
        source={{ uri: props.avatar }}
        style={styles.image}></Image>
      <Text>{name}</Text>
      <TextInput
        style={styles.textInput}
        defaultValue={name}
        placeholder='Enter a new name'
        onChangeText={text => setNewName(text)}
      />
      <Button
        title={isHungry ? 'Pour me some milk please' : 'Thank you!'}
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
      />
    </View>
  );
};

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
