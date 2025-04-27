
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostalCodeInput from './PostalCodeInput';
import SectionTitle from './SectionTitle';
import { Vote, Users } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock party data
const parties = [
  {
    id: 'liberal',
    name: 'Liberal Party',
    color: '#D71920',
    logo: '🍁',
  },
  {
    id: 'conservative',
    name: 'Conservative Party',
    color: '#1A4782',
    logo: '🟦',
  },
  {
    id: 'ndp',
    name: 'New Democratic Party',
    color: '#F37021',
    logo: '🟧',
  },
  {
    id: 'green',
    name: 'Green Party',
    color: '#3D9B35',
    logo: '🟩',
  },
  {
    id: 'bloc',
    name: 'Bloc Québécois',
    color: '#0088CE',
    logo: '⚜️',
  }
];

// Mock candidates data
const candidatesData = [
  { id: 1, name: 'Sarah Johnson', party: 'liberal', image: 'https://source.unsplash.com/random/100x100/?woman' },
  { id: 2, name: 'Michael Chen', party: 'conservative', image: 'https://source.unsplash.com/random/100x100/?man' },
  { id: 3, name: 'Aisha Patel', party: 'ndp', image: 'https://source.unsplash.com/random/100x100/?woman' },
  { id: 4, name: 'Robert Taylor', party: 'green', image: 'https://source.unsplash.com/random/100x100/?man' },
  { id: 5, name: 'Marc Dubois', party: 'bloc', image: 'https://source.unsplash.com/random/100x100/?man' },
];

// Mock issues data
const issues = [
  {
    id: 'immigration',
    name: 'Immigration',
    description: 'Policies about how Canada welcomes newcomers, criteria for residency, etc.',
    positions: {
      liberal: {
        title: 'Increase Immigration',
        points: [
          'Increase immigration targets by 2025',
          'Accelerate family reunification',
          'Create more pathways to permanent residency',
        ]
      },
      conservative: {
        title: 'Managed Immigration',
        points: [
          'Focus on economic immigrants',
          'Strengthen border security',
          'Improve credential recognition',
        ]
      },
      ndp: {
        title: 'Fair Immigration',
        points: [
          'End temporary foreign worker exploitation',
          'Speed up family reunification',
          'Increase refugee acceptance',
        ]
      },
      green: {
        title: 'Sustainable Immigration',
        points: [
          'Eliminate the Temporary Foreign Worker Program',
          'Increase immigration to rural areas',
          'Support climate refugees',
        ]
      },
      bloc: {
        title: 'Quebec-focused',
        points: [
          'Give Quebec more control over immigration',
          'Protect French language requirements',
          'Focus on integration of newcomers',
        ]
      }
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Policies related to the healthcare system, including funding, access, and coverage.',
    positions: {
      liberal: {
        title: 'Universal Pharmacare',
        points: [
          'Implement national pharmacare program',
          'Increase health transfers to provinces',
          'Improve access to mental health services',
        ]
      },
      conservative: {
        title: 'Provincial Autonomy',
        points: [
          'Increase health funding to provinces with no conditions',
          'Support private options alongside public system',
          'Focus on wait time reduction',
        ]
      },
      ndp: {
        title: 'Expanded Public Care',
        points: [
          'Universal pharmacare and dental care',
          'End for-profit long-term care',
          'Increase federal health transfers',
        ]
      },
      green: {
        title: 'Preventative Focus',
        points: [
          'Include dental and pharmacare in public system',
          'Focus on preventative care',
          'Address social determinants of health',
        ]
      },
      bloc: {
        title: 'Quebec Control',
        points: [
          'Increased health transfers with no conditions',
          'Full Quebec control over healthcare decisions',
          'Support for Quebec healthcare sovereignty',
        ]
      }
    }
  },
  {
    id: 'housing',
    name: 'Housing',
    description: 'Policies addressing housing affordability, availability, and homelessness.',
    positions: {
      liberal: {
        title: 'Housing Strategy',
        points: [
          'Build 100,000 affordable homes',
          'First-time home buyer incentives',
          'Invest in rental construction',
        ]
      },
      conservative: {
        title: 'Market Solutions',
        points: [
          'Remove barriers to housing construction',
          'Encourage foreign investment in rental housing',
          'Review mortgage stress test',
        ]
      },
      ndp: {
        title: 'Affordable Focus',
        points: [
          'Build 500,000 affordable units',
          '30-year mortgages for first-time buyers',
          'Tax on foreign speculation',
        ]
      },
      green: {
        title: 'Sustainable Housing',
        points: [
          'Declare housing affordability a national emergency',
          'Invest in co-op and non-profit housing',
          'Implement a guaranteed livable income',
        ]
      },
      bloc: {
        title: 'Quebec Authority',
        points: [
          'Housing programs managed by Quebec',
          'Transfer federal housing funds to Quebec',
          'Support Quebec's housing initiatives',
        ]
      }
    }
  },
];

export default function PartyComparisonTool() {
  const [riding, setRiding] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState('immigration');
  
  const handlePostalCodeSubmit = (postalCode: string) => {
    // In a real app, this would call an API to get the riding
    setRiding('Toronto Centre');
  };
  
  const currentIssue = issues.find(issue => issue.id === selectedIssue);
  
  return (
    <div className="space-y-6">
      <SectionTitle 
        title="Compare Parties & Candidates" 
        subtitle="Enter your postal code to find your riding and see who's running"
        icon={<Vote className="h-5 w-5 text-maple" />}
      />
      
      {!riding ? (
        <Card>
          <CardContent className="pt-6">
            <PostalCodeInput onSubmit={handlePostalCodeSubmit} />
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Your riding:</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-navy">Toronto Centre</span>
                <button 
                  onClick={() => setRiding(null)}
                  className="text-sm text-maple underline"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-maple" />
              <h3 className="text-xl font-semibold">Candidates in your riding</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {candidatesData.map((candidate) => {
                const party = parties.find(p => p.id === candidate.party);
                
                return (
                  <Card key={candidate.id} className="overflow-hidden">
                    <div 
                      className="h-1.5" 
                      style={{ backgroundColor: party?.color || '#ccc' }}
                    />
                    <CardContent className="pt-4 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={candidate.image} 
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{candidate.name}</div>
                          <div className="text-sm text-neutral-600">{party?.name}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Vote className="h-5 w-5 text-maple" />
              <h3 className="text-xl font-semibold">Compare party positions</h3>
            </div>
            
            <Card>
              <CardContent className="p-4 md:p-6">
                <Tabs defaultValue={selectedIssue} onValueChange={setSelectedIssue}>
                  <div className="mb-6">
                    <TabsList className="w-full overflow-x-auto grid md:grid-cols-3 grid-flow-col auto-cols-auto">
                      {issues.map((issue) => (
                        <TabsTrigger 
                          key={issue.id} 
                          value={issue.id}
                          className="w-full min-w-[120px]"
                        >
                          {issue.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  
                  {currentIssue && (
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between">
                        <h4 className="text-lg font-semibold">{currentIssue.name}</h4>
                        <p className="text-sm text-neutral-600 hidden sm:block">{currentIssue.description}</p>
                      </div>
                      <p className="text-sm text-neutral-600 sm:hidden">{currentIssue.description}</p>
                      
                      <ScrollArea className="w-full" orientation="horizontal">
                        <div className="flex space-x-4 pb-4 pr-4 min-w-full">
                          {parties.map((party) => {
                            const position = currentIssue.positions[party.id as keyof typeof currentIssue.positions];
                            
                            return (
                              <div 
                                key={party.id} 
                                className="min-w-[260px] max-w-[300px] flex-1"
                              >
                                <div
                                  className="rounded-t-md px-3 py-2 text-white font-medium flex items-center gap-2"
                                  style={{ backgroundColor: party.color }}
                                >
                                  <span>{party.logo}</span>
                                  <span>{party.name}</span>
                                </div>
                                <div className="border border-t-0 rounded-b-md p-4">
                                  <h5 className="font-semibold mb-2">{position.title}</h5>
                                  <ul className="space-y-2">
                                    {position.points.map((point, idx) => (
                                      <li key={idx} className="flex gap-2">
                                        <span>•</span>
                                        <span>{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </ScrollArea>
                    </div>
                  )}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
