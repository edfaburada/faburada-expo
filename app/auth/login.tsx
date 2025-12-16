// login.tsx
import { globalStyles } from '@/style';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { supabase } from '../../supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.replace('./dashboard'); // go straight to dashboard
      } else {
        setLoading(false); // show login form
      }
    };
    checkSession();
  }, []);

  // Login handler
  const handleLogin = async () => {
  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  setLoading(true);

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert(error.message);
  } else if (data?.user) {
    router.replace("./dashboard");
  }

  setLoading(false);
};

  // Simple registration form
  const handleRegister = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      alert('Account created! Please check your email to confirm.');
      setIsRegistering(false);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[globalStyles.containerHome, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={globalStyles.containerHome}>
      <Text style={globalStyles.title}>{isRegistering ? 'Register' : 'Login'}</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={globalStyles.button}
        onPress={isRegistering ? handleRegister : handleLogin}
      >
        <Text style={globalStyles.buttonText}>{isRegistering ? 'Register' : 'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsRegistering(!isRegistering)}>
        <Text style={globalStyles.link}>
          {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
