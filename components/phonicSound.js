import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colourButtonIndex: '',
    };
  }
  playSound = async (soundChunk) => {
    console.log(soundChunk);
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';

    await Audio.Sound.createAsync({ uri: soundLink }, { shouldPlay: true });
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          style={
            this.props.buttonIndex === this.state.colourButtonIndex
              ? [styles.chunksButton, { backgroundColor: 'green' }]
              : [styles.chunksButton, { backgroundColor: 'orange' }]
          }
          onPress={() => {
            this.props.buttonIndex=[]
            this.playSound(this.props.soundChunk);
            this.setState({
              colourButtonIndex: this.props.buttonIndex,
            });
          }}>
          <Text style={styles.chunksButtonText}>{this.props.wordChunk}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chunksButton: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 120,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: 'orange',
  },

  chunksButtonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
