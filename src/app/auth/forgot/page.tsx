"use client";

import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // TODO: call backend API to send reset email
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
      {sent ? (
        <p className="text-brand-secondary font-semibold">Reset link sent to your email ✅</p>
      ) : (
        <form onSubmit={handleForgot} className="space-y-4">
          <Input type="email" placeholder="Enter your email" required />
            <p className="text-xs text-gray-500 text-center mt-3">
              <Link href="/privacy" className="hover:underline">Privacy</Link> ·{" "}
              <Link href="/terms" className="hover:underline">Terms</Link>
            </p>
          <Button type="submit" fullWidth>
            Send Reset Link
          </Button>

        </form>
      )}
    </div>
  );
}
