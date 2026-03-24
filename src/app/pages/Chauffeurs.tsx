import { useState } from 'react';
import { Plus, Edit, Trash2, Phone, Mail } from 'lucide-react';
import { mockChauffeurs } from '../data/mockData';
import { Chauffeur } from '../types';

export function Chauffeurs() {
  const [chauffeurs, setChauffeurs] = useState(mockChauffeurs);
  const [showForm, setShowForm] = useState(false);
  const [editingChauffeur, setEditingChauffeur] = useState<Chauffeur | null>(null);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'disponible':
        return 'bg-green-100 text-green-800';
      case 'en_mission':
        return 'bg-blue-100 text-blue-800';
      case 'indisponible':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatutLabel = (statut: string) => {
    switch (statut) {
      case 'disponible':
        return 'Disponible';
      case 'en_mission':
        return 'En mission';
      case 'indisponible':
        return 'Indisponible';
      default:
        return statut;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Gestion des Chauffeurs</h1>
          <p className="mt-1 text-gray-600">Gérez vos chauffeurs et leur disponibilité</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Ajouter un chauffeur
        </button>
      </div>

      {showForm && (
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            {editingChauffeur ? 'Modifier le chauffeur' : 'Nouveau chauffeur'}
          </h3>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Prénom</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Prénom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="+33 6 00 00 00 00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="email@transport.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Permis</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="B, C, D"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date d'embauche</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Enregistrer
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Chauffeur</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Contact</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Permis</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Date d'embauche</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {chauffeurs.map((chauffeur) => (
                <tr key={chauffeur.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                        {chauffeur.prenom[0]}
                        {chauffeur.nom[0]}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {chauffeur.prenom} {chauffeur.nom}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        {chauffeur.telephone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        {chauffeur.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{chauffeur.permis}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(chauffeur.dateEmbauche).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatutColor(
                        chauffeur.statut
                      )}`}
                    >
                      {getStatutLabel(chauffeur.statut)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="rounded p-1 hover:bg-gray-100">
                        <Edit className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="rounded p-1 hover:bg-gray-100">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
