import { ProtectedRoute } from '../components/ProtectedRoute';
import { Dashboard } from '../pages/Dashboard';

export function ProtectedDashboard() {
  return (
    <ProtectedRoute allowedRoles={['manager']}>
      <Dashboard />
    </ProtectedRoute>
  );
}
