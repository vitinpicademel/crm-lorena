import * as z from "zod"

export const clientSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  phone: z.string().min(10, "Telefone inválido"),
  status: z.enum(["Novo Lead", "Qualificado", "Em Negociação", "Vendido", "Perdido"]),
  priority: z.enum(["Baixa", "Média", "Alta", "Urgente"]),
  property_type: z.string().optional(),
  budget: z.string().optional(),
  notes: z.string().optional(),
})

export type ClientFormValues = z.infer<typeof clientSchema>
