import { Bell, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

export function TopBar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName') || 'Utilisateur';
    const role = localStorage.getItem('userRole') || '';
    setUserName(name);
    
    // Formater le rôle pour l'affichage
    if (role === 'manager') {
      setUserRole('Manager');
    } else if (role === 'responsable_transport') {
      setUserRole('Responsable Transport');
    }
  }, []);

  const handleLogout = () => {
    // Nettoyer le localStorage
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    
    // Rediriger vers la page de login
    navigate('/');
  };

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
            <p className="font-medium text-gray-900">{userName}</p>
            <p className="text-gray-500">{userRole}</p>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="ml-2 rounded-lg p-2 hover:bg-gray-100"
          title="Se déconnecter"
        >
          <LogOut className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}