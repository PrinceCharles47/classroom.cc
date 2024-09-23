import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import HomePage from "./pages/HomePage";

import ClassPage from "./pages/ClassPage";
import StreamPage from "./pages/class/StreamPage";
import ClassworkPage from "./pages/class/ClassWorkPage";
import PeoplePage from "./pages/class/PeoplePage";
import GradesPage from "./pages/class/GradesPage";

import ActivityPage from "./pages/ActivityPage";
import InstructionPage from "./pages/activity/InstructionPage";
import SubmissionPage from "./pages/activity/SubmissionPage";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/class" element={<ClassPage />}>
              <Route path="/class" element={<StreamPage />}></Route>
              <Route
                path="/class/class-work"
                element={<ClassworkPage />}
              ></Route>
              <Route path="/class/people" element={<PeoplePage />}></Route>
              <Route path="/class/grades" element={<GradesPage />}></Route>
            </Route>
            <Route path="/activity" element={<ActivityPage />}>
              <Route path="/activity" element={<InstructionPage />}></Route>
              <Route path="/activity/submission" element={<SubmissionPage />}></Route>
            </Route>
          </Routes>
        </Navigation>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
