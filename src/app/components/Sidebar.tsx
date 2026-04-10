import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Car,
  Building2,
  Briefcase,
  Settings,
  UserCog,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Types de services pour les missions
const missionTypes = [
  { name: 'Mission Transfert', href: '/missions/transfert', type: 'transfert' },
  { name: 'Mission Transport Personnel', href: '/missions/transport-personnel', type: 'transport_personnel' },
  { name: 'Mission Excursion', href: '/missions/excursion', type: 'excursion' },
  { name: 'Mission Acheminement Ramassage', href: '/missions/acheminement-ramassage', type: 'acheminement_ramassage' },
  { name: 'Mission Acheminement Retour', href: '/missions/acheminement-retour', type: 'acheminement_retour' }
];

// Menus par rôle
const menuByRole = {
  manager: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Chauffeurs', href: '/chauffeurs', icon: Users },
    { name: 'Véhicules', href: '/vehicules', icon: Car },
    { name: 'Clients', href: '/clients', icon: Building2 },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Utilisateurs', href: '/utilisateurs', icon: UserCog },
    { name: 'Paramètres', href: '/parametres', icon: Settings }
  ],
  responsable_transport: [
    { name: 'Missions', href: '/missions', icon: ClipboardList, hasSub: true },
    { name: 'Chauffeurs', href: '/chauffeurs', icon: Users },
    { name: 'Véhicules', href: '/vehicules', icon: Car },
    { name: 'Clients', href: '/clients', icon: Building2 },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Paramètres', href: '/parametres', icon: Settings }
  ]
};

export function Sidebar() {
  const location = useLocation();
  const [navigation, setNavigation] = useState<typeof menuByRole.manager>([]);
  const [userRole, setUserRole] = useState<string>('');
  const [missionsExpanded, setMissionsExpanded] = useState(true);

  useEffect(() => {
    // Récupérer le rôle de l'utilisateur
    const role = localStorage.getItem('userRole') as 'manager' | 'responsable_transport';
    setUserRole(role);
    if (role && menuByRole[role]) {
      setNavigation(menuByRole[role]);
    } else {
      // Par défaut, afficher le menu du responsable transport
      setNavigation(menuByRole.responsable_transport);
    }
  }, []);

  return (
    <div className="flex h-screen w-64 flex-col bg-[#1e3a8a] text-white">
      <div className="flex h-16 items-center justify-center border-b border-blue-700 px-6">
        <h1 className="text-xl font-semibold">Transport Manager</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            // Si c'est le menu Missions avec sous-menu (pour responsable transport)
            if (item.hasSub && userRole === 'responsable_transport') {
              const isMissionPath = location.pathname.startsWith('/missions');
              
              return (
                <li key={item.name}>
                  <button
                    onClick={() => setMissionsExpanded(!missionsExpanded)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                      isMissionPath
                        ? 'bg-blue-600 text-white'
                        : 'text-blue-100 hover:bg-blue-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </div>
                    {missionsExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                  
                  {missionsExpanded && (
                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-blue-600 pl-4">
                      {missionTypes.map((mission) => {
                        const isSubActive = location.pathname === mission.href;
                        return (
                          <li key={mission.type}>
                            <Link
                              to={mission.href}
                              className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                                isSubActive
                                  ? 'bg-blue-700 text-white'
                                  : 'text-blue-100 hover:bg-blue-800'
                              }`}
                            >
                              {mission.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }
            
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-100 hover:bg-blue-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}