import React from 'react';
import { Section, Card, CardHeader, CardTitle, CardContent } from './ui';
import { 
  BarChart3, 
  Settings, 
  Share2, 
  Layout, 
  Bot,
  Check
} from 'lucide-react';

const tasks = [
  {
    icon: <Layout className="w-6 h-6 text-emerald-400" />,
    title: "I Build for Conversions",
    description: "Built 'JOBr', a full-stack job matching platform using Supabase and cosine similarity. I reduced manual screening time by 85%—that's the efficiency I bring."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
    title: "Deep Google & Data Integration",
    description: "Experience handling 900GB of marketing data to build AI-powered budget allocation systems. I turn raw data into 23% ROI improvements."
  },
  {
    icon: <Share2 className="w-6 h-6 text-emerald-400" />,
    title: "CRM & Automation Master",
    description: "Developed 'Gagent' to completely automate Gmail inboxes using n8n and AI agents. I don't just connect CRMs; I make them autonomous."
  },
  {
    icon: <Settings className="w-6 h-6 text-emerald-400" />,
    title: "UX/UI & Performance",
    description: "From 'digitalized solar surveys' in the UK to real-time object detection (YOLO at 45 FPS), I ensure performance is seamless and intuitive."
  },
  {
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    title: "AI Power User",
    description: "Specialized in RAG, LLMs, and Multi-Armed Bandit algorithms. I built 'Social Media Automation' to generate/post videos autonomously daily."
  }
];

export const RoleDetails: React.FC = () => {
  return (
    <div className="bg-zinc-900/20 border-y border-zinc-800/50 backdrop-blur-sm">
      <Section id="role">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
              Osamah's Vision, <br/>
              <span className="text-zinc-500 italic">My Track Record.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 lg:mb-8">
              I analyzed your post asking for a "technical pro" and "integrator." Here is how my experience at Remoto Co and LMKR maps directly to your needs.
            </p>
            <div className="hidden lg:block">
              <div className="h-px w-24 bg-primary mb-8" />
              <p className="text-sm font-mono text-primary/80">
                // MATCH_SCORE: 100%
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {tasks.map((task, index) => (
              <Card key={index} className={`group hover:border-primary/50 active:border-primary/50 transition-colors duration-300 ${index === tasks.length - 1 ? 'sm:col-span-2' : ''}`}>
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 sm:p-3 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:bg-primary/10 transition-colors">
                      {task.icon}
                    </div>
                    <Check className="w-4 h-4 text-zinc-600 group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardTitle className="mb-2 text-white group-hover:text-primary transition-colors text-lg sm:text-xl">{task.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {task.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        
        </div>
      </Section>
    </div>
  );
};