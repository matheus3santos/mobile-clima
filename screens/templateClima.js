// import { Header } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Header } from "react-native-elements";
import { ListItem } from '@rneui/themed';
import axios from 'axios';
import { useEffect, useState } from "react";



const TemplateClima = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (city) {
            fetchWeather(city);
        }
    }, [city]);

    const fetchWeather = async (cityName) => {
        try {
            const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=SUA-CHAVE&city_name=${cityName}`);

            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Erro ao buscar previsão do tempo:', error);
        }
    };


    {/*Renderização das telas*/ }
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View>


                <Header
                    leftComponent={
                        <TextInput style={[styles.input]}
                            placeholder="Type Here..."
                            onChangeText={text => setCity(text)}
                            value={city}
                        />

                    }

                    rightComponent={
                        weather ? <Text>{weather.results.city_name}</Text> : null
                    }

                />




                <View style={styles.image}>
                    {weather && weather.results && weather.results.condition_slug ? (
                        <Image source={{ uri: `https://assets.hgbrasil.com/weather/icons/conditions/${weather.results.condition_slug}.svg` }} style={{ width: 250, height: 250 }} />
                    ) : (
                        <Text>Carregando...</Text>
                    )}
                </View>

                <View style={{ alignItems: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 40, margin: 10 }}>
                        {weather && weather.results && weather.results.temp ? `${weather.results.temp}°C` : 'Loading...'}
                    </Text>
                    <Text style={{ fontSize: 13, margin: 10 }}>
                        Temperatura
                    </Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <View style={[styles.climate2]}>

                            <View style={{ alignItems: 'center', margin: 1, flexDirection: 'row' }}>
                                <Text style={{ padding: 20, paddingTop: 0 }}>
                                    <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                                    {weather && weather.results && weather.results.forecast && weather.results.forecast[0] ? `${weather.results.forecast[0].min}°C` : 'Loading...'}

                                </Text>

                                <Text style={{ padding: 20, paddingTop: 0 }}>
                                    <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                                    {weather && weather.results && weather.results.forecast && weather.results.forecast[0] ? `${weather.results.forecast[0].max}°C` : 'Loading...'}

                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

            {/*Informações do clima*/}
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <View style={[styles.climate]}>

                    <View style={{ alignItems: 'center', margin: 10, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                            {/*Informações da nebulosidade*/}
                            <Text style={{ padding: 20 }}>
                                {weather && weather.results && weather.results.cloudiness ? `${weather.results.cloudiness}%` : 'Loading...'}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                            {/*Informações da humidade*/}
                            <Text style={{ padding: 20 }}>
                                {weather && weather.results && weather.results.humidity ? `${weather.results.humidity}%` : 'Loading...'}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                            {/*Informações da vel. do vento*/}
                            <Text style={{ padding: 20 }}>
                                {weather && weather.results && weather.results.wind_speedy ? `${weather.results.wind_speedy}` : 'Loading...'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/*Previsão do tempo*/}

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row", backgroundColor: 'blue', height: 180, paddingBottom: 10 }}>

                <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10 }}>
                    <Text>25°C</Text>
                    <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                    <Text>15.00</Text>
                </View>
                <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10 }}>
                    <Text>25°C</Text>
                    <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                    <Text>15.00</Text>
                </View>
                <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10 }}>
                    <Text>25°C</Text>
                    <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                    <Text>15.00</Text>
                </View>
                <View style={{ padding: 20, alignItems: "center", backgroundColor: '#4169E1', borderRadius: 10 }}>
                    <Text>25°C</Text>
                    <Image style={[styles.cloundImg]} source={require('../assets/cloud.png')} />
                    <Text>15.00</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row", height: 180, paddingBottom: 10 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: 180, paddingTop: 20, margin: 10 }}>
                    {weather && weather.results && weather.results.forecast ? (
                        weather.results.forecast.slice(1, 7).map((item, index) => (
                            <ListItem key={index} style={{ width: 300, height: 80 }}>
                                <ListItem.Content>
                                    <ListItem.Title>{item.weekday}</ListItem.Title>
                                </ListItem.Content>

                                <ListItem.Content>
                                    {/* <ListItem.Title>{item.condition}</ListItem.Title> */}
                                    <Image source={{ uri: `https://assets.hgbrasil.com/weather/icons/conditions/${item.condition}.svg` }} style={{ width: 50, height: 50 }} />
                                </ListItem.Content>

                                <ListItem.Content>
                                    <ListItem.Title>{item.max}°C</ListItem.Title>
                                </ListItem.Content>

                                <ListItem.Content>
                                    <ListItem.Title>{item.min}°C</ListItem.Title>
                                </ListItem.Content>

                            </ListItem>
                        ))
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </View>
            </View>





        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(173, 216, 230, 0.5)',
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
        backgroundColor: 'rgba(0, 191, 255, 0.5)',
        borderRadius: 10,
        width: 330,
        height: 50,
        padding: 10,
        marginBottom: 20,

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
    input: {
        marginLeft: 50,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        flex: 1,
    },
});


export default TemplateClima;