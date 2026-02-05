"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Globe } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const supabase = supabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleLogin() {
    setLoading(true);
    setErrorMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    router.push("/browse");
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-4 pt-28">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-10 space-y-10">

        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-[#243B6B]">
            Sign in to Equipterra
          </h1>
          <p className="text-gray-600 text-base">
            Access your rentals, listings, and dashboard
          </p>
        </div>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 rounded text-sm">
            {errorMessage}
          </div>
        )}

        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium text-[#243B6B]">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="mt-1 h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#243B6B]">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              className="mt-1 h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="w-full h-12 font-semibold bg-[#243B6B] hover:bg-[#1d3158]"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>

          <div className="text-right">
            <Link
              href="/reset-password"
              className="text-sm text-[#243B6B] hover:underline"
            >
              Forgot password
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-gray-500 text-xs">OR</span>
          <Separator className="flex-1" />
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full h-12 text-[#243B6B] font-medium">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full h-12 text-[#243B6B] font-medium">
            Continue with Apple
          </Button>
          <Button variant="outline" className="w-full h-12 text-[#243B6B] font-medium">
            Continue with Microsoft
          </Button>
        </div>

        <div className="text-center text-base">
          New to Equipterra?{" "}
          <Link
            href="/signup"
            className="text-[#243B6B] font-semibold hover:underline"
          >
            Create an account
          </Link>
        </div>

        <div className="pt-4 space-y-3 text-gray-500 text-sm text-center">
          <div className="flex justify-center items-center gap-2">
            <ShieldCheck size={18} className="text-[#243B6B]" />
            <span>Secure login with industry‑standard encryption</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Globe size={18} className="text-[#243B6B]" />
            <span>Available worldwide in 190+ countries</span>
          </div>
        </div>

      </div>
    </div>
  );
}