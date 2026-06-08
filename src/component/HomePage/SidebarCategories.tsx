import { Menu } from 'lucide-react';
import React, { useState } from 'react'

export default function SidebarCategories() {
    const categories = [
        "Orthodontics",
        "Equipments",
        "Disposables",
        "Oral-Surgery",
        "Periodontics",
        "Prostodontics",
        "Restorative",
        "Endodontics",
        "Others"
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <div className="lg:col-span-3 col-span-12 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex gap-2 items-center mb-4 text-brand-primary">
                <Menu size={18} />
                <h2 className="font-semibold text-sm tracking-wider uppercase">Browse Categories</h2>
            </div>
            <ul className="space-y-1">
                {categories.map((cat, i) => (
                    <li
                        key={cat}
                        onClick={() => setActiveIndex(i)}
                        className={`text-sm font-medium px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
                            activeIndex === i 
                                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20" 
                                : "text-gray-700 hover:bg-brand-primaryDark hover:text-white"
                        }`}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    )
}
