import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://04f59c6c2ce4010b1b9714c608f3edcf@o4509194578690048.ingest.us.sentry.io/4509194579869696"
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


