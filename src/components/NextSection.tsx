
const NextSection = () => {
  return (
    <section id="next-section" className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-electric-blue to-deep-violet bg-clip-text text-transparent">
            The Story Continues...
          </span>
        </h2>
        <p className="text-lg text-gray-300 font-inter leading-relaxed">
          This is where your team story, mission/vision, logo symbolism, tools used, and what's next sections will unfold.
          Each section can build upon this narrative-driven design foundation.
        </p>
      </div>
    </section>
  );
};

export default NextSection;
