import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LogIn, User, Shield } from 'lucide-react';

// Comptes de test
const testAccounts = [
  {
    email: 'manager@transport.tn',
    password: 'manager123',
    role: 'manager',
    nom: 'Manager Principal'
  },
  {
    email: 'responsable@transport.tn',
    password: 'resp123',
    role: 'responsable_transport',
    nom: 'Responsable Transport'
  }
];

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Vérifier les identifiants
    const account = testAccounts.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (account) {
      // Stocker les infos de l'utilisateur
      localStorage.setItem('userRole', account.role);
      localStorage.setItem('userName', account.nom);
      localStorage.setItem('userEmail', account.email);
      
      // Rediriger selon le rôle
      if (account.role === 'manager') {
        navigate('/dashboard');
      } else {
        navigate('/missions');
      }
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };

  const quickLogin = (account: typeof testAccounts[0]) => {
    setEmail(account.email);
    setPassword(account.password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 p-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg bg-white p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <LogIn className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Transport Manager</h2>
            <p className="mt-2 text-gray-600">Gestion des Ordres de Mission</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="votre.email@transport.tn"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Se connecter
            </button>
          </form>

          {/* Comptes de test */}
          <div className="mt-6">
            <p className="mb-3 text-center text-sm text-gray-600">Comptes de démonstration :</p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => quickLogin(testAccounts[0])}
                className="flex w-full items-center gap-3 rounded-lg border-2 border-purple-200 bg-purple-50 p-3 text-left transition-all hover:border-purple-400 hover:bg-purple-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Manager</p>
                  <p className="text-xs text-gray-600">manager@transport.tn</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => quickLogin(testAccounts[1])}
                className="flex w-full items-center gap-3 rounded-lg border-2 border-blue-200 bg-blue-50 p-3 text-left transition-all hover:border-blue-400 hover:bg-blue-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Responsable Transport</p>
                  <p className="text-xs text-gray-600">responsable@transport.tn</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-white">
          © 2026 Transport Manager - Tous droits réservés
        </p>
      </div>
    </div>
  );
}