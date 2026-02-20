import { Brain, Sparkles, Zap, Shield, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">NeuralEdge AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-400 hover:text-white">Services</a>
              <a href="#features" className="text-gray-400 hover:text-white">Features</a>
              <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-950 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Transforming Business with AI
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Intelligence at the
              <span className="text-blue-500"> Speed of Thought</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Unlock the full potential of artificial intelligence for your business.
              Our cutting-edge AI solutions drive innovation, automate workflows, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 text-lg">
                Just Ask
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-medium text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="bg-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Powerful AI Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive AI services designed to accelerate your business transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
                <p className="text-gray-400 leading-relaxed">
                  Build intelligent systems that learn and improve over time. From predictive analytics to pattern recognition, we deploy ML models that drive real business value.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Process Automation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Streamline operations with intelligent automation. Reduce manual work, eliminate errors, and free your team to focus on strategic initiatives.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-400 leading-relaxed">
                  Deploy AI with confidence. Our solutions prioritize data privacy, compliance, and security at every layer of your infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Built for Scale, Designed for Impact
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Our AI platform combines cutting-edge technology with practical business applications.
                  Whether you're a startup or enterprise, we scale with your ambitions.
                </p>
                <ul className="space-y-4">
                  {['Real-time processing capabilities', 'Seamless integration with existing systems', '24/7 monitoring and support', 'Flexible deployment options'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <Sparkles className="w-24 h-24 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-bold">Innovation Powered by AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-blue-700 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join hundreds of companies leveraging AI to drive growth and innovation
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
              Schedule a Consultation
            </button>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-500" />
                <span className="text-white font-semibold">NeuralEdge AI</span>
              </div>
              <p className="text-sm">2024 NeuralEdge AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
