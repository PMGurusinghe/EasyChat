

import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Goodbye',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Yes',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hello',
  },
  {
    id: 'bd7acb-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Thank You',
  },
  {
    id: '3ac68-c605-48d3-a4f8-fbd91aa97f63',
    title: 'I',
  },
  {
    id: '5869-3da1-471f-bd96-145571e29d72',
    title: 'You',
  },
  {
    id: '586-3da1-471f-bd96-145571e29d72',
    title: '',
  },
  {
    id: '6-3da1-471f-bd96-145571e29d72',
    title: '',
  },
  {
    id: '56-3da1-471f-bd96-145571e29d72',
    title: '',
  },
];
const Msymbol = ({ navigation }) => {
const Item = ({ item, image, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
    <Image source={DATA.image} />
  </TouchableOpacity>
);

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#ffffff' : '#43E68D';

    return <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
export default Msymbol
const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});