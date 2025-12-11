import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase credentials
const SUPABASE_URL = 'https://dwquuercecoldqqdudth.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3cXV1ZXJjZWNvbGRxcWR1ZHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3MjYxMTQsImV4cCI6MjA3ODMwMjExNH0.5udiw8121IaYqx3CASVCkChWNT5ccjsuAap6dyka8qQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
