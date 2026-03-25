import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Parametres } from './pages/Parametres';
import { NotFound } from './pages/NotFound';
import { ProtectedDashboard } from './wrappers/ProtectedDashboard';
import { ProtectedUtilisateurs } from './wrappers/ProtectedUtilisateurs';
import { ProtectedHistorique } from './wrappers/ProtectedHistorique';
import { 
  ProtectedMissions, 
  ProtectedNouvelleMission, 
  ProtectedDetailsMission,
  ProtectedChauffeurs,
  ProtectedVehicules,
  ProtectedClients,
  ProtectedServices
} from './wrappers/ProtectedResponsableTransport';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'dashboard',
        Component: ProtectedDashboard
      },
      {
        path: 'chauffeurs',
        Component: ProtectedChauffeurs
      },
      {
        path: 'vehicules',
        Component: ProtectedVehicules
      },
      {
        path: 'clients',
        Component: ProtectedClients
      },
      {
        path: 'services',
        Component: ProtectedServices
      },
      {
        path: 'missions',
        Component: ProtectedMissions
      },
      {
        path: 'missions/nouvelle',
        Component: ProtectedNouvelleMission
      },
      {
        path: 'missions/:id',
        Component: ProtectedDetailsMission
      },
      {
        path: 'historique',
        Component: ProtectedHistorique
      },
      {
        path: 'utilisateurs',
        Component: ProtectedUtilisateurs
      },
      {
        path: 'parametres',
        Component: Parametres
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
]);