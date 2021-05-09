import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DetailsManga = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text>Holala c'est la page description manga</Text>

      <Button
        title="retour Dashboard"
        onPress={() =>
          navigate('Home')
        }
      />
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