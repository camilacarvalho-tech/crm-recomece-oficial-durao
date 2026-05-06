import { Users } from "lucide-react";

export default function SistemaInterno() {
  return (
    <div className="p-6 text-white">
      <div className="bg-[#0f1535] p-6 rounded-2xl border border-gray-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Users className="text-purple-400" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Sistema Interno
            </h1>

            <p className="text-gray-400">
              CRM funcionando corretamente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}