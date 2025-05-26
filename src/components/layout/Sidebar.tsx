'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Visão Geral',
    href: '/dashboard',
    icon: '🏰',
  },
  {
    title: 'Trabalhadores',
    href: '/dashboard/workers',
    icon: '👷',
  },
  {
    title: 'Recursos',
    href: '/dashboard/resources',
    icon: '⚡',
  },
  {
    title: 'Construções',
    href: '/dashboard/buildings',
    icon: '🏗️',
  },
  {
    title: 'Perfil',
    href: '/dashboard/profile',
    icon: '👤',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-white/10 bg-black/20">
      <div className="flex h-14 items-center border-b border-white/10 px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-xl">⚔️</span>
          <span className="font-semibold">Valdyrheim</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
              pathname === item.href
                ? 'bg-amber-500/10 text-amber-500'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            )}
          >
            <span className="text-lg">{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
