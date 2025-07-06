
const ToolsSection = () => {
  const tools = [
    { name: "Cursor", category: "AI Code Editor" },
    { name: "Midjourney", category: "AI Image Generation" },
    { name: "ChatGPT", category: "AI Assistant" },
    { name: "Replit", category: "Cloud Development" },
    { name: "LangGraph", category: "AI Workflows" },
    { name: "Supabase", category: "Backend Platform" },
    { name: "Descript", category: "Audio/Video Editing" },
    { name: "Notion", category: "Knowledge Management" },
    { name: "n8n", category: "Workflow Automation" }
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-electric-blue to-deep-violet bg-clip-text text-transparent">
              Tools We Used
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-inter leading-relaxed max-w-3xl mx-auto">
            These are the instruments of our transformation. Each tool a key to unlocking new capabilities.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="bg-black/50 border border-gray-700 rounded-lg p-6 hover:border-electric-blue/50 transition-all duration-300 hover:bg-black/70 group cursor-pointer transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-center">
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-400 font-inter">
                  {tool.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 font-inter italic">
            More than tools — they're extensions of our agency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
