import { Path, UseFormReturn, FieldValues, Controller } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  description,
  autoFocus = false,
  placeholder = "text",
  type = "text",
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  description?: string;
  autoFocus?: boolean;
  placeholder?: string;
  type?: string;
}) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>

          {type === "textarea" ? (
            <Textarea
              {...field}
              id={field.name}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
              className="resize-none"
            />
          ) : (
            <Input
              {...field}
              id={field.name}
              type={type}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
              autoFocus={autoFocus}
            />
          )}

          {description && <FieldDescription>{description}</FieldDescription>}

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
