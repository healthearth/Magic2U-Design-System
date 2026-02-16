import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import 'magic2u-design-system/ui/styles/reset.css';
import 'magic2u-design-system/ui/styles/base.css';
import 'magic2u-design-system/ui/styles/utilities.css';

import { Button, Card, Table } from 'magic2u-design-system/ui/react';

export function App() {
  return (
    <div className="container">
      <h1>Magic2U Design System Demo</h1>

      <div className="mt-md">
        <Button>Primary Button</Button>
      </div>

      <div className="mt-lg">
        <Card>
          <p>This is a Card component.</p>
        </Card>
      </div>

      <div className="mt-lg">
        <Table
          data={[
            { Name: 'Adoption', Value: 1200 },
            { Name: 'Revenue', Value: 50000 }
          ]}
        />
      </div>
    </div>
  );
}

