import { environment } from "@/configs/environment";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

interface CreateServerOptions {
  isAdmin?: boolean;
}

export async function createClient({ isAdmin }: CreateServerOptions = {}) {
  const cookieStore = await cookies();
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_ANON_KEY } = environment;

  return createServerClient(
    SUPABASE_URL!,
    isAdmin ? SUPABASE_SERVICE_ROLE_KEY! : SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, options, value }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            console.error("Failed to set cookies on the server.", cookiesToSet);
          }
        },
      },
    },
  );
}
