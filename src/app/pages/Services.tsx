import { useState } from 'react';
import { mockServices } from '../data/mockData';
import { Briefcase, Plus, X } from 'lucide-react';

export function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState(mockServices);
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    type: ''
  });

  const getTypeIcon = (type: string) => {
    return <Briefcase className="h-6 w-6" />;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newService = {
      id: String(services.length + 1),
      nom: formData.nom,
      description: formData.description,
      type: formData.type.toLowerCase().replace(/\s+/g, '_') as any
    };
    setServices([...services, newService]);
    setFormData({ nom: '', description: '', type: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Services de Transport</h1>
          <p className="mt-1 text-gray-600">Types de services proposés aux clients</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Ajouter un service
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
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

      {/* Modal pour ajouter un service */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-40 p-4">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Créer un nouveau type de service</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom du service</label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Ex: Transport VIP"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Type de service</label>
                <input
                  type="text"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Ex: transport_vip ou Transport VIP"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Identifiant unique pour ce type de service (sera formaté automatiquement)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
                  rows={4}
                  placeholder="Décrivez le nouveau type de service et ses caractéristiques..."
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Créer le service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}