import { Button } from "@/components/ui/button"

export default function ProspectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Prospecção</h2>
          <p className="text-muted-foreground">Listas de contatos frios para qualificação.</p>
        </div>
        <Button>Importar Lista (Excel/CSV)</Button>
      </div>

      <div className="border rounded-lg bg-card p-12 shadow-sm flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-medium mb-2">Módulo em Desenvolvimento</h3>
        <p className="text-muted-foreground max-w-md">
          Esta tela faz parte de uma fase futura. Aqui você poderá gerenciar listas de leads frios antes de eles entrarem no funil principal do CRM.
        </p>
      </div>
    </div>
  )
}
