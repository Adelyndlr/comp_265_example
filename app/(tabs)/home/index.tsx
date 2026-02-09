import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

            {/* Pass a parameter using a query string */}
            <Link href="/home/settings?special=inline_param" style={styles.button}>
                Go to Settings (Method 1)
            </Link>

            {/* Pass a parameter using an object */}
            <Link
                href={{
                    pathname: "/home/settings",
                    params: { special: "object_param" },
                }}
                style={styles.button}
            >
                Go to Settings (Method 2)
            </Link>

            {<Link href="/home/modal" style={styles.button}>
                Open Modal
            </Link>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#007bff",
        color: "white",
        borderRadius: 5,
        textAlign: "center",
    },
});