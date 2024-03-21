// import { Header } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";


const TemplateClima = () => {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View>
                <Header
                rightComponent={
                    <Text>
                        Dropdown
                    </Text>
                }

                leftComponent={

                    <Text>
                        Imagem-Notification
                    </Text>
                }
                />
            </View>
            <View style={{ flex: 1, backgroundColor: "red" }} />
            <View style={{ flex: 1, backgroundColor: "darkorange" }} />
            <View style={{ flex: 1, backgroundColor: "green" }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default TemplateClima;