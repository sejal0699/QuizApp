import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../themes';
import { Icons } from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
  const[user,setUser]=useState('');

  useEffect(()=>{
    const loadName=async()=>{
        const username= await AsyncStorage.getItem('user')
        console.log(username);
        setUser(username);
    }
    loadName();
  },[user])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <View style={styles.text}>
            <Text style={styles.heyText}>HEY!</Text>
           <Text style={styles.nameText}>{user}</Text>
            </View>
          </View>
        </View>
          <View style={styles.cartIcon}>
          <Image source={Icons.avatar}/>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6A5AE0",
    padding:10
  },
 
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height: 110,

  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    flexDirection: 'row',
    marginLeft: 10,
    top:6
  },
  text: {
    flexDirection: 'column',
    justifyContent:'center'

  },
  location: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:15,
    marginLeft:10
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
    marginTop: 4,
    marginLeft:10
  },
  cartIcon: {
    flexDirection: 'row',
    top:30,
    marginRight: 16,
    padding:8,
    borderRadius:8,
    gap:10
  },
  iconImage: {
    width: 24,
    height: 32,
    tintColor:colors.white,
    bottom:6
  },
  iconImage1:{
    width: 24,
    height: 22,
    gap:10
  },
  nameText:{
    color:colors.white,
    fontSize:20,
    top:10,
    fontWeight:'bold'
  },
  heyText:{
    color:'#FFD6DD'
  }
});

export default Header;
