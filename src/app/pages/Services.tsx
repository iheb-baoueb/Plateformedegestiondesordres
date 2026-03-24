import { mockServices } from '../data/mockData';
import { Briefcase } from 'lucide-react';

export function Services() {
  const getTypeIcon = (type: string) => {
    return <Briefcase className="h-6 w-6" />;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Services de Transport</h1>
        <p className="mt-1 text-gray-600">Types de services proposés aux clients</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {mockServices.map((service) => (
          <div key={service.id} className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                {getTypeIcon(service.type)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{service.nom}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                <div className="mt-4">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {service.type.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-blue-50 p-6">
        <h3 className="font-semibold text-gray-900">À propos des services</h3>
        <p className="mt-2 text-sm text-gray-600">
          Ces types de services sont utilisés lors de la création d'une nouvelle mission.
          Ils permettent de catégoriser les différentes prestations offertes par votre agence de transport.
        </p>
      </div>
    </div>
  );
}
