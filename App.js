import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import GalleryItem from './components/GalleryItem';
import Modal from './components/Modal';

const galeryItems = [
  {
    key: '11',
    image: {
      uri: 'https://cdn.vox-cdn.com/thumbor/J5tvU7jhQRYsHurZ2X0fpInzyAM=/0x0:7087x3543/1200x675/filters:focal(2977x1205:4109x2337)/cdn.vox-cdn.com/uploads/chorus_image/image/61442431/446158.0.0.1471655258.0.jpg'
    }
  },
  {
    key: '12',
    image: {
      uri: 'https://i.wpimg.pl/O/640x380/i.wp.pl/a/f/jpeg/35399/sesto+1-big.jpeg'
    }
  },
  {
    key: '1',
    image: {
      uri: 'https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/2018/04/gialloauge_road_dynamic_10.jpg'
    }
  },
  {
    key: '2',
    image: {
      uri: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q2/667349/2016-lamborghini-aventador-lp750-4-superveloce-test-review-car-and-driver-photo-667354-s-original.jpg'
    }
  },
  {
    key: '3',
    image: {
      uri: 'http://imagesvc.timeincapp.com/v3/foundry/image/?q=70&w=1440&url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2017%2F05%2Fheader-huracan-performante.jpg%3Fquality%3D85'
    }
  },
  {
    key: '4',
    image: {
      uri: 'https://www.auto-motor-i-sport.pl/media/lib/2000/2008-lamborghini-reventon-auction.jpg'
    }
  },
  {
    key: '5',
    image: {
      uri: 'https://cdn.galleries.smcloud.net/t/galleries/gf-7LY5-Jy82-Gsxi_lamborghini-veneno-roadster-664x442.jpeg'
    }
  },
  {
    key: '6',
    image: {
      uri: 'https://cdn.motor1.com/images/mgl/PNllK/s1/lamborghini-murcielago.jpg'
    }
  },
  {
    key: '7',
    image: {
      uri: 'https://assets.catawiki.nl/assets/2018/3/5/6/6/e/66eef7f5-abfd-4fe9-a3af-511e824adcc0.jpg'
    }
  },
  {
    key: '8',
    image: {
      uri: 'http://dailydriver.pl/wp-content/uploads/2018/04/Lamborghini-Diablo-GT-1999_1.jpg'
    }
  }
]

export default class App extends React.Component {
  state = {
    selectedItem: null
  }

  onItemSelected = key => {
    this.setState({
      selectedItem: galeryItems.find(item => {
        return item.key === key
      })
    })
  }

  onModalClosed = () => {
    this.setState({
      selectedItem: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <FlatList
            style={styles.listContainer}
            data={galeryItems}
            numColumns={2}
            renderItem={(info) => (
               <GalleryItem
                onItemPressed={() => this.onItemSelected(info.item.key)}
                itemImage ={info.item.image}
               />
            )}
          />
        </ScrollView>
        <Modal
          selectedItem={this.state.selectedItem}
          onModalClosed={this.onModalClosed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 11,
  },
  contentContainer: {
    
  },
  listContainer: {
    flex: 1,
  },
});
