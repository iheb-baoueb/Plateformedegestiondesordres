import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page non trouvée</p>
        <p className="mt-2 text-gray-500">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            <Home className="h-5 w-5" />
            Retour au dashboard
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 transition-colors hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5" />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
}
