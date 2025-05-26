import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/nordic-bg.jpg')] bg-cover bg-center">
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-500">Valdyrheim</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Construa seu reino viking e escreva sua saga
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/register"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Começar Jornada
              </Link>
              <Link
                href="/login"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg border-2 border-white transition-colors"
              >
                Entrar
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-amber-500 text-4xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold mb-2 text-amber-500">Conquista</h3>
              <p className="text-gray-300">
                Expanda seu território e domine novas terras em busca de glória e riquezas.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-amber-500 text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-bold mb-2 text-amber-500">Construção</h3>
              <p className="text-gray-300">
                Erga grandes salões, forjas e assentamentos para seu povo prosperar.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-amber-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-amber-500">Recursos</h3>
              <p className="text-gray-300">
                Gerencie recursos, treine guerreiros e desenvolva sua economia.
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center text-gray-400">
            <p>© 2024 Valdyrheim - Todos os direitos reservados</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
