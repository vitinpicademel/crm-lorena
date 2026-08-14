import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, User, Phone, Mail, Building2 } from "lucide-react"
import Link from "next/link"

export default function ClientDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/clients">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h2 className="text-2xl font-bold tracking-tight">João da Silva {params.id}</h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
            <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> (11) 99999-9999</span>
            <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> joao@email.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Editar Cliente</Button>
          <Button className="bg-green-600 hover:bg-green-700">WhatsApp</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Sidebar do Cliente */}
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-primary" /> Perfil
            </h3>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2">
                <span className="text-muted-foreground">Perfil:</span>
                <span className="font-medium">Investidor</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium text-primary">Qualificado</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-muted-foreground">Prioridade:</span>
                <span className="font-medium">Alta</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" /> Interesse
            </h3>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2">
                <span className="text-muted-foreground">Tipo:</span>
                <span className="font-medium">Apartamento</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-muted-foreground">Valor:</span>
                <span className="font-medium">R$ 1M - R$ 2M</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="text-muted-foreground">Bairro:</span>
                <span className="font-medium">Jardins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Área Principal (Abas) */}
        <div className="md:col-span-2">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger value="history" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3">Histórico</TabsTrigger>
              <TabsTrigger value="properties" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3">Imóveis Enviados</TabsTrigger>
              <TabsTrigger value="visits" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3">Visitas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="p-6 border rounded-b-lg rounded-tr-lg bg-card mt-0 shadow-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    AT
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-medium">Ligação Realizada</p>
                      <p className="text-sm mt-1">Cliente informou que só tem disponibilidade para visitas aos finais de semana.</p>
                      <p className="text-xs text-muted-foreground mt-2">Hoje, às 14:30 por Lorena de Paula</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="properties" className="p-6 border rounded-b-lg rounded-tr-lg bg-card mt-0 shadow-sm">
              <p className="text-sm text-muted-foreground">Nenhum imóvel enviado ainda.</p>
            </TabsContent>
            
            <TabsContent value="visits" className="p-6 border rounded-b-lg rounded-tr-lg bg-card mt-0 shadow-sm">
              <p className="text-sm text-muted-foreground">Nenhuma visita agendada.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
