import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LibreriaContext } from '../Context/LibreriaContext';

export default function Wishlist() {
  const { carrito, total, eliminarCarrito, comprarCarrito, eliminarCarro } = useContext(LibreriaContext);

  return (
    <View>      
        {
        carrito.length === 0 
        ? 
          <View>
            <Image
              style={{height: 250, width: 200, margin: 45 }}
              source={require('../Imagenes/carritoVacio.png')}
            />
            <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25}}>Carro Vacio</Text>
          </View>
        :
          <ScrollView>
          <View>
              <Header 
                centerComponent={{text: 'Carrito', style: { color: '#E6F0F8'}}}
               />
              <FontAwesome.Button backgroundColor="transparent" onPress={()=>eliminarCarrito()}>
                <Ionicons name={'ios-trash'} size={20} color={'red'} />
              </FontAwesome.Button>
          </View>
          <View>
            <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25}}>Total: $ {total}</Text>
            <View style={{alignItems: 'center'}}>
            <FontAwesome.Button 
              onPress={()=>comprarCarrito()}>Comprar
            </FontAwesome.Button>
          </View>
        </View>
          {
            carrito.map((a,i)=>
            <Card>
            <Card.Title>{a.titulo}</Card.Title>
            <Card.Divider/>
            <Text key={i}>Cantidad = {a.cantidad} </Text>
            <Text key={i}>Precio Unitario = $ {a.precio} c/u </Text>
            <Text key={i}>Importe = $ {a.importe}  </Text>
            <View style={styles.container}>
              <TouchableHighlight onPress={() => eliminarCarro(a)}>
                <Ionicons name={'ios-trash-outline'} size={22} color={'red'} />
              </TouchableHighlight>
            </View>
            </Card>)
          }
           </ScrollView>      
        }      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 18,
    flexDirection: 'row',
  }, 
});