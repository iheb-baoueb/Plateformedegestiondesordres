import { useState } from 'react';
import { Plus, Filter, Eye, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import { mockMissions } from '../data/mockData';

export function Missions() {
  const [missions] = useState(mockMissions);
  const [filterStatut, setFilterStatut] = useState('tous');

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'planifiee':
        return 'bg-yellow-100 text-yellow-800';
      case 'en_cours':
        return 'bg-blue-100 text-blue-800';
      case 'terminee':
        return 'bg-green-100 text-green-800';
      case 'annulee':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatutLabel = (statut: string) => {
    switch (statut) {
      case 'planifiee':
        return 'Planifiée';
      case 'en_cours':
        return 'En cours';
      case 'terminee':
        return 'Terminée';
      case 'annulee':
        return 'Annulée';
      default:
        return statut;
    }
  };

  const filteredMissions = filterStatut === 'tous' 
    ? missions 
    : missions.filter(m => m.statut === filterStatut);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Gestion des Missions</h1>
          <p className="mt-1 text-gray-600">Planifiez et suivez les missions de transport</p>
        </div>
        <Link
          to="/missions/nouvelle"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Créer une mission
        </Link>
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filtrer par:</span>
          </div>
          <select 
            value={filterStatut}
            onChange={(e) => setFilterStatut(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm"
          >
            <option value="tous">Tous les statuts</option>
            <option value="planifiee">Planifiée</option>
            <option value="en_cours">En cours</option>
            <option value="terminee">Terminée</option>
            <option value="annulee">Annulée</option>
          </select>
          <input
            type="date"
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm"
            placeholder="Date"
          />
          <input
            type="text"
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm"
            placeholder="Rechercher par client..."
          />
        </div>
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Référence</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Client</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Service</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Chauffeur</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMissions.map((mission) => (
                <tr key={mission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900">{mission.reference}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{mission.client.nom}</p>
                      {mission.client.entreprise && (
                        <p className="text-sm text-gray-600">{mission.client.entreprise}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{mission.service.nom}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="text-gray-900">
                        {new Date(mission.dateDebut).toLocaleDateString('fr-FR')}
                      </p>
                      <p className="text-gray-600">
                        {new Date(mission.dateDebut).toLocaleTimeString('fr-FR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {mission.chauffeur ? (
                      <span className="text-sm text-gray-900">
                        {mission.chauffeur.prenom} {mission.chauffeur.nom}
                      </span>
                    ) : (
                      <span className="text-sm italic text-gray-400">Non assigné</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatutColor(
                        mission.statut
                      )}`}
                    >
                      {getStatutLabel(mission.statut)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link to={`/missions/${mission.id}`} className="rounded p-1 hover:bg-gray-100">
                        <Eye className="h-4 w-4 text-gray-600" />
                      </Link>
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
