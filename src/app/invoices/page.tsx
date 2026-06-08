"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Printer,
  Download,
  ArrowLeft,
  CheckCircle2,
  Trash2,
  Eye,
  FileSpreadsheet
} from "lucide-react";

export default function InvoicesPage() {
  const [activeInvoice, setActiveInvoice] = useState<number>(0);

  const invoices = [
    { id: 1042, date: "08 Jun 2026", client: "Dr. Sarah Ahmed", items: [{ name: "Orthodontic Aligner Kit", qty: 2, price: 22500 }], discount: 10, total: 40500 },
    { id: 1041, date: "08 Jun 2026", client: "Dr. Ali Raza", items: [{ name: "Dual-Cartridge Mixing Nozzles", qty: 5, price: 2500 }], discount: 0, total: 12500 },
    { id: 1040, date: "07 Jun 2026", client: "Dr. Fatima Khan", items: [{ name: "Silicone Molding Impression Kit", qty: 1, price: 8200 }], discount: 5, total: 7790 },
  ];

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
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-brand-primaryDark hover:text-white transition-all duration-200"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Module</span>
            </Link>

            <Link
              href="/invoices"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold bg-brand-primary text-white shadow-md shadow-brand-primary/25 transition-all duration-200"
            >
              <FileText size={18} />
              <span>Invoices & Reports</span>
            </Link>
          </nav>
        </div>

        {/* WhatsApp connected indicator mock */}
        <div className="border-t border-border pt-4">
          <div className="px-2 py-1">
            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 mb-2 uppercase">
              <span>WhatsApp API Status</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary animate-pulse" />
            </div>
            <div className="text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider inline-block bg-brand-secondary/15 text-brand-secondary">
              CONNECTED
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-gray-500 hover:text-brand-primary transition-colors flex items-center gap-1.5 text-sm font-semibold">
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </Link>
            <button className="px-4 py-2 border border-border bg-white dark:bg-gray-900 rounded-lg text-xs font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer flex items-center gap-1.5">
              <FileSpreadsheet size={14} className="text-brand-secondary" />
              <span>Export CSV Sheets</span>
            </button>
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight text-brand-black dark:text-white">Reports & Invoices</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Verify clinic purchases, outstanding dues, and generate brand customized PDF printable documents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Logs List */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Billing History</h3>
              {invoices.map((inv, idx) => (
                <div
                  key={inv.id}
                  onClick={() => setActiveInvoice(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    activeInvoice === idx
                      ? "border-brand-primary bg-[rgba(30,123,243,0.05)] shadow-sm"
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

            {/* Right Invoice PDF Mockup (#1E7BF3 used for titles and branding elements) */}
            <div className="lg:col-span-8 bg-white dark:bg-gray-950 border-2 border-brand-primary/10 rounded-2xl p-8 shadow-md relative overflow-hidden">
              {/* Branding Stripe */}
              <div className="absolute top-0 inset-x-0 h-2 bg-brand-primary" />

              {/* Invoice Header */}
              <div className="flex justify-between items-start pb-6 border-b border-border">
                <div>
                  {/* Azure Blue branding color used for main invoice titles */}
                  <h2 className="text-2xl font-black tracking-tight" style={{ color: "#1E7BF3" }}>
                    FAROOQUE DENTAL SUPPLY
                  </h2>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Official Invoice & Receipt</p>
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
      </main>
    </div>
  );
}
