import React from "react";
import { useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text ,View} from "react-native";
import { SharedElement } from "react-navigation-shared-element";

export default function DetailsPage() {
  const route = useRoute();
  const movie = route.params.movie;
  const dimensions = route.params.dimensions;

  return (
    <ScrollView style={{ paddingBottom: 80 }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={{ height: 320, width: "100%" }}
      />

      <View
        style={{
          shadowColor: "black",
          shadowOffset: { width: 8, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 16,
          elevation: 30,
          position: "absolute",
          backgroundColor: 'white',
          margin: 16,
          right: 16,
          top: 260,
          borderRadius: 16
        }}
      >
        <Image
          resizeMode="stretch"
          style={{
            height: 200,
            width: 140,
            borderRadius: 16,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
        />
      </View>

      <SharedElement id="bottomSheet">
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
      </SharedElement>
    </ScrollView>
  );
}
