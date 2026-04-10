import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Plus, X } from 'lucide-react';
import { mockVehicules, mockChauffeurs, mockClients } from '../../data/mockData';

export function MissionTransportPersonnel() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientId: '',
    dateDebut: '',
    heureDebut: '',
    dateFin: '',
    heureFin: '',
    nombrePassagers: 1,
    vehiculeId: '',
    chauffeurId: '',
    stations: [''],
    observations: '',
    prix: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mission Transport Personnel créée:', formData);
    navigate('/missions/transport-personnel');
  };

  const addStation = () => {
    setFormData({ ...formData, stations: [...formData.stations, ''] });
  };

  const removeStation = (index: number) => {
    const newStations = formData.stations.filter((_, i) => i !== index);
    setFormData({ ...formData, stations: newStations });
  };

  const updateStation = (index: number, value: string) => {
    const newStations = [...formData.stations];
    newStations[index] = value;
    setFormData({ ...formData, stations: newStations });
  };

  const vehiculesDisponibles = mockVehicules.filter(v => v.statut === 'disponible');
  const chauffeursDisponibles = mockChauffeurs.filter(c => c.statut === 'disponible');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Nouvelle Mission - Transport Personnel</h1>
          <p className="mt-1 text-gray-600">
            Créer une mission de transport personnel avec plusieurs stations
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow">
        <div className="space-y-6">
          {/* Informations Client */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900">Informations Client</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Client</label>
                <select
                  value={formData.clientId}
                  onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                >
                  <option value="">Sélectionner un client</option>
                  {mockClients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre de passagers</label>
                <input
                  type="number"
                  min="1"
                  value={formData.nombrePassagers}
                  onChange={(e) => setFormData({ ...formData, nombrePassagers: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Période */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900">Période</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date de début</label>
                <input
                  type="date"
                  value={formData.dateDebut}
                  onChange={(e) => setFormData({ ...formData, dateDebut: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Heure de début</label>
                <input
                  type="time"
                  value={formData.heureDebut}
                  onChange={(e) => setFormData({ ...formData, heureDebut: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Date de fin</label>
                <input
                  type="date"
                  value={formData.dateFin}
                  onChange={(e) => setFormData({ ...formData, dateFin: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Heure de fin</label>
                <input
                  type="time"
                  value={formData.heureFin}
                  onChange={(e) => setFormData({ ...formData, heureFin: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Stations multiples */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Stations (arrêts multiples)</h3>
              <button
                type="button"
                onClick={addStation}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Ajouter une station
              </button>
            </div>
            <div className="space-y-3">
              {formData.stations.map((station, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={station}
                    onChange={(e) => updateStation(index, e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder={`Station ${index + 1} - Ex: Tunis Centre Ville`}
                    required
                  />
                  {formData.stations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeStation(index)}
                      className="rounded-lg border border-red-300 p-2 text-red-600 hover:bg-red-50"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Prix */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Prix (DT)</label>
            <input
              type="number"
              step="0.01"
              value={formData.prix}
              onChange={(e) => setFormData({ ...formData, prix: parseFloat(e.target.value) })}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
              required
            />
          </div>

          {/* Affectation */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-900">Affectation</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Véhicule</label>
                <select
                  value={formData.vehiculeId}
                  onChange={(e) => setFormData({ ...formData, vehiculeId: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                >
                  <option value="">Sélectionner un véhicule</option>
                  {vehiculesDisponibles.map((vehicule) => (
                    <option key={vehicule.id} value={vehicule.id}>
                      {vehicule.marque} {vehicule.modele} - {vehicule.immatriculation}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Chauffeur</label>
                <select
                  value={formData.chauffeurId}
                  onChange={(e) => setFormData({ ...formData, chauffeurId: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  required
                >
                  <option value="">Sélectionner un chauffeur</option>
                  {chauffeursDisponibles.map((chauffeur) => (
                    <option key={chauffeur.id} value={chauffeur.id}>
                      {chauffeur.prenom} {chauffeur.nom}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Observations */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Observations</label>
            <textarea
              value={formData.observations}
              onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
              rows={4}
              placeholder="Notes supplémentaires..."
            />
          </div>

          {/* Boutons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Créer la mission
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
