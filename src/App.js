import Review from "./Review";

// import {FaGithubSquare} from 'react-icons/fa';
function App() {
  return (
    <div className="App">
    {/* <h2>Reviews project</h2> */}
    {/* <FaGithubSquare/> */}
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review/>
        </section>
      </main>
    </div>
  );
}

export default App;
