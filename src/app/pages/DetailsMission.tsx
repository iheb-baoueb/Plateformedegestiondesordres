import { useParams, useNavigate } from 'react-router';
import { ChevronLeft, FileText, Send, MapPin, Calendar, Users, Car, User as UserIcon, Phone } from 'lucide-react';
import { mockMissions } from '../data/mockData';

export function DetailsMission() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mission = mockMissions.find((m) => m.id === id);

  if (!mission) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Mission non trouvée</p>
      </div>
    );
  }

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/missions')} className="rounded-lg p-2 hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Détails de la mission</h1>
            <p className="mt-1 text-gray-600">{mission.reference}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
            <FileText className="h-4 w-4" />
            Générer PDF
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            <Send className="h-4 w-4" />
            Envoyer mission
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Informations de la mission</h3>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatutColor(
                  mission.statut
                )}`}
              >
                {getStatutLabel(mission.statut)}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Date et heure</p>
                  <p className="mt-1 font-medium text-gray-900">
                    {new Date(mission.dateDebut).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-sm text-gray-600">
                    De {new Date(mission.dateDebut).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    {' à '}
                    {new Date(mission.dateFin).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Trajet</p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <p className="font-medium text-gray-900">{mission.lieuDepart}</p>
                    </div>
                    <div className="ml-1 h-8 w-0.5 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <p className="font-medium text-gray-900">{mission.lieuArrivee}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Nombre de passagers</p>
                  <p className="mt-1 font-medium text-gray-900">{mission.nombrePassagers} passagers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Type de service</p>
                  <p className="mt-1 font-medium text-gray-900">{mission.service.nom}</p>
                  <p className="text-sm text-gray-600">{mission.service.description}</p>
                </div>
              </div>

              {mission.observations && (
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-medium text-gray-900">Observations</p>
                  <p className="mt-1 text-sm text-gray-600">{mission.observations}</p>
                </div>
              )}
            </div>
          </div>

          {/* Client Info */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900">Informations client</h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm text-gray-600">Nom</p>
                <p className="mt-1 font-medium text-gray-900">{mission.client.nom}</p>
              </div>
              {mission.client.entreprise && (
                <div>
                  <p className="text-sm text-gray-600">Entreprise</p>
                  <p className="mt-1 font-medium text-gray-900">{mission.client.entreprise}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Téléphone</p>
                <p className="mt-1 font-medium text-gray-900">{mission.client.telephone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="mt-1 font-medium text-gray-900">{mission.client.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Chauffeur */}
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center gap-2 text-gray-900">
              <UserIcon className="h-5 w-5" />
              <h3 className="font-semibold">Chauffeur assigné</h3>
            </div>
            {mission.chauffeur ? (
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    {mission.chauffeur.prenom[0]}
                    {mission.chauffeur.nom[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {mission.chauffeur.prenom} {mission.chauffeur.nom}
                    </p>
                    <p className="text-sm text-gray-600">Permis: {mission.chauffeur.permis}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    {mission.chauffeur.telephone}
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-sm italic text-gray-400">Aucun chauffeur assigné</p>
            )}
          </div>

          {/* Véhicule */}
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center gap-2 text-gray-900">
              <Car className="h-5 w-5" />
              <h3 className="font-semibold">Véhicule assigné</h3>
            </div>
            {mission.vehicule ? (
              <div className="mt-4 space-y-3">
                <div>
                  <p className="font-medium text-gray-900">
                    {mission.vehicule.marque} {mission.vehicule.modele}
                  </p>
                  <p className="text-sm text-gray-600">{mission.vehicule.immatriculation}</p>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacité:</span>
                    <span className="font-medium text-gray-900">{mission.vehicule.capacite} places</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Année:</span>
                    <span className="font-medium text-gray-900">{mission.vehicule.annee}</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-sm italic text-gray-400">Aucun véhicule assigné</p>
            )}
          </div>

          {/* Prix */}
          <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow">
            <p className="text-sm opacity-90">Prix de la mission</p>
            <p className="mt-2 text-3xl font-semibold">{mission.prix} DT</p>
          </div>

          {/* Metadata */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="font-semibold text-gray-900">Informations système</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div>
                <p className="text-gray-600">Créée par</p>
                <p className="font-medium text-gray-900">{mission.creePar}</p>
              </div>
              <div>
                <p className="text-gray-600">Date de création</p>
                <p className="font-medium text-gray-900">
                  {new Date(mission.dateCreation).toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}