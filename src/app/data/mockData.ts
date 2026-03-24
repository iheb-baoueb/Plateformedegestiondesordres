// Données mock pour l'application
import { Chauffeur, Vehicule, Client, Service, Mission, User } from '../types';

export const mockUser: User = {
  id: '1',
  email: 'responsable@transport.com',
  nom: 'Dupont',
  prenom: 'Jean',
  role: 'responsable_transport'
};

export const mockChauffeurs: Chauffeur[] = [
  {
    id: '1',
    nom: 'Martin',
    prenom: 'Pierre',
    telephone: '+33 6 12 34 56 78',
    email: 'pierre.martin@transport.com',
    permis: 'B, D',
    dateEmbauche: '2020-03-15',
    statut: 'disponible'
  },
  {
    id: '2',
    nom: 'Bernard',
    prenom: 'Sophie',
    telephone: '+33 6 23 45 67 89',
    email: 'sophie.bernard@transport.com',
    permis: 'B',
    dateEmbauche: '2021-06-01',
    statut: 'en_mission'
  },
  {
    id: '3',
    nom: 'Dubois',
    prenom: 'Marc',
    telephone: '+33 6 34 56 78 90',
    email: 'marc.dubois@transport.com',
    permis: 'B, C',
    dateEmbauche: '2019-11-20',
    statut: 'disponible'
  },
  {
    id: '4',
    nom: 'Laurent',
    prenom: 'Julie',
    telephone: '+33 6 45 67 89 01',
    email: 'julie.laurent@transport.com',
    permis: 'B',
    dateEmbauche: '2022-02-10',
    statut: 'disponible'
  }
];

export const mockVehicules: Vehicule[] = [
  {
    id: '1',
    marque: 'Mercedes',
    modele: 'Classe E',
    immatriculation: 'AB-123-CD',
    type: 'berline',
    capacite: 4,
    statut: 'disponible',
    annee: 2022
  },
  {
    id: '2',
    marque: 'Volkswagen',
    modele: 'Caravelle',
    immatriculation: 'EF-456-GH',
    type: 'minibus',
    capacite: 8,
    statut: 'en_mission',
    annee: 2021
  },
  {
    id: '3',
    marque: 'BMW',
    modele: 'Série 5',
    immatriculation: 'IJ-789-KL',
    type: 'berline',
    capacite: 4,
    statut: 'disponible',
    annee: 2023
  },
  {
    id: '4',
    marque: 'Mercedes',
    modele: 'Vito',
    immatriculation: 'MN-012-OP',
    type: 'van',
    capacite: 6,
    statut: 'maintenance',
    annee: 2020
  },
  {
    id: '5',
    marque: 'Audi',
    modele: 'Q7',
    immatriculation: 'QR-345-ST',
    type: 'suv',
    capacite: 7,
    statut: 'disponible',
    annee: 2022
  }
];

export const mockClients: Client[] = [
  {
    id: '1',
    nom: 'Durand',
    telephone: '+33 6 11 22 33 44',
    email: 'durand@email.com',
    entreprise: 'Tech Solutions',
    adresse: '123 Avenue des Champs-Élysées, Paris',
    nombreMissions: 15
  },
  {
    id: '2',
    nom: 'Lefebvre',
    telephone: '+33 6 22 33 44 55',
    email: 'lefebvre@email.com',
    entreprise: 'Global Corp',
    adresse: '45 Rue de Rivoli, Paris',
    nombreMissions: 8
  },
  {
    id: '3',
    nom: 'Moreau',
    telephone: '+33 6 33 44 55 66',
    email: 'moreau@email.com',
    adresse: '78 Boulevard Saint-Germain, Paris',
    nombreMissions: 23
  },
  {
    id: '4',
    nom: 'Simon',
    telephone: '+33 6 44 55 66 77',
    email: 'simon@email.com',
    entreprise: 'Innovation Hub',
    adresse: '90 Rue du Faubourg Saint-Honoré, Paris',
    nombreMissions: 12
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    nom: 'Transfert Aéroport',
    description: 'Transport depuis/vers l\'aéroport',
    type: 'transfert_aeroport'
  },
  {
    id: '2',
    nom: 'Mise à Disposition',
    description: 'Chauffeur et véhicule à disposition pour la journée',
    type: 'mise_a_disposition'
  },
  {
    id: '3',
    nom: 'Transport Groupe',
    description: 'Transport pour groupes et délégations',
    type: 'transport_groupe'
  },
  {
    id: '4',
    nom: 'Événementiel',
    description: 'Transport pour événements spéciaux',
    type: 'evenementiel'
  }
];

export const mockMissions: Mission[] = [
  {
    id: '1',
    reference: 'OM-2026-001',
    client: mockClients[0],
    chauffeur: mockChauffeurs[1],
    vehicule: mockVehicules[1],
    service: mockServices[0],
    dateDebut: '2026-03-25T08:00:00',
    dateFin: '2026-03-25T10:00:00',
    lieuDepart: 'Aéroport Charles de Gaulle',
    lieuArrivee: '123 Avenue des Champs-Élysées, Paris',
    statut: 'en_cours',
    nombrePassagers: 3,
    prix: 150,
    observations: 'Vol Air France AF1234',
    creePar: 'Jean Dupont',
    dateCreation: '2026-03-20T14:30:00'
  },
  {
    id: '2',
    reference: 'OM-2026-002',
    client: mockClients[2],
    chauffeur: mockChauffeurs[0],
    vehicule: mockVehicules[0],
    service: mockServices[1],
    dateDebut: '2026-03-26T09:00:00',
    dateFin: '2026-03-26T18:00:00',
    lieuDepart: '78 Boulevard Saint-Germain, Paris',
    lieuArrivee: 'Divers déplacements Paris',
    statut: 'planifiee',
    nombrePassagers: 2,
    prix: 450,
    creePar: 'Jean Dupont',
    dateCreation: '2026-03-21T10:15:00'
  },
  {
    id: '3',
    reference: 'OM-2026-003',
    client: mockClients[1],
    chauffeur: mockChauffeurs[2],
    vehicule: mockVehicules[2],
    service: mockServices[0],
    dateDebut: '2026-03-24T15:00:00',
    dateFin: '2026-03-24T17:00:00',
    lieuDepart: '45 Rue de Rivoli, Paris',
    lieuArrivee: 'Aéroport Orly',
    statut: 'terminee',
    nombrePassagers: 1,
    prix: 120,
    creePar: 'Jean Dupont',
    dateCreation: '2026-03-19T11:20:00'
  },
  {
    id: '4',
    reference: 'OM-2026-004',
    client: mockClients[3],
    service: mockServices[2],
    dateDebut: '2026-03-28T10:00:00',
    dateFin: '2026-03-28T14:00:00',
    lieuDepart: '90 Rue du Faubourg Saint-Honoré, Paris',
    lieuArrivee: 'Centre de Conférences La Défense',
    statut: 'planifiee',
    nombrePassagers: 8,
    prix: 300,
    observations: 'Groupe pour séminaire',
    creePar: 'Jean Dupont',
    dateCreation: '2026-03-22T09:45:00'
  }
];

// Données pour les statistiques du dashboard
export const statsData = {
  missionsAujourdhui: 5,
  missionsEnCours: 2,
  chauffeursDispo: 3,
  vehiculesDispo: 4,
  chiffreAffairesMois: 12500,
  missionsMois: 42
};

export const missionsParJour = [
  { jour: 'Lun', missions: 6 },
  { jour: 'Mar', missions: 8 },
  { jour: 'Mer', missions: 5 },
  { jour: 'Jeu', missions: 10 },
  { jour: 'Ven', missions: 12 },
  { jour: 'Sam', missions: 7 },
  { jour: 'Dim', missions: 4 }
];

export const missionsParChauffeur = [
  { nom: 'P. Martin', missions: 15 },
  { nom: 'S. Bernard', missions: 12 },
  { nom: 'M. Dubois', missions: 18 },
  { nom: 'J. Laurent', missions: 9 }
];

export const missionsParClient = [
  { nom: 'Tech Solutions', value: 25 },
  { nom: 'Global Corp', value: 18 },
  { nom: 'Moreau', value: 30 },
  { nom: 'Innovation Hub', value: 27 }
];
