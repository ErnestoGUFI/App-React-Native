import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Paleta de colores para estilos distintos
  const colors = [
    "#FFB6B9", "#FAE3D9", "#BBDED6", "#8AC6D1",
    "#FFD700", "#FF7F50", "#87CEEB", "#98FB98",
    "#DDA0DD", "#FFA07A"
  ];

  // Componente para mostrar cada Pokémon
  const Item = ({ name, index }) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <View style={[styles.item, { backgroundColor: colors[index % colors.length] }]}>
        <Text style={styles.title}>{capitalizedName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({ item, index }) => <Item name={item.name} index={index} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
