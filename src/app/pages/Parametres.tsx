import { Bell, Lock, User, Globe } from 'lucide-react';

export function Parametres() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Paramètres</h1>
        <p className="mt-1 text-gray-600">Gérez les paramètres de votre compte et de l'application</p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center gap-3 border-b pb-4">
            <User className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Profil</h3>
          </div>
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  defaultValue="Jean"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  defaultValue="Dupont"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue="responsable@transport.com"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Enregistrer les modifications
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center gap-3 border-b pb-4">
            <Lock className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Sécurité</h3>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mot de passe actuel</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirmer le nouveau mot de passe
              </label>
              <input
                type="password"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="••••••••"
              />
            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Modifier le mot de passe
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center gap-3 border-b pb-4">
            <Bell className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="mt-6 space-y-4">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Notifications par email</p>
                <p className="text-sm text-gray-600">Recevoir des emails pour les nouvelles missions</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded text-blue-600" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Notifications SMS</p>
                <p className="text-sm text-gray-600">Recevoir des SMS pour les missions urgentes</p>
              </div>
              <input type="checkbox" className="h-4 w-4 rounded text-blue-600" />
            </label>
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Notifications de rappel</p>
                <p className="text-sm text-gray-600">Recevoir des rappels avant les missions</p>
              </div>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded text-blue-600" />
            </label>
          </div>
        </div>

        {/* Language & Region */}
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center gap-3 border-b pb-4">
            <Globe className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Langue et région</h3>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Langue</label>
              <select className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fuseau horaire</label>
              <select className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2">
                <option value="europe/paris">Europe/Paris (GMT+1)</option>
                <option value="europe/london">Europe/London (GMT+0)</option>
                <option value="america/new_york">America/New York (GMT-5)</option>
              </select>
            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
