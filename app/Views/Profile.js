import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


const Profile = ({ navigation, route }) => {
  const [phone, setPhone] = React.useState(null)
  const [description, setDescription] = React.useState('')

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/410' }} style={styles.image} />
      <Text style={styles.title}>{route.params.name}</Text>
      <Text style={styles.caption}>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <Text style={styles.caption}>Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Something about you"
      />
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
    marginTop: 30,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 140,
    height: 140,
    borderRadius: 999,
    alignSelf: 'center',
  },
  caption: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 12,
    marginLeft: 12,
    marginBottom: 4,
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 0,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    padding: 10,
  },
});

export default Profile;