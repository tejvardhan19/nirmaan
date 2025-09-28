import { BookOpen, Bot, FileText, Gift, Users } from 'lucide-react';

const ComponentsSection = () => {
  const components = [
    {
      title: "Interactive Classes",
      icon: <Users className="w-8 h-8" />,
      description: "Engaging, hands-on learning experiences that captivate students."
    },
    {
      title: "Personalized AI Tutor",
      icon: <Bot className="w-8 h-8" />,
      description: "An AI companion that adapts to each student's unique learning style."
    },
    {
      title: "Performance Reports",
      icon: <FileText className="w-8 h-8" />,
      description: "Detailed, behavior-based reports that measure what truly matters."
    },
    {
      title: "Showcase Talent",
      icon: <Gift className="w-8 h-8" />,
      description: "Opportunities for students to present their skills and build confidence."
    },
    {
      title: "Worksheets & Handouts",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Supportive materials designed to reinforce concepts and deepen understanding."
    }
  ];

  return (
    <section id="components" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-poppins">Our Program Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
            Key features that make our educational approach transformative and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((c, i) => (
            <div key={i} className="bg-background p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-6">
                {c.icon}
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-4">{c.title}</h3>
              <p className="text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;