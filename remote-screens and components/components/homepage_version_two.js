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
            width: "100%",
            height: 50,

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            alignContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://cdn.discordapp.com/attachments/936721052166422568/936721136329306193/amazon-png-logo-vector-6695.png",
            }}
            style={{
              width: "40%",
              height: 40,
              marginLeft: 0,
              alignSelf: "center",
            }}
          />

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#F3F5F7",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051117127364668/star.png",
                }}
                style={{
                  width: 18,
                  height: 18,

                  alignSelf: "center",
                }}
              />
            </View>

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#F3F5F7",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                marginRight: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051118373077055/option.png",
                }}
                style={{
                  width: 18,
                  height: 18,

                  alignSelf: "center",
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            borderWidth: 0.5,
            borderColor: "grey",
            opacity: 0.2,
            marginTop: 15,
          }}
        ></View>

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
            <Text style={{ marginLeft: 20 }}>What are you looking for?</Text>

            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/936721052166422568/936721138694889492/search.png",
              }}
              style={{ width: 18, height: 18, marginRight: 20 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
          }}
        >
          <Text style={{ marginLeft: 20, fontWeight: "700", fontSize: 16 }}>
            Hot Deals
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", color: "#FD9825" }}>
              Show All
            </Text>

            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051118138163210/nextyellow.png",
              }}
              style={{ width: 20, height: 20, marginRight: 18 }}
            />
          </View>
        </View>

        <View style={{ marginLeft: 20, marginTop: 20, flexDirection: "row" }}>
          <View
            style={{
              width: 250,
              height: 260,
              backgroundColor: "#F3F5F7",
              borderRadius: 15,
            }}
          >
            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/936721052166422568/937065572754145330/airpods.jpeg",
              }}
              style={{
                width: 230,
                height: 180,
                marginTop: 15,
                marginLeft: 10,
                borderRadius: 15,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "500" }}>Airpods Pro</Text>
              <Text style={{ fontWeight: "500" }}>$220.00</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "400", color: "grey" }}>Apple </Text>
              <Text style={{ fontWeight: "400", color: "grey" }}>2h 10m</Text>
            </View>
          </View>

          <View
            style={{
              width: 250,
              height: 260,
              backgroundColor: "#F3F5F7",
              borderRadius: 15,
              marginLeft: 20,
            }}
          >
            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/936721052166422568/937065572754145330/airpods.jpeg",
              }}
              style={{
                width: 230,
                height: 180,
                marginTop: 15,
                marginLeft: 10,
                borderRadius: 15,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "500" }}>Airpods 3rd gen</Text>
              <Text style={{ fontWeight: "500" }}>$220.00</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                marginTop: 10,
              }}
            >
              <Text style={{ fontWeight: "400", color: "grey" }}>Apple </Text>
              <Text style={{ fontWeight: "400", color: "grey" }}>2h 10m</Text>
            </View>
          </View>
        </View>

        <View></View>

        <View>
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "700",
              marginTop: 30,
              fontSize: 16,
            }}
          >
            Poular Categories
          </Text>

          <View
            style={{
              width: "90%",
              height: 60,
              backgroundColor: "#F3F5F7",
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 45,
                height: 45,
                marginLeft: 8,
                borderRadius: 5,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051117332856862/computer.png",
                }}
                style={{
                  width: 30,
                  height: 30,

                  borderRadius: 15,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                marginLeft: -70,
                fontWeight: "600",
                marginTop: 20,
                fontSize: 16,
              }}
            >
              Computer and Laptops
            </Text>

            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051118138163210/nextyellow.png",
              }}
              style={{
                width: 20,
                height: 20,
                alignSelf: "center",
                marginRight: 20,
              }}
            />
          </View>


          <View
            style={{
              width: "90%",
              height: 60,
              backgroundColor: "#F3F5F7",
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 45,
                height: 45,
                marginLeft: 8,
                borderRadius: 5,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051117920083978/leaves.png",
                }}
                style={{
                  width: 30,
                  height: 30,

                  borderRadius: 15,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                marginLeft: -170,
                fontWeight: "600",
                marginTop: 20,
                fontSize: 16,
              }}
            >
            Health
            </Text>

            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051118138163210/nextyellow.png",
              }}
              style={{
                width: 20,
                height: 20,
                alignSelf: "center",
                marginRight: 20,
              }}
            />
          </View>


          <View
            style={{
              width: "90%",
              height: 60,
              backgroundColor: "#F3F5F7",
              alignSelf: "center",
              marginTop: 20,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: 45,
                height: 45,
                marginLeft: 8,
                borderRadius: 5,
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051117580353546/console.png",
                }}
                style={{
                  width: 30,
                  height: 30,

                  borderRadius: 15,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                marginLeft: -70,
                fontWeight: "600",
                marginTop: 20,
                fontSize: 16,
              }}
            >
             Consoles and Games
            </Text>

            <Image
              source={{
                uri: "https://cdn.discordapp.com/attachments/936721052166422568/937051118138163210/nextyellow.png",
              }}
              style={{
                width: 20,
                height: 20,
                alignSelf: "center",
                marginRight: 20,
              }}
            />
          </View>

          
        </View>
      </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({})
