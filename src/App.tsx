import Contacts from "./components/Contacts";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-200 text-gray-600">
      <div className="">
        <div className="">
          <Presentation />
        </div>
        <div className="">
          <Projects />
        </div>
        <div className="mt-10">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
