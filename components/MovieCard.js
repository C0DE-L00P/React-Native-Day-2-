import React from "react";
import { View, Text, Image, Pressable, Animated } from "react-native";
import { Rating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

export default function MovieCard({
  title,
  rating,
  imgUrl,
  movieId,
  cardWidth,
  GoToMovie,
  movie
}) {
    const navigation = useNavigation();
    return (
    <Pressable onPress={()=> navigation.navigate('detail',{movie: movie})}>
      <Animated.View
        style={{
          borderRadius: 16,
          padding: 2,
          width: cardWidth,
          backgroundColor: "white",
          elevation: 16,
          flexDirection: "column",
          margin: 8,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 8,
          zIndex: 2,
          shadowColor: 'black',
        //   transform: [{translateY}]
        }}
      >
         <Image
            resizeMode="stretch"
            style={{ margin: 16,height: cardWidth+ 60,width: cardWidth-20, borderRadius:16}}
            source={{ uri: `https://image.tmdb.org/t/p/w500/${imgUrl}` }}
          />

        <Text style={{marginBottom: 8, fontWeight: 700}}>{title}</Text>
        <Rating ratingCount={5} imageSize={16} startingValue={rating/2} readonly />
        {/* TODO: Genres */}
      </Animated.View>
    </Pressable>
  );
}
