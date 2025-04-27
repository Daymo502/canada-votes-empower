
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  icon, 
  className 
}: SectionTitleProps) {
  return (
    <div className={cn("mb-6", className)}>
      <div className="flex items-center gap-3 mb-1">
        {icon && (
          <div className="flex-shrink-0 w-8 h-8 bg-maple/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold text-navy">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-neutral-600 mt-1">{subtitle}</p>
      )}
    </div>
  );
}
