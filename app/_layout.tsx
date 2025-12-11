import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function Layout() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <Stack>
      {!session ? (
        <>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        </>
      )}
    </Stack>
  );
}
