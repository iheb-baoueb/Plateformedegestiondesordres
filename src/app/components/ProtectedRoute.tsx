import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    
    // Si pas de rôle, rediriger vers login
    if (!userRole) {
      navigate('/');
      return;
    }

    // Si des rôles sont spécifiés et l'utilisateur n'a pas le bon rôle
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      // Rediriger vers la page d'accueil selon le rôle
      if (userRole === 'manager') {
        navigate('/dashboard');
      } else {
        navigate('/missions');
      }
    }
  }, [navigate, allowedRoles]);

  return <>{children}</>;
}
