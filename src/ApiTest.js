import React, { useEffect, useState } from "react";
import { API_ROUTE } from "@env";
import { Button, StyleSheet, Text, View } from "react-native";
import { jsx } from "react/jsx-runtime";

const ApiTest = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ROUTE}/test`);
        const json = await response.json();
        console.log(json)
        setData(json.message);
      } catch (error) {
        console.log(json)
        setData(error.message)
      }
    };

    fetchData(); // Llamar a la función fetchData aquí para que se ejecute cuando el componente se monte
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ApiTest;