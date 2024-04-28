import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LineComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line}></View>
              <View style={styles.wordContainer}>
                  <Text style={styles.word}>Or</Text>
              </View>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: -10
      },
      line: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: '#DEDEDE',
      },
      wordContainer: {
        paddingHorizontal: 25,
      },
      word: {
        fontSize: 16,
        fontWeight: '800',
      },
})

export default LineComponent;