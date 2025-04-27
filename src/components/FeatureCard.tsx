
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  action?: string;
  link: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  image,
  action = "Learn More",
  link,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      {image && (
        <div className="aspect-[3/2] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className={cn("pb-3", image ? "" : "pt-6")}>
        <div className="flex items-start gap-3">
          {icon && (
            <div className="flex-shrink-0 w-8 h-8 bg-maple/10 rounded-full flex items-center justify-center mt-0.5">
              {icon}
            </div>
          )}
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-neutral-700 mb-4">
          {description}
        </CardDescription>
        <Button asChild variant="ghost" className="p-0 h-auto text-maple hover:text-maple-dark hover:bg-transparent">
          <a href={link} className="flex items-center gap-1 font-medium">
            {action}
            <ChevronRight className="h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
