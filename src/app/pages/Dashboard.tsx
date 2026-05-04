import { DollarSign, Users, TrendingUp, Activity, Filter } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "Out", value: 180 },
  { month: "Nov", value: 200 },
  { month: "Dez", value: 240 },
  { month: "Jan", value: 190 },
  { month: "Fev", value: 220 },
  { month: "Mar", value: 240 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Visão geral do seu sistema CRM
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-lg hover:opacity-90">
          <Filter size={18} />
          <span>Filtrar</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Vendas */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-500/10 flex items-center justify-center rounded-lg">
              <DollarSign className="text-yellow-500" />
            </div>

            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp size={14} />
              +12.5%
            </span>
          </div>

          <p className="text-gray-400 text-sm">Total de Vendas</p>
          <p className="text-3xl font-bold">R$ 458.600</p>
        </div>

        {/* Leads */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center rounded-lg">
              <Users className="text-purple-400" />
            </div>

            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp size={14} />
              +8.2%
            </span>
          </div>

          <p className="text-gray-400 text-sm">Leads Ativos</p>
          <p className="text-3xl font-bold">847</p>
        </div>

        {/* Conversão */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center rounded-lg">
              <TrendingUp className="text-blue-400" />
            </div>

            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp size={14} />
              +5.1%
            </span>
          </div>

          <p className="text-gray-400 text-sm">Taxa de Conversão</p>
          <p className="text-3xl font-bold">42.3%</p>
        </div>

        {/* Aprovações */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex justify-between mb-4">
            <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center rounded-lg">
              <Activity className="text-green-400" />
            </div>

            <span className="text-red-400 text-sm flex items-center gap-1">
              <TrendingUp size={14} className="rotate-180" />
              -2.3%
            </span>
          </div>

          <p className="text-gray-400 text-sm">Aprovações Hoje</p>
          <p className="text-3xl font-bold">23</p>
        </div>
      </div>

      {/* Gráfico */}
      <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
        <h2 className="text-xl font-bold mb-2">
          Desempenho de Vendas
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Últimos 6 meses
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}