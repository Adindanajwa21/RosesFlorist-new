// Konfigurasi frontend Supabase. Publishable key boleh digunakan di browser;
// keamanan data tetap diatur melalui Row Level Security (RLS) di Supabase.
const SUPABASE_URL = 'https://dvegztynejiveiffyeri.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wI_1AjwmXxwBwnrquQRCVw_56Eyg1ME';

const supabaseClient = window.supabase
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
