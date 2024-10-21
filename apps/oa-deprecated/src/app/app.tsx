// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <NxWelcome title="oa-deprecated" />
      <Link to="/old-page-1">Click here to go back to root page.</Link>
      <Routes>
        <Route
          path="/old-page-1"
          element={
            <div>
              This is first old deprecated component we would like to get rid off
              <Link to="/old-page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/old-page-2"
          element={
            <div>
              This is second old deprecated component we would like to get rid off
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
