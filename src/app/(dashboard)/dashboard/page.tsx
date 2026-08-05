import { Users, Home, TrendingUp, Calendar, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-10 max-w-7xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold tracking-tight font-serif text-[#1F1811]">Dashboard</h2>
        <p className="text-muted-foreground text-[15px]">Visão geral do seu funil e atendimentos.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-[12px] bg-white border border-[#EDE6DB] p-7 shadow-luxury transition-all">
          <div className="flex flex-row items-center justify-between space-y-0 pb-4">
            <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium text-[#8C7C61]">Total de Clientes</h3>
            <Users strokeWidth={1.5} className="h-5 w-5 text-[#8C7C61]" />
          </div>
          <div>
            <div className="text-5xl font-medium font-serif text-[#1F1811]">128</div>
            <p className="text-xs text-muted-foreground mt-2">+12 este mês</p>
          </div>
        </div>
        
        <div className="rounded-[12px] bg-white border border-[#EDE6DB] p-7 shadow-luxury transition-all">
          <div className="flex flex-row items-center justify-between space-y-0 pb-4">
            <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium text-[#B08D57]">Clientes Quentes</h3>
            <TrendingUp strokeWidth={1.5} className="h-5 w-5 text-[#B08D57]" />
          </div>
          <div>
            <div className="text-5xl font-medium font-serif text-[#1F1811]">34</div>
            <p className="text-xs text-[#8C7C61] mt-2">26% da base ativa</p>
          </div>
        </div>
        
        <div className="rounded-[12px] bg-white border border-[#EDE6DB] p-7 shadow-luxury transition-all">
          <div className="flex flex-row items-center justify-between space-y-0 pb-4">
            <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium text-[#8C7C61]">Visitas Agendadas</h3>
            <Calendar strokeWidth={1.5} className="h-5 w-5 text-[#8C7C61]" />
          </div>
          <div>
            <div className="text-5xl font-medium font-serif text-[#1F1811]">12</div>
            <p className="text-xs text-muted-foreground mt-2">Para os próximos 7 dias</p>
          </div>
        </div>

        <div className="rounded-[12px] bg-white border border-[#EDE6DB] p-7 shadow-luxury transition-all">
          <div className="flex flex-row items-center justify-between space-y-0 pb-4">
            <h3 className="text-[11px] uppercase tracking-[0.08em] font-medium text-[#A64B3D]">Retornos Atrasados</h3>
            <AlertCircle strokeWidth={1.5} className="h-5 w-5 text-[#A64B3D]" />
          </div>
          <div>
            <div className="text-5xl font-medium font-serif text-[#A64B3D]">7</div>
            <p className="text-xs text-[#A64B3D]/80 mt-2">Necessitam contato hoje</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-[12px] bg-white border border-[#EDE6DB] p-7 shadow-luxury">
          <div className="flex flex-row items-center justify-between space-y-0 pb-6">
            <h3 className="text-lg font-serif font-semibold text-[#1F1811]">Evolução de Leads</h3>
          </div>
          <div className="h-[250px] w-full flex items-center justify-center border-2 border-dashed border-[#EDE6DB] rounded-lg">
            <span className="text-muted-foreground text-sm">Gráfico de evolução (Recharts) em breve</span>
          </div>
        </div>

        <div className="col-span-3 rounded-[12px] bg-white border border-[#EDE6DB] p-7 shadow-luxury">
          <div className="flex flex-row items-center justify-between space-y-0 pb-6">
            <h3 className="text-lg font-serif font-semibold text-[#1F1811]">Próximos Retornos</h3>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center border border-[#EDE6DB]">
                  <span className="text-sm font-bold text-[#B08D57]">CL</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1F1811]">Cliente Exemplo {i}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Ligar hoje às 14:00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
