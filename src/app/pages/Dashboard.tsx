import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Calendar, TrendingUp, Users, Car } from 'lucide-react';
import {
  statsData,
  missionsParJour,
  missionsParChauffeur,
  missionsParClient
} from '../data/mockData';

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Manager</h1>
        <p className="mt-1 text-gray-600">Vue d'ensemble de l'activité</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Missions aujourd'hui</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {statsData.missionsAujourdhui}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 p-3">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Missions en cours</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {statsData.missionsEnCours}
              </p>
            </div>
            <div className="rounded-full bg-green-100 p-3">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Chauffeurs disponibles</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {statsData.chauffeursDispo}
              </p>
            </div>
            <div className="rounded-full bg-purple-100 p-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Véhicules disponibles</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {statsData.vehiculesDispo}
              </p>
            </div>
            <div className="rounded-full bg-orange-100 p-3">
              <Car className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Missions par jour */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Missions par jour</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={missionsParJour}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="jour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="missions" fill="#3b82f6" name="Missions" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Missions par chauffeur */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Missions par chauffeur</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={missionsParChauffeur} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="nom" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="missions" fill="#60a5fa" name="Missions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Missions par client */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">Répartition par client</h3>
        <div className="flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={missionsParClient}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ nom, value }) => `${nom}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {missionsParClient.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats supplémentaires */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-semibold text-gray-900">Chiffre d'affaires du mois</h3>
          <p className="mt-2 text-3xl font-semibold text-green-600">
            {statsData.chiffreAffairesMois.toLocaleString()} DT
          </p>
          <p className="mt-1 text-sm text-gray-600">+12% par rapport au mois dernier</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-semibold text-gray-900">Missions réalisées ce mois</h3>
          <p className="mt-2 text-3xl font-semibold text-blue-600">{statsData.missionsMois}</p>
          <p className="mt-1 text-sm text-gray-600">+8% par rapport au mois dernier</p>
        </div>
      </div>
    </div>
  );
}