import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Chauffeurs } from './pages/Chauffeurs';
import { Vehicules } from './pages/Vehicules';
import { Clients } from './pages/Clients';
import { Services } from './pages/Services';
import { Missions } from './pages/Missions';
import { NouvelleMission } from './pages/NouvelleMission';
import { DetailsMission } from './pages/DetailsMission';
import { Historique } from './pages/Historique';
import { Parametres } from './pages/Parametres';
import { NotFound } from './pages/NotFound';

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
        Component: Dashboard
      },
      {
        path: 'chauffeurs',
        Component: Chauffeurs
      },
      {
        path: 'vehicules',
        Component: Vehicules
      },
      {
        path: 'clients',
        Component: Clients
      },
      {
        path: 'services',
        Component: Services
      },
      {
        path: 'missions',
        Component: Missions
      },
      {
        path: 'missions/nouvelle',
        Component: NouvelleMission
      },
      {
        path: 'missions/:id',
        Component: DetailsMission
      },
      {
        path: 'historique',
        Component: Historique
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