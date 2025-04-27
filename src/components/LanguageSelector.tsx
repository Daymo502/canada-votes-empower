
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'tl', name: 'Tagalog' },
  { code: 'ar', name: 'العربية' },
  { code: 'es', name: 'Español' },
  { code: 'ur', name: 'اردو' },
];

export default function LanguageSelector({ className }: { className?: string }) {
  const [language, setLanguage] = useState('en');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={cn("flex items-center gap-2", className)}
        >
          {languages.find(lang => lang.code === language)?.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem 
              key={lang.code} 
              value={lang.code}
              className="flex items-center justify-between"
            >
              {lang.name}
              {language === lang.code && <Check className="h-4 w-4 text-maple" />}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
