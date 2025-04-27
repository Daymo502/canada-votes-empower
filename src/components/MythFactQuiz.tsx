
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionTitle from './SectionTitle';
import { toast } from 'sonner';

const myths = [
  {
    id: 1,
    statement: "You need perfect English or French to vote.",
    isFact: false,
    explanation: "You don't need to be fluent in either official language to vote. You can bring someone to help translate, or ask for assistance at the polling station.",
  },
  {
    id: 2,
    statement: "You can vote even if you're not on the voter list initially.",
    isFact: true,
    explanation: "If you're not on the voter list, you can register at your polling station on election day with proper ID.",
  },
  {
    id: 3,
    statement: "You must have a Canadian driver's license to vote.",
    isFact: false,
    explanation: "You don't need a driver's license specifically. Any government-issued ID with your photo, name and address will work, or you can use two pieces of ID where at least one shows your address.",
  },
  {
    id: 4,
    statement: "You need to vote for one of the major political parties.",
    isFact: false,
    explanation: "You can vote for any candidate on your ballot, regardless of their party affiliation or whether they're an independent candidate.",
  },
  {
    id: 5,
    statement: "Elections Canada staff can speak multiple languages or provide translation.",
    isFact: true,
    explanation: "Many polling stations have multilingual staff, and Elections Canada provides materials in multiple languages to help voters.",
  },
  {
    id: 6,
    statement: "You can decline your ballot if you don't want to vote for anyone.",
    isFact: false,
    explanation: "In federal elections, there is no formal way to decline your ballot. If you don't want to vote for anyone, you can leave your ballot blank or spoil it, but it won't be counted separately from errors.",
  },
  {
    id: 7,
    statement: "Your employer must give you time to vote on election day.",
    isFact: true,
    explanation: "By law, employers must ensure that employees have three consecutive hours during polling hours to vote. If your work schedule doesn't allow this, your employer must give you time off.",
  },
];

export default function MythFactQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: boolean | null}>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleAnswer = (answer: boolean) => {
    if (showExplanation) return;
    
    setAnswers({ ...answers, [currentIndex]: answer });
    setShowExplanation(true);
    
    // Show toast with feedback
    if (answer === myths[currentIndex].isFact) {
      toast.success("Correct answer!");
    } else {
      toast.error("Not quite right.");
    }
  };
  
  const handleNext = () => {
    setShowExplanation(false);
    
    if (currentIndex < myths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleReset = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowExplanation(false);
    setQuizCompleted(false);
  };
  
  const correctAnswers = Object.values(answers).filter(
    (answer, index) => answer === myths[index].isFact
  ).length;
  
  if (quizCompleted) {
    return (
      <Card className="overflow-hidden animate-fade-in">
        <div className="h-2 bg-maple"></div>
        <CardContent className="pt-6 pb-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-maple/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-maple text-xl font-bold">{correctAnswers}/{myths.length}</span>
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">
              Quiz Complete!
            </h3>
            <p className="text-lg mb-6">
              You got {correctAnswers} out of {myths.length} correct. 
              {correctAnswers === myths.length 
                ? " Perfect score! You're an informed voter." 
                : " Great job busting those myths!"}
            </p>
            <Button 
              onClick={handleReset} 
              className="bg-maple hover:bg-maple-dark"
            >
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  const currentMyth = myths[currentIndex];
  const isAnswered = answers[currentIndex] !== undefined;
  const isCorrect = isAnswered && answers[currentIndex] === currentMyth.isFact;
  
  return (
    <div className="space-y-6">
      <SectionTitle 
        title="Myth vs. Fact" 
        subtitle="Test your knowledge about voting in Canada"
      />
      
      <Card className="overflow-hidden animate-fade-in">
        <div className="h-2 bg-maple"></div>
        <CardContent className="pt-6 divide-y">
          <div className="pb-6">
            <div className="text-sm text-neutral-600 mb-2">
              Statement {currentIndex + 1} of {myths.length}
            </div>
            <p className="text-xl font-medium">
              "{currentMyth.statement}"
            </p>
          </div>
          
          <div className="py-6">
            {!showExplanation ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => handleAnswer(true)}
                  variant="outline"
                  className="flex-1 h-auto py-6 text-lg border-2"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span>Fact</span>
                  </div>
                </Button>
                
                <Button
                  onClick={() => handleAnswer(false)}
                  variant="outline"
                  className="flex-1 h-auto py-6 text-lg border-2"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span>Myth</span>
                  </div>
                </Button>
              </div>
            ) : (
              <div className={cn(
                "p-4 rounded-md",
                isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
              )}>
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                    isCorrect ? "bg-green-100" : "bg-red-100"
                  )}>
                    {isCorrect ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <X className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className={cn(
                      "font-medium",
                      isCorrect ? "text-green-800" : "text-red-800"
                    )}>
                      This statement is a {currentMyth.isFact ? "FACT" : "MYTH"}
                    </p>
                    <p>{currentMyth.explanation}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="bg-neutral-50 border-t">
          <div className="w-full flex items-center justify-between">
            <div className="text-sm">
              <span className="font-medium">{currentIndex + 1}</span>
              <span className="text-neutral-400"> / {myths.length}</span>
            </div>
            
            {showExplanation && (
              <Button 
                onClick={handleNext}
                className="bg-maple hover:bg-maple-dark"
              >
                {currentIndex < myths.length - 1 ? "Next" : "See Results"}
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
