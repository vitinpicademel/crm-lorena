import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted/30">
      <div className="w-full max-w-md p-4">
        <div className="mb-8 flex justify-center text-center">
          <div className="flex flex-col items-center gap-2">
            {/* Espaço para Logo */}
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">LP</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Lorena de Paula
            </h1>
            <p className="text-sm text-muted-foreground">
              Imóveis de Alto Padrão
            </p>
          </div>
        </div>
        
        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Acesso ao CRM</CardTitle>
            <CardDescription>
              Entre com seu e-mail e senha para acessar o sistema.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="nome@exemplo.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">Entrar no Sistema</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
