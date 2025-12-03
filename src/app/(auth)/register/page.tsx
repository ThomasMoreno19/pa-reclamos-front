import { RegisterForm } from "@/features/auth/components/RegisterForm";
import { Subtitle } from "@/features/auth/components/subtitle";
import { Title } from "@/features/auth/components/title";

export default function RegisterPage() {
  return (
    <div className="login-page fixed inset-0 flex items-center justify-center min-h-screen w-full bg-stone-950 p-4">
      <div className="flex flex-col w-full max-w-md p-8 rounded-2xl bg-stone-900 shadow-xl">
        <Title className="pt-4">Registrarse</Title>

        <Subtitle>
          Regístrate para continuar
        </Subtitle>

        <RegisterForm />
        <nav className="mt-6 w-full">
          <a
            href="/login"
            className="text-sm text-white hover:underline text-center w-full block"
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </a>
        </nav>
      </div>
    </div>
  );
}