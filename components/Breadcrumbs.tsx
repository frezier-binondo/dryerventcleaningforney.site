import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
          <li>
            <Link href="/" className="hover:text-sky-600 flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <li>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                </li>
                <li>
                  {isLast || !item.href ? (
                    <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-md block">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-sky-600 transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
