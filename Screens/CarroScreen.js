import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TiendaContext } from '../Context/TiendaContext';

export default function Carrito() {
  const { carrito, total, comprarCarrito, eliminarCarro } = useContext(TiendaContext);
  return (
    <View>      
        {carrito.length === 0 
        ? 
          <View>
            <Image
              style={{height: 250, width: 200, margin: 45 }}
              source={require('../Imagenes/carritoVacio.png')}
            />
          <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25}}>Carrito vacio</Text>
          </View>:
          <ScrollView>
          <View>
            <Header 
            centerComponent={{text: 'Carrito', style: { color: '#04414C'}}}
            rightComponent={{ icon: 'menu', style: { color: '#04414C' } }}
            containerStyle={{
            backgroundColor: '#CFF2F8',
            }}
           />   
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
            carrito.map((x)=>
            <Card>
            <Card.Title>{x.titulo}</Card.Title>
             <Card.Divider/>
            <Text>Cantidad={x.cantidad} </Text>
            <Text>Precio=${x.precio}</Text>
            <Text>Total=${x.Total1}  </Text>
            <View style={{flex: 1,alignItems: 'center', flexDirection: 'row',}}>
            <TouchableHighlight onPress={() => eliminarCarro(x)}>
            <Ionicons name={'trash-outline'} size={22} color={'red'} />
            </TouchableHighlight>
            </View>
            </Card>)
            }
            </ScrollView>      
            }      
    </View>
  );
}