import { useState } from 'react';
import { Search, Filter, Download, Eye } from 'lucide-react';
import { Link } from 'react-router';
import { mockMissions } from '../data/mockData';

export function Historique() {
  const missionsTerminees = mockMissions.filter((m) => m.statut === 'terminee' || m.statut === 'annulee');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Historique des Missions</h1>
          <p className="mt-1 text-gray-600">Consultez toutes les missions passées</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
          <Download className="h-4 w-4" />
          Exporter
        </button>
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-300 px-3 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher par client, référence..."
              className="flex-1 outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
          </div>
          <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm">
            <option value="">Tous les statuts</option>
            <option value="terminee">Terminée</option>
            <option value="annulee">Annulée</option>
          </select>
        </div>
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Référence</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Client</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Service</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Chauffeur</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {missionsTerminees.map((mission) => (
                <tr key={mission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900">{mission.reference}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(mission.dateDebut).toLocaleDateString('fr-FR')}
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
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {mission.chauffeur ? (
                      `${mission.chauffeur.prenom} ${mission.chauffeur.nom}`
                    ) : (
                      <span className="italic text-gray-400">Non assigné</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{mission.prix} €</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        mission.statut === 'terminee'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {mission.statut === 'terminee' ? 'Terminée' : 'Annulée'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/missions/${mission.id}`}
                      className="inline-flex rounded p-1 hover:bg-gray-100"
                    >
                      <Eye className="h-4 w-4 text-gray-600" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-600">Total missions terminées</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {missionsTerminees.filter((m) => m.statut === 'terminee').length}
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-600">Total missions annulées</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {missionsTerminees.filter((m) => m.statut === 'annulee').length}
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="text-sm text-gray-600">Chiffre d'affaires total</p>
          <p className="mt-2 text-3xl font-semibold text-green-600">
            {missionsTerminees
              .filter((m) => m.statut === 'terminee')
              .reduce((sum, m) => sum + m.prix, 0)
              .toLocaleString()}{' '}
            €
          </p>
        </div>
      </div>
    </div>
  );
}
