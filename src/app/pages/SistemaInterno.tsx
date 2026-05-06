import {
  Activity,
  Users,
  Database,
  Shield,
  Bell,
  UserCog,
  UserPlus,
} from "lucide-react";

export default function SistemaInterno() {
  const usuarios = [
    {
      id: 1,
      nome: "Camila Cristina",
      cargo: "Administrador",
      status: "Online",
    },
    {
      id: 2,
      nome: "João Silva",
      cargo: "Vendedor",
      status: "Offline",
    },
  ];

  return (
    <div className="p-6 space-y-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Sistema Interno
          </h1>

          <p className="text-gray-400 mt-1">
            Gerenciamento e configurações do sistema
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500 to-purple-600 hover:opacity-90 transition">
          <UserPlus size={18} />
          <span>Cadastrar Cliente</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-[#0f1535] rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
              <Activity className="text-teal-400" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Uptime do Sistema
              </p>

              <h2 className="text-2xl font-bold">
                99.9%
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#0f1535] rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Users className="text-purple-400" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Usuários Ativos
              </p>

              <h2 className="text-2xl font-bold">
                2
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#0f1535] rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Database className="text-blue-400" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Backup Automático
              </p>

              <h2 className="text-2xl font-bold">
                Ativo
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#0f1535] rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Shield className="text-yellow-400" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Segurança
              </p>

              <h2 className="text-2xl font-bold">
                SSL
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Modulos */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Módulos do Sistema
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="bg-[#0f1535] rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mb-4">
              <UserCog className="text-white" />
            </div>

            <h3 className="font-bold text-lg mb-2">
              Gerenciamento de Usuários
            </h3>

            <p className="text-gray-400 text-sm">
              Controle de acesso e permissões.
            </p>
          </div>

          <div className="bg-[#0f1535] rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4">
              <Bell className="text-white" />
            </div>

            <h3 className="font-bold text-lg mb-2">
              Notificações
            </h3>

            <p className="text-gray-400 text-sm">
              Configure tarefas automáticas.
            </p>
          </div>

          <div className="bg-[#0f1535] rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center mb-4">
              <Activity className="text-white" />
            </div>

            <h3 className="font-bold text-lg mb-2">
              Logs do Sistema
            </h3>

            <p className="text-gray-400 text-sm">
              Visualize atividades do CRM.
            </p>
          </div>
        </div>
      </div>

      {/* Usuarios */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Usuários do Sistema
        </h2>

        <div className="bg-[#0f1535] rounded-2xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#0a0e27] border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-gray-300">
                  Usuário
                </th>

                <th className="px-6 py-4 text-left text-sm text-gray-300">
                  Cargo
                </th>

                <th className="px-6 py-4 text-left text-sm text-gray-300">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm text-gray-300">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario) => (
                <tr
                  key={usuario.id}
                  className="border-b border-gray-800"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                        {usuario.nome.charAt(0)}
                      </div>

                      <span>{usuario.nome}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {usuario.cargo}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        usuario.status === "Online"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {usuario.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <button className="text-purple-400 hover:text-purple-300">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}