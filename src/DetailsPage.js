import React from "react";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text } from "react-native";

export default function DetailsPage() {
  const route = useRoute();
  const movie = route.params.movie;

  return (
    <ScrollView style={{ paddingBottom: 80 }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={{ height: 320, width: "100%" }}
      />

      <Image
        resizeMode="stretch"
        style={{
          margin: 16,
          height: 200,
          width: 140,
          borderRadius: 16,
          position: "absolute",
          right: 16,
          top: 260,
        }}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />

      <Text style={{ fontSize: 24, margin: 16, fontWeight: 700 }}>
        {movie.title}
      </Text>
      <Text
        style={{
          marginHorizontal: 16,
          marginTop: 8,
          width: 300,
          textAlign: "justify",
        }}
      >
        {movie.overview}
      </Text>
    </ScrollView>
  );
}
