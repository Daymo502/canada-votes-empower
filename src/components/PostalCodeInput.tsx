
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function PostalCodeInput({ onSubmit }: { onSubmit: (postalCode: string) => void }) {
  const [postalCode, setPostalCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const formattedCode = postalCode.trim().toUpperCase().replace(/\s+/g, '');
    
    if (!formattedCode || formattedCode.length !== 6) {
      toast.error('Please enter a valid 6-character postal code');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit(formattedCode);
      setLoading(false);
    }, 800);
  };

  const handleAutoDetect = () => {
    setLoading(true);
    
    // Simulate geolocation
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          setPostalCode('M5V2H1');
          resolve('M5V2H1');
        }, 1500);
      }),
      {
        loading: 'Detecting your location...',
        success: 'Location detected',
        error: 'Could not detect location',
      }
    );
    
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            placeholder="Enter postal code (e.g. A1B 2C3)"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="h-12"
            maxLength={7}
          />
        </div>
        <Button 
          type="submit" 
          className="bg-maple hover:bg-maple-dark text-white h-12"
          disabled={loading}
        >
          Find my riding
        </Button>
      </div>
      
      <Button 
        type="button" 
        variant="outline"
        className="flex items-center gap-2 w-full sm:w-auto"
        onClick={handleAutoDetect}
        disabled={loading}
      >
        <MapPin className="h-4 w-4" />
        Auto-detect my location
      </Button>
    </form>
  );
}
