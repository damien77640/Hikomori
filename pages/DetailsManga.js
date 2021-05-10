import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useParams } from 'react-router';
import tailwind from 'tailwind-rn';
import axios from "axios";

const DetailsManga =  ({route, navigation: { navigate } }) => {

  const { id, otherParam } = route.params;
  console.log(otherParam)

  
  const path = `http://localhost:7272/manga/1`
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(path)
      .then(response => {
        setData(response.data)
      })
  },
    [])

    console.log(data)

  
  return (
    <View style={styles.container}>
   

        
      <div className="all_page" >
      

                
              {data ? (

                <div className="manga">
              

                  {data.map(manga => (
                
                      <div>
                        <div >

                        
                          <img  style={tailwind('rounded-xl')}  src={manga.posterImageSmall} alt="Logo" />
                         
                         {/* <div className="info_droite">
                            
                            <h1> {manga.tittles_en} </h1> 
                          
                              <p style={{color:"#E8ECF2",marginLeft:"10px",fontSize:"15px",fontWeight:"bold"}}>Popularity Rank : {manga.popularityRank}</p>
                              <p style={{color:"#E8ECF2",marginLeft:"10px",fontSize:"15px",fontWeight:"bold"}}>Episode Length : {manga.episodeLength}</p>
                          </div>

                        </div>

                      <div>
                      <h2>SYNOPSIS</h2>

                      <div className="synopsis">
                          {manga.synopsis}
                      </div>
                      */}
                      </div>

                  </div>
                                          
                  ))}
                </div>
              ) : (
              <div> Loading... </div>
              )}


            
              


        </div>
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