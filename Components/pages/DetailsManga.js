import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { useParams } from 'react-router';
import tailwind from 'tailwind-rn';
import axios from "axios";

const DetailsManga = ({ route, navigation: { navigate } }) => {

  const { id } = route.params;

  const path = `http://900f1720e4b3.ngrok.io/manga/${id}`
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(path)
      .then(response => {
        setData(response.data)
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
        throw error;
      });
  },
    [])


  return (
    <View style={styles.container}>
      <View style={tailwind('h-full w-full')}  >
        {data ? (
          <View class="manga">
            {data.map((manga, i) => (
              <View key={i}>
                <View style={tailwind('text-center   ')} >
                  <Image style={tailwind(' w-10 h-10')} source={{ uri: manga.posterImageSmall }} alt={'image' + i}></Image>
                </View>
                <View style={tailwind('mx-5  text-center')}>
                  <View class="">
                    <Text style={tailwind(' text-indigo-600 ')}> {manga.tittles_en} </Text>
                    <Text>Popularity Rank : {manga.popularityRank}</Text>
                    <Text>Episode Length : {manga.episodeLength}</Text>
                  </View>
                </View>
                <View style={tailwind('mx-7  text-justify')} >
                  <Text>SYNOPSIS</Text>
                  <View class="synopsis rounded-xl border-solid border-4">
                    <ScrollView>
                      <Text style={styles.text} >{manga.synopsis}</Text>
                    </ScrollView>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View> Loading... </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Montserrat',
  },
  text: {
    fontSize: 18,
  },
});


export default DetailsManga;