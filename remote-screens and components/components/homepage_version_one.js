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

const Home = () => {
  
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

        <View
          style={{
            marginTop: 35,
            marginLeft: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "30%",
              height: 40,
              backgroundColor: "#FD9825",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Home</Text>
          </View>

          <View
            style={{
              width: "30%",
              height: 40,
              backgroundColor: "#F3F5F7",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Text>Todays Deals</Text>
          </View>
          <View
            style={{
              width: "45%",
              height: 40,
              backgroundColor: "#F3F5F7",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Text>Apples's Amazon.com</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              width: "90%",
              height: 250,
              alignSelf: "center",
              borderRadius: 30,
              backgroundColor: "rgba(34, 31, 31,0.3)",
              position: "absolute",
              zIndex: 1000,
              marginTop: 50,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                marginTop: 20,
                fontWeight: "500",
                fontSize: 18,
              }}
            >
              30% Off On Pc Bundles
            </Text>

            <View
              style={{
                width: "100%",
                height: 60,
                alignSelf: "center",
                borderRadius: 30,
                backgroundColor: "rgba(244, 244, 244,0.15)",
                position: "absolute",
                zIndex: 1000,
                marginTop: 50,
                bottom: 0,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  marginTop: 0,

                  fontSize: 16,
                }}
              >
                See offers
              </Text>

              <Image
                source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721138447417394/next.png'}}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: 10,
                  alignSelf: "center",
                  borderRadius: 30,
                }}
              />
            </View>
          </View>

          <Image
            source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721137075896430/desktop.jpeg'}}
            style={{
              width: "90%",
              height: 250,
              marginTop: "12%",
              alignSelf: "center",
              borderRadius: 30,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              marginTop: 25,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Top Categories
          </Text>

          <View style={{flexDirection:'row'}}>
          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: "#F3F5F7",
              borderRadius: 20,
              marginLeft: 20,
              marginTop: 50,
            }}
          >
            <Image
              source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721137608556597/image_lap.png'}}
              style={{
                width: 120,
                height: 120,
                marginTop: -30,
                alignSelf: "center",
              }}
            />

            <Text
              style={{ alignSelf: "center", fontSize: 15, fontWeight: "500" }}
            >
              Macbook Pro
            </Text>
          </View>
          <View
            style={{
              width: 180,
              height: 180,
              backgroundColor: "#F3F5F7",
              borderRadius: 20,
              marginLeft: 20,
              marginTop: 50,
            }}
          >
            <Image
              source={{uri:'https://cdn.discordapp.com/attachments/936721052166422568/936721137969291354/image.png'}}
              style={{
                width: 120,
                height: 120,
                marginTop: -30,
                alignSelf: "center",
              }}
            />

            <Text
              style={{ alignSelf: "center", fontSize: 15, fontWeight: "500" }}
            >
              Apple Watch
            </Text>
          </View>

          </View>

        
        </View>
      </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({})
