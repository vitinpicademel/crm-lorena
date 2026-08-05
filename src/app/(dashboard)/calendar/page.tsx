import { Button } from "@/components/ui/button"

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Agenda & Retornos</h2>
          <p className="text-muted-foreground">Gerencie seus compromissos e tarefas.</p>
        </div>
        <Button>Novo Agendamento</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="border rounded-lg bg-card p-6 shadow-sm min-h-[500px] flex items-center justify-center">
          <p className="text-muted-foreground">Visualização de Calendário (FullCalendar / BigCalendar) em breve</p>
        </div>
        
        <div className="space-y-6">
          <div className="border rounded-lg bg-card p-4 shadow-sm space-y-4">
            <h3 className="font-semibold border-b pb-2">Retornos de Hoje</h3>
            
            <div className="space-y-3">
              <div className="p-3 border rounded-md bg-muted/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Ligar para João</span>
                  <span className="text-xs text-red-500 font-medium">Atrasado</span>
                </div>
                <p className="text-xs text-muted-foreground">João da Silva • 10:00</p>
              </div>
              
              <div className="p-3 border rounded-md bg-muted/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Enviar opções</span>
                  <span className="text-xs text-primary font-medium">15:30</span>
                </div>
                <p className="text-xs text-muted-foreground">Maria Oliveira</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
