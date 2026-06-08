"use client";
import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  DollarSign,
  ShoppingBag,
  Package,
  Users,
  QrCode,
  Printer,
  Download,
  CheckCircle2,
  Info,
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  Sun,
  Moon,
  Check,
  RefreshCw
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "whatsapp" | "invoices">("dashboard");
  const [whatsappStatus, setWhatsappStatus] = useState<"connected" | "connecting" | "disconnected">("connecting");
  const [selectedRows, setSelectedRows] = useState<number[]>([2]);
  const [darkMode, setDarkMode] = useState(false);
  const [activeInvoice, setActiveInvoice] = useState<number>(0);

  // Toggle Dark Mode class on body/root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Simulate WhatsApp Connection cycle on page load
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setWhatsappStatus("connected");
    }, 3000);
    return () => clearTimeout(timer1);
  }, []);

  const handleWhatsappReconnect = () => {
    setWhatsappStatus("connecting");
    setTimeout(() => {
      setWhatsappStatus("connected");
    }, 2500);
  };

  const handleWhatsappDisconnect = () => {
    setWhatsappStatus("disconnected");
  };

  // Mock Data
  const recentOrders = [
    { id: 1, patient: "Dr. Sarah Ahmed", items: "Orthodontic Aligner Kit x2", amount: "PKR 45,000", status: "success", date: "2026-06-08" },
    { id: 2, patient: "Dr. Ali Raza", items: "Dual-Cartridge Mixing Nozzles", amount: "PKR 12,500", status: "primary", date: "2026-06-08" },
    { id: 3, patient: "Dr. Fatima Khan", items: "Silicone Molding Impression Kit", amount: "PKR 8,200", status: "warning", date: "2026-06-07" },
    { id: 4, patient: "Dr. Bilal Shah", items: "Elastic Ligature O-Rings Bands", amount: "PKR 3,400", status: "error", date: "2026-06-06" },
  ];

  const invoices = [
    { id: 1042, date: "08 Jun 2026", client: "Dr. Sarah Ahmed", items: [{ name: "Orthodontic Aligner Kit", qty: 2, price: 22500 }], discount: 10, total: 40500 },
    { id: 1041, date: "08 Jun 2026", client: "Dr. Ali Raza", items: [{ name: "Dual-Cartridge Mixing Nozzles", qty: 5, price: 2500 }], discount: 0, total: 12500 },
    { id: 1040, date: "07 Jun 2026", client: "Dr. Fatima Khan", items: [{ name: "Silicone Molding Impression Kit", qty: 1, price: 8200 }], discount: 5, total: 7790 },
  ];

  const handleRowSelect = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
      {/* 1. SIDEBAR */}
      <aside className="w-64 border-r border-border bg-white dark:bg-gray-900 flex flex-col justify-between p-4 shrink-0 transition-colors">
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
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "dashboard"
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25"
                  : "text-gray-600 dark:text-gray-300 hover:bg-brand-primaryDark hover:text-white"
              }`}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "whatsapp"
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25"
                  : "text-gray-600 dark:text-gray-300 hover:bg-brand-primaryDark hover:text-white"
              }`}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Module</span>
            </button>

            <button
              onClick={() => setActiveTab("invoices")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "invoices"
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25"
                  : "text-gray-600 dark:text-gray-300 hover:bg-brand-primaryDark hover:text-white"
              }`}
            >
              <FileText size={18} />
              <span>Invoices & Reports</span>
            </button>
          </nav>
        </div>

        {/* WhatsApp Connected Indicator & Theme Toggle in Sidebar */}
        <div className="border-t border-border pt-4 space-y-4">
          {/* Status Indicator */}
          <div className="px-2 py-1">
            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 mb-2 uppercase">
              <span>WhatsApp API Status</span>
              <span
                className={`w-2.5 h-2.5 rounded-full animate-pulse`}
                style={{
                  backgroundColor:
                    whatsappStatus === "connected"
                      ? "#408080"
                      : whatsappStatus === "connecting"
                      ? "#1E7BF3"
                      : "#000000"
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
                style={{
                  backgroundColor:
                    whatsappStatus === "connected"
                      ? "rgba(64,128,128,0.15)"
                      : whatsappStatus === "connecting"
                      ? "rgba(30,123,243,0.15)"
                      : "rgba(0,0,0,0.15)",
                  color:
                    whatsappStatus === "connected"
                      ? "#408080"
                      : whatsappStatus === "connecting"
                      ? "#1E7BF3"
                      : "#000000"
                }}
              >
                {whatsappStatus === "connected" && "CONNECTED"}
                {whatsappStatus === "connecting" && "CONNECTING..."}
                {whatsappStatus === "disconnected" && "DISCONNECTED"}
              </div>
            </div>
          </div>

          {/* Theme Toggler */}
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded-lg transition-colors">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition cursor-pointer"
            >
              {darkMode ? <Sun size={16} className="text-yellow-500" /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </aside>

      {/* WORKSPACE CONTENT */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50 dark:bg-gray-950">
        {/* ==================== TAB 1: DASHBOARD ==================== */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dental Operations Dashboard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Real-time store metrics, status, and analytical overview.</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="px-4 py-2 bg-white dark:bg-gray-900 border border-border text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer flex items-center gap-2"
                >
                  {darkMode ? <Sun size={15} /> : <Moon size={15} />}
                  <span>Change Theme</span>
                </button>
                <button className="px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-primaryDark transition cursor-pointer">
                  Export Dashboard
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Revenue Card (Azure Blue: #1E7BF3) */}
              <div className="bg-white dark:bg-gray-900 border border-brand-primary/15 hover:shadow-[0_8px_30px_rgba(30,123,243,0.12)] rounded-2xl p-6 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Total Revenue</p>
                    <h3 className="text-2xl font-bold" style={{ color: "#1E7BF3" }}>PKR 842,500</h3>
                  </div>
                  <div className="p-3 rounded-lg bg-[rgba(30,123,243,0.1)]" style={{ color: "#1E7BF3" }}>
                    <DollarSign size={20} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-secondary font-bold">
                  <TrendingUp size={14} />
                  <span>+18.2% from last month</span>
                </div>
              </div>

              {/* Sales Card (Sapphire Sky: #0D67CE) */}
              <div className="bg-white dark:bg-gray-900 border border-brand-primary/15 hover:shadow-[0_8px_30px_rgba(30,123,243,0.12)] rounded-2xl p-6 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Sales Orders</p>
                    <h3 className="text-2xl font-bold" style={{ color: "#0D67CE" }}>284 Orders</h3>
                  </div>
                  <div className="p-3 rounded-lg bg-[rgba(13,103,206,0.1)]" style={{ color: "#0D67CE" }}>
                    <ShoppingBag size={20} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-secondary font-bold">
                  <TrendingUp size={14} />
                  <span>+12.4% new client requests</span>
                </div>
              </div>

              {/* Inventory Card (Pine Blue: #408080) */}
              <div className="bg-white dark:bg-gray-900 border border-brand-primary/15 hover:shadow-[0_8px_30px_rgba(30,123,243,0.12)] rounded-2xl p-6 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Active Inventory</p>
                    <h3 className="text-2xl font-bold" style={{ color: "#408080" }}>1,492 Items</h3>
                  </div>
                  <div className="p-3 rounded-lg bg-[rgba(64,128,128,0.1)]" style={{ color: "#408080" }}>
                    <Package size={20} />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-yellow-500 font-bold">
                  <AlertTriangle size={14} />
                  <span>14 low stock alerts</span>
                </div>
              </div>

              {/* Customers Card (Black: #000000) */}
              <div className="bg-white dark:bg-gray-900 border border-brand-primary/15 hover:shadow-[0_8px_30px_rgba(30,123,243,0.12)] rounded-2xl p-6 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Total Dentists</p>
                    <h3 className="text-2xl font-bold dark:text-white" style={{ color: darkMode ? "#FFFFFF" : "#000000" }}>324 Clients</h3>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800" style={{ color: "#000000" }}>
                    <Users size={20} className="dark:text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-brand-secondary font-bold">
                  <TrendingUp size={14} />
                  <span>+8.6% organic user growth</span>
                </div>
              </div>
            </div>

            {/* Analytics Charts & Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Sales Analytics Chart (Uses Brand Colors) */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-900 border border-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-base font-bold">Monthly Orders Analytics</h3>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-brand-primary" />Azure Blue</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-brand-primaryDark" />Sapphire Sky</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-brand-secondary" />Pine Blue</span>
                  </div>
                </div>
                {/* SVG Visualizing Chart using brand colors only */}
                <div className="w-full h-60 flex items-end justify-between px-4 pt-4 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between pointer-events-none opacity-10">
                    <div className="border-t border-gray-400 w-full" />
                    <div className="border-t border-gray-400 w-full" />
                    <div className="border-t border-gray-400 w-full" />
                    <div className="border-t border-gray-400 w-full" />
                  </div>
                  {/* Bars */}
                  {[
                    { month: "Jan", v: [40, 30, 20] },
                    { month: "Feb", v: [55, 45, 30] },
                    { month: "Mar", v: [70, 50, 45] },
                    { month: "Apr", v: [85, 60, 40] },
                    { month: "May", v: [95, 75, 55] },
                    { month: "Jun", v: [100, 85, 65] }
                  ].map((d, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 z-10 w-[12%]">
                      <div className="w-full flex items-end gap-1 justify-center h-48">
                        <div className="w-2 rounded-t-sm bg-brand-primary" style={{ height: `${d.v[0]}%` }} />
                        <div className="w-2 rounded-t-sm bg-brand-primaryDark" style={{ height: `${d.v[1]}%` }} />
                        <div className="w-2 rounded-t-sm bg-brand-secondary" style={{ height: `${d.v[2]}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500">{d.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Colors & Alerts Breakdown */}
              <div className="bg-white dark:bg-gray-900 border border-border rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold mb-4">Branded Status Colors</h3>
                  <p className="text-xs text-gray-400 mb-4">Official status indicators designed to fit the corporate identity system.</p>
                  <div className="space-y-3">
                    {/* Brand Success Status */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(64,128,128,0.08)] border border-[rgba(64,128,128,0.15)] text-brand-secondary">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Success (#408080)</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-brand-secondary text-white font-bold">ACTIVE</span>
                    </div>
                    {/* Brand Info Status */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(30,123,243,0.08)] border border-[rgba(30,123,243,0.15)] text-brand-primary">
                      <div className="flex items-center gap-2.5">
                        <Info size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Info (#1E7BF3)</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-brand-primary text-white font-bold">SYNCED</span>
                    </div>
                    {/* Brand Primary Status */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[rgba(13,103,206,0.08)] border border-[rgba(13,103,206,0.15)] text-brand-primaryDark">
                      <div className="flex items-center gap-2.5">
                        <TrendingUp size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Primary (#0D67CE)</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-brand-primaryDark text-white font-bold">DEFAULT</span>
                    </div>
                    {/* Error Status (Red retained as per specs) */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 dark:bg-red-950/20 dark:border-red-900/30 dark:text-red-400">
                      <div className="flex items-center gap-2.5">
                        <AlertCircle size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Error (Retained Red)</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-red-600 text-white font-bold">CRITICAL</span>
                    </div>
                    {/* Warning Status (Amber retained as per specs) */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 dark:bg-amber-950/20 dark:border-amber-900/30 dark:text-amber-400">
                      <div className="flex items-center gap-2.5">
                        <AlertTriangle size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Warning (Retained Amber)</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500 text-white font-bold">WARN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders Table Section */}
            <div className="bg-white dark:bg-gray-900 border border-border rounded-xl p-6">
              <h3 className="text-base font-bold mb-4">Recent Dental Orders & Shipments</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  {/* Table Header: Background #F8FAFC, Text #000000 */}
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-border text-xs font-bold uppercase text-[#000000]">
                      <th className="p-3 w-10 text-center">
                        <input
                          type="checkbox"
                          checked={selectedRows.length === recentOrders.length}
                          onChange={() => {
                            if (selectedRows.length === recentOrders.length) setSelectedRows([]);
                            else setSelectedRows(recentOrders.map((o) => o.id));
                          }}
                          className="rounded focus:ring-brand-primary text-brand-primary w-4 h-4 cursor-pointer"
                        />
                      </th>
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Doctor / Clinic</th>
                      <th className="p-3">Items Ordered</th>
                      <th className="p-3 text-right">Amount</th>
                      <th className="p-3">Order Date</th>
                      <th className="p-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => {
                      const isSelected = selectedRows.includes(order.id);
                      return (
                        <tr
                          key={order.id}
                          onClick={() => handleRowSelect(order.id)}
                          className={`border-b border-border text-sm cursor-pointer transition-all duration-150 ${
                            isSelected
                              ? "bg-[rgba(30,123,243,0.08)] hover:bg-[rgba(30,123,243,0.1)]"
                              : "hover:bg-[rgba(30,123,243,0.05)] bg-white dark:bg-gray-900"
                          }`}
                        >
                          <td className="p-3 text-center" onClick={(e) => e.stopPropagation()}>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleRowSelect(order.id)}
                              className="rounded focus:ring-brand-primary text-brand-primary w-4 h-4 cursor-pointer"
                            />
                          </td>
                          <td className="p-3 font-semibold text-gray-400">#DM-0{order.id}</td>
                          <td className="p-3 font-semibold">{order.patient}</td>
                          <td className="p-3 text-gray-500 dark:text-gray-400">{order.items}</td>
                          <td className="p-3 text-right font-bold">{order.amount}</td>
                          <td className="p-3 text-xs text-gray-400">{order.date}</td>
                          <td className="p-3 text-center">
                            <span
                              className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider`}
                              style={{
                                backgroundColor:
                                  order.status === "success"
                                    ? "rgba(64,128,128,0.12)"
                                    : order.status === "primary"
                                    ? "rgba(13,103,206,0.12)"
                                    : order.status === "warning"
                                    ? "rgba(245,158,11,0.12)"
                                    : "rgba(220,38,38,0.12)",
                                color:
                                  order.status === "success"
                                    ? "#408080"
                                    : order.status === "primary"
                                    ? "#0D67CE"
                                    : order.status === "warning"
                                    ? "#F59E0B"
                                    : "#DC2626"
                              }}
                            >
                              {order.status === "success" && "Delivered"}
                              {order.status === "primary" && "Processed"}
                              {order.status === "warning" && "Pending"}
                              {order.status === "error" && "Hold"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: WHATSAPP CONNECTION MODULE ==================== */}
        {activeTab === "whatsapp" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">WhatsApp QR Integration Gate</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pair your server-side dental store instance to communicate via WhatsApp.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* QR Code Accents & Details (Azure Blue QR Accents, Sapphire Sky Highlights) */}
              <div className="lg:col-span-7 bg-white dark:bg-gray-900 border border-border rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-sm">
                <div className="space-y-4 max-w-sm">
                  <h3 className="text-lg font-bold text-[#000000] dark:text-white">Scan QR to Authenticate</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    Open WhatsApp on your mobile device, tap <strong className="text-brand-primaryDark">Settings</strong> &rarr; <strong className="text-brand-primaryDark">Linked Devices</strong>, and scan the brand secure gateway QR code.
                  </p>
                  
                  {/* Instructions */}
                  <ul className="space-y-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[rgba(30,123,243,0.1)] text-brand-primary flex items-center justify-center font-bold">1</span>
                      <span>Azure Blue QR security encryption active</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[rgba(13,103,206,0.1)] text-brand-primaryDark flex items-center justify-center font-bold">2</span>
                      <span>Sapphire Sky session handshake token active</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[rgba(64,128,128,0.1)] text-brand-secondary flex items-center justify-center font-bold">3</span>
                      <span>Pine Blue connection monitor</span>
                    </li>
                  </ul>
                  
                  <div className="pt-4 flex gap-2">
                    <button
                      onClick={handleWhatsappReconnect}
                      className="px-4 py-2 bg-brand-primary hover:bg-brand-primaryDark text-white text-xs font-bold rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm shadow-brand-primary/10"
                    >
                      <RefreshCw size={14} className={whatsappStatus === "connecting" ? "animate-spin" : ""} />
                      <span>Refresh Gateway</span>
                    </button>
                    <button
                      onClick={handleWhatsappDisconnect}
                      className="px-4 py-2 border border-border hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer text-gray-700 dark:text-gray-300"
                    >
                      Disconnect Device
                    </button>
                  </div>
                </div>

                {/* Simulated QR Code with Azure Blue Accents */}
                <div className="relative p-6 border-4 border-brand-primary rounded-2xl bg-white shadow-xl shadow-brand-primary/10 shrink-0">
                  {whatsappStatus === "connected" ? (
                    <div className="w-48 h-48 flex flex-col items-center justify-center gap-2 text-brand-secondary">
                      <CheckCircle2 size={64} className="animate-bounce text-brand-secondary" />
                      <span className="text-sm font-bold uppercase tracking-wider">Device Paired!</span>
                      <p className="text-[10px] text-gray-400 text-center">Session is encrypted and live</p>
                    </div>
                  ) : whatsappStatus === "connecting" ? (
                    <div className="w-48 h-48 flex flex-col items-center justify-center gap-2 text-brand-primary">
                      <RefreshCw size={48} className="animate-spin" />
                      <span className="text-sm font-bold uppercase tracking-wider">Loading QR...</span>
                      <p className="text-[10px] text-gray-400 text-center">Connecting handshake...</p>
                    </div>
                  ) : (
                    <div className="w-48 h-48 relative flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                      {/* Fake QR bars/blocks */}
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
                      {/* Center Logo Accent */}
                      <div className="w-12 h-12 bg-white rounded-lg border-2 border-brand-primary flex items-center justify-center shadow-lg z-10 font-bold text-brand-primary">
                        QR
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Badge Configuration and Connected Badge Background */}
              <div className="lg:col-span-5 bg-white dark:bg-gray-900 border border-border rounded-xl p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold">Connected Badge Settings</h3>
                  <p className="text-xs text-gray-400">When the device connects successfully, the system applies the official badge status color token.</p>
                  
                  {/* The official connected badge */}
                  <div className="p-5 rounded-xl border border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-600 dark:text-gray-400">Live Client View Badge:</span>
                    <span
                      className="px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-md shadow-brand-secondary/20 transition-all duration-300"
                      style={{ backgroundColor: "#408080" }} // Connected badge background #408080
                    >
                      ● WhatsApp Connected
                    </span>
                  </div>

                  {/* Settings toggles */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">Auto-responder Alerts</span>
                      {/* Brand primary toggle */}
                      <button className="w-10 h-6 bg-brand-primary rounded-full p-0.5 flex justify-end items-center cursor-pointer transition-all">
                        <span className="w-5 h-5 bg-white rounded-full shadow-sm" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-gray-400">Delivery Receipts (Read-Only)</span>
                      {/* Inactive toggle */}
                      <button className="w-10 h-6 bg-[#CBD5E1] rounded-full p-0.5 flex justify-start items-center cursor-not-allowed">
                        <span className="w-5 h-5 bg-white rounded-full shadow-sm" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mt-6 text-xs text-gray-400 font-medium">
                  WhatsApp API connection powered by official dental system token keys. Secured with 256-bit TLS handshake.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: INVOICES & REPORTS ==================== */}
        {activeTab === "invoices" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Invoice Templates & PDF Exports</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Manage billing history and generate documents utilizing brand styling.</p>
              </div>
              <button className="px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-lg hover:bg-brand-primaryDark transition cursor-pointer flex items-center gap-1.5">
                <Printer size={15} />
                <span>Print All Invoices</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Invoices List Sidebar */}
              <div className="lg:col-span-4 space-y-3">
                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-2">Invoice Logs</h3>
                {invoices.map((inv, idx) => (
                  <div
                    key={inv.id}
                    onClick={() => setActiveInvoice(idx)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      activeInvoice === idx
                        ? "border-brand-primary bg-[rgba(30,123,243,0.05)] shadow-sm animate-pulse-subtle"
                        : "border-border hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-gray-900"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-brand-primary">INV-#DM{inv.id}</span>
                      <span className="text-xs text-gray-400">{inv.date}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-600 dark:text-gray-300">{inv.client}</span>
                      <span className="font-bold text-gray-800 dark:text-white">PKR {inv.total}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Invoice PDF Print Layout Mockup (#1E7BF3 used for titles and branding elements) */}
              <div className="lg:col-span-8 bg-white dark:bg-gray-950 border-2 border-brand-primary/10 rounded-xl p-8 shadow-md relative overflow-hidden">
                {/* Branding Stripe */}
                <div className="absolute top-0 inset-x-0 h-2 bg-brand-primary" />
                
                {/* Invoice Header */}
                <div className="flex justify-between items-start pb-6 border-b border-border">
                  <div>
                    {/* Azure Blue branding color used for main invoice titles */}
                    <h2 className="text-2xl font-black tracking-tight" style={{ color: "#1E7BF3" }}>
                      FAROOQUE DENTAL SUPPLY
                    </h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Official Invoice & Receipt</p>
                    <div className="mt-4 text-xs text-gray-500 space-y-1">
                      <p>Dental Mart Inc, Block 4, Karachi, PK</p>
                      <p>Tel: +92 316 3439 290 | sales@edentalmart.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold uppercase bg-brand-secondary/15 text-brand-secondary px-3 py-1 rounded-full">
                      PAID
                    </span>
                    <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mt-4">INV-#DM{invoices[activeInvoice].id}</h3>
                    <p className="text-xs text-gray-400 mt-1">Date: {invoices[activeInvoice].date}</p>
                  </div>
                </div>

                {/* Client / Shipping Details */}
                <div className="grid grid-cols-2 gap-4 py-6 text-xs border-b border-border">
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-gray-400 mb-2">Billed To:</h4>
                    <p className="font-bold text-sm text-gray-800 dark:text-gray-100">{invoices[activeInvoice].client}</p>
                    <p className="text-gray-500 mt-1">Registered Dental Practitioner</p>
                    <p className="text-gray-500">Clinical Suite 104, Medical Hub, Pakistan</p>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-gray-400 mb-2">Payment Info:</h4>
                    <p className="text-gray-500">Method: Bank Gateway Wire Transfer</p>
                    <p className="text-gray-500">Transaction Ref: TXN-5034823901</p>
                    <p className="text-gray-500">Currency: Pakistan Rupee (PKR)</p>
                  </div>
                </div>

                {/* Invoice Table Items */}
                <div className="py-6">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-border text-gray-400 font-bold uppercase">
                        <th className="py-2">Item Name / Description</th>
                        <th className="py-2 text-center w-16">Qty</th>
                        <th className="py-2 text-right w-28">Price</th>
                        <th className="py-2 text-right w-28">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {invoices[activeInvoice].items.map((item, idx) => (
                        <tr key={idx} className="text-gray-800 dark:text-gray-200">
                          <td className="py-3 font-semibold">{item.name}</td>
                          <td className="py-3 text-center">{item.qty}</td>
                          <td className="py-3 text-right">PKR {item.price}</td>
                          <td className="py-3 text-right font-bold">PKR {item.qty * item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Grand Total Area */}
                <div className="border-t border-border pt-4 flex justify-between items-start">
                  <div className="max-w-xs text-[10px] text-gray-400 leading-relaxed">
                    Thank you for choosing Farooque Dental Supply. All dental materials are verified for clinical standards under ISO 13485 regulations.
                  </div>
                  <div className="w-64 text-xs space-y-1.5 text-right font-semibold">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal:</span>
                      <span>PKR {invoices[activeInvoice].items.reduce((sum, i) => sum + (i.price * i.qty), 0)}</span>
                    </div>
                    {invoices[activeInvoice].discount > 0 && (
                      <div className="flex justify-between text-red-500">
                        <span>Discount ({invoices[activeInvoice].discount}%):</span>
                        <span>- PKR {(invoices[activeInvoice].items.reduce((sum, i) => sum + (i.price * i.qty), 0) * invoices[activeInvoice].discount) / 100}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-gray-500">
                      <span>Shipping Fees:</span>
                      <span>PKR 0 (Free shipping)</span>
                    </div>
                    <div className="flex justify-between text-base font-black border-t border-border pt-2" style={{ color: "#1E7BF3" }}>
                      <span>Total Due:</span>
                      <span>PKR {invoices[activeInvoice].total}</span>
                    </div>
                  </div>
                </div>

                {/* Action Footer Buttons */}
                <div className="mt-8 flex gap-3 justify-end border-t border-border pt-6">
                  <button className="px-4 py-2 border border-border rounded-lg text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer flex items-center gap-1.5 text-gray-700 dark:text-gray-300">
                    <Printer size={13} />
                    <span>Print Invoice</span>
                  </button>
                  <button className="px-4 py-2 bg-brand-primary text-white rounded-lg text-xs font-bold hover:bg-brand-primaryDark transition cursor-pointer flex items-center gap-1.5 shadow-sm shadow-brand-primary/10">
                    <Download size={13} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
