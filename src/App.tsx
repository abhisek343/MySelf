import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div id="home" className="min-h-[calc(100vh-200px)] pt-16">
          <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
          <p>This is the main content area.</p>
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
