import React, { useEffect, useState } from 'react';
import axios from "axios";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const Dashboard = ({ navigation: { navigate } }) => {

  const path = "http://900f1720e4b3.ngrok.io/manga"
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(path)
      .then(response => {
        setData(response.data.slice(0,100))
      })
  },
    [])
  const Manga = () => {
    let lstManga = []
    let contenu = ""
    data.map((manga, i) => {
      // permet de vérifier si le synopsis possède plus de 250 caractére
      if (manga.synopsis.length > 250) {
        contenu = manga.synopsis.substr(0, 250) + '...'
      }

      lstManga.push(
        <View  key={i} style={tailwind(' text-center ')}> 
          <TouchableHighlight onPress={() =>
             //permet daller à la page Details Manga
            navigate('Details Manga', {
              id: manga.id,
              otherParam: 'anything you want here',
            })
          }>
          <Image style={tailwind(' w-10 h-10')} source={{uri : manga.posterImageSmall }} alt={'image' + i}></Image>
          </TouchableHighlight>
          <Text>{manga.tittles_jap}</Text>
          </View>
      )
    })
    return lstManga
  }

  return (
    <View style={styles.container}>
      <Button
  onPress={() =>
   navigate('SignUpScreen')
 }
  title="Page Login en attendant la NavBar ta vu"
/>
<Button
  onPress={() =>
   navigate('Geoloc')
 }
  title="Page pour avoir la Geoloc ta vu"
/>
      <ScrollView>
      {Manga()}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Montserrat',
  },
});

export default Dashboard;