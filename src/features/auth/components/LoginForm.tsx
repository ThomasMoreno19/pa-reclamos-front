"use client"

import { Field } from "@components/field"
import { Lock, Mail } from "lucide-react"
import { Button } from "@/components/button"
import { FieldSeparator } from "@/components/field-wrapper"
import { Label } from "@/components/label"
import { useLoginForm } from "../hooks/useLoginForm"

export function LoginForm() {
  const { handleSubmit, loading, error } = useLoginForm()

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full mt-5">
      <FieldSeparator className="flex flex-col gap-2">
        <Label htmlFor="email">
          <Mail width={16} />
          Email
        </Label>
        <Field
          type="email"
          placeholder="tu@email.com"
          name="email"
          id="email"
        />
      </FieldSeparator>
      <FieldSeparator>
        <Label htmlFor="password">
          <Lock width={16} />
          Contraseña
        </Label>
        <Field
          type="password"
          placeholder="••••••••"
          name="password"
          id="password"
        />
      </FieldSeparator>
      <Button size={"lg"} type="submit" className="mt-2" loading={loading}>
        Iniciar Sesión
      </Button>
      {error && <p className="text-center mt-4 text-sm">{error}</p>}
    </form>
  )
}
