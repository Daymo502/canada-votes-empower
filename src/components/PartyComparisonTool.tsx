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
  { id: 1, name: 'Sarah Johnson', party: 'liberal', image: '/placeholder.svg' },
  { id: 2, name: 'Michael Chen', party: 'conservative', image: '/placeholder.svg' },
  { id: 3, name: 'Aisha Patel', party: 'ndp', image: '/placeholder.svg' },
  { id: 4, name: 'Robert Taylor', party: 'green', image: '/placeholder.svg' },
  { id: 5, name: 'Marc Dubois', party: 'bloc', image: '/placeholder.svg' },
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
    description: 'Policies related to the public healthcare system, access to services, etc.',
    positions: {
      liberal: {
        title: 'Invest in Healthcare',
        points: [
          'Increase funding for mental health',
          'Improve access to family doctors',
          'National pharmacare program',
        ]
      },
      conservative: {
        title: 'Efficient Healthcare',
        points: [
          'Reduce wait times',
          'Increase healthcare funding to provinces',
          'Invest in home care',
        ]
      },
      ndp: {
        title: 'Expand Public Care',
        points: [
          'Universal dental care',
          'National pharmacare program',
          'End for-profit long-term care',
        ]
      },
      green: {
        title: 'Preventative Care',
        points: [
          'Fund community health centers',
          'Promote healthy lifestyles',
          'Address social determinants of health',
        ]
      },
      bloc: {
        title: 'Quebec Autonomy',
        points: [
          'More healthcare funding for Quebec',
          'Respect Quebec\'s healthcare model',
          'No federal interference',
        ]
      }
    }
  },
  {
    id: 'environment',
    name: 'Environment',
    description: 'Policies on climate change, conservation, and natural resources.',
    positions: {
      liberal: {
        title: 'Climate Action',
        points: [
          'Carbon tax',
          'Invest in green technology',
          'Protect 25% of land and oceans',
        ]
      },
      conservative: {
        title: 'Green Technology',
        points: [
          'Invest in carbon capture',
          'Support natural gas as transition fuel',
          'Oppose carbon tax',
        ]
      },
      ndp: {
        title: 'Green New Deal',
        points: [
          'End fossil fuel subsidies',
          'Invest in renewable energy',
          'Create green jobs',
        ]
      },
      green: {
        title: 'Climate Emergency',
        points: [
          'End all fossil fuel projects',
          '100% renewable energy by 2030',
          'Implement a carbon fee and dividend',
        ]
      },
      bloc: {
        title: 'Quebec Priorities',
        points: [
          'Focus on Quebec\'s green economy',
          'Support hydroelectric projects',
          'Protect St. Lawrence River',
        ]
      }
    }
  },
  {
    id: 'economy',
    name: 'Economy',
    description: 'Policies related to jobs, taxes, trade, and economic growth.',
    positions: {
      liberal: {
        title: 'Middle Class',
        points: [
          'Tax cuts for middle class',
          'Invest in skills training',
          'Support small businesses',
        ]
      },
      conservative: {
        title: 'Lower Taxes',
        points: [
          'Cut income taxes',
          'Reduce regulations',
          'Balance the budget',
        ]
      },
      ndp: {
        title: 'Fair Taxes',
        points: [
          'Tax the wealthy',
          'Raise corporate tax rates',
          'Invest in social programs',
        ]
      },
      green: {
        title: 'Sustainable Economy',
        points: [
          'Green jobs transition',
          'Support local businesses',
          'Basic income guarantee',
        ]
      },
      bloc: {
        title: 'Quebec Interests',
        points: [
          'Protect Quebec industries',
          'Support local agriculture',
          'Promote Quebec tourism',
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
          'Support Quebec\'s housing initiatives',
        ]
      }
    }
  },
];

export default function PartyComparisonTool() {
  const [postalCode, setPostalCode] = useState('');
  const [candidates, setCandidates] = useState(candidatesData);
  
  const handleSubmit = (code: string) => {
    setPostalCode(code);
    // In a real app, you'd fetch candidates based on postal code
    // setCandidates(fetchCandidates(code));
  };
  
  return (
    <div className="space-y-8">
      <SectionTitle 
        title="Compare Parties" 
        subtitle="Learn where each party stands on the issues that matter to you"
        icon={<Vote className="h-5 w-5 text-maple" />}
      />
      
      <Card>
        <CardContent className="py-6">
          <PostalCodeInput onSubmit={handleSubmit} />
        </CardContent>
      </Card>
      
      {candidates.length > 0 && (
        <Card>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={candidate.image} 
                      alt={candidate.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <div className="font-medium">{candidate.name}</div>
                    <div className="text-sm text-neutral-600">
                      {parties.find(p => p.id === candidate.party)?.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardContent>
          <Tabs defaultValue="immigration" className="w-full">
            <TabsList className="w-full flex justify-between">
              {issues.map((issue) => (
                <TabsTrigger key={issue.id} value={issue.id} className="w-full">
                  {issue.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {issues.map((issue) => (
              <TabsContent key={issue.id} value={issue.id} className="mt-6">
                <div className="text-lg font-bold text-navy mb-3">{issue.name}</div>
                <p className="text-neutral-700 mb-4">{issue.description}</p>
                
                <ScrollArea className="w-full rounded-md border">
                  <div className="flex">
                    {parties.map((party) => (
                      <div 
                        key={party.id} 
                        className="w-64 p-4 border-r last:border-r-0"
                        style={{borderColor: '#E4E4E7'}}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span style={{color: party.color}}>{party.logo}</span>
                          <div className="font-medium">{party.name}</div>
                        </div>
                        
                        {issues.find(i => i.id === issue.id)?.positions[party.id] && (
                          <div className="space-y-2">
                            <div className="font-medium">
                              {issues.find(i => i.id === issue.id)?.positions[party.id].title}
                            </div>
                            <ul className="list-disc pl-5 text-sm text-neutral-700">
                              {issues.find(i => i.id === issue.id)?.positions[party.id].points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
