import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-500">Valdyrheim</h1>
          <p className="mt-2 text-gray-300">Entre para começar sua jornada</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
