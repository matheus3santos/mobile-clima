// import { Header } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Image, DropDownPicker, FlatList } from "react-native";
import { Header, Icon, Badge, SearchBar } from "react-native-elements";
import { Menu, Provider } from 'react-native-paper';
import { ListItem } from '@rneui/themed';
import axios from 'axios';






const TemplateClima = () => {

    const [weatherData, setWeatherData] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.hgbrasil.com/weather?key=d1d39801&city_name=${city}`);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados do clima:', error);
            }
        };

        fetchData(); // Chama a função para buscar os dados ao montar o componente
    }, []);

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
                                onChangeText={setCity} // Atualiza 'city' conforme o usuário digita
                                onSubmitEditing={() => {}} // Implemente a função para lidar com a submissão da pesquisa
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
                    <Text style={{ fontSize: 40, margin: 10 }}>{weatherData.main.temp}°C</Text>
                    <Text style={{ fontSize: 13, margin: 10 }}>Precipitações</Text>
                    <View style={[styles.climate2]}>
                        <View style={{ alignItems: 'center', margin: 1, flexDirection: 'row' }}>
                            <Text style={{ padding: 20, paddingTop: 0 }}>
                                <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                                {weatherData.main.temp_min}°
                            </Text>
                            <Text style={{ padding: 20, paddingTop: 0 }}>
                                <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />
                                {weatherData.main.temp_max}°
                            </Text>
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

                            rain</Text>

                        <Text style={{ padding: 10 }}><Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />

                            rain_probalility</Text>

                        <Text style={{ padding: 10 }}> <Image style={{ width: 13, height: 13 }} source={require('../assets/favicon.png')} />

                            wind_speedy</Text>
                    </View>
                </View>
            </View>

            {/*Previsão do tempo*/}
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "column", backgroundColor: 'blue', height: 200, paddingBottom: 10 }}>

                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: "row", backgroundColor: 'blue', paddingBottom: 10 }}>

                    <Text style={{ padding: 10 }}>WeekeyDay</Text>

                    <Text style={{ padding: 10 }}>date</Text>
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



            {/*Lista de Forecast*/}
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 180, paddingTop: 20 }}>
                <FlatList
                    data={weatherForecast}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ListItem>
                            <ListItem.Content>

                                <ListItem.Title>{item.date}</ListItem.Title>
                                <ListItem.Subtitle>{item.weekday}</ListItem.Subtitle>
                                <ListItem.Subtitle>Min: {item.min}° - Max: {item.max}°</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Content>
                                <ListItem.Title>{item.description}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )}
                />
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