import { Button } from "@/components/ui/button"

export default function FunnelPage() {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Funil de Vendas</h2>
          <p className="text-muted-foreground">Acompanhe as negociações em andamento.</p>
        </div>
        <Button>Nova Negociação</Button>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex h-full gap-4 min-w-max">
          
          {/* Coluna 1 */}
          <div className="w-80 flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg border">
              <h3 className="font-semibold text-sm">Novo Lead</h3>
              <span className="bg-background px-2 py-1 rounded-full text-xs font-medium">3</span>
            </div>
            
            {/* Cards */}
            <div className="bg-card p-4 rounded-lg border shadow-sm space-y-2 cursor-pointer hover:border-primary transition-colors">
              <h4 className="font-medium text-sm">Maria Oliveira</h4>
              <p className="text-xs text-muted-foreground">Apartamento • R$ 1.5M</p>
              <div className="flex gap-2 pt-2">
                <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Alta prioridade</span>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded-lg border shadow-sm space-y-2 cursor-pointer hover:border-primary transition-colors">
              <h4 className="font-medium text-sm">Carlos Santos</h4>
              <p className="text-xs text-muted-foreground">Casa em Condomínio</p>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="w-80 flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg border">
              <h3 className="font-semibold text-sm">Qualificado</h3>
              <span className="bg-background px-2 py-1 rounded-full text-xs font-medium">1</span>
            </div>
            
            <div className="bg-card p-4 rounded-lg border shadow-sm space-y-2 cursor-pointer hover:border-primary transition-colors">
              <h4 className="font-medium text-sm">Roberto Almeida</h4>
              <p className="text-xs text-muted-foreground">Cobertura • R$ 3M</p>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="w-80 flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg border">
              <h3 className="font-semibold text-sm">Visita Agendada</h3>
              <span className="bg-background px-2 py-1 rounded-full text-xs font-medium">0</span>
            </div>
          </div>

          {/* Coluna 4 */}
          <div className="w-80 flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg border">
              <h3 className="font-semibold text-sm">Em Negociação</h3>
              <span className="bg-background px-2 py-1 rounded-full text-xs font-medium">0</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
