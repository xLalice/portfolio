import UniverseBackground from "./components/Background";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <UniverseBackground 
        starColor="rgba(255, 255, 255, {opacity})" 
        starCount={300} 
        minStarSize={0.5}
        maxStarSize={2.5}
        minOpacity={0.2}
        maxOpacity={1.0}
        minSpeed={0.01}
        maxSpeed={0.06}
        direction="down" 
        interactionDistance={100} 
        interactionStrength={.5} 
        mouseEffect="attract" 
        backgroundColor="rgb(10, 10, 10)"
        enableAnimation={true}
      />
      <Home />
    </>
  );
}

export default App;
