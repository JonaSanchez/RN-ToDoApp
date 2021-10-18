import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Button
        title="Go to profile"
        style={styles.button}
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jona' })
        }
      />
      <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#435460',
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
  },
});

export default Home;
