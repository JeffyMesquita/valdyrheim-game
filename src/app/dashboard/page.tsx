'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.push('/login');
          return;
        }

        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        if (!profile.onboarding_completed) {
          router.push('/dashboard/onboarding');
          return;
        }

        setProfile(profile);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-amber-500 mb-2">Bem-vindo, {profile.username}!</h1>
          <p className="text-gray-300">{profile.bio}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-amber-500 mb-4">Recursos</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Madeira</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Pedra</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Comida</span>
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-amber-500 mb-4">Trabalhadores</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Lenhadores</span>
                <span>2</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Mineiros</span>
                <span>2</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Fazendeiros</span>
                <span>2</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-amber-500 mb-4">Construções</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-300">
                <span>Casas</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Armazéns</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Fábricas</span>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
