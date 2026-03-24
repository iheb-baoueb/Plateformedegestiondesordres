import { Bell, LogOut, User } from 'lucide-react';
import { mockUser } from '../data/mockData';

export function TopBar() {
  return (
    <div className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        
        <div className="flex items-center gap-3 border-l pl-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
            <User className="h-5 w-5" />
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-900">
              {mockUser.prenom} {mockUser.nom}
            </p>
            <p className="text-gray-500">Responsable Transport</p>
          </div>
        </div>
        
        <button className="ml-2 rounded-lg p-2 hover:bg-gray-100">
          <LogOut className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
