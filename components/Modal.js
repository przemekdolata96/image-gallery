import React from 'react'
import { Modal, View, Image, StyleSheet, Button, Dimensions, Platform } from 'react-native';

const itemDetail = props => {
  let modalContent = null;
  
  if (props.selectedItem) {
    modalContent = (
      <View style={styles.modalContainer}>
        <Image resizeMode='cover' source={props.selectedItem.image} style={styles.itemImage} />
        { Platform.OS !== 'android' &&
          <Button title='Zamknij' onPress={props.onModalClosed}/>
        }
      </View>
    );
  };
  return (
    <Modal 
      onRequestClose={props.onModalClosed}
      onBackButtonPress={props.onModalClosed}
      visible={props.selectedItem !== null}
      animationType="slide"
    >
      {modalContent}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#000',
    padding:0,
    margin:0,
    flex:1,
    justifyContent: 'center',
  },
  itemImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  },
});

export default itemDetail;
