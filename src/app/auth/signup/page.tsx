"use client";

import Link from "next/link";
import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = captchaRef.current?.getValue();
    if (!token) {
      alert("Please verify captcha");
      return;
    }
    // send `token` along with signup form to backend
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Create Account for Dental Mart</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
      </form>
      <ReCAPTCHA sitekey={""} ref={captchaRef} />
      {/* Google Auth */}
      <div className="flex flex-col gap-6 mt-6">
        <Button type="submit" className="w-full" disabled={loading} fullWidth>
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
        <div className="relative border-b">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-gray-500 text-sm">
            OR
          </span>
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => console.log("Google signup")}
          fullWidth
        >
          Continue with Google
        </Button>
      </div>
      <p className="text-xs text-gray-600 text-center mt-3">
        By continuing, you agree to our{" "}
        <Link href="/terms" className="text-brand-primaryDark hover:underline font-medium transition-colors">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-brand-primaryDark hover:underline font-medium transition-colors">
          Privacy Policy
        </Link>
        .
      </p>

      <div className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-brand-primaryDark hover:underline font-medium transition-colors">
          Login
        </Link>
      </div>
    </div>
  );
}
