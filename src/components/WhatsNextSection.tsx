
import { useState } from 'react';

const WhatsNextSection = () => {
  const [showResponse, setShowResponse] = useState(false);

  const handleCallClick = () => {
    setShowResponse(true);
    setTimeout(() => setShowResponse(false), 3000); // Reset after 3 seconds
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-16">
          <span className="bg-gradient-to-r from-electric-blue to-deep-violet bg-clip-text text-transparent">
            The Distance is Zero
          </span>
        </h2>

        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <p className="text-3xl sm:text-4xl font-orbitron font-bold text-white leading-relaxed">
              We don't just learn. We launch.
            </p>
          </div>

          {/* Main Copy */}
          <div className="space-y-8 my-16">
            <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
              In this arena, the gap between thought and reality collapses.
            </p>
            <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
              We're not here to observe the wave — we're here to shape it.
            </p>
            <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
              The distance from idea to implementation?
            </p>
            <p className="text-2xl sm:text-3xl font-orbitron font-bold text-electric-blue">
              Zero.
            </p>
          </div>

          {/* Interactive Call and Response */}
          <div className="space-y-6 my-16">
            <button
              onClick={handleCallClick}
              className="bg-gradient-to-r from-deep-violet to-electric-blue text-white px-8 py-4 rounded-lg font-orbitron font-semibold text-lg hover:from-electric-blue hover:to-deep-violet transition-all duration-300 transform hover:scale-105"
            >
              What's the distance?
            </button>
            
            {showResponse && (
              <div className="animate-fade-in-up">
                <p className="text-3xl sm:text-4xl font-orbitron font-bold text-electric-blue animate-pulse">
                  ZERO.
                </p>
              </div>
            )}
          </div>

          {/* Optional CTA */}
          <div className="space-y-6">
            <a
              href="#builds"
              className="inline-flex items-center space-x-2 text-white font-orbitron font-semibold border border-electric-blue/50 px-6 py-3 rounded-lg hover:bg-electric-blue/10 transition-all duration-300"
            >
              <span>→ View the builds</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNextSection;
