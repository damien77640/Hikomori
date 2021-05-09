import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ceci est le Dashboard</Text>

        <Button
          title="Aller à la page Details Manga"
          onPress={() =>
            this.props.navigation.navigate('Details Manga') //parametrage route
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

export default Dashboard;