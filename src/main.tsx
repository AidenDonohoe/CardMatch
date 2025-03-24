import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://635014f1b72e3a35dd45af9e9ee7203b@o4509030840860672.ingest.us.sentry.io/4509030844858368"
});

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
else {
  console.error("Failed to find the root element with ID 'app'");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

