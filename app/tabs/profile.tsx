import { useRouter } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '@/style';

export default function Profile() {
  const router = useRouter();

  return (
    <View style={globalStyles.containerProfile}>
      <Text style={globalStyles.title}>My Profile</Text>

      {/* Profile Image */}
      <Image
        source={require('../../assets/images/eve.webp')}
        style={globalStyles.avatar}
      />

      <Text style={globalStyles.name}>Evelyn Faburada</Text>
      <Text style={globalStyles.bio}>
        Aspiring Developer | Learning Expo Router
      </Text>

      {/* Go Back Home Button */}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => router.push('/')}
      >
        <Text style={globalStyles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}
