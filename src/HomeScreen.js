import React, {useState} from 'react';
import {FlatList, View, Text, TextInput, StyleSheet} from 'react-native';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    {key: 'Abbeville'},
    {key: 'Abbotsford'},
    {key: 'Aberdeen'},
    {key: 'Abingdon'},
    {key: 'Abington'},
    {key: 'Abram'},
    {key: 'Acampo'},
    {key: 'Accomac'},
    {key: 'Accord'},
    {key: 'Acton'},
    {key: 'Ada'},
    {key: 'Adairsville'},
    {key: 'Adams'},
    {key: 'Adkins'},
    {key: 'Afton'},
    {key: 'Agency'},
    {key: 'Agoura Hills'},
    {key: 'Ainsworth'},
    {key: 'Airville'},
    {key: 'Akron'},
    {key: 'Alabaster'},
    {key: 'Atlanta'},
  ];

  const handleSearch = (searchText) => {
    const filteredItems = data.filter((item) =>
      item.key.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredItems);
    setText(searchText);
  };

  return (
    <View style={{flex: 1, paddingTop: 20, paddingLeft: 10, alignItems: 'left'}}>
      <TextInput
        style={{height: 40, fontSize: 20}}
        placeholder="Type here to search"
        onChangeText={handleSearch}
        value={text}
      />
      {text.length > 0 ? (
        <FlatList
          data={filteredData.length > 0 ? filteredData : data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    fontSize: 18,
    height: 25,
  },
});

export default HomeScreen;
