
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
    <nav className="border-b">
      <div className="container flex h-16 items-center space-x-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                isActive 
                  ? "text-maple bg-maple/5" 
                  : "text-neutral-600 hover:text-navy hover:bg-neutral-50"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
