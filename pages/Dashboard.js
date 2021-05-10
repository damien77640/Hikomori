import React, { useEffect, useState } from 'react';
import axios from "axios";
import { StyleSheet, Text, View, Button } from 'react-native';

const Dashboard = ({ navigation: { navigate } }) => {
  const path = "http://localhost:7272/manga"
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(path)
      .then(response => {
        setData(response.data)
      })
  },
    [])
  const Manga = () => {
    let lstManga = []
    let contenu
    console.log("data",data)
    data.map((manga, i) => {
      // permet de vérifier si le synopsis possède plus de 250 caractére
      if (manga.synopsis.length > 250) {
        contenu = manga.synopsis.substr(0, 250) + '...'
      }
      // Affichage des images et du synopsis
      lstManga.push(
        <View>
          <img onClick={() =>
          //navigate('Details Manga') //permet daller à la page Details Manga
          navigate('Details Manga', {
            id: manga.id,
            otherParam: 'anything you want here',
          })
        } src={manga.posterImageSmall} alt={'image'+i}></img>
          {contenu}
        </View>
      )
    })
    return lstManga
  }

  return (
    <View style={styles.container}>

      {Manga()}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;