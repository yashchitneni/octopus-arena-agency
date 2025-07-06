
const WhatsNextSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-16">
          <span className="bg-gradient-to-r from-electric-blue to-deep-violet bg-clip-text text-transparent">
            What's Next
          </span>
        </h2>

        <div className="space-y-12">
          {/* Main Message */}
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl font-orbitron font-bold text-white leading-relaxed">
              This doesn't end at Week 10.
            </p>
            <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed">
              We'll keep building. Keep learning. Keep closing the distance.
            </p>
          </div>

          {/* Action Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-electric-blue/50 transition-all duration-300">
              <h3 className="text-lg font-orbitron font-bold text-electric-blue mb-4">
                Open-sourcing tools
              </h3>
              <p className="text-gray-300 font-inter">
                Sharing our creations with the world
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-deep-violet/50 transition-all duration-300">
              <h3 className="text-lg font-orbitron font-bold text-deep-violet mb-4">
                Launching post-cohort projects
              </h3>
              <p className="text-gray-300 font-inter">
                Turning prototypes into products
              </p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-arena-purple/50 transition-all duration-300">
              <h3 className="text-lg font-orbitron font-bold text-arena-purple mb-4">
                Connecting with others through agency
              </h3>
              <p className="text-gray-300 font-inter">
                Building the community of builders
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl font-orbitron font-bold text-white">
              Join us. Or build alongside us.
            </p>
            <div className="flex items-center justify-center space-x-4 text-electric-blue font-orbitron font-semibold">
              <span className="text-sm sm:text-base">THE DISTANCE</span>
              <div className="w-1 h-1 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-sm sm:text-base">IS ZERO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNextSection;
