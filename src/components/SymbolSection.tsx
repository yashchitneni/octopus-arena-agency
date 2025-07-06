
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
              <img
                src="/lovable-uploads/c345627c-0d0b-414d-9008-bf26366eef91.png"
                alt="The Innovators - Octopus Shield Symbol"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Symbol Description */}
        <div className="space-y-8">
          <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
            Eight arms. Eight facets of agency.
          </p>
          <p className="text-lg sm:text-xl text-gray-400 font-inter leading-relaxed max-w-3xl mx-auto">
            The octopus represents adaptability, intelligence, and the ability to solve problems from multiple angles simultaneously. Each arm an autonomous agent, working together to grasp a shield, a symbol of protection and responsibility for those ready to step into their own agency
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
