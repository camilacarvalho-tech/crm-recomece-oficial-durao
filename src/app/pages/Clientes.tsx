import { useState, useEffect } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

interface Lead {
  id: string;
  nome: string;
  telefone?: string;
  email?: string;
  banco: string;
  valor: number;
  score: string;
  cpf?: string;
}

function Clientes() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const carregarLeads = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://backend-recomece-api-1.onrender.com/leads");

      if (!res.ok) throw new Error("Erro ao buscar API");

      const data = await res.json();

      const formatados: Lead[] = data.map((item: any) => ({
        id: item.id?.toString() || Math.random().toString(),
        nome: item.nome || "Sem nome",
        telefone: item.telefone || "(14) 99999-9999",
        email: item.email || "cliente@email.com",
        banco: item.banco || "Não informado",
        valor: Number(item.valor) || 0,
        score: item.score || "PENDENTE",
        cpf: item.cpf,
      }));

      setLeads(formatados);
    } catch (err) {
      console.error(err);
      setErro("Erro ao carregar leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarLeads();
  }, []);

  const chamarWhatsApp = (lead: Lead) => {
    const mensagem = `Olá ${lead.nome}, vi sua simulação de R$ ${lead.valor} pelo ${lead.banco}. Vamos finalizar?`;

    window.open(
      `https://wa.me/5514991846966?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  };

  if (loading) {
    return <div className="p-6 text-white">Carregando leads...</div>;
  }

  if (erro) {
    return <div className="p-6 text-red-400">{erro}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Clientes (Leads)</h1>

      {leads.length === 0 && (
        <p className="text-gray-400">Nenhum lead encontrado</p>
      )}

      <div className="space-y-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-[#0f1535] p-6 rounded-xl border border-gray-800"
          >
            <h2 className="text-xl font-bold">{lead.nome}</h2>

            <div className="mt-2 text-sm text-gray-300 space-y-1">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>{lead.telefone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>{lead.email}</span>
              </div>
            </div>

            <p className="mt-2 text-gray-400">
              Banco: {lead.banco}
            </p>

            <p className="text-green-400 font-bold text-lg">
              R$ {lead.valor}
            </p>

            <p className="text-sm mt-2 text-gray-300">
              Status: {lead.score}
            </p>

            <button
              onClick={() => chamarWhatsApp(lead)}
              className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              WhatsApp <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clientes;