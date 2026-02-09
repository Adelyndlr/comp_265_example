import WeatherHeroPaperView from "@/components/screens/weather_example";

export default function DemoWeatherScreen() {
    return (
        <WeatherHeroPaperView city="New York"
            temperature={20}
            condition="Cloudy"
            high={20}
            low={12}
            forecast={[
                { day: "Monday", icon: "cloud.sun.bolt.fill", high: 19, low: 10 },
                { day: "Tuesday", icon: "sun.horizon", high: 20, low: 12 },
                { day: "Wednesday", icon: "cloud.snow", high: 21, low: 13 },
                { day: "Thursday", icon: "sun.horizon", high: 34, low: 21 },
                { day: "Friday", icon: "cloud", high: 13, low: 8 },
            ]}
        />
    );
}