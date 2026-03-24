import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Car,
  Building2,
  Briefcase,
  History,
  Settings
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Missions', href: '/missions', icon: ClipboardList },
  { name: 'Chauffeurs', href: '/chauffeurs', icon: Users },
  { name: 'Véhicules', href: '/vehicules', icon: Car },
  { name: 'Clients', href: '/clients', icon: Building2 },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Historique', href: '/historique', icon: History },
  { name: 'Paramètres', href: '/parametres', icon: Settings }
];

export function Sidebar() {
  const location = useLocation();

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
