import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <>
      <header className="topbar">
        <span className="site-title">nocturne</span>
      </header>
      <main className="container">
        <Gallery />
      </main>
    </>
  );
};

export default App;