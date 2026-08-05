export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Configurações</h2>
        <p className="text-muted-foreground">Ajustes do sistema e da sua conta.</p>
      </div>

      <div className="border rounded-lg bg-card p-12 shadow-sm flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-medium mb-2">Módulo em Desenvolvimento</h3>
        <p className="text-muted-foreground max-w-md">
          Esta tela faz parte de uma fase futura. Aqui você poderá gerenciar as categorias do sistema, usuários e personalizar as colunas do funil.
        </p>
      </div>
    </div>
  )
}
