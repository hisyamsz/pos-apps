"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function UserManagement() {
  const supabase = createClient();
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*", { count: "exact" })
        .order("created_at");

      if (error)
        toast.error("Get User data failed", {
          description: error.message,
        });

      return data;
    },
  });

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold font-heading text-foreground tracking-tight">User Management</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage system administrators, cashiers, and kitchen staff</p>
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <Input placeholder="Search by name..." className="h-10 max-w-xs bg-card" />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-10 rounded-md font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200">
                Create User
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 bg-card border border-border rounded-md animate-pulse p-4" />
          ))
        ) : users && users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-card border border-border rounded-md p-4 flex items-center justify-between transition-all duration-200 hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-semibold text-sm">
                  <AvatarFallback className="bg-transparent text-primary">
                    {user.name?.slice(0, 2).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold text-foreground">{user.name}</h2>
                  <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-secondary text-secondary-foreground">
                    {user.role}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-muted-foreground block">
                  ID: {user.id?.slice(0, 8)}
                </span>
                {user.created_at && (
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    Joined: {new Date(user.created_at).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-muted-foreground bg-card border border-border border-dashed rounded-md">
            No users found.
          </div>
        )}
      </div>
    </div>
  );
}
