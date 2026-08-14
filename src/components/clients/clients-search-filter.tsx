'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useTransition } from 'react'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Search, SlidersHorizontal, X } from 'lucide-react'

const STATUS_OPTIONS = [
  'Novo Lead',
  'Em Negociação',
  'Proposta Enviada',
  'Fechado',
  'Perdido',
]

const PRIORITY_OPTIONS = ['Alta', 'Média', 'Baixa']

const ORIGIN_OPTIONS = [
  'Instagram',
  'Facebook',
  'Google',
  'Indicação',
  'WhatsApp',
  'Site',
  'Outro',
]

export function ClientsSearchFilter() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const query = searchParams.get('q') ?? ''
  const status = searchParams.get('status') ?? ''
  const priority = searchParams.get('priority') ?? ''
  const origin = searchParams.get('origin') ?? ''

  const hasActiveFilters = !!(status || priority || origin)
  const activeCount = [status, priority, origin].filter(Boolean).length

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`)
      })
    },
    [router, pathname, searchParams]
  )

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateParam('q', e.target.value)
    },
    [updateParam]
  )

  const toggleFilter = useCallback(
    (key: string, value: string, currentValue: string) => {
      updateParam(key, currentValue === value ? '' : value)
    },
    [updateParam]
  )

  const clearAllFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('status')
    params.delete('priority')
    params.delete('origin')
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`)
    })
  }, [router, pathname, searchParams])

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
      {/* Barra de busca */}
      <div className="relative flex-1 w-full max-w-md shadow-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar por nome, email ou telefone..."
          className="pl-9 bg-white border-muted"
          defaultValue={query}
          onChange={handleSearch}
        />
      </div>

      {/* Dropdown de filtros */}
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground ${hasActiveFilters ? 'border-primary text-primary' : 'border-input text-foreground'}`}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
          {hasActiveFilters && (
            <span className="ml-1 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4">
              {activeCount}
            </span>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-52">
          {/* Status */}
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          {STATUS_OPTIONS.map((s) => (
            <DropdownMenuCheckboxItem
              key={s}
              checked={status === s}
              onClick={() => toggleFilter('status', s, status)}
            >
              {s}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuSeparator />

          {/* Prioridade */}
          <DropdownMenuLabel>Prioridade</DropdownMenuLabel>
          {PRIORITY_OPTIONS.map((p) => (
            <DropdownMenuCheckboxItem
              key={p}
              checked={priority === p}
              onClick={() => toggleFilter('priority', p, priority)}
            >
              {p}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuSeparator />

          {/* Origem */}
          <DropdownMenuLabel>Origem</DropdownMenuLabel>
          {ORIGIN_OPTIONS.map((o) => (
            <DropdownMenuCheckboxItem
              key={o}
              checked={origin === o}
              onClick={() => toggleFilter('origin', o, origin)}
            >
              {o}
            </DropdownMenuCheckboxItem>
          ))}

          {hasActiveFilters && (
            <>
              <DropdownMenuSeparator />
              <div className="px-2 py-1.5">
                <button
                  className="w-full flex items-center justify-center gap-2 rounded-md px-2 py-1 text-xs text-destructive hover:bg-destructive/5 transition-colors"
                  onClick={clearAllFilters}
                >
                  <X className="h-3 w-3" />
                  Limpar filtros
                </button>
              </div>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Indicador de loading */}
      {isPending && (
        <span className="text-xs text-muted-foreground animate-pulse">
          Filtrando...
        </span>
      )}
    </div>
  )
}
