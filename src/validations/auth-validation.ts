import z from "zod";

export const loginSchemaForm = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .pipe(z.email({ message: "Please enter a valid email" })),
  password: z.string().min(1, "Password is required"),
});

export type LoginForm = z.infer<typeof loginSchemaForm>;
