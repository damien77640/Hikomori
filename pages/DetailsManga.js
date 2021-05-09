import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class DetailsManga extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Holala c'est la page description manga</Text>
  
          <Button
            title="retour Dashboard"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
          />
        </View>
      );
    }
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