import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from './styles';
import { supabase } from '../supabase';

export default function Index() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  return (
    <View style={globalStyles.containerHome}>
      <Text style={globalStyles.title}>Welcome Home</Text>

      <TouchableOpacity style={globalStyles.button} onPress={() => router.push('/about')}>
        <Text style={globalStyles.buttonText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => router.push('/contact')}>
        <Text style={globalStyles.buttonText}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => router.push('/profile')}>
        <Text style={globalStyles.buttonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => router.push('/settings')}>
        <Text style={globalStyles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => router.push('/dashboard')}>
        <Text style={globalStyles.buttonText}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={handleLogout}>
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
