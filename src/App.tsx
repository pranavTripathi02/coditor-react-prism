import Footer from "./components/footer";
import CodeEditor from "./components/codeEditor";
import Header from "./components/header";

function App() {
  return (
    <>
      <div className="flex min-h-dvh flex-col justify-between gap-12 border-4 border-green-500">
        <Header />
        <CodeEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
