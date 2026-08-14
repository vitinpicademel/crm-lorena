import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, MessageCircle, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Suspense } from 'react'
import { ClientsSearchFilter } from '@/components/clients/clients-search-filter'

// Opt out of static rendering so we always fetch fresh data
export const dynamic = 'force-dynamic';

interface SearchParams {
  q?: string
  status?: string
  priority?: string
  origin?: string
}

export default async function ClientsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
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

  // Monta a query com filtros dinâmicos
  let query = supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false })

  // Filtro de busca textual (nome, email ou telefone)
  if (searchParams.q && searchParams.q.trim() !== '') {
    const term = `%${searchParams.q.trim()}%`
    query = query.or(
      `full_name.ilike.${term},email.ilike.${term},phone.ilike.${term}`
    )
  }

  // Filtro de status (correspondência exata)
  if (searchParams.status && searchParams.status.trim() !== '') {
    query = query.ilike('status', searchParams.status.trim())
  }

  // Filtro de prioridade (correspondência exata)
  if (searchParams.priority && searchParams.priority.trim() !== '') {
    query = query.ilike('priority', searchParams.priority.trim())
  }

  // Filtro de origem (correspondência exata)
  if (searchParams.origin && searchParams.origin.trim() !== '') {
    query = query.ilike('origin', searchParams.origin.trim())
  }

  const { data: clients } = await query

  const hasFilters = searchParams.q || searchParams.status || searchParams.priority || searchParams.origin

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

      {/* Barra de busca e filtros — Client Component */}
      <Suspense fallback={null}>
        <ClientsSearchFilter />
      </Suspense>

      {/* Resumo dos resultados quando há filtro ativo */}
      {hasFilters && (
        <p className="text-sm text-muted-foreground -mt-4">
          {clients && clients.length > 0
            ? `${clients.length} cliente${clients.length !== 1 ? 's' : ''} encontrado${clients.length !== 1 ? 's' : ''}`
            : 'Nenhum cliente encontrado com esses filtros'}
        </p>
      )}

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
                      <Link href={`/clients/${client.id}`}>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                  {hasFilters
                    ? 'Nenhum cliente encontrado. Tente outros filtros.'
                    : 'Nenhum cliente cadastrado ainda. Clique em "Novo Cliente" para começar.'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
