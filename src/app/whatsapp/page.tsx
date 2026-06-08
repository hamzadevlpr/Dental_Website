"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Settings,
  HelpCircle
} from "lucide-react";

export default function WhatsappPage() {
  const [status, setStatus] = useState<"connected" | "connecting" | "disconnected">("connecting");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("connected");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleReconnect = () => {
    setStatus("connecting");
    setTimeout(() => {
      setStatus("connected");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-foreground flex transition-colors duration-300">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-border bg-white dark:bg-gray-900 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Brand Logo Header */}
          <div className="flex items-center gap-3 px-2 py-4 border-b border-border mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white font-bold">
              D
            </div>
            <div>
              <span className="font-bold text-sm tracking-wide text-brand-primary">DENTAL BRAND</span>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">Management Suite</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-brand-primaryDark hover:text-white transition-all duration-200"
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/whatsapp"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold bg-brand-primary text-white shadow-md shadow-brand-primary/25 transition-all duration-200"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Module</span>
            </Link>

            <Link
              href="/invoices"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-brand-primaryDark hover:text-white transition-all duration-200"
            >
              <FileText size={18} />
              <span>Invoices & Reports</span>
            </Link>
          </nav>
        </div>

        {/* WhatsApp Connected Status Indicator in Sidebar */}
        <div className="border-t border-border pt-4">
          <div className="px-2 py-1">
            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 mb-2 uppercase">
              <span>WhatsApp API Status</span>
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{
                  backgroundColor:
                    status === "connected"
                      ? "#408080"
                      : status === "connecting"
                      ? "#1E7BF3"
                      : "#000000"
                }}
              />
            </div>
            <div
              className="text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block"
              style={{
                backgroundColor:
                  status === "connected"
                    ? "rgba(64,128,128,0.15)"
                    : status === "connecting"
                    ? "rgba(30,123,243,0.15)"
                    : "rgba(0,0,0,0.15)",
                color:
                  status === "connected"
                    ? "#408080"
                    : status === "connecting"
                    ? "#1E7BF3"
                    : "#000000"
              }}
            >
              {status === "connected" && "CONNECTED"}
              {status === "connecting" && "CONNECTING..."}
              {status === "disconnected" && "DISCONNECTED"}
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Back button & Breadcrumb */}
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="text-gray-500 hover:text-brand-primary transition-colors flex items-center gap-1.5 text-sm font-semibold">
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </Link>
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight text-brand-black dark:text-white">WhatsApp Integration Gateway</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Synchronize patient notifications, invoices, and automated dental clinical updates to WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Scan QR Container */}
            <div className="lg:col-span-8 bg-white dark:bg-gray-900 border border-border rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
              <div className="space-y-4 max-w-sm">
                <h3 className="text-lg font-bold text-brand-black dark:text-white">Link Device</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Open WhatsApp on your device, choose <strong className="text-brand-primary">Settings &gt; Linked Devices</strong>, and frame this secure session authorization QR.
                </p>

                {/* Instruction Steps with Brand Highlights */}
                <div className="space-y-3 pt-2">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[rgba(30,123,243,0.1)] text-brand-primary flex items-center justify-center font-bold text-xs shrink-0">
                      1
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      Ensure your phone has an active internet connection.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[rgba(13,103,206,0.1)] text-brand-primaryDark flex items-center justify-center font-bold text-xs shrink-0">
                      2
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      Authenticate with biometric/passcode verification on your phone.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-[rgba(64,128,128,0.1)] text-brand-secondary flex items-center justify-center font-bold text-xs shrink-0">
                      3
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      Wait for the status indicator to turn <strong className="text-brand-secondary">Connected</strong>.
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex gap-2">
                  <button
                    onClick={handleReconnect}
                    className="px-4 py-2 bg-brand-primary hover:bg-brand-primaryDark text-white text-xs font-bold rounded-lg transition duration-250 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw size={14} className={status === "connecting" ? "animate-spin" : ""} />
                    <span>Refresh Code</span>
                  </button>
                  <button
                    onClick={() => setStatus("disconnected")}
                    className="px-4 py-2 border border-border text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-bold rounded-lg transition cursor-pointer"
                  >
                    Disconnect
                  </button>
                </div>
              </div>

              {/* QR Render (Azure Blue accents, Sapphire Sky Highlights, Pine Blue Connected Status) */}
              <div className="relative p-6 border-4 border-brand-primary rounded-3xl bg-white shadow-xl shadow-brand-primary/10 shrink-0">
                {status === "connected" ? (
                  <div className="w-48 h-48 flex flex-col items-center justify-center gap-3 text-brand-secondary">
                    <CheckCircle2 size={56} className="animate-bounce" />
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Linked Successfully</span>
                    <p className="text-[10px] text-gray-400 text-center">Session synced with +92 3** **** 244</p>
                  </div>
                ) : status === "connecting" ? (
                  <div className="w-48 h-48 flex flex-col items-center justify-center gap-3 text-brand-primary">
                    <RefreshCw size={40} className="animate-spin" />
                    <span className="text-xs font-bold uppercase tracking-wider">Loading Handshake...</span>
                  </div>
                ) : (
                  <div className="w-48 h-48 relative flex items-center justify-center bg-gray-50 rounded-lg">
                    {/* QR Blocks */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 p-4 gap-2 opacity-80">
                      <div className="bg-brand-primary rounded-sm" />
                      <div className="bg-brand-black rounded-sm" />
                      <div className="bg-brand-black rounded-sm" />
                      <div className="bg-brand-primary rounded-sm" />
                      
                      <div className="bg-brand-black rounded-sm" />
                      <div className="bg-white rounded-sm" />
                      <div className="bg-white rounded-sm" />
                      <div className="bg-brand-black rounded-sm" />
                      
                      <div className="bg-brand-black rounded-sm" />
                      <div className="bg-white rounded-sm" />
                      <div className="bg-brand-primary rounded-sm" />
                      <div className="bg-brand-black rounded-sm" />
                      
                      <div className="bg-brand-primary rounded-sm" />
                      <div className="bg-brand-black rounded-sm" />
                      <div className="bg-brand-black rounded-sm" />
                      <div className="bg-brand-primary rounded-sm" />
                    </div>
                    {/* Inner Logo */}
                    <div className="w-10 h-10 bg-white rounded-lg border-2 border-brand-primary flex items-center justify-center shadow-md z-10 font-black text-brand-primary text-xs">
                      WA
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Config & Connected Badge Background (#408080) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-gray-900 border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-4">Device Overview</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400">Device Name</label>
                    <p className="text-sm font-semibold">Dentist Admin Chrome Web</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400">Connection Mode</label>
                    <p className="text-sm font-semibold">Websocket Multiplex Server</p>
                  </div>
                  <div className="pt-2">
                    <span
                      className="px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-md shadow-brand-secondary/20 inline-block"
                      style={{ backgroundColor: "#408080" }} // Connected Badge background #408080
                    >
                      ● Connected Status Live
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-border rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border border-border flex justify-between items-center text-xs font-semibold cursor-pointer">
                    <span>Connection Settings</span>
                    <Settings size={14} className="text-gray-400" />
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 border border-border flex justify-between items-center text-xs font-semibold cursor-pointer">
                    <span>Help & Troubleshooting</span>
                    <HelpCircle size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
