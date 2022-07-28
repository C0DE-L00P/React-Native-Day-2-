import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Animated } from "react-native";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function HomePage({ navigation }) {
  const [movies, setMovies] = useState([]);

  const ITEM_SIZE = 200;
  const SPACE_ITEM_SIZE = (400 - ITEM_SIZE) / 2;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const GoToMovie = (movieId) => navigation.navigate("detail", { movieId: movieId });

  return (
    <FlatList
      data={movies}
      style={{marginTop: 16}}
      columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
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
  );
}
