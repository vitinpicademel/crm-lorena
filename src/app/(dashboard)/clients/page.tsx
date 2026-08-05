import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MessageCircle, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Opt out of static rendering so we always fetch fresh data
export const dynamic = 'force-dynamic';

export default async function ClientsPage() {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const { data: clients } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Clientes</h2>
          <p className="text-muted-foreground mt-1">Gerencie sua base de clientes e leads de forma eficiente.</p>
        </div>
        <Link href="/clients/new">
          <Button className="w-full md:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Button>
        </Link>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-md shadow-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar por nome, email ou telefone..." className="pl-9 bg-white border-muted" />
        </div>
        <Button variant="outline" className="shadow-sm bg-white">Filtros</Button>
      </div>

      <div className="border border-border/60 rounded-xl bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-foreground/70 h-12">Nome</TableHead>
              <TableHead className="font-semibold text-foreground/70 h-12">Status</TableHead>
              <TableHead className="font-semibold text-foreground/70 h-12">Prioridade</TableHead>
              <TableHead className="font-semibold text-foreground/70 h-12">Origem</TableHead>
              <TableHead className="text-right font-semibold text-foreground/70 h-12 pr-6">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients && clients.length > 0 ? (
              clients.map((client) => (
                <TableRow key={client.id} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-medium py-4">
                    <Link href={`/clients/${client.id}`} className="hover:text-primary transition-colors block">
                      {client.full_name}
                    </Link>
                    <div className="text-[13px] text-muted-foreground mt-0.5">{client.phone}</div>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="inline-flex items-center rounded-full border border-primary/20 px-2.5 py-1 text-[11px] font-semibold bg-primary/5 text-primary uppercase tracking-wider">
                      {client.status || 'Novo Lead'}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-foreground/80">{client.priority}</TableCell>
                  <TableCell className="py-4 text-foreground/80">{client.origin || '-'}</TableCell>
                  <TableCell className="text-right py-4 pr-4">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full h-8 w-8">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Ações</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild className="cursor-pointer">
                            <Link href={`/clients/${client.id}`}>Ver Detalhes</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">Editar Cliente</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive cursor-pointer">Mover para Lixeira</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                  Nenhum cliente cadastrado ainda. Clique em &quot;Novo Cliente&quot; para começar.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
