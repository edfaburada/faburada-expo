import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { supabase } from '../supabase';
import { globalStyles } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.replace('/dashboard');
    }
  };

  return (
    <View style={globalStyles.containerHome}>
      <Text style={globalStyles.title}>Login</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={globalStyles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
