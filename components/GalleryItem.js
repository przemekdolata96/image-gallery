import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const item = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.productContainer}>
      <Image resizeMode='cover' source={props.itemImage} style={styles.itemImage}/>        
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2,
  },
  
  itemImage: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width / 2,
  },
});

export default item;