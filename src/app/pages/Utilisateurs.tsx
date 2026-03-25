import { useState } from 'react';
import { Users, Plus, X, Mail, Phone, Shield, Edit, Trash2 } from 'lucide-react';

interface Utilisateur {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  role: 'manager' | 'responsable_transport' | 'chauffeur';
  statut: 'actif' | 'inactif';
  dateCreation: string;
}

const mockUtilisateurs: Utilisateur[] = [
  {
    id: '1',
    nom: 'Ben Salah',
    prenom: 'Ahmed',
    email: 'ahmed.bensalah@transport.tn',
    telephone: '+216 98 111 222',
    role: 'responsable_transport',
    statut: 'actif',
    dateCreation: '2024-01-15'
  },
  {
    id: '2',
    nom: 'Trabelsi',
    prenom: 'Sami',
    email: 'sami.trabelsi@transport.tn',
    telephone: '+216 22 333 444',
    role: 'manager',
    statut: 'actif',
    dateCreation: '2024-01-10'
  },
  {
    id: '3',
    nom: 'Jendoubi',
    prenom: 'Fatma',
    email: 'fatma.jendoubi@transport.tn',
    telephone: '+216 55 555 666',
    role: 'chauffeur',
    statut: 'actif',
    dateCreation: '2024-02-01'
  }
];

export function Utilisateurs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [utilisateurs, setUtilisateurs] = useState(mockUtilisateurs);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    role: 'chauffeur' as const,
    motDePasse: '',
    confirmMotDePasse: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.motDePasse !== formData.confirmMotDePasse) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    const newUtilisateur: Utilisateur = {
      id: String(utilisateurs.length + 1),
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      role: formData.role,
      statut: 'actif',
      dateCreation: new Date().toISOString().split('T')[0]
    };

    setUtilisateurs([...utilisateurs, newUtilisateur]);
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      role: 'chauffeur',
      motDePasse: '',
      confirmMotDePasse: ''
    });
    setIsModalOpen(false);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'manager':
        return 'bg-purple-100 text-purple-700';
      case 'responsable_transport':
        return 'bg-blue-100 text-blue-700';
      case 'chauffeur':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'manager':
        return 'Manager';
      case 'responsable_transport':
        return 'Responsable Transport';
      case 'chauffeur':
        return 'Chauffeur';
      default:
        return role;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Gestion des Utilisateurs</h1>
          <p className="mt-1 text-gray-600">Créer et gérer les comptes utilisateurs de la plateforme</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Ajouter un utilisateur
        </button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-purple-100 p-3">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Managers</p>
              <p className="text-2xl font-semibold text-gray-900">
                {utilisateurs.filter((u) => u.role === 'manager').length}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Responsables Transport</p>
              <p className="text-2xl font-semibold text-gray-900">
                {utilisateurs.filter((u) => u.role === 'responsable_transport').length}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-100 p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Chauffeurs</p>
              <p className="text-2xl font-semibold text-gray-900">
                {utilisateurs.filter((u) => u.role === 'chauffeur').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau des utilisateurs */}
      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Utilisateur</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Téléphone</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Rôle</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Date création</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {utilisateurs.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                        {user.prenom.charAt(0)}
                        {user.nom.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {user.prenom} {user.nom}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      {user.telephone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getRoleBadgeColor(
                        user.role
                      )}`}
                    >
                      {getRoleLabel(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        user.statut === 'actif'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {user.statut === 'actif' ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(user.dateCreation).toLocaleDateString('fr-TN')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal pour ajouter un utilisateur */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-40 p-4">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Créer un nouveau compte utilisateur</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="Ex: Mohamed"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="Ex: Ben Ahmed"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="utilisateur@transport.tn"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="+216 XX XXX XXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Rôle</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                >
                  <option value="chauffeur">Chauffeur</option>
                  <option value="responsable_transport">Responsable Transport</option>
                  <option value="manager">Manager</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Le rôle détermine les permissions et l'accès aux fonctionnalités
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                  <input
                    type="password"
                    value={formData.motDePasse}
                    onChange={(e) => setFormData({ ...formData, motDePasse: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirmer mot de passe</label>
                  <input
                    type="password"
                    value={formData.confirmMotDePasse}
                    onChange={(e) => setFormData({ ...formData, confirmMotDePasse: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Créer le compte
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}