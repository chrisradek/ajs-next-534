import { useAnalytics } from "./segment";

export const TrackButton = () => {
  const analytics = useAnalytics();
  return (
    <button
      onClick={() => {
        analytics.track("hello world").then(console.log);
      }}
    >
      Track!
    </button>
  );
};
