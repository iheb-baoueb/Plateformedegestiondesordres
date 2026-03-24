import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { mockServices, mockVehicules, mockChauffeurs, mockClients } from '../data/mockData';

export function NouvelleMission() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    clientId: '',
    dateDebut: '',
    heureDebut: '',
    dateFin: '',
    heureFin: '',
    lieuDepart: '',
    lieuArrivee: '',
    nombrePassagers: 1,
    vehiculeId: '',
    chauffeurId: '',
    observations: '',
    prix: 0,
    // Paramètres spécifiques
    heureVol: '',
    stations: [''],
    hotels: [''],
    pointsRamassage: ['']
  });

  const totalSteps = 5;

  const steps = [
    { number: 1, title: 'Type de service' },
    { number: 2, title: 'Détails mission' },
    { number: 3, title: 'Sélection véhicule' },
    { number: 4, title: 'Sélection chauffeur' },
    { number: 5, title: 'Confirmation' }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Créer la mission
    console.log('Mission créée:', formData);
    navigate('/missions');
  };

  const vehiculesDisponibles = mockVehicules.filter(v => v.statut === 'disponible');
  const chauffeursDisponibles = mockChauffeurs.filter(c => c.statut === 'disponible');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/missions')}
          className="rounded-lg p-2 hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Créer une mission</h1>
          <p className="mt-1 text-gray-600">
            Étape {currentStep} sur {totalSteps}
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    currentStep >= step.number
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                <p className="mt-2 text-xs text-gray-600">{step.title}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="mx-4 h-0.5 flex-1 bg-gray-200">
                  <div
                    className={`h-full transition-all ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    style={{ width: currentStep > step.number ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="rounded-lg bg-white p-6 shadow">
        {currentStep === 1 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Choisir le type de service</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {mockServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setFormData({ ...formData, serviceId: service.id })}
                  className={`rounded-lg border-2 p-4 text-left transition-all ${
                    formData.serviceId === service.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900">{service.nom}</h4>
                  <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Détails de la mission</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Client</label>
                <select
                  value={formData.clientId}
                  onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                >
                  <option value="">Sélectionner un client</option>
                  {mockClients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.nom} {client.entreprise && `- ${client.entreprise}`}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date de début</label>
                <input
                  type="date"
                  value={formData.dateDebut}
                  onChange={(e) => setFormData({ ...formData, dateDebut: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Heure de début</label>
                <input
                  type="time"
                  value={formData.heureDebut}
                  onChange={(e) => setFormData({ ...formData, heureDebut: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date de fin</label>
                <input
                  type="date"
                  value={formData.dateFin}
                  onChange={(e) => setFormData({ ...formData, dateFin: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Heure de fin</label>
                <input
                  type="time"
                  value={formData.heureFin}
                  onChange={(e) => setFormData({ ...formData, heureFin: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Lieu de départ</label>
                <input
                  type="text"
                  value={formData.lieuDepart}
                  onChange={(e) => setFormData({ ...formData, lieuDepart: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Adresse complète"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Lieu d'arrivée</label>
                <input
                  type="text"
                  value={formData.lieuArrivee}
                  onChange={(e) => setFormData({ ...formData, lieuArrivee: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Adresse complète"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre de passagers</label>
                <input
                  type="number"
                  value={formData.nombrePassagers}
                  onChange={(e) => setFormData({ ...formData, nombrePassagers: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Prix (DT)</label>
                <input
                  type="number"
                  value={formData.prix}
                  onChange={(e) => setFormData({ ...formData, prix: parseFloat(e.target.value) })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  min="0"
                />
              </div>

              {/* Champs spécifiques selon le type de service */}
              {formData.serviceId === '1' && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Heure du vol</label>
                  <input
                    type="time"
                    value={formData.heureVol}
                    onChange={(e) => setFormData({ ...formData, heureVol: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                    placeholder="Heure d'arrivée du vol"
                  />
                </div>
              )}

              {formData.serviceId === '2' && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Stations</label>
                  {formData.stations.map((station, index) => (
                    <div key={index} className="mt-2 flex gap-2">
                      <input
                        type="text"
                        value={station}
                        onChange={(e) => {
                          const newStations = [...formData.stations];
                          newStations[index] = e.target.value;
                          setFormData({ ...formData, stations: newStations });
                        }}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2"
                        placeholder={`Station ${index + 1}`}
                      />
                      {index === formData.stations.length - 1 && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, stations: [...formData.stations, ''] })}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          +
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {formData.serviceId === '3' && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Noms des hôtels</label>
                  {formData.hotels.map((hotel, index) => (
                    <div key={index} className="mt-2 flex gap-2">
                      <input
                        type="text"
                        value={hotel}
                        onChange={(e) => {
                          const newHotels = [...formData.hotels];
                          newHotels[index] = e.target.value;
                          setFormData({ ...formData, hotels: newHotels });
                        }}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2"
                        placeholder={`Hôtel ${index + 1}`}
                      />
                      {index === formData.hotels.length - 1 && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, hotels: [...formData.hotels, ''] })}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          +
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {formData.serviceId === '4' && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Points de ramassage</label>
                  {formData.pointsRamassage.map((point, index) => (
                    <div key={index} className="mt-2 flex gap-2">
                      <input
                        type="text"
                        value={point}
                        onChange={(e) => {
                          const newPoints = [...formData.pointsRamassage];
                          newPoints[index] = e.target.value;
                          setFormData({ ...formData, pointsRamassage: newPoints });
                        }}
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2"
                        placeholder={`Point de ramassage ${index + 1}`}
                      />
                      {index === formData.pointsRamassage.length - 1 && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, pointsRamassage: [...formData.pointsRamassage, ''] })}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                        >
                          +
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Observations</label>
                <textarea
                  value={formData.observations}
                  onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  rows={3}
                  placeholder="Notes supplémentaires..."
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Sélectionner un véhicule</h3>
            <p className="mb-4 text-sm text-gray-600">
              {vehiculesDisponibles.length} véhicules disponibles
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {vehiculesDisponibles.map((vehicule) => (
                <button
                  key={vehicule.id}
                  onClick={() => setFormData({ ...formData, vehiculeId: vehicule.id })}
                  className={`rounded-lg border-2 p-4 text-left transition-all ${
                    formData.vehiculeId === vehicule.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-semibold text-gray-900">
                    {vehicule.marque} {vehicule.modele}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{vehicule.immatriculation}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    Capacité: {vehicule.capacite} passagers
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Sélectionner un chauffeur</h3>
            <p className="mb-4 text-sm text-gray-600">
              {chauffeursDisponibles.length} chauffeurs disponibles
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {chauffeursDisponibles.map((chauffeur) => (
                <button
                  key={chauffeur.id}
                  onClick={() => setFormData({ ...formData, chauffeurId: chauffeur.id })}
                  className={`flex items-center gap-4 rounded-lg border-2 p-4 text-left transition-all ${
                    formData.chauffeurId === chauffeur.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    {chauffeur.prenom[0]}
                    {chauffeur.nom[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {chauffeur.prenom} {chauffeur.nom}
                    </h4>
                    <p className="text-sm text-gray-600">{chauffeur.telephone}</p>
                    <p className="text-sm text-gray-600">Permis: {chauffeur.permis}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Confirmation de la mission</h3>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Détails de la mission</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium text-gray-900">
                      {mockServices.find(s => s.id === formData.serviceId)?.nom}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Client:</span>
                    <span className="font-medium text-gray-900">
                      {mockClients.find(c => c.id === formData.clientId)?.nom}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-900">
                      {formData.dateDebut} à {formData.heureDebut}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Trajet:</span>
                    <span className="font-medium text-gray-900">
                      {formData.lieuDepart} → {formData.lieuArrivee}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Passagers:</span>
                    <span className="font-medium text-gray-900">{formData.nombrePassagers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prix:</span>
                    <span className="font-medium text-gray-900">{formData.prix} DT</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Ressources assignées</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Véhicule:</span>
                    <span className="font-medium text-gray-900">
                      {mockVehicules.find(v => v.id === formData.vehiculeId)?.marque}{' '}
                      {mockVehicules.find(v => v.id === formData.vehiculeId)?.modele}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Chauffeur:</span>
                    <span className="font-medium text-gray-900">
                      {mockChauffeurs.find(c => c.id === formData.chauffeurId)?.prenom}{' '}
                      {mockChauffeurs.find(c => c.id === formData.chauffeurId)?.nom}
                    </span>
                  </div>
                </div>
              </div>

              {formData.observations && (
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-semibold text-gray-900">Observations</h4>
                  <p className="mt-2 text-sm text-gray-600">{formData.observations}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Suivant
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            <Check className="h-4 w-4" />
            Générer l'ordre de mission
          </button>
        )}
      </div>
    </div>
  );
}