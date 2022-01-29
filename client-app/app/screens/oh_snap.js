import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import { Text, Button, Input } from "react-native-elements";

const Snap = () => {
  
    return (
        <SafeAreaView>
        <View
          style={{
            justifyContent: "space-between",
            width: "100%",
            height: 50,

            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721138216747008/menu.png'}}
            style={{ width: 18, height: 18, marginLeft: 10 }}
          />
          <Image
            source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721136329306193/amazon-png-logo-vector-6695.png'}}
            style={{ width: "35%", height: 40, marginLeft: 10 }}
          />
          <Image
            source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721138967543869/shopping-cart.png'}}
            style={{ width: 20, height: 20, marginRight: 20 }}
          />
        </View>

        <View>
          <View
            style={{
              width: "92%",
              height: 40,
              backgroundColor: "#F3F5F7",
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721138694889492/search.png'}}
              style={{ width: 18, height: 18, marginLeft: 20 }}
            />

            <Text>What are you looking for?</Text>

            <Image
              source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721136690012160/barcode-scanner.png'}}
              style={{ width: 18, height: 18, marginRight: 20 }}
            />
          </View>
        </View>



        <View>

        <Image
              source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/937077217702322216/Saly-17.png'}}
              style={{ width: '80%', height: 300, marginRight: 20,alignSelf:'center',marginTop:100 }}
            />


            <Text style={{alignSelf:'center',fontSize:20,textAlign:'center'}}>Oh Snap !! {'\n'} Failed to Load components</Text>
        </View>

    
        
       
      </SafeAreaView>

    )
}

export default Snap

const styles = StyleSheet.create({})
