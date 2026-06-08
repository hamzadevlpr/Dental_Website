"use client";

import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: call API or Firebase login
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Login to Dental Mart</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
      </form>
      <p className="text-xs text-gray-500 text-center mt-3">
        <Link href="/privacy" className="hover:underline">Privacy</Link> ·{" "}
        <Link href="/terms" className="hover:underline">Terms</Link>
      </p>

      <div className="flex flex-col gap-6 mt-6">
        <Button type="submit" className="w-full" disabled={loading} fullWidth>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
        <div className="relative border-b">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-gray-500 text-sm">
            OR
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full mt-4"
          fullWidth
          onClick={() => console.log("Google signup")}
        >
          Continue with Google
        </Button>
      </div>

      <div className="text-sm text-center mt-4">
        <Link href="/auth/forgot" className="text-brand-primaryDark hover:underline font-medium transition-colors">
          Forgot password?
        </Link>
      </div>
      <div className="text-sm text-center mt-2">
        Don’t have an account?{" "}
        <Link href="/auth/signup" className="text-brand-primaryDark hover:underline font-medium transition-colors">
          Sign up
        </Link>
      </div>
    </div>
  );
}
