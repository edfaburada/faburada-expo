import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles';

export default function Profile() {
  const router = useRouter();

  return (
    <View style={globalStyles.containerProfile}>
      <Text style={globalStyles.title}>My Profile</Text>

<<<<<<< HEAD
=======
<<<<<<< HEAD
      {/* Profile Image */}
      <Image
        source={require('../assets/images/eve.webp')}
        style={globalStyles.avatar}
        defaultSource={require('../assets/images/eve.webp')}
      />
=======
>>>>>>> 0c32af5 (Myr commit message)
{/* Profile Image */}
<Image
  source={require('./assets/images/eve.webp')}
  style={globalStyles.avatar}
  defaultSource={require('./assets/images/eve.webp')}
/>


<<<<<<< HEAD
=======
>>>>>>> 7fbdfad (Initial commit)
>>>>>>> 0c32af5 (Myr commit message)

      <Text style={globalStyles.name}>Evelyn Faburada</Text>
      <Text style={globalStyles.bio}>Aspiring Developer | Learning Expo Router</Text>

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
