import React, { Suspense } from "react";
import { Home } from "./pages/Home";
const HomeLazy = React.lazy(() => import("./pages/Home"));

const ParticlesBackground = React.lazy(() => import("./components/ParticlesBackground"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 bg-black -z-10" />}>
        <ParticlesBackground />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <HomeLazy />
      </Suspense>
    </>
  );
}

export default App;