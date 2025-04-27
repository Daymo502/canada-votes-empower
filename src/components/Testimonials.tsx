
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "I was nervous about my first time voting in Canada. This platform helped me understand the process step by step, and I felt so proud when I cast my ballot!",
    name: "Maria Rodriguez",
    origin: "Mexico",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    quote: "The comparison tool made it easy to understand where each party stands on issues that matter to me. I felt informed and confident about my choice.",
    name: "Wei Chen",
    origin: "China",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    quote: "As a new citizen, I wasn't sure if my English was good enough to vote. I'm glad I learned that language is not a barrier in Canadian democracy.",
    name: "Abdul Rahman",
    origin: "Syria",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    quote: "The step-by-step guide answered all my questions. I knew exactly what to do on election day and felt very welcome at my polling station.",
    name: "Priya Patel",
    origin: "India",
    image: "/placeholder.svg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-16 h-16 text-maple/10">
        <Quote size={64} />
      </div>
      
      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="flex-shrink-0 w-full border-0 shadow-none"
            >
              <CardContent className="pt-6 px-0">
                <blockquote className="text-xl font-medium mb-6 relative">
                  {testimonial.quote}
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">
                      Originally from {testimonial.origin}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-1">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={cn(
                  "w-2 h-2 rounded-full",
                  idx === activeIndex ? "bg-maple" : "bg-neutral-300"
                )}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
