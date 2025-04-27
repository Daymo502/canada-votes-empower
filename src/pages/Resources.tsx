
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MythFactQuiz from "@/components/MythFactQuiz";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ExternalLink, Globe, HelpCircle, Info } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-6 pb-20">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Resources
          </h1>
          <p className="text-neutral-700 mb-6">
            Find answers to common questions, test your knowledge, and explore more about Canadian democracy
          </p>
          
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="myths">Myth vs. Fact</TabsTrigger>
              <TabsTrigger value="links">Helpful Links</TabsTrigger>
            </TabsList>
            
            <TabsContent value="faq">
              <div className="space-y-8">
                <SectionTitle 
                  title="Frequently Asked Questions" 
                  icon={<HelpCircle className="h-5 w-5 text-maple" />}
                />
                
                <Card>
                  <CardHeader className="pb-1">
                    <CardTitle>About Voting</CardTitle>
                    <CardDescription>Common questions about the voting process</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Who is eligible to vote in Canada?</AccordionTrigger>
                        <AccordionContent>
                          To be eligible to vote in a federal election in Canada, you must:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Be a Canadian citizen</li>
                            <li>Be at least 18 years old on election day</li>
                            <li>Prove your identity and address</li>
                          </ul>
                          Note that permanent residents cannot vote in federal elections.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What ID do I need to bring to vote?</AccordionTrigger>
                        <AccordionContent>
                          You have three options to prove your identity and address:
                          <ol className="list-decimal pl-6 mt-2 space-y-2">
                            <li>Show one piece of government-issued ID with your photo, name, and address (like a driver's license).</li>
                            <li>Show two pieces of ID - both must have your name, and at least one must have your address (such as a bank statement and health card).</li>
                            <li>If you don't have ID, you can still vote if you declare your identity and address in writing and have someone who knows you vouch for you.</li>
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>What if I can't vote on election day?</AccordionTrigger>
                        <AccordionContent>
                          You have several options if you can't vote on election day:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Vote at advance polls, usually held the 10th, 9th, 8th and 7th days before election day.</li>
                            <li>Vote by mail (you must apply before a deadline).</li>
                            <li>Vote at any Elections Canada office before the deadline (usually 6 days before election day).</li>
                          </ul>
                          Visit the Elections Canada website for specific dates and deadlines.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>What accessibility services are available at polling stations?</AccordionTrigger>
                        <AccordionContent>
                          Elections Canada provides several accessibility services:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Braille lists of candidates and braille ballot templates</li>
                            <li>Magnifiers and large-print lists of candidates</li>
                            <li>Assistance marking your ballot (you can bring someone or ask an election worker)</li>
                            <li>Language assistance through interpretation services</li>
                            <li>Most polling stations are wheelchair accessible</li>
                          </ul>
                          If you have specific needs, you can contact Elections Canada in advance.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-1">
                    <CardTitle>About Canadian Politics</CardTitle>
                    <CardDescription>Understanding the Canadian political system</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How does the Canadian electoral system work?</AccordionTrigger>
                        <AccordionContent>
                          Canada uses a "first-past-the-post" system where:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>The country is divided into 338 electoral districts (ridings)</li>
                            <li>Voters in each riding elect one Member of Parliament (MP)</li>
                            <li>The candidate who gets the most votes in a riding wins (they don't need a majority)</li>
                            <li>The party that wins the most seats usually forms the government</li>
                            <li>The leader of this party becomes the Prime Minister</li>
                          </ul>
                          If no party wins a majority of seats (170 or more), a minority government is formed, which typically requires support from other parties to pass legislation.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What are the major political parties in Canada?</AccordionTrigger>
                        <AccordionContent>
                          The major political parties in Canada are:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><span className="font-medium">Liberal Party of Canada</span> - Generally center to center-left on the political spectrum</li>
                            <li><span className="font-medium">Conservative Party of Canada</span> - Center-right party</li>
                            <li><span className="font-medium">New Democratic Party (NDP)</span> - Left-leaning progressive party</li>
                            <li><span className="font-medium">Bloc Québécois</span> - Quebec nationalist party that runs candidates only in Quebec</li>
                            <li><span className="font-medium">Green Party of Canada</span> - Focused on environmental issues and social justice</li>
                          </ul>
                          There may also be other smaller parties and independent candidates running in your riding.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>What's the difference between federal, provincial and municipal politics?</AccordionTrigger>
                        <AccordionContent>
                          Canada has three levels of government, each with different responsibilities:
                          <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><span className="font-medium">Federal government</span>: Handles national matters like immigration, defense, foreign policy, criminal law, citizenship, and major taxation.</li>
                            <li><span className="font-medium">Provincial/Territorial governments</span>: Responsible for healthcare, education, transportation, and natural resources within their borders.</li>
                            <li><span className="font-medium">Municipal governments</span>: Manage local services like public transit, parks, libraries, water systems, and waste collection.</li>
                          </ul>
                          Each level has separate elections and elected officials. This app focuses on federal elections, but provincial and municipal elections are also important for different aspects of daily life.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-1">
                    <CardTitle>For Newcomers</CardTitle>
                    <CardDescription>Information specific to new Canadians</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Can permanent residents vote in Canadian elections?</AccordionTrigger>
                        <AccordionContent>
                          No, only Canadian citizens can vote in federal elections. Permanent residents must become citizens before they can vote federally.
                          
                          <p className="mt-2">
                            If you're a permanent resident interested in voting, you'll need to apply for Canadian citizenship once you meet the eligibility requirements (typically after living in Canada for 3 out of 5 years).
                          </p>
                          
                          <p className="mt-2">
                            However, some municipalities do allow permanent residents to vote in local elections. Check with your local government for rules on municipal voting.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Do I need to speak English or French to vote?</AccordionTrigger>
                        <AccordionContent>
                          No, you do not need to be fluent in English or French to vote. Elections Canada provides:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Information in multiple languages on their website</li>
                            <li>The option to bring someone to help translate (friend, family member, interpreter)</li>
                            <li>Multilingual staff at many polling stations</li>
                            <li>You can also call Elections Canada to request information in other languages</li>
                          </ul>
                          Your right to vote is protected regardless of your language abilities.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Will voting affect my immigration status?</AccordionTrigger>
                        <AccordionContent>
                          If you are a Canadian citizen, voting will not affect your immigration status in any way. Voting is a right and responsibility of citizenship.
                          
                          <p className="mt-2">
                            If you are not a Canadian citizen (e.g., a permanent resident or visa holder), you are not legally eligible to vote in federal elections, and attempting to do so could potentially impact your immigration status or citizenship application.
                          </p>
                          
                          <p className="mt-2 font-medium">
                            Remember: Only vote if you are a Canadian citizen.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="myths">
              <MythFactQuiz />
            </TabsContent>
            
            <TabsContent value="links">
              <div className="space-y-8">
                <SectionTitle 
                  title="Helpful Resources" 
                  subtitle="Official sources for information about voting and Canadian politics"
                  icon={<Globe className="h-5 w-5 text-maple" />}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5 text-maple" />
                        <span>Official Government Resources</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <a 
                        href="https://www.elections.ca" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-md border p-4 hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">Elections Canada</div>
                          <div className="text-sm text-neutral-600">Official election information and voter registration</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-neutral-500" />
                      </a>
                      
                      <a 
                        href="https://www.canada.ca/en/services/immigration-citizenship.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-md border p-4 hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">Immigration and Citizenship</div>
                          <div className="text-sm text-neutral-600">Information about becoming a Canadian citizen</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-neutral-500" />
                      </a>
                      
                      <a 
                        href="https://www.ourcommons.ca" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-md border p-4 hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">House of Commons</div>
                          <div className="text-sm text-neutral-600">Learn about Canada's parliament and representatives</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-neutral-500" />
                      </a>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Book className="h-5 w-5 text-maple" />
                        <span>Educational Resources</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <a 
                        href="https://www.civix.ca" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-md border p-4 hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">CIVIX</div>
                          <div className="text-sm text-neutral-600">Non-partisan civic education programs</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-neutral-500" />
                      </a>
                      
                      <a 
                        href="https://www.icc-icc.ca" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-md border p-4 hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">Institute for Canadian Citizenship</div>
                          <div className="text-sm text-neutral-600">Resources for new citizens</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-neutral-500" />
                      </a>
                      
                      <a 
                        href="https://electionsanddemocracy.ca" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-md border p-4 hover:bg-neutral-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">Elections and Democracy</div>
                          <div className="text-sm text-neutral-600">Educational resources about electoral systems</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-neutral-500" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>About This Platform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        This platform is designed to help newcomers to Canada understand the Canadian political system and participate in elections with confidence.
                      </p>
                      
                      <p>
                        We strive to provide non-partisan, factual information from reliable sources such as Elections Canada and other official government resources.
                      </p>
                      
                      <div className="bg-maple/5 border border-maple/10 rounded-md p-4 mt-6">
                        <h3 className="font-medium text-navy mb-2">Our Commitment to Neutrality</h3>
                        <p className="text-sm">
                          This platform does not endorse any political party or candidate. Our goal is to provide factual, unbiased information to help newcomers make their own informed decisions about voting and participation in Canadian democracy.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
}
