import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LibreriaContext } from '../Context/LibreriaContext';

export default function Wishlist() {
  const { wishList, eliminarWishList, agregarCarro } = useContext(LibreriaContext);

  return (
    <View>
      <ScrollView>
        <View>
              <Header 
                centerComponent={{text: 'Wishlist', style: { color: '#E6F0F8'}}}
               />
        </View>
        {wishList.length === 0 ? (
          <View>
            <Image
              style={{height: 200, width: 200, margin: 45 }}
              source={require('../Imagenes/listavacia.png')}
            />
            <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25}}>No hay nada en tu Wishlist</Text>
          </View>
        ) : (
            wishList.map((a,i)=>
            <Card>
            <Card.Title>{a.titulo}</Card.Title>
            <Text key={i}>Precio = ${a.precio} </Text>
            <Text key={i + 10}>Idioma = {a.idioma}</Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={()=>agregarCarro(a)}>
                <Ionicons name={'cart-outline'} size={22} color={'green'} />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => eliminarWishList(a)}>
                <Ionicons name={'trash-outline'} size={22} color={'red'} />
              </TouchableHighlight>
            </View>
          </Card>
            )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
