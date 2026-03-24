import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { mockVehicules } from '../data/mockData';

export function Vehicules() {
  const [vehicules] = useState(mockVehicules);
  const [showForm, setShowForm] = useState(false);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'disponible':
        return 'bg-green-100 text-green-800';
      case 'en_mission':
        return 'bg-blue-100 text-blue-800';
      case 'maintenance':
        return 'bg-orange-100 text-orange-800';
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
      case 'maintenance':
        return 'Maintenance';
      default:
        return statut;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'berline':
        return 'Berline';
      case 'minibus':
        return 'Minibus';
      case 'van':
        return 'Van';
      case 'suv':
        return 'SUV';
      default:
        return type;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Gestion des Véhicules</h1>
          <p className="mt-1 text-gray-600">Gérez votre flotte de véhicules</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Ajouter un véhicule
        </button>
      </div>

      {showForm && (
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Nouveau véhicule</h3>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Marque</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Mercedes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Modèle</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="Classe E"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Immatriculation</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="AB-123-CD"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2">
                <option value="berline">Berline</option>
                <option value="minibus">Minibus</option>
                <option value="van">Van</option>
                <option value="suv">SUV</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Capacité (passagers)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Année</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                placeholder="2023"
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vehicules.map((vehicule) => (
          <div key={vehicule.id} className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {vehicule.marque} {vehicule.modele}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{vehicule.immatriculation}</p>
              </div>
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatutColor(
                  vehicule.statut
                )}`}
              >
                {getStatutLabel(vehicule.statut)}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium text-gray-900">{getTypeLabel(vehicule.type)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Capacité:</span>
                <span className="font-medium text-gray-900">{vehicule.capacite} passagers</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Année:</span>
                <span className="font-medium text-gray-900">{vehicule.annee}</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2 border-t pt-4">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
                <Edit className="h-4 w-4" />
                Modifier
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-300 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
