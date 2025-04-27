
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Book, Vote, HelpCircle } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/learn', label: 'Learn', icon: Book },
  { path: '/vote', label: 'Vote', icon: Vote },
  { path: '/resources', label: 'Resources', icon: HelpCircle },
];

export default function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t md:border-t-0">
      <div className="container flex justify-between items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-1 flex-col items-center justify-center h-full transition-colors",
                isActive 
                  ? "text-maple" 
                  : "text-neutral-600 hover:text-navy"
              )}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
