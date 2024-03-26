// import { Header } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, DropDownPicker, FlatList } from "react-native";
import { Header, Icon, Badge, SearchBar } from "react-native-elements";
import { Menu, Provider } from 'react-native-paper';
import { ListItem } from '@rneui/themed';
import axios from 'axios';
// import React, { useEffect, useState } from "react";



// const [getData,setData] = React.useState([]);

// useEffect(() => {
//     async function climaDados() {
//         const response = awiat axios('https://api.hgbrasil.com/weather')
//     }


const TemplateClima = () => {


    // Função para buscar dados do clima da API
    const searchCityWeather = async (city) => {
        try {
            const response = await axios.get(`https://api.hgbrasil.com/weather?key=SUA_CHAVE_API&city_name=${city}`);
            console.log(response.data); // Aqui você pode manipular os dados recebidos da API
            return response.data; // Retorna os dados para serem usados no componente
        } catch (error) {
            console.error('Erro ao buscar dados do clima:', error);
            throw error; // Lança o erro para ser tratado fora da função
        }
    };

    const [city, setCity] = React.useState('');
    const [weatherData, setWeatherData] = React.useState(null);

    const handleSearch = async () => {
        try {
            const data = await searchCityWeather(city);
            setWeatherData(data); // Atualiza o estado com os dados recebidos da API
        } catch (error) {
            // Trate o erro, se necessário
        }
    };





    {/*Renderização da tela*/ }

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View>

                {/*barra de pesquisa*/}
                <Provider>
                    <Header
                        centerComponent={
                            <SearchBar
                                placeholder="Digite o nome da cidade"
                                value={city}
                                onChangeText={setCity}
                                onSubmitEditing={handleSearch}
                            />

                        }

                    />
                </Provider>
                {/*Imagem do clima da cidade*/}

                <View style={styles.image}>
                    <Image style={{ width: 250, height: 250 }} source={require('../assets/conditions/rain.svg')} />
                </View >

                {/*Temperatura atual*/}
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 40, margin: 10 }}>
                        25°C
                    </Text>
                    <Text style={{ fontSize: 13, margin: 10 }}>
                        Precipitações
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <View style={[styles.climate2]}>

                            <View style={{ alignItems: 'center', margin: 1, flexDirection: 'row' }}>
                                <Text style={{ padding: 20, paddingTop: 0 }}>
                                    <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                                {/*Temperatura minima do dia*/}

                                    6°</Text>

                                <Text style={{ padding: 20, paddingTop: 0 }}>
                                    <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                                {/*Temperatura maxima do dia*/}

                                    36°</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

            {/*Informações do clima humidade, velocidade do vento,precipitação*/}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <View style={[styles.climate]}>

                    <View style={{ alignItems: 'center', margin: 10, flexDirection: 'row' }}>
                        <Text style={{ padding: 10 }}>
                            <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />

                            6%</Text>

                        <Text style={{ padding: 10 }}><Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />

                            6%</Text>

                        <Text style={{ padding: 10 }}> <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />

                            6%</Text>
                    </View>
                </View>
            </View>

            {/*Previsão do tempo*/}
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "column", backgroundColor: 'blue', height: 200, paddingBottom: 10 }}>

                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: "row", backgroundColor: 'blue', paddingBottom: 10 }}>

                    <Text style={{ padding: 10 }}> textinho</Text>

                    <Text style={{ padding: 10 }}>textinho</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row", backgroundColor: 'blue', height: 140, paddingBottom: 10 }}>

                    <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10, margin: 5 }}>
                        <Text>25°C</Text>
                        <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                        <Text>15.00</Text>
                    </View>
                    <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10, margin: 5 }}>
                        <Text>25°C</Text>
                        <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                        <Text>15.00</Text>
                    </View>
                    <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10, margin: 5 }}>
                        <Text>25°C</Text>
                        <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                        <Text>15.00</Text>
                    </View>
                    <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10, margin: 5 }}>
                        <Text>25°C</Text>
                        <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                        <Text>15.00</Text>
                    </View>
                </View>
            </View>


            {/*Lista de previsão diaria*/}
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow', height: 180, paddingTop: 20 }}>
                <ListItem style={{ width: 300, height: 15 }}>
                    <ListItem.Content>
                        <ListItem.Title>Inbox</ListItem.Title>
                    </ListItem.Content>
                    <Icon name="inbox" type="material-community" color="grey" />
                    <ListItem.Content>
                        <ListItem.Title>23°</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title>Inbox</ListItem.Title>
                    </ListItem.Content>


                </ListItem>
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    image: {

        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 10
    },
    climate: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        borderRadius: 20,
        width: 280,
        height: 30,
        padding: 10,
        marginBottom: 10,

    },
    climate2: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: 30,
        padding: 10,
    },
    cloundImg: {
        width: 25,
        height: 25,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


export default TemplateClima;