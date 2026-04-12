"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldSet } from "@/components/ui/field";
import { LoginForm, loginSchemaForm } from "@/validations/auth-validation";
import {
  INITIAL_AUTH_LOGIN_FORM,
  INITIAL_STATE_LOGIN_FORM,
} from "@/constants/auth-constant";
import FormInput from "@/components/common/form-input";
import { startTransition, useActionState, useEffect } from "react";
import { login } from "../actions";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchemaForm),
    defaultValues: INITIAL_AUTH_LOGIN_FORM,
  });

  const [loginState, loginAction, isPendingLogin] = useActionState(
    login,
    INITIAL_STATE_LOGIN_FORM,
  );

  function onSubmit(data: LoginForm) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(() => {
      loginAction(formData);
    });
  }

  useEffect(() => {
    if (loginState.status === "error") {
      toast.error("Login failed. Please try again.", {
        description: loginState.errors?._form?.[0] || undefined,
      });
      startTransition(() => {
        loginAction(null);
      });
    }
  }, [loginState]);

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome to our cafe</CardTitle>
        <CardDescription>Login to access your account</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldSet>
            <FieldGroup className="space-y-1">
              <FormInput
                form={form}
                name="email"
                label="Email"
                placeholder="example@email.com"
                type="email"
                autoFocus
              />

              <FormInput
                form={form}
                name="password"
                label="Password"
                placeholder="********"
                type="password"
              />
            </FieldGroup>
          </FieldSet>

          <Button type="submit" className="w-full" disabled={isPendingLogin}>
            {isPendingLogin ? (
              <>
                <Spinner />
                Loging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
