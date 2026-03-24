// Données mock pour l'application - Données Tunisie
import { Chauffeur, Vehicule, Client, Service, Mission, User } from '../types';

export const mockUser: User = {
  id: '1',
  email: 'responsable@transport.tn',
  nom: 'Ben Salah',
  prenom: 'Ahmed',
  role: 'responsable_transport'
};

export const mockChauffeurs: Chauffeur[] = [
  {
    id: '1',
    nom: 'Trabelsi',
    prenom: 'Mohamed',
    telephone: '+216 98 123 456',
    email: 'mohamed.trabelsi@transport.tn',
    permis: 'B, D',
    dateEmbauche: '2020-03-15',
    statut: 'disponible'
  },
  {
    id: '2',
    nom: 'Jendoubi',
    prenom: 'Fatma',
    telephone: '+216 55 234 567',
    email: 'fatma.jendoubi@transport.tn',
    permis: 'B',
    dateEmbauche: '2021-06-01',
    statut: 'en_mission'
  },
  {
    id: '3',
    nom: 'Hamdi',
    prenom: 'Karim',
    telephone: '+216 22 345 678',
    email: 'karim.hamdi@transport.tn',
    permis: 'B, C',
    dateEmbauche: '2019-11-20',
    statut: 'disponible'
  },
  {
    id: '4',
    nom: 'Mahmoudi',
    prenom: 'Sonia',
    telephone: '+216 29 456 789',
    email: 'sonia.mahmoudi@transport.tn',
    permis: 'B',
    dateEmbauche: '2022-02-10',
    statut: 'disponible'
  },
  {
    id: '5',
    nom: 'Gharbi',
    prenom: 'Youssef',
    telephone: '+216 54 567 890',
    email: 'youssef.gharbi@transport.tn',
    permis: 'B, D',
    dateEmbauche: '2018-08-15',
    statut: 'disponible'
  }
];

export const mockVehicules: Vehicule[] = [
  {
    id: '1',
    marque: 'Mercedes',
    modele: 'Sprinter',
    immatriculation: 'TUN 1234',
    type: 'minibus',
    capacite: 16,
    statut: 'disponible',
    annee: 2022
  },
  {
    id: '2',
    marque: 'Volkswagen',
    modele: 'Caravelle',
    immatriculation: 'TUN 5678',
    type: 'minibus',
    capacite: 8,
    statut: 'en_mission',
    annee: 2021
  },
  {
    id: '3',
    marque: 'Hyundai',
    modele: 'H350',
    immatriculation: 'TUN 9012',
    type: 'minibus',
    capacite: 12,
    statut: 'disponible',
    annee: 2023
  },
  {
    id: '4',
    marque: 'Mercedes',
    modele: 'Vito',
    immatriculation: 'TUN 3456',
    type: 'van',
    capacite: 8,
    statut: 'maintenance',
    annee: 2020
  },
  {
    id: '5',
    marque: 'Peugeot',
    modele: 'Boxer',
    immatriculation: 'TUN 7890',
    type: 'minibus',
    capacite: 9,
    statut: 'disponible',
    annee: 2022
  },
  {
    id: '6',
    marque: 'Isuzu',
    modele: 'Turkuaz',
    immatriculation: 'TUN 2468',
    type: 'bus',
    capacite: 32,
    statut: 'disponible',
    annee: 2021
  },
  {
    id: '7',
    marque: 'Toyota',
    modele: 'Coaster',
    immatriculation: 'TUN 1357',
    type: 'bus',
    capacite: 26,
    statut: 'disponible',
    annee: 2023
  }
];

export const mockClients: Client[] = [
  {
    id: '1',
    nom: 'Ben Amor',
    telephone: '+216 98 111 222',
    email: 'benamor@email.tn',
    entreprise: 'Leoni Tunisie',
    adresse: 'Zone Industrielle, Manouba, Tunisie',
    nombreMissions: 45
  },
  {
    id: '2',
    nom: 'Ghariani',
    telephone: '+216 22 333 444',
    email: 'ghariani@email.tn',
    entreprise: 'STMicroelectronics',
    adresse: 'Zone Industrielle, Bouslem, Tunis',
    nombreMissions: 32
  },
  {
    id: '3',
    nom: 'Abdelli',
    telephone: '+216 55 555 666',
    email: 'abdelli@email.tn',
    adresse: 'Avenue Habib Bourguiba, Tunis',
    nombreMissions: 18
  },
  {
    id: '4',
    nom: 'Mejri',
    telephone: '+216 29 777 888',
    email: 'mejri@email.tn',
    entreprise: 'Polytex',
    adresse: 'Route de Bizerte, Ariana',
    nombreMissions: 28
  },
  {
    id: '5',
    nom: 'Saidi',
    telephone: '+216 54 999 000',
    email: 'saidi@email.tn',
    entreprise: 'Tunisie Telecom',
    adresse: 'Avenue Mohamed V, Tunis',
    nombreMissions: 22
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    nom: 'Transfert',
    description: 'Transport d\'un client d\'un point de départ vers une destination spécifique (ex: Aéroport → Leoni)',
    type: 'transfert'
  },
  {
    id: '2',
    nom: 'Transport Personnel',
    description: 'Transport de personnel d\'une entreprise ou d\'une organisation avec stations multiples',
    type: 'transport_personnel'
  },
  {
    id: '3',
    nom: 'Excursion',
    description: 'Transport touristique vers un lieu touristique avec hébergement',
    type: 'excursion'
  },
  {
    id: '4',
    nom: 'Acheminement Ramassage',
    description: 'Collecte de plusieurs passagers depuis différents points vers une destination',
    type: 'acheminement_ramassage'
  },
  {
    id: '5',
    nom: 'Acheminement Retour',
    description: 'Transport retour après une activité',
    type: 'acheminement_retour'
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
    lieuDepart: 'Aéroport Tunis-Carthage',
    lieuArrivee: 'Leoni Tunisie, Zone Industrielle Manouba',
    statut: 'en_cours',
    nombrePassagers: 8,
    prix: 120,
    observations: 'Vol Tunisair TU123',
    heureVol: '07:30',
    creePar: 'Ahmed Ben Salah',
    dateCreation: '2026-03-20T14:30:00'
  },
  {
    id: '2',
    reference: 'OM-2026-002',
    client: mockClients[1],
    chauffeur: mockChauffeurs[0],
    vehicule: mockVehicules[0],
    service: mockServices[1],
    dateDebut: '2026-03-26T06:30:00',
    dateFin: '2026-03-26T17:30:00',
    lieuDepart: 'Station Bardo',
    lieuArrivee: 'STMicroelectronics, Bouslem',
    statut: 'planifiee',
    nombrePassagers: 16,
    prix: 250,
    stations: ['Station Bardo', 'Station Menzah', 'Station Ariana', 'Destination finale'],
    creePar: 'Ahmed Ben Salah',
    dateCreation: '2026-03-21T10:15:00'
  },
  {
    id: '3',
    reference: 'OM-2026-003',
    client: mockClients[2],
    chauffeur: mockChauffeurs[2],
    vehicule: mockVehicules[6],
    service: mockServices[2],
    dateDebut: '2026-03-27T08:00:00',
    dateFin: '2026-03-27T18:00:00',
    lieuDepart: 'Avenue Habib Bourguiba, Tunis',
    lieuArrivee: 'Sidi Bou Saïd',
    statut: 'planifiee',
    nombrePassagers: 25,
    prix: 450,
    hotels: ['Hotel Dar Said', 'La Villa Bleue'],
    observations: 'Excursion touristique - Visite guidée',
    creePar: 'Ahmed Ben Salah',
    dateCreation: '2026-03-19T11:20:00'
  },
  {
    id: '4',
    reference: 'OM-2026-004',
    client: mockClients[3],
    chauffeur: mockChauffeurs[4],
    vehicule: mockVehicules[2],
    service: mockServices[3],
    dateDebut: '2026-03-28T07:00:00',
    dateFin: '2026-03-28T08:30:00',
    lieuDepart: 'Points multiples Ariana',
    lieuArrivee: 'Polytex, Route de Bizerte',
    statut: 'planifiee',
    nombrePassagers: 12,
    prix: 180,
    pointsRamassage: ['Cité Ennasr', 'El Menzah', 'Centre Ville Ariana', 'Ariana Essoghra'],
    creePar: 'Ahmed Ben Salah',
    dateCreation: '2026-03-22T09:45:00'
  },
  {
    id: '5',
    reference: 'OM-2026-005',
    client: mockClients[4],
    chauffeur: mockChauffeurs[3],
    vehicule: mockVehicules[4],
    service: mockServices[4],
    dateDebut: '2026-03-24T17:00:00',
    dateFin: '2026-03-24T18:00:00',
    lieuDepart: 'Tunisie Telecom, Avenue Mohamed V',
    lieuArrivee: 'Gare Routière Bab Saadoun',
    statut: 'terminee',
    nombrePassagers: 9,
    prix: 80,
    observations: 'Retour après formation',
    creePar: 'Ahmed Ben Salah',
    dateCreation: '2026-03-19T15:00:00'
  }
];

// Données pour les statistiques du dashboard
export const statsData = {
  missionsAujourdhui: 5,
  missionsEnCours: 2,
  chauffeursDispo: 3,
  vehiculesDispo: 5,
  chiffreAffairesMois: 8500,
  missionsMois: 38
};

export const missionsParJour = [
  { jour: 'Lun', missions: 5 },
  { jour: 'Mar', missions: 7 },
  { jour: 'Mer', missions: 6 },
  { jour: 'Jeu', missions: 8 },
  { jour: 'Ven', missions: 9 },
  { jour: 'Sam', missions: 4 },
  { jour: 'Dim', missions: 3 }
];

export const missionsParChauffeur = [
  { nom: 'M. Trabelsi', missions: 15 },
  { nom: 'F. Jendoubi', missions: 12 },
  { nom: 'K. Hamdi', missions: 18 },
  { nom: 'S. Mahmoudi', missions: 9 },
  { nom: 'Y. Gharbi', missions: 14 }
];

export const missionsParClient = [
  { nom: 'Leoni Tunisie', value: 30 },
  { nom: 'STMicroelectronics', value: 22 },
  { nom: 'Polytex', value: 18 },
  { nom: 'Tunisie Telecom', value: 15 },
  { nom: 'Autres', value: 15 }
];
