"use server"

import { createClient } from '@supabase/supabase-js'
import { clientSchema, ClientFormValues } from '@/lib/validators/client.schema'
import { revalidatePath } from 'next/cache'

export async function createClientAction(data: ClientFormValues) {
  const result = clientSchema.safeParse(data)
  
  if (!result.success) {
    return { error: 'Validação falhou. Verifique os dados enviados.' }
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error } = await supabase
    .from('clients')
    .insert([
      {
        full_name: result.data.name,
        email: result.data.email || null,
        phone: result.data.phone,
        status: result.data.status,
        priority: result.data.priority,
        property_type: result.data.property_type || null,
        price_range: result.data.budget || null,
        notes: result.data.notes || null,
        origin: 'Manual'
      }
    ])

  if (error) {
    console.error("Supabase Error:", error)
    return { error: 'Erro ao salvar cliente no banco de dados.' }
  }

  revalidatePath('/clients')
  revalidatePath('/dashboard')
  revalidatePath('/funnel')
  
  return { success: true }
}
