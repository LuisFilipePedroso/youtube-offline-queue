import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Container, Input, SubmitButton, SubmitButtonText } from './styles';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(() => {
    const body = {
      name,
      email,
    };

    setName('');
    setEmail('');
  }, [name, email]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="#6b6b6b"
        />
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#6b6b6b"
        />

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Salvar</SubmitButtonText>
        </SubmitButton>
      </Container>
    </SafeAreaView>
  );
};

export default App;
