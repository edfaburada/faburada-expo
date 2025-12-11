// app/index.tsx
import { View, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { globalStyles } from './styles';

export default function Home() {
  const router = useRouter();

  return (
    <View style={globalStyles.containerHome}>
      <Text style={globalStyles.title}>Welcome Home</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push('/profile')}
      >
        <Text style={globalStyles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push('/contact')}
      >
        <Text style={globalStyles.buttonText}>Go to Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push('/settings')}
      >
        <Text style={globalStyles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>

      {/* New button linking to About page */}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push('/about')}
      >
        <Text style={globalStyles.buttonText}>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
}
