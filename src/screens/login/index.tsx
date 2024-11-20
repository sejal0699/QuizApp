import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../navigation/screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const handleSubmit = async () => {
    console.log(name);
    await AsyncStorage.setItem('user', name);
    setName(name);
    navigation.navigate(ScreenNames.bottomTab);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images.backgroundImagee} style={styles.image} />
        <Text style={styles.text2}>Quizzo</Text>
      </View>
      <View style={{bottom:50}}>
        <Text style={styles.text}>Enter your name :-</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.text1}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
