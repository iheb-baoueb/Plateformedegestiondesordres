// Types pour l'application de gestion des ordres de mission

export interface User {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  role: 'manager' | 'responsable_transport' | 'chauffeur';
  avatar?: string;
}

export interface Chauffeur {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  permis: string;
  dateEmbauche: string;
  statut: 'disponible' | 'en_mission' | 'indisponible';
  avatar?: string;
}

export interface Vehicule {
  id: string;
  marque: string;
  modele: string;
  immatriculation: string;
  type: 'berline' | 'minibus' | 'van' | 'suv';
  capacite: number;
  statut: 'disponible' | 'en_mission' | 'maintenance';
  annee: number;
}

export interface Client {
  id: string;
  nom: string;
  telephone: string;
  email: string;
  entreprise?: string;
  adresse: string;
  nombreMissions: number;
}

export interface Service {
  id: string;
  nom: string;
  description: string;
  type: 'transfert_aeroport' | 'mise_a_disposition' | 'transport_groupe' | 'evenementiel';
}

export interface Mission {
  id: string;
  reference: string;
  client: Client;
  chauffeur?: Chauffeur;
  vehicule?: Vehicule;
  service: Service;
  dateDebut: string;
  dateFin: string;
  lieuDepart: string;
  lieuArrivee: string;
  statut: 'planifiee' | 'en_cours' | 'terminee' | 'annulee';
  nombrePassagers: number;
  prix: number;
  observations?: string;
  creePar: string;
  dateCreation: string;
}
