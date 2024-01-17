import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  
  const [number, setNumber] = useState(0)

  function incrementar()
  {
    setNumber(number +1);
  }

  return (
    <View style={styles.container}>
      <Image
      source={require('./src/assets/senai.png')}
      style={styles.imagem}      
      />      
      <Text style={styles.texto}>
        O Serviço Nacional de Aprendizagem Industrial (SENAI) é a maior 
        rede de Educação Profissional da América Latina.
      </Text>
      <Text style={styles.texto}>
        Contagem de cliques: {number}
      </Text>
      <Button
        title='Incrementar'
        onPress={incrementar}
        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 300,
    height: 150
  },
  texto: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
    margin: 29
  },
});
