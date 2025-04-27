
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import { MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-maple rounded-full flex items-center justify-center">
              <svg viewBox="0 0 48 48" className="w-5 h-5 text-white fill-current">
                <path d="M27.594 8.147c-1.968 5.355-5.85 8.376-8.374 6.118-2.525-2.258-2.065-7.441-.099-12.797 1.967-5.355 5.85-8.375 8.374-6.117 2.525 2.257 2.065 7.441.099 12.796zm11.293 3.95c-4.505-3.413-6.966-7.691-4.506-10.19 2.46-2.5 7.658-1.261 12.163 2.152 4.504 3.413 6.966 7.691 4.506 10.19-2.46 2.5-7.658 1.261-12.163-2.151zm6.976 17.98c-5.511.51-10.396-1.904-10.057-4.826.338-2.923 5.018-5.235 10.528-5.745 5.511-.51 10.395 1.904 10.057 4.826-.339 2.923-5.018 5.235-10.528 5.744zM35.95 45.062c-3.421-4.499-4.649-9.746-1.654-11.728 2.996-1.981 7.992-.311 11.413 4.188 3.421 4.498 4.649 9.746 1.654 11.727-2.995 1.981-7.992.311-11.413-4.188zm-11.665 1.5c3.421-4.498 4.649-9.746 1.654-11.727-2.996-1.981-7.992-.311-11.413 4.188-3.421 4.498-4.649 9.746-1.654 11.727 2.995 1.981 7.992.311 11.413-4.187zm-11.1-15.39c5.511.51 10.396-1.904 10.057-4.826-.338-2.923-5.018-5.235-10.528-5.745C7.204 20.092 2.32 22.505 2.658 25.428c.339 2.923 5.018 5.235 10.528 5.744zm-6.976-13.98c4.504-3.412 6.966-7.69 4.506-10.19-2.46-2.5-7.658-1.26-12.163 2.153-4.504 3.413-6.966 7.691-4.506 10.19 2.46 2.499 7.658 1.26 12.163-2.152z"/>
              </svg>
            </div>
            <span className="font-bold text-navy ml-2">Empower Your Vote</span>
          </Link>
          <div className="hidden md:flex md:items-center">
            <div className="h-4 w-px bg-neutral-300 mx-3"></div>
            <span className="text-sm text-neutral-600">Helping newcomers vote with confidence</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 text-sm text-neutral-600">
            <MapPin className="h-4 w-4 text-maple" />
            <span>Set location</span>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
