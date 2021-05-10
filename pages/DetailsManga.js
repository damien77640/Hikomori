import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useParams } from 'react-router';
import tailwind from 'tailwind-rn';
import axios from "axios";

const DetailsManga =  ({route, navigation: { navigate } }) => {

  const { id, otherParam } = route.params;
  console.log(id)

  
  const path = `http://localhost:7272/manga/${id}`
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(path)
      .then(response => {
        setData(response.data)
      }).catch(function(error) {
console.log('There has been a problem with your fetch operation: ' + error.message);
 // ADD THIS THROW error
  throw error;
});
  },
    [])

    console.log(data)


const styles = StyleSheet.create({
  container: {
    fontFamily: 'Montserrat'
  },
});

  
  return (
    <View style={styles.container}>
   

        
      <View style={tailwind('h-full w-full' )}  >
      

                
              {data ? (

                <View className="manga">
              

                  {data.map(manga => (
                
                      <View style={tailwind(' w-full font-dosis' )} >
                        <View  style={tailwind('text-center   ' )} >
                          <img  style={tailwind('rounded-xl mt-3 w-2/5   self-center' )}  src={manga.posterImageSmall} alt="Logo" />
                        </View>
                        
                     
                        <View    style={tailwind('mx-5  text-center')}>

                          <View className="">
                            
                            <h1 style={tailwind(' text-indigo-600 ' )}> {manga.tittles_en} </h1> 
                          
                              <p >Popularity Rank : {manga.popularityRank}</p>
                              <p >Episode Length : {manga.episodeLength}</p>
                          </View>

                        </View>
                        

                      <View style={tailwind('mx-7  text-justify')} >
                      <h2>SYNOPSIS</h2>

                      <View className="synopsis rounded-xl border-solid border-4">
                          {manga.synopsis}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default DetailsManga;