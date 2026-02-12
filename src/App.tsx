import React, { Suspense } from "react";
import { Home } from "./pages/Home";

const ParticlesBackground = React.lazy(() => import("./components/ParticlesBackground"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 bg-black -z-10" />}>
        <ParticlesBackground />
      </Suspense>
      
      <Home />
    </>
  );
}

export default App;