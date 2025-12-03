import { LoginForm } from "@/features/auth/components/LoginForm";
import { Subtitle } from "@/features/auth/components/subtitle";
import { Title } from "@/features/auth/components/title";

export default function LoginPage() {
  return (
    <div className="login-page fixed inset-0 flex items-center justify-center min-h-screen w-full bg-stone-950 p-4">
      <div className="flex flex-col items-center w-full max-w-md p-8 rounded-2xl bg-stone-900 shadow-xl">
        <Title className="pt-4">Iniciar sesión</Title>
        <Subtitle>
          ¡Bienvenido de nuevo! <br /> Inicia sesión para continuar
        </Subtitle>
        <LoginForm />
        <nav className="mt-6">
          <a
            href="/register"
            className="text-sm text-white/70 hover:underline"
          >
            ¿No tienes una cuenta? Regístrate
          </a>
        </nav>
      </div>
    </div>
  );
}