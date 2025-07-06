
const PhilosophySection = () => {
  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        {/* Tagline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-electric-blue mb-4">
            Agency for All (who want it).
          </h2>
        </div>

        {/* Mission */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-8 text-center">
            Our Mission
          </h3>
          <p className="text-xl sm:text-2xl text-gray-300 font-inter leading-relaxed text-center max-w-5xl mx-auto">
            Our mission is to master the tools of the AI revolution with focused intensity. We will build the tools to pave the path for anyone to reach their full potential so that no one is left behind.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-8 text-center">
            Our Vision
          </h3>
          <div className="space-y-6 text-lg sm:text-xl text-gray-300 font-inter leading-relaxed max-w-5xl mx-auto">
            <p className="text-center">
              We envision a world where <span className="text-electric-blue">human creativity is the only bottleneck.</span>
            </p>
            <p className="text-center">
              A future where AI-powered tools don't just amplify code, but close the gap between ambitious ideas and tangible reality.
            </p>
            <p className="text-center">
              While we architect for radical self-sufficiency, we build bridges, not silos—ensuring this new agency deepens our human connections.
            </p>
            <p className="text-center font-semibold text-deep-violet">
              We are the architects of a more efficient, more beautiful, and more human world.
            </p>
          </div>
        </div>

        {/* Interactive Callsign */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-8">
            Our Callsign
          </h3>
          <div className="bg-gray-900 rounded-lg p-8 max-w-2xl mx-auto border border-purple-500/30">
            <div className="space-y-4">
              <div className="text-electric-blue font-orbitron text-xl">
                Call: <span className="text-white">"What's the distance?"</span>
              </div>
              <div className="text-deep-violet font-orbitron text-xl">
                Response: <span className="text-white font-bold">"Zero."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
