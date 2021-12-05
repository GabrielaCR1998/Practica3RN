import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import {Header, Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LibreriaContext } from '../Context/LibreriaContext';

export default function HomeScreen() {
  const { catalogo, agregarWishList, eliminarWishList, agregarCarro } = useContext(LibreriaContext);

  return (
    <View>
      <ScrollView>
      <View>
              <Header 
                centerComponent={{text: 'Libreria', style: { color: '#E6F0F8'}}}
               />
        </View>
        {catalogo.map((a, i) => (
          <Card>
            <Card.Title style={{textAlign: "left", fontSize: 15}} >{a.titulo}</Card.Title>
            <Card.Divider/>
            <Text key={i}>Precio = ${a.precio} </Text>
            <Text key={i + 10}>Idioma = {a.idioma}</Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={()=>agregarCarro(a)}>
                <Ionicons name={'cart-outline'} size={22} color={'green'} />
              </TouchableHighlight>
              {a.desactivado === false ? (
                <TouchableHighlight onPress={() => agregarWishList(a)}>
                  <Ionicons name={'md-heart'} size={25} color={'grey'} />
                </TouchableHighlight>
              ) : (
                <TouchableHighlight onPress={() => eliminarWishList(a)}>
                  <Ionicons name={'heart'} size={25} color={'red'} />
                </TouchableHighlight>
              )}
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 24,
    flexDirection: 'row',
  },
});