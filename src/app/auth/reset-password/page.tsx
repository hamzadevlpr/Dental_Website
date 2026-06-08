"use client";

import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [success, setSuccess] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    // TODO: call backend API to reset password
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
      {success ? (
        <p className="text-brand-secondary font-semibold">Password reset successful ✅</p>
      ) : (
        <>
          <form onSubmit={handleReset} className="space-y-4">
            <Input type="password" placeholder="New Password" required />
            <Input type="password" placeholder="Confirm Password" required />
            <p className="text-xs text-gray-500 text-center mt-3">
              <Link href="/privacy" className="hover:underline">Privacy</Link> ·{" "}
              <Link href="/terms" className="hover:underline">Terms</Link>
            </p>
            <Button type="submit" fullWidth>
              Reset Password
            </Button>

          </form>
        </>
      )}
    </div>
  );
}
