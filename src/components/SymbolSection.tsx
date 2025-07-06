
const SymbolSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-16">
          <span className="bg-gradient-to-r from-electric-blue to-deep-violet bg-clip-text text-transparent">
            The Symbol
          </span>
        </h2>

        {/* Logo Display */}
        <div className="mb-16 flex justify-center">
          <div className="relative group">
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-deep-violet to-electric-blue opacity-30 blur-2xl scale-150 animate-glow-pulse" />
            
            {/* Logo Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-logo-float">
              <div className="w-full h-full bg-gradient-to-br from-arena-purple to-deep-violet rounded-2xl flex items-center justify-center shadow-2xl border-2 border-purple-400/50">
                {/* Octopus Shield - Enhanced */}
                <div className="text-white text-8xl sm:text-9xl lg:text-[10rem]">🐙</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Symbol Description */}
        <div className="space-y-8">
          <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
            Eight arms. Eight facets of agency.
          </p>
          <p className="text-lg sm:text-xl text-gray-400 font-inter leading-relaxed max-w-3xl mx-auto">
            The octopus represents adaptability, intelligence, and the ability to solve problems from multiple angles simultaneously. 
            Enclosed within a shield, it becomes our crest — a symbol of protection for those who dare to build, 
            and a beacon for those ready to step into their own agency.
          </p>
          <p className="text-lg text-electric-blue font-orbitron font-semibold">
            This is our mark. Our promise. Our standard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SymbolSection;
