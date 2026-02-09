import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Platform, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Spacing } from '@/constants/theme';

const WeatherApp = () => {

    console.log('WeatherApp Rendered');

    // App State (What temperature unit? What city?)
    const [unit, setUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit
    const [selectedCity, setSelectedCity] = useState('Saskatoon'); // Default city

    // Static weather data
    const weatherData = [
        { city: 'Saskatoon', temperatureC: 22, conditionText: 'Sunny' },
        { city: 'Regina', temperatureC: 19, conditionText: 'Cloudy' },
        { city: 'Prince Albert', temperatureC: 16, conditionText: 'Rainy' },
        { city: 'Real Saskatoon', temperatureC: -31, conditionText: 'Cold AF' },
    ];

    const toggleUnit = () => {
        setUnit(unit === 'C' ? 'F' : 'C');
    };

    const formatTemperature = (tempC: number): number => {
        return unit === 'C' ? tempC : (tempC * 9) / 5 + 32;
    };

    const selectedWeather = weatherData.find((data) => data.city === selectedCity);
    const toggleTempText = unit === 'C' ? 'Fahrenheit' : 'Celsius';

    let bg_image = require('@/assets/bg/sun_bg.png');
    if (selectedWeather?.conditionText == "Rainy") {
        bg_image = require('@/assets/bg/rain_bg.png');
    } else if (selectedWeather?.conditionText == "Cloudy") {
        bg_image = require('@/assets/bg/cloudy_bg.png');
    } else if ((selectedWeather?.temperatureC || 0) < 0) {
        bg_image = require('@/assets/bg/snow_bg.png');
    }

    return (
        <ImageBackground
            source={bg_image}
            style={{ flex: 1, justifyContent: 'center' }}
            resizeMode='cover'
        >
            <View style={styles.container}>
                <Text style={styles.header}>Weather App</Text>

                <View style={styles.pickerContainer}>
                    <Text style={styles.subheader}>Pick a City</Text>
                    <Picker
                        selectedValue={selectedCity}
                        onValueChange={(itemValue) => setSelectedCity(itemValue)}
                        mode="dropdown"
                    >

                        {weatherData.map((data, index) => (
                            <Picker.Item key={index} label={data.city} value={data.city} />
                        ))}

                    </Picker>
                </View>

                {selectedWeather ? (
                    <View style={styles.weatherCard}>
                        <Text style={styles.city}>{selectedWeather.city}</Text>
                        <Text style={styles.conditionText}>{selectedWeather.conditionText}</Text>

                        <Text style={styles.temperature}>
                            {formatTemperature(selectedWeather.temperatureC).toFixed(2)}°{unit}
                        </Text>
                        <Button title={`Toggle To ${toggleTempText}`} color="#fb8618ff" onPress={toggleUnit} />
                    </View>
                ) : (
                    <Text style={styles.loading}>No weather data available</Text>
                )}

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#FFFFFF", // Uncomment to use solid background
        backgroundColor: "rgba(255, 255, 255, 0.35)", // Used as an overlay over BG images
        padding: Spacing.lg,
        gap: Spacing.md,
    },

    header: {
        fontSize: 34,
        fontWeight: "800",
        color: "#0B1220",
    },

    subheader: {
        fontSize: 21,
        fontWeight: "600",
        color: "#0B1220",
    },

    pickerContainer: {
        borderRadius: 21,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#0EA5E9",

        padding: 13,
        backgroundColor: "#FFFFFF",

        ...Platform.select({
            ios: {
                shadowColor: "#1E3A8A",
                shadowOpacity: 0.06,
                shadowRadius: 12,
                shadowOffset: { width: 0, height: 8 },
            },
            android: { elevation: 13 },
        }),
    },

    weatherCard: {
        borderRadius: 21,
        padding: 13,
        backgroundColor: "#0EA5E9",

        ...Platform.select({
            ios: {
                shadowColor: "#0EA5E9",
                shadowOpacity: 0.18,
                shadowRadius: 16,
                shadowOffset: { width: 0, height: 10 },
            },
            android: { elevation: 13 },
        }),
    },

    city: {
        fontSize: 21,
        fontWeight: "800",
        color: "#FFFFFF",
    },

    conditionText: {
        fontSize: 13,
        fontWeight: "600",
        color: "rgba(255,255,255,0.85)",
        textTransform: "uppercase",
    },

    temperature: {
        fontSize: 55,
        fontWeight: "800",
        color: "#FFFFFF",
    },

    loading: {
        textAlign: "center",
        fontSize: 13,
        color: "#334155",
    },
});

export default WeatherApp;