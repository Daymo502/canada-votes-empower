
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import PartyComparisonTool from "@/components/PartyComparisonTool";
import VotingGuide from "@/components/VotingGuide";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Vote() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6 pb-20">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Voting in Canada
          </h1>
          <p className="text-neutral-700 mb-6">
            Learn how to vote and compare political parties to make an informed decision
          </p>
          
          <Tabs defaultValue="guide" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger value="guide">How to Vote</TabsTrigger>
              <TabsTrigger value="compare">Compare Parties</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guide">
              <VotingGuide />
            </TabsContent>
            
            <TabsContent value="compare">
              <PartyComparisonTool />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
}
