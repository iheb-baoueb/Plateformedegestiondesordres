import { ProtectedRoute } from '../components/ProtectedRoute';
import { Missions } from '../pages/Missions';
import { NouvelleMission } from '../pages/NouvelleMission';
import { DetailsMission } from '../pages/DetailsMission';
import { Chauffeurs } from '../pages/Chauffeurs';
import { Vehicules } from '../pages/Vehicules';
import { Clients } from '../pages/Clients';
import { Services } from '../pages/Services';

export function ProtectedMissions() {
  return (
    <ProtectedRoute allowedRoles={['responsable_transport']}>
      <Missions />
    </ProtectedRoute>
  );
}

export function ProtectedNouvelleMission() {
  return (
    <ProtectedRoute allowedRoles={['responsable_transport']}>
      <NouvelleMission />
    </ProtectedRoute>
  );
}

export function ProtectedDetailsMission() {
  return (
    <ProtectedRoute allowedRoles={['responsable_transport']}>
      <DetailsMission />
    </ProtectedRoute>
  );
}

// Chauffeurs, Véhicules, Clients et Services accessibles par Manager et Responsable Transport
export function ProtectedChauffeurs() {
  return (
    <ProtectedRoute allowedRoles={['manager', 'responsable_transport']}>
      <Chauffeurs />
    </ProtectedRoute>
  );
}

export function ProtectedVehicules() {
  return (
    <ProtectedRoute allowedRoles={['manager', 'responsable_transport']}>
      <Vehicules />
    </ProtectedRoute>
  );
}

export function ProtectedClients() {
  return (
    <ProtectedRoute allowedRoles={['manager', 'responsable_transport']}>
      <Clients />
    </ProtectedRoute>
  );
}

export function ProtectedServices() {
  return (
    <ProtectedRoute allowedRoles={['manager', 'responsable_transport']}>
      <Services />
    </ProtectedRoute>
  );
}