import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TextInput, StyleSheet} from 'react-native';
import jsonData from './cityData.json';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log('Loaded JSON data:', jsonData);

    if (Array.isArray(jsonData?.wordList)) {
      setData(jsonData.wordList);
    } else {
      console.error("JSON data is not in the expected format");
    }
  }, []);
    /*
  const namesContainer = document.getElementById("namesContainer");
  data.forEach(item => {
    const button = document.createElement("button");
    button.textContent = item.key;
    namesContainer.appendChild(button)
  });
    */
  const handleSearch = (searchText) => {
    const filteredItems = (data || []).filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
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
      {text.length > 0 && (
        <FlatList
            data={filteredData}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      )}
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