import { useLoginMutation } from "./useAuthMutations";

export function useLoginForm() {
  const { mutateAsync, isPending, error } = useLoginMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email && password) {
      await mutateAsync({ email, contraseña: password })
    }
  };

  return {
    handleSubmit,
    loading: isPending,
    error: error?.message || null,
  };
}

