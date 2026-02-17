// ------------------------------------------------------------
// React + ReactDOM Imports
// ------------------------------------------------------------
// React: Core library for building UI components.
// ReactDOM: Responsible for mounting React components into the DOM.
//
// In React 18+, `react-dom/client` exposes the modern concurrent
// rendering API (`createRoot`), which replaces the older `ReactDOM.render`.
// This enables improved performance, better scheduling, and future‑proofing.
import React from "react";
import ReactDOM from "react-dom/client";

// ------------------------------------------------------------
// App Component
// ------------------------------------------------------------
// The root-level component for your application.
// This is the top of your component tree and the entry point
// for all Magic2U design system demos, pages, and UI flows.
import App from "./App";

// ------------------------------------------------------------
// Global Styles
// ------------------------------------------------------------
// These are your application-level CSS resets, variables,
// and global rules. They apply before the Magic2U design system
// styles, ensuring a clean baseline for your UI.
import "./styles/globals.css";


// ------------------------------------------------------------
// React Root Initialization
// ------------------------------------------------------------
// `createRoot` enables React 18’s concurrent rendering features.
// The non-null assertion (!) tells TypeScript that #root exists.
//
// <React.StrictMode>:
//   - Activates additional checks in development
//   - Highlights unsafe lifecycle patterns
//   - Double-invokes certain functions to reveal side effects
//
// This wrapper NEVER affects production behavior — only dev mode.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ------------------------------------------------------------
// Magic2U Design System Styles
// ------------------------------------------------------------
// These CSS files come from the Magic2U design system package.
// They provide:
//
// reset.css      → Normalizes browser defaults
// base.css       → Typography, spacing, color tokens, layout primitives
// utilities.css  → Utility classes (margin, padding, flex, grid, etc.)
//
// Importing them here ensures the entire app inherits the DS styling.
import 'magic2u-design-system/ui/styles/reset.css';
import 'magic2u-design-system/ui/styles/base.css';
import 'magic2u-design-system/ui/styles/utilities.css';


// ------------------------------------------------------------
// Magic2U React Components
// ------------------------------------------------------------
// These are the React-wrapped versions of your design system
// Web Components or primitives.
//
// Button → Primary interactive element
// Card   → Container with padding + elevation
// Table  → Data display component with DS styling
//
// Importing them from the DS package ensures consistency across apps.
import { Button, Card, Table } from 'magic2u-design-system/ui/react';


// ------------------------------------------------------------
// App Component (Demo)
// ------------------------------------------------------------
// This component demonstrates how to consume Magic2U design system
// components inside a real React application.
//
// It uses:
//   - DS utility classes (mt-md, mt-lg)
//   - DS components (Button, Card, Table)
//   - A simple container layout
//
// This is the perfect "hello world" for showcasing the DS.
export function App() {
  return (
    <div className="container">
      {/* ----------------------------------------------
          Page Title
          ----------------------------------------------
          Demonstrates typography and spacing from the DS.
      */}
      <h1>Magic2U Design System Demo</h1>

      {/* ----------------------------------------------
          Button Demo
          ----------------------------------------------
          Uses DS utility class "mt-md" for spacing.
      */}
      <div className="mt-md">
        <Button>Primary Button</Button>
      </div>

      {/* ----------------------------------------------
          Card Demo
          ----------------------------------------------
          Shows how content can be wrapped in a styled container.
      */}
      <div className="mt-lg">
        <Card>
          <p>This is a Card component.</p>
        </Card>
      </div>

      {/* ----------------------------------------------
          Table Demo
          ----------------------------------------------
          Demonstrates structured data rendering using DS styling.
      */}
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
