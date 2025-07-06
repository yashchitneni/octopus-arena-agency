
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyWeShowedUp = () => {
  const [activeQuote, setActiveQuote] = useState<number | null>(null);

  const quotes = [
    { name: "Conor", quote: "I'm here to 100x myself." },
    { name: "Roosh", quote: "Didn't want to get left behind." },
    { name: "Yash", quote: "All in on AI and this time — creating something great." },
    { name: "Morgan", quote: "I want to use AI to bridge my worlds: software and biology." },
    { name: "Trevor", quote: "TV writer turned dev. Saw the writing on the wall — and followed it." },
    { name: "Jeremiah", quote: "Making sacrifices now to ride the wave that's coming." }
  ];

  return (
    <section id="why-we-showed-up" className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-electric-blue to-deep-violet bg-clip-text text-transparent">
              Why We Showed Up
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed max-w-4xl mx-auto">
            We came from code, biology, television, and rebellion.<br />
            We came to build. To learn. To launch.<br />
            <span className="text-electric-blue">Here's why each of us stepped into the arena.</span>
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((person, index) => (
            <Card
              key={person.name}
              className={`bg-gray-800/50 border-gray-700 hover:border-electric-blue/50 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeQuote === index ? 'border-electric-blue bg-gray-800/80' : ''
              }`}
              onMouseEnter={() => setActiveQuote(index)}
              onMouseLeave={() => setActiveQuote(null)}
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-2xl font-orbitron font-bold text-electric-blue mb-4">
                    {person.name}
                  </h3>
                  <blockquote className="text-lg text-gray-300 font-inter italic leading-relaxed">
                    "{person.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeShowedUp;
