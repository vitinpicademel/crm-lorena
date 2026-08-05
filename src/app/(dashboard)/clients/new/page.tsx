import { ClientForm } from "@/components/clients/client-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewClientPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 border-b pb-6">
        <Link href="/clients">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Novo Cliente</h2>
          <p className="text-muted-foreground mt-1">Cadastre um novo lead ou cliente para iniciar o acompanhamento.</p>
        </div>
      </div>

      <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
        <ClientForm />
      </div>
    </div>
  )
}
