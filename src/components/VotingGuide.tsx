
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ChevronRight, Vote, Info } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

// Mock voting steps data
const votingSteps = [
  {
    id: 'eligibility',
    title: 'Check Eligibility and Registration',
    description: 'To vote in a federal election, you must be a Canadian citizen aged 18 or older on election day.',
    details: [
      'Most Canadian citizens are already registered to vote.',
      'You can check online at elections.ca or call 1-800-463-6868.',
      'If you're not registered, you can do so at the polling station on election day.'
    ],
    image: 'https://source.unsplash.com/random/800x600/?passport',
    checklistItem: 'I have confirmed I am eligible to vote.'
  },
  {
    id: 'polling-station',
    title: 'Find Your Polling Station',
    description: 'Before election day, you should receive a voter information card in the mail with your polling location.',
    details: [
      'Your voter information card will be mailed to you about a month before election day.',
      'It contains the address of your assigned polling station and the hours it's open.',
      'If you don't receive a card, you can find your polling station at elections.ca by entering your postal code.'
    ],
    image: 'https://source.unsplash.com/random/800x600/?map',
    checklistItem: 'I know where my polling station is located.'
  },
  {
    id: 'identification',
    title: 'Prepare Identification',
    description: 'You need to prove your identity and address to vote. There are several options available.',
    details: [
      'Option 1: Show one piece of government-issued ID with your photo, name, and address (like a driver's license).',
      'Option 2: Show two pieces of ID where at least one has your address (health card plus a utility bill).',
      'Option 3: If you don't have ID, you can still vote if another voter from your polling station vouches for you.'
    ],
    image: 'https://source.unsplash.com/random/800x600/?id-card',
    checklistItem: 'I have prepared the ID I will bring to vote.'
  },
  {
    id: 'vote-day',
    title: 'Vote on Election Day',
    description: 'Arrive at your polling station during open hours, usually 8:30 AM to 8:30 PM.',
    details: [
      'When you arrive, an election worker will greet you and direct you to the right table.',
      'Present your ID to the election officer, who will check if you're on the voter list.',
      'You'll receive a folded ballot paper with all candidates' names in your riding.'
    ],
    image: 'https://source.unsplash.com/random/800x600/?voting-booth',
    checklistItem: 'I have made a plan for when I will go vote.'
  },
  {
    id: 'mark-ballot',
    title: 'Mark Your Ballot',
    description: 'Go behind the voting screen, mark an X in the circle beside the candidate of your choice.',
    details: [
      'Use the pencil provided to mark an X in ONE circle only.',
      'Fold your ballot to keep your vote private.',
      'If you make a mistake, you can return the ballot and ask for a new one.'
    ],
    image: 'https://source.unsplash.com/random/800x600/?ballot',
    checklistItem: 'I understand how to properly mark my ballot.'
  }
];

// Mock ballot data
const mockCandidates = [
  { id: 1, name: 'Sarah Johnson', party: 'Liberal Party' },
  { id: 2, name: 'Michael Chen', party: 'Conservative Party' },
  { id: 3, name: 'Aisha Patel', party: 'New Democratic Party' },
  { id: 4, name: 'Robert Taylor', party: 'Green Party' },
  { id: 5, name: 'Marc Dubois', party: 'Bloc Québécois' },
];

export default function VotingGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [checklist, setChecklist] = useState<{[key: string]: boolean}>({});
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [ballotSubmitted, setBallotSubmitted] = useState(false);
  const [showBallot, setShowBallot] = useState(false);
  
  const handleChecklistToggle = (stepId: string) => {
    setChecklist(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
    
    if (!checklist[stepId]) {
      toast.success("Item checked off your voting checklist!");
    }
  };
  
  const handleNextStep = () => {
    if (activeStep < votingSteps.length - 1) {
      setActiveStep(activeStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleBallotSubmit = () => {
    if (selectedCandidate === null) {
      toast.error("Please select a candidate before submitting your ballot.");
      return;
    }
    
    setBallotSubmitted(true);
    toast.success("Great job! You've cast your practice ballot successfully.");
  };
  
  const currentStep = votingSteps[activeStep];
  const completedItems = Object.values(checklist).filter(Boolean).length;
  
  return (
    <div className="space-y-8">
      <SectionTitle 
        title="How to Vote – Step by Step" 
        subtitle="A simple guide to help you vote with confidence"
        icon={<Vote className="h-5 w-5 text-maple" />}
      />
      
      <Card className="relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 bg-maple-light overflow-hidden"
        >
          <div 
            className="h-full bg-maple transition-all duration-300"
            style={{ width: `${((activeStep + 1) / votingSteps.length) * 100}%` }}
          ></div>
        </div>
        
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-neutral-600 mb-1">
                Step {activeStep + 1} of {votingSteps.length}
              </div>
              <CardTitle className="text-xl sm:text-2xl">{currentStep.title}</CardTitle>
            </div>
            <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center">
              <span className="text-maple font-bold text-xl">{activeStep + 1}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            {currentStep.image && (
              <div className="aspect-[16/9] overflow-hidden rounded-md">
                <img 
                  src={currentStep.image} 
                  alt={currentStep.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <p className="text-lg">{currentStep.description}</p>
            
            <div className="space-y-3">
              {currentStep.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-maple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maple font-bold text-sm">{idx + 1}</span>
                  </div>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center pt-2">
              <Button
                variant="outline"
                type="button"
                className="flex items-center gap-2 border-maple text-maple"
                onClick={() => handleChecklistToggle(currentStep.id)}
              >
                <div className="w-5 h-5 rounded border border-maple flex items-center justify-center">
                  {checklist[currentStep.id] && (
                    <Check className="h-4 w-4 text-maple" />
                  )}
                </div>
                <span>{currentStep.checklistItem}</span>
              </Button>
            </div>
            
            <div className="flex justify-between pt-4 items-center">
              <Button
                variant="outline"
                onClick={handlePrevStep}
                disabled={activeStep === 0}
              >
                Previous
              </Button>
              
              {activeStep < votingSteps.length - 1 ? (
                <Button
                  onClick={handleNextStep}
                  className="bg-maple hover:bg-maple-dark"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={() => setShowBallot(true)}
                  className="bg-maple hover:bg-maple-dark"
                >
                  Try Practice Ballot
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 bg-maple/10 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-maple" />
            </div>
            Your Voting Checklist
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="text-sm text-neutral-600">
                {completedItems} of {votingSteps.length} items completed
              </div>
              
              <div className="bg-neutral-100 h-2 w-24 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-maple"
                  style={{ width: `${(completedItems / votingSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2 pt-1">
              {votingSteps.map((step, idx) => (
                <div 
                  key={step.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border border-neutral-300 flex items-center justify-center flex-shrink-0">
                      {checklist[step.id] && (
                        <Check className="h-4 w-4 text-maple" />
                      )}
                    </div>
                    <span className={checklist[step.id] ? "text-neutral-600" : ""}>
                      {step.checklistItem}
                    </span>
                  </div>
                  
                  {activeStep !== idx && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveStep(idx)}
                      className="text-maple hover:text-maple-dark hover:bg-maple/5"
                    >
                      View
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {showBallot && !ballotSubmitted && (
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-maple" />
                Practice Ballot
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">
                      This is a practice ballot to help you understand how voting works.
                      It's not real and your choice won't be recorded.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="border-2 border-neutral-300 rounded-md p-4 bg-neutral-50">
              <div className="text-center mb-4 pb-4 border-b border-neutral-300">
                <h3 className="font-bold uppercase">Official Ballot</h3>
                <p className="text-sm text-neutral-600">
                  Mark an X in the circle beside the candidate of your choice
                </p>
              </div>
              
              <div className="space-y-4">
                {mockCandidates.map((candidate) => (
                  <div 
                    key={candidate.id}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setSelectedCandidate(candidate.id)}
                  >
                    <div 
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedCandidate === candidate.id 
                          ? 'border-maple bg-white' 
                          : 'border-neutral-400 bg-white'
                      }`}
                    >
                      {selectedCandidate === candidate.id && (
                        <div className="text-maple font-bold">X</div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{candidate.name}</div>
                      <div className="text-sm text-neutral-600">{candidate.party}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleBallotSubmit}
                  className="bg-maple hover:bg-maple-dark"
                  size="lg"
                >
                  Cast Ballot
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {ballotSubmitted && (
        <Card className="animate-scale-in">
          <CardContent className="pt-6 pb-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-maple/10 flex items-center justify-center">
                <Check className="h-8 w-8 text-maple" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Success!</h3>
              <p className="text-lg max-w-md mx-auto">
                You've successfully completed the practice ballot. 
                In a real election, your vote would now be counted.
              </p>
              <Button
                onClick={() => {
                  setShowBallot(false);
                  setBallotSubmitted(false);
                  setSelectedCandidate(null);
                }}
                className="bg-maple hover:bg-maple-dark mt-4"
              >
                Return to Guide
              </Button>
              
              <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none h-24">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-confetti"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-20px`,
                      width: `${8 + Math.random() * 12}px`,
                      height: `${8 + Math.random() * 12}px`,
                      backgroundColor: i % 3 === 0 ? '#ea384c' : i % 3 === 1 ? '#4A5470' : '#D71920',
                      animationDelay: `${Math.random() * 0.5}s`,
                      animationDuration: `${1 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-maple" />
              <span>Frequently Asked Questions</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I need to speak English or French to vote?</AccordionTrigger>
              <AccordionContent>
                No, you do not need to speak English or French to vote. You can bring someone to help you at the polling station, or ask the election workers for assistance. Elections Canada also provides information in multiple languages.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I bring my children to the polling station?</AccordionTrigger>
              <AccordionContent>
                Yes, children are welcome at polling stations. It can be a good learning experience for them to see democracy in action. Just ensure they don't disrupt other voters.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if I make a mistake on my ballot?</AccordionTrigger>
              <AccordionContent>
                If you make a mistake on your ballot, you can return it to the election officer and ask for a new one. The spoiled ballot will be cancelled.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I can't vote on election day?</AccordionTrigger>
              <AccordionContent>
                You can vote in advance polls, usually held on the 10th, 9th, 8th, and 7th days before election day. You can also vote by mail if you apply before the deadline. Check elections.ca for details on these options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I take a photo of my ballot?</AccordionTrigger>
              <AccordionContent>
                No, you cannot take photos inside the polling station, including of your ballot. This protects the secrecy of the vote. You can take a selfie outside the polling station after you've voted.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
