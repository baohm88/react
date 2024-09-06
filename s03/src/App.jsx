import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

function App() {
  console.log(CORE_CONCEPTS);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.id} {...concept} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
