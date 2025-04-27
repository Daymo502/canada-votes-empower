
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Calendar, ChevronRight, Flag, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Learn() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6 pb-20">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Learn About Canadian Democracy
          </h1>
          <p className="text-neutral-700 mb-6">
            Build your knowledge with these educational modules
          </p>
          
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-maple/5 to-maple/10 border-maple/20">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-maple/20 text-maple-dark hover:bg-maple/30">Coming Soon</Badge>
                  <span className="text-sm text-maple-dark">May 2025</span>
                </div>
                <CardTitle className="text-xl mt-2">Learning Modules</CardTitle>
                <CardDescription>
                  Interactive lessons about Canadian politics and voting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    We're building comprehensive learning modules to help you understand the Canadian political system, 
                    the different levels of government, and how elections work.
                  </p>
                  <p>
                    Our modules will include:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-maple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Flag className="h-3.5 w-3.5 text-maple" />
                      </div>
                      <span>Introduction to Canadian Democracy</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-maple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-3.5 w-3.5 text-maple" />
                      </div>
                      <span>Understanding Political Parties</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-maple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-3.5 w-3.5 text-maple" />
                      </div>
                      <span>The Electoral Process</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-maple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Book className="h-3.5 w-3.5 text-maple" />
                      </div>
                      <span>Key Political Issues in Canada</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span>Development progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </CardFooter>
            </Card>
            
            <SectionTitle 
              title="Available Resources" 
              subtitle="While we develop our full modules, explore these resources"
              icon={<Book className="h-5 w-5 text-maple" />}
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://source.unsplash.com/random/800x500/?voting" 
                    alt="How to Vote Guide" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>How to Vote Guide</CardTitle>
                  <CardDescription>
                    A step-by-step walkthrough of the voting process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700">
                    Learn what to expect on election day, including what ID to bring,
                    how to mark your ballot correctly, and where to find your polling station.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="p-0 h-auto text-maple hover:text-maple-dark hover:bg-transparent">
                    <a href="/vote" className="flex items-center gap-1 font-medium">
                      View Guide
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://source.unsplash.com/random/800x500/?parliament" 
                    alt="Party Comparison Tool" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Party Comparison Tool</CardTitle>
                  <CardDescription>
                    Compare where parties stand on key issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700">
                    Find your electoral district and see the candidates running in your area.
                    Compare party positions on issues like healthcare, immigration, and more.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="p-0 h-auto text-maple hover:text-maple-dark hover:bg-transparent">
                    <a href="/vote" className="flex items-center gap-1 font-medium">
                      Compare Parties
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <Card className="bg-navy text-white">
              <CardHeader>
                <CardTitle>Join our Mailing List</CardTitle>
                <CardDescription className="text-white/80">
                  Get notified when our learning modules are available
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We'll send you updates about new features, upcoming elections, and voting information.
                </p>
                <Button className="bg-white text-navy hover:bg-white/90">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
}
