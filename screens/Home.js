import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { supabase } from '../supabase';

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [column1, setColumn1] = useState('');
  const [column2, setColumn2] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data
  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('your_table').select('*');
    setLoading(false);
    if (error) console.log(error);
    else setData(data);
  };

  useEffect(() => {
    fetchData();

    // Real-time updates
    const subscription = supabase
      .from('your_table')
      .on('*', () => fetchData())
      .subscribe();

    return () => supabase.removeSubscription(subscription);
  }, []);

  // Create/Update
  const saveData = async () => {
    if (!column1.trim() || !column2.trim()) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    if (editingId) {
      await supabase.from('your_table').update({ column1, column2 }).eq('id', editingId);
      setEditingId(null);
    } else {
      await supabase.from('your_table').insert([{ column1, column2 }]);
    }

    setColumn1('');
    setColumn2('');
    fetchData();
  };

  // Delete
  const deleteData = (id) => {
    Alert.alert('Delete?', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await supabase.from('your_table').delete().eq('id', id);
          fetchData();
        },
      },
    ]);
  };

  // Edit
  const editData = (item) => {
    setEditingId(item.id);
    setColumn1(item.column1);
    setColumn2(item.column2);
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.replace('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.heading}>Supabase CRUD App</Text>

      {/* Input Form */}
      <View style={styles.form}>
        <TextInput
          placeholder="Column1"
          value={column1}
          onChangeText={setColumn1}
          style={styles.input}
        />
        <TextInput
          placeholder="Column2"
          value={column2}
          onChangeText={setColumn2}
          style={styles.input}
        />
        <Button title={editingId ? 'Update' : 'Add'} onPress={saveData} />
      </View>

      {/* Data List */}
      {loading ? (
        <Text style={{ marginTop: 20 }}>Loading...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>Column1: {item.column1}</Text>
              <Text style={styles.itemText}>Column2: {item.column2}</Text>
              <View style={styles.buttons}>
                <Button title="Edit" onPress={() => editData(item)} />
                <Button title="Delete" color="red" onPress={() => deleteData(item.id)} />
              </View>
            </View>
          )}
        />
      )}

      <Button title="Logout" onPress={handleLogout} color="#333" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  heading: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  form: { marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  list: { flex: 1 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 5, borderRadius: 5, backgroundColor: '#f9f9f9' },
  itemText: { fontSize: 16 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});
