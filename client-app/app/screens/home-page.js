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
import DynamicComponent from "../components/dynamic-component";

const HomePage = ({ navigation }) => {
  const renderDynamicComponents = () => (
    <>
      <DynamicComponent __id="homepage_version_two" />
    </>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      {renderDynamicComponents()}

    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
