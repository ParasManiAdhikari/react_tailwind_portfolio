import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-pastel-green text-gray-800 flex flex-col justify-center items-center">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4">
        <ul className="flex justify-between">
          <li className="mr-6">
            <a href="#" className="text-lg font-semibold">Home</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-lg font-semibold">Sphere</a>
          </li>
          <li>
            <a href="#" className="text-lg font-semibold">Settings</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <section className="container mx-auto mt-8 flex justify-center">
        <div className="max-w-lg p-8 bg-white shadow-lg rounded-md border border-green-500">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Paras Adhikari</h1>
          <p className="text-gray-600 mb-6">Software Developer</p>
          <div className="bg-green-100 p-6 rounded-md mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">About Me</h2>
            <p className="text-gray-600">I'm a passionate Software Developer with a keen interest in creating user-friendly programs and applications.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-md">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Skills</h2>
            <ul className=" text-gray-600 list-none">
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Contact Bar */}
      <footer className="bg-white shadow-md p-4 mt-8">
        <p className="text-lg font-semibold">Contact</p>
        <ul className="flex space-x-4 mt-2">
          <li>
            <a href="#" className="text-pastel-green hover:underline">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/paras-adhikari-247726245/" className="text-pastel-green hover:underline">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/parasxdhikari" className="text-pastel-green hover:underline">GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
