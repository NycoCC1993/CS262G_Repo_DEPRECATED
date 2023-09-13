import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from'./components/Button';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ChapterCache</Text>
      <StatusBar style="auto" />
	  <View style={styles.footerContainer}>
	    <Button label="+" />
	  </View>
    </View>
	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'top',
	marginTop: 50,
  },
  
  text: {
	  fontSize: 50,
	  color: '#000',
  },
  footerContainer: {
	  flex: 1/3,
	  alignItems: 'right',
	  borderColor: 'black',
	  backgroundColor: 'white',
  }
});
