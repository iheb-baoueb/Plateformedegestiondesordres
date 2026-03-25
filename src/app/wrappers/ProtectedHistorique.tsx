import { ProtectedRoute } from '../components/ProtectedRoute';
import { Historique } from '../pages/Historique';

export function ProtectedHistorique() {
  return (
    <ProtectedRoute allowedRoles={['manager']}>
      <Historique />
    </ProtectedRoute>
  );
}
