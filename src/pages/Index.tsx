
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import { Book, Calendar, Check, HelpCircle, Vote } from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6 pb-20">
        <section className="py-8 md:py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Empower Your Vote
            </h1>
            <p className="text-xl text-neutral-700">
              Helping newcomers navigate Canadian politics and vote with confidence
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden mb-12">
            <img
              src="https://source.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Diverse citizens engaging with Canadian democracy"
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent flex items-center">
              <div className="p-6 md:p-10 max-w-2xl">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  Your voice matters in Canadian democracy
                </h2>
                <p className="text-white/90 mb-6 max-w-md">
                  Learn about the political system, compare party platforms, and get step-by-step guidance on how to vote.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-maple hover:bg-maple-dark">
                    <a href="/vote">How to Vote</a>
                  </Button>
                  <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/40 hover:bg-white/20">
                    <a href="/learn">Start Learning</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <SectionTitle 
            title="Ready to participate in democracy?" 
            subtitle="Explore these key resources to help you vote with confidence"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              title="Compare Parties"
              description="Learn where each party stands on the issues that matter to you. Compare platforms side by side."
              icon={<Vote className="h-5 w-5 text-maple" />}
              link="/vote"
              action="Compare Now"
              image="https://source.unsplash.com/random/800x500/?parliament"
            />
            <FeatureCard
              title="Step-by-Step Guide"
              description="Not sure what to expect on election day? Our guide walks you through the entire voting process."
              icon={<Check className="h-5 w-5 text-maple" />}
              link="/vote"
              action="View Guide"
              image="https://source.unsplash.com/random/800x500/?voting"
            />
            <FeatureCard
              title="Resources & FAQ"
              description="Find answers to common questions about voting, eligibility, and the Canadian political system."
              icon={<HelpCircle className="h-5 w-5 text-maple" />}
              link="/resources"
              action="Explore Resources"
              image="https://source.unsplash.com/random/800x500/?question"
            />
          </div>
          
          <div className="bg-neutral-50 rounded-xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-maple/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 text-maple" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy">Upcoming Election</h2>
                <p className="text-neutral-700">
                  The next federal election is scheduled for October 20, 2025
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-md border border-neutral-200">
                <div className="text-sm text-neutral-600 mb-1">Days until election</div>
                <div className="text-3xl font-bold text-navy">176</div>
              </div>
              <div className="bg-white p-4 rounded-md border border-neutral-200">
                <div className="text-sm text-neutral-600 mb-1">Advanced polling</div>
                <div className="text-xl font-medium text-navy">Oct 10-13, 2025</div>
              </div>
              <div className="bg-white p-4 rounded-md border border-neutral-200">
                <div className="text-sm text-neutral-600 mb-1">Registration deadline</div>
                <div className="text-xl font-medium text-navy">Oct 15, 2025</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-navy to-navy-dark text-white p-6 md:p-8 mb-12">
            <SectionTitle 
              title="Stories from First-Time Voters" 
              subtitle="Hear from others who have participated in their first Canadian election"
              className="text-white mb-8"
            />
            
            <Testimonials />
          </div>
          
          <div className="bg-neutral-50 rounded-xl p-6 md:p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-maple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="h-8 w-8 text-maple" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Check out our resources section for frequently asked questions, myth busters, 
                and more information about Canadian democracy.
              </p>
              <Button asChild className="bg-maple hover:bg-maple-dark">
                <a href="/resources">Explore Resources</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Navigation />
    </div>
  );
}
