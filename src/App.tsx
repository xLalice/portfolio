import React, { Suspense } from "react";
import { Home } from "./pages/Home";

const UniverseBackground = React.lazy(() => import("./components/UniverseBackground"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 bg-black -z-10" />}>
        <UniverseBackground 
          starColor="255, 255, 255" 
          starCount={150} 
          minStarSize={1}
          maxStarSize={3}
          minOpacity={0.1}
          maxOpacity={0.8}
          minSpeed={0.05}
          maxSpeed={0.2}
          direction="down" 
          interactionDistance={150} 
          interactionStrength={1} 
          mouseEffect="attract" 
          backgroundColor="rgb(10, 10, 10)"
          enableAnimation={true}
        />
      </Suspense>
      
      <Home />
    </>
  );
}

export default App;