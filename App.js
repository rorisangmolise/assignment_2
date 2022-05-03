import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image,  TouchableOpacity, ImageBackground, ScrollView , Button} from 'react-native';
import {  Ionicons } from '@expo/vector-icons';
import {useState} from 'react'; 
import Offer from './Menu';


export default function App() {
  const [Total_Price, setTotalPrice] = useState(0);
 
  return (
    <View style={styles.container1}>
      <View style={styles.header}>
        <View style={styles.arc}>
        <ImageBackground source={require('./assets/limlogOBLACK.jpg')} style={{height:'80%', width:'85%', marginTop:10}}>
        <Text style={styles. slogan}> We Are At Your srvice</Text>
        </ImageBackground>
        
        </View>
        
      </View>
      <ImageBackground source={require('./assets/backgroundwood.jpg')} style={{height:'100%', width:'100%', marginTop:1}}>
      <Text style={styles. meal_name}> MENU</Text>
      <ScrollView horizontal style={styles.scroll}>
        
        <View style={styles.offers}>
          <Offer image={require('./assets/bread-eggs.jpg')} meal={"English Breakfast : " } description ="Bread, Bacon , and 2 Eggs" price= {20} Total_Price={Total_Price} setTotalPrice={setTotalPrice} />
          <Offer image={require('./assets/meal2.jpg')} meal={"Wings Breakfast : " } description ="Bread, Bacon , and 2 Eggs" price= {18} Total_Price={Total_Price} setTotalPrice={setTotalPrice} />
          <Offer image={require('./assets/bread-eggs.jpg')}meal={"Easy Breakfast : " } description ="Bread, Bacon ,Rassian, Eggs" price= {15} Total_Price={Total_Price} setTotalPrice={setTotalPrice} />
          <Offer image={require('./assets/bread-eggs.jpg')}meal={"Combo1 : " } description ="Bread, Eggs" price= {25} Total_Price={Total_Price} setTotalPrice={setTotalPrice} />
          <Offer image={require('./assets/bread-eggs.jpg')}meal={"500ML Drink : " } description ="Coke , Fanta , Sprite" price= {12} Total_Price={Total_Price} setTotalPrice={setTotalPrice} />
          <Offer image={require('./assets/bread-eggs.jpg')}meal={"2L Drink : " } description ="Coke , Fanta , Sprite" price= {20} Total_Price={Total_Price} setTotalPrice={setTotalPrice} />
          <Offer image={require('./assets/bread-eggs.jpg')}meal={"sweets : " } description ="Stambo , Pin-Pop" price= {1} Total_Price={Total_Price} setTotalPrice={setTotalPrice}/>
          <Offer image={require('./assets/bread-eggs.jpg')}meal={"Nick Nacks : " } description ="Churtney, Cheese , Tomato" price= {2} Total_Price={Total_Price} setTotalPrice={setTotalPrice} />
        </View>
      </ScrollView>
      
      <ScrollView>
        
        <View style={styles.Total}>
      <Text  style={styles. TotalText}> Total : M{Total_Price}.00</Text>
    </View>
        <View style={styles.Contact}>
         <Text style ={styles.platforms}>Follow us:</Text>
         <TouchableOpacity style={{marginTop:'2%' , marginStart:'5%'}}>
         <Ionicons name="md-logo-facebook" size={24} color="black" style={{marginTop:'2%' , marginStart:'5%'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'2%' , marginStart:'5%'}}>
         <Ionicons name="ios-logo-twitter" size={24} color="black"  style={{marginTop:'2%' , marginStart:'10%'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'2%' , marginStart:'2%'}}>
         <Ionicons name="ios-logo-instagram" size={24} color="black" style={{marginTop:'2%' , marginStart:'10%'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'2%' , marginStart:'2%'}}>
         <Ionicons name="ios-logo-youtube" size={24} color="black"  style={{marginTop:'2%' , marginStart:'10%'}}/>
         </TouchableOpacity>
         </View>
      </ScrollView>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#171515',
    
  },

  offers:{
    height:160,
    flexDirection:'row',
    width:'100%',
    borderTopColor:'#FB8C00',
    borderBottomColor:'transparent',
    borderWidth:2,
    marginTop:5
    
   
  },
  header:{
    flexDirection:'row',
    backgroundColor:'#171515',
    borderColor:'#FB8C00',
    borderWidth:2

  },
  arc:{
    width:300,
    height:250,
    backgroundColor:'#171515',
    borderBottomRightRadius:320,
    marginRight:10,
    borderColor:'#FB8C00',
    borderWidth:2
  },
  scroll:{
    minHeight: 100
  },
  meal_name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginStart:8,
    marginTop:14,
    color:'#FB8C00'
  },
  Total:{
    height:60,
    marginVertical: 5,
    borderRadius:20,
    marginHorizontal:3,
    borderWidth: 3,
    borderColor:'black',
  },
  
  Contact:{
    width:'100%',
    height:50,
    backgroundColor:'#FB8C00',
    flexDirection:'row',
    marginTop:4
  },
  platforms:{
    fontSize:17,
    fontWeight: 'bold',
    color:'black',
    marginStart: '2%',
    marginTop: '2%', 
  },
  slogan:{
    fontSize:19,
    fontWeight: 'bold',
    color:'black',
    marginStart: '3%',
    marginTop: '64%', 
    color:'#FB8C00'
  },
  TotalText:{
    fontSize: 28,
    fontWeight: 'bold',
    marginStart:8,
    marginTop:8,
    color:'black'
  }
  
});
