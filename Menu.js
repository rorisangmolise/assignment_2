import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

import {useState} from 'react'; 

export default function Menu ({meal, description,  Total_Price , setTotalPrice, price , image}) {

    const [items, set_items] = useState(0);
    function increase_items(){
       set_items(items + 1)
       setTotalPrice(Total_Price + price);
    }

    function decrease_items(){
      if(items>0)
      {
        set_items(items - 1);
      }

      if(Total_Price>0)
      {
        setTotalPrice(Total_Price - price); 
      }
            
    }
  return (
     <View style={styles.box}>
       <View style={styles.Buttons}>
         <View style={styles.Order}> 
           <Button title="Place Order" color={"#FB8C00"}  onPress={increase_items} />
          </View>
           <View style={styles.Order}>
             <Button title="Discard order" color={"#FB8C00"} onPress={decrease_items} />
           </View>
       </View>
       <View style={styles.meal}>
         <Image style={styles.image} source={image} />
         <View style={styles.details}>
            <Text style={styles.MenuText}>{meal}</Text>
            <Text style={styles.Description}>{description}</Text>
            <Text style={styles.MenuText}>Price :M {price}.00</Text>
            <Text style={styles.MenuText}>Ordered items: {items}</Text>
         </View> 
       </View>
     </View>  
           
  )
}


const styles = StyleSheet.create({
    box:{
        height:395,
        borderWidth: 3,
        borderRadius: 10,
        margin:10,
    },
    text:{
        fontSize:40
    },
    meal: {
        height:334,
        width:250,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 2,
        margin:6
      },
      details: {
        marginLeft: 20,
      },
      image: {
        width: '100%',
        height: 210,
      },
      meal_name: {
        fontSize: 18,
        fontWeight: 'bold'
      },
      Buttons:{
          height:40,
          width:202,
          flexDirection:'row' ,
          marginStart: '2%', 
      },
      Order:{
        height: '100%',
        width:'60%',
        margin:3
      },
      MenuText:{
        fontSize:19,
        fontWeight: 'bold',
        color:'black',
        marginStart: '-9%',
        marginTop: '1%',   
      },
      Description:{
        fontSize:19,
        color:'black',
        marginStart: '-9%',
        marginTop: '-4%', 
      }
  
})


