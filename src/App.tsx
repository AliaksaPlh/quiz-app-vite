import "./App.css";
import WelcomePageComponent from "./welcome-page/welcome-page.component";
import MainQuizScreen from "./main-quiz-screen/main-quiz-screen";
import { useState } from "react";

function App() {
  const [showQuizScreen, setShowQuizScreen] = useState(false);

  const handleStartQuiz = () => {
    setShowQuizScreen(true);
  };

  return (
    <div className="App">
      {/* Render WelcomePageComponent if showQuizScreen is false */}
      {!showQuizScreen && (
        <WelcomePageComponent onQuizStart={handleStartQuiz} />
      )}

      {/* Render MainQuizScreen if showQuizScreen is true */}
      {showQuizScreen && <MainQuizScreen />}
    </div>
  );
}

export default App;
