// ------------------------------------------------------------
// Import: EnterpriseDashboard
// ------------------------------------------------------------
// This import brings in the main dashboard component that
// aggregates all enterprise‑level metrics, layout, and UI
// composition.
//
// By isolating the dashboard into its own component, the App
// remains clean, focused, and easy to extend. App becomes the
// "root shell" of the UI, while EnterpriseDashboard handles
// the actual content and logic of the page.
import { EnterpriseDashboard } from "./components/EnterpriseDashboard";


// ------------------------------------------------------------
// App Component
// ------------------------------------------------------------
// This is the top‑level component for your React application.
// It acts as the root of your component tree and is the first
// component rendered by ReactDOM in main.tsx or index.tsx.
//
// Responsibilities of App:
//   - Provide a stable container for the entire UI
//   - Compose high‑level sections (like EnterpriseDashboard)
//   - Serve as the integration point for global providers
//     (themes, routing, state management, etc.) if added later
//
// Notice that App does NOT:
//   - fetch data
//   - manage state
//   - contain layout logic
//
// This keeps App intentionally minimal and future‑proof.
// ------------------------------------------------------------
export default function App() {
  return (
    // --------------------------------------------------------
    // Root Container
    // --------------------------------------------------------
    // A simple wrapper <div> is used here to contain the
    // EnterpriseDashboard. In a more advanced setup, this
    // container might include:
    //   - global layout primitives
    //   - theme providers
    //   - routing (React Router)
    //   - global navigation or shell UI
    //
    // For now, it keeps the structure clean and readable.
    // --------------------------------------------------------
    <div>
      {/* ----------------------------------------------
          Enterprise Dashboard
          ----------------------------------------------
          The primary UI surface of the application.
          This component handles:
            - data fetching
            - metric formatting
            - layout
            - KPI rendering
          
          App simply delegates to it, following the principle
          of "composition over complexity."
      */}
      <EnterpriseDashboard />
    </div>
  );
}


