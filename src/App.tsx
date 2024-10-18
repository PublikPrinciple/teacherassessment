import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Progress from './components/Progress';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { School, User, Settings, LogOut, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress as ProgressBar } from "@/components/ui/progress";

function App() {
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generationStep, setGenerationStep] = useState('');
  const [isPlanReady, setIsPlanReady] = useState(false);

  const generateCoachingPlan = () => {
    setIsGeneratingPlan(true);
    setGenerationProgress(0);
    setGenerationStep('Analyzing assessment data...');
    setIsPlanReady(false);

    const steps = [
      'Analyzing assessment data...',
      'Identifying key improvement areas...',
      'Generating personalized coaching plan...',
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setGenerationStep(steps[currentStep]);
        setGenerationProgress((prevProgress) => Math.min(prevProgress + 33, 100));
        currentStep++;
      } else {
        clearInterval(interval);
        setIsPlanReady(true);
        setGenerationStep('Coaching Plan Ready!');
      }
    }, 2000);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center">
              <School className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold">EduTeach</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link to="/"><Button variant="ghost">Home</Button></Link>
              <Link to="/progress"><Button variant="ghost">My Progress</Button></Link>
              <Button variant="ghost">Resources</Button>
              <Button variant="ghost">Feedback</Button>
            </nav>
            <div className="flex items-center space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center" onClick={generateCoachingPlan}>
                    <Zap className="mr-2 h-4 w-4" />
                    Generate Coaching Plan
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{isPlanReady ? "Coaching Plan Ready!" : "Generating Your Coaching Plan..."}</DialogTitle>
                    <DialogDescription>
                      {!isPlanReady && (
                        <div className="flex flex-col items-center justify-center space-y-4">
                          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                          <p>{generationStep}</p>
                          <ProgressBar value={generationProgress} className="w-full" />
                        </div>
                      )}
                      {isPlanReady && (
                        <div className="flex flex-col items-center justify-center space-y-4">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <Button onClick={() => console.log("View Coaching Plan")}>View Coaching Plan</Button>
                        </div>
                      )}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">shadcn</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        m@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white shadow-sm mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Help</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Support</a>
            </div>
            <div>
              <Button variant="outline" size="sm">
                Accessibility Options
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;