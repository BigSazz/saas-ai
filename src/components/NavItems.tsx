'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-4">
            {navItems.map((nav, idx) => {
                const { label, href } = nav;
                const isActive = pathname === href;
                return (
                    <Link
                        href={href}
                        key={idx}
                        className={cn(isActive && 'text-primary font-semibold dark:text-[#fe5933]')}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavItems;
