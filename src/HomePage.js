import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { SharedElement } from "react-navigation-shared-element";


export default function HomePage({ navigation }) {
  
const [dimensions, setDimensions] = useState(Dimensions.get('window'))
Dimensions.addEventListener("change", () => setDimensions(Dimensions.get('window')));

  const [movies, setMovies] = useState([]);

  const ITEM_SIZE = 200;
  const SPACE_ITEM_SIZE = (400 - ITEM_SIZE) / 2;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const height = dimensions.height;
  const width = dimensions.width
  

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const GoToMovie = (movieId) =>
    navigation.navigate("detail", { movieId: movieId, dimensions: dimensions});

  const styles = StyleSheet.create({
    bottomSheet: {
      backgroundColor: "white",
      position: "absolute",
      height: height,
      width: width,
      borderTopEndRadius: 16,
      borderTopStartRadius: 16,
      transform: [{ translateY: height/2 }],
    },
  });

  return (
    <View style={{flex:1}}>
      <FlatList
        data={movies}
        style={{ paddingVertical: 16, flex: 1 }}
        columnWrapperStyle={{ justifyContent: "space-around", flexGrow:1  }}
        numColumns={2}
        centerContent
        keyExtractor={(item) => item.id}
        renderItem={({ item: movie }) => (
          <MovieCard
            movie={movie}
            GoToMovie={GoToMovie}
            cardWidth={ITEM_SIZE}
            title={movie.title}
            rating={movie.vote_average}
            imgUrl={movie.poster_path}
            movieId={movie.id}
            key={movie.id}
          />
        )}
      />

      {/* Bottom Sheet */}

      <SharedElement id="bottomSheet">
        <ScrollView style={styles.bottomSheet}></ScrollView>
      </SharedElement>
    </View>
  );
}
