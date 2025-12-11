import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../supabase';
import { globalStyles } from './styles';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  return (
    <View style={globalStyles.containerHome}>
      <Text style={globalStyles.title}>Welcome to Dashboard</Text>

      {/* Go to Notes page */}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push('/notes')}
      >
        <Text style={globalStyles.buttonText}>Go to Notes</Text>
      </TouchableOpacity>

      {/* Logout button */}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleLogout}
      >
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
