
import { createClient } from '@supabase/supabase-js';

// 환경변수 가져오기
const supabaseUrl = 'https://xebupzloagkebadwwewg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYnVwemxvYWdrZWJhZHd3ZXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NzEwOTYsImV4cCI6MjAyOTI0NzA5Nn0.3ODA82oUWGETdziqgBSuUQUX3TSpZVgSHw07q1tGT-I';

// Supabase 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseKey);
