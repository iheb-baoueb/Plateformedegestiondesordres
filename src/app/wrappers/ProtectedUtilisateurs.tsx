import { ProtectedRoute } from '../components/ProtectedRoute';
import { Utilisateurs } from '../pages/Utilisateurs';

export function ProtectedUtilisateurs() {
  return (
    <ProtectedRoute allowedRoles={['manager']}>
      <Utilisateurs />
    </ProtectedRoute>
  );
}
