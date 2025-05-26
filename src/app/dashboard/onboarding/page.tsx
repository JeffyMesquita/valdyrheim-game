'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function OnboardingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    villageName: '',
    bio: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      // Update user profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          username: formData.username,
          bio: formData.bio,
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // Create Dróttgardr
      const { error: drottgardrError } = await supabase.from('drottgardrs').insert({
        name: formData.villageName,
        level: 1,
        xp: 0,
        worker_count: 6,
        profile_id: user.id,
      });

      if (drottgardrError) throw drottgardrError;

      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar dados');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-500">Bem-vindo a Valdyrheim</h2>
          <p className="mt-2 text-gray-300">Complete seu perfil para começar sua jornada</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div
              className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                Nome do Jogador
              </label>
              <Input
                id="username"
                type="text"
                required
                value={formData.username}
                onChange={e => setFormData({ ...formData, username: e.target.value })}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
                placeholder="Seu nome no jogo"
              />
            </div>

            <div>
              <label htmlFor="villageName" className="block text-sm font-medium text-gray-300">
                Nome do Dróttgardr
              </label>
              <Input
                id="villageName"
                type="text"
                required
                value={formData.villageName}
                onChange={e => setFormData({ ...formData, villageName: e.target.value })}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
                placeholder="Nome do seu Dróttgardr"
              />
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-300">
                Biografia
              </label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={e => setFormData({ ...formData, bio: e.target.value })}
                className="mt-1 bg-gray-800 border-gray-700 text-white"
                placeholder="Conte um pouco sobre você e seu Dróttgardr..."
                rows={4}
              />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 text-sm text-gray-300">
            <p className="mb-2">Ao criar seu Dróttgardr, você receberá:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>6 Fólksmenn (trabalhadores) iniciais</li>
              <li>Nível inicial 1</li>
              <li>Capacidade de alocar seus trabalhadores em diferentes recursos a cada turno</li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              'Começar Jornada'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
