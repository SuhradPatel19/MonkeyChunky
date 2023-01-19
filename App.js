import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,  
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSound from './components/phonicSound';

console.log(db['information'].phones);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myText: '',
      displayText: '',
      chunks: [],
      phones: [],
    };
  }
  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Monkey Chunky',
            style: { fontSize: 20, fontWeight: 'bold' },
          }}
          backgroundColor={'orange'}
        />
        <Image
          source={{
            uri: 'https://soundprimary.co.uk/wp-content/uploads/2020/03/phonics.jpg',
          }}
          style={{
            width: 300,
            height: 100,
            marginTop: 20,
            alignSelf: 'center',
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Enter the Word'}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
            this.setState({
              myText: text,
            });
          }}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.myText.toLowerCase().trim();
            db[word]
              ? this.setState({
                  chunks: db[word].chunks,
                  phones: db[word].phones,
                })
              : alert('This word is not available in the database');
            console.log(this.state.chunks);
          }}>
          <Text style={styles.goButtonText}>Go</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSound
                wordChunk={item}
                soundChunk={this.state.phones[index]}
                buttonIndex={index}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 200,
    height: 30,
    backgroundColor: 'orange',
    borderWidth: 2,
  },

  goButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 80,
  },

  goButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
