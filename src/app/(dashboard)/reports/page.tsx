import { Button } from "@/components/ui/button"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Relatórios</h2>
          <p className="text-muted-foreground">Métricas, conversões e análises de desempenho.</p>
        </div>
        <Button variant="outline">Exportar PDF</Button>
      </div>

      <div className="border rounded-lg bg-card p-12 shadow-sm flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-medium mb-2">Módulo em Desenvolvimento</h3>
        <p className="text-muted-foreground max-w-md">
          Esta tela faz parte de uma fase futura. Aqui você terá acesso a gráficos avançados e relatórios gerenciais da corretora.
        </p>
      </div>
    </div>
  )
}
