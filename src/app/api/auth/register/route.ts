import { createServerSupabaseClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password, username } = await request.json();
    const supabase = createServerSupabaseClient();

    // 1. Criar o usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    if (!authData.user) {
      return NextResponse.json({ error: 'Erro ao criar usuário' }, { status: 400 });
    }

    // 2. Criar o perfil do usuário na tabela profiles
    const { error: profileError } = await supabase.from('profiles').insert([
      {
        id: authData.user.id,
        username,
        avatar_url: null,
        bio: null,
      },
    ]);

    if (profileError) {
      // Se der erro ao criar o perfil, vamos tentar deletar o usuário
      await supabase.auth.admin.deleteUser(authData.user.id);
      return NextResponse.json({ error: 'Erro ao criar perfil do usuário' }, { status: 400 });
    }

    return NextResponse.json({
      user: authData.user,
      message: 'Usuário criado com sucesso! Verifique seu email para confirmar o cadastro.',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
