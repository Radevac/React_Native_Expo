import {StatusBar} from 'expo-status-bar';
import {StyleSheet, SafeAreaView} from 'react-native';
import UserCard from "./src/components/UserCard";
import { SafeAreaView as SafeAreaViewContext} from 'react-native-safe-area-context';
//ex4 Taska
export default function App() {
  const user = {
    name: 'Rembo',
    lastName: 'Last Blood'
  }

  const handleUserPress = () => {
    alert('User Selected', `You selected ${user.name}`);
  }

  return (
      <SafeAreaViewContext style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <UserCard onPress={handleUserPress} user={user} />
      </SafeAreaViewContext>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',

  },
});


