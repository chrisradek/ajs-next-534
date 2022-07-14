import "./App.css";
import { AnalyticsProvider } from "./segment";
import { TrackButton } from "./TrackButton";

function App() {
  return (
    <AnalyticsProvider writeKey="source-write-key">
      <TrackButton />
    </AnalyticsProvider>
  );
}

export default App;
