import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

const ShousList = ({ onbtnpress, imageUri, iconsize, title, price }) => {
  return (
    <>
      <View style={styles.constainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>INR:{price}</Text>
          <Button icon="cart" mode="elevated" onPress={onbtnpress}>
            add to cart
          </Button>
        </View>
        <View>
          <Image source={imageUri} style={styles.image} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginTop: 15,
    // flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: 24,
    color: '#fff',
  },
});

export default ShousList;
