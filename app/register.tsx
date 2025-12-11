import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { supabase } from '../supabase';
import { globalStyles } from './styles';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Account created! Please check your email.');
      router.replace('/login');
    }
  };

  return (
    <View style={globalStyles.containerHome}>
      <Text style={globalStyles.title}>Register</Text>

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

      <TouchableOpacity style={globalStyles.button} onPress={handleRegister}>
        <Text style={globalStyles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={globalStyles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}
