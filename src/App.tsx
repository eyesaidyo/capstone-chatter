import { TextEditor, TextProvider } from "./routes/text-editor/TextEditor";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { View } from "./routes/preview/Preview";
import { NavBar } from "./components/navbar/navbar";
import { LandingPage } from "./routes/landing-page/landing-page";
import { SignUpPage } from "./routes/sign-in-up-page/sign-up-page";
import { UserProvider } from "./contexts/user-context";
import { Dashboard } from "./routes/dashboard/dashboard";
import { Feed } from "./routes/feed/feed";
import { Drafts } from "./routes/drafts/drafts";
import { DraftsProvider } from "./contexts/drafts-context";
import PostPage from "./routes/post-page/post-page";
import { CommentsProvider } from "./contexts/comments-context";
import { Notifications } from "./routes/notifications/notifications";
import { ModalProvider } from "./contexts/modal-context";
function App() {
  return (
    <UserProvider>
      {/* <h1>rasine</h1> */}
      <DraftsProvider>
        <TextProvider>
          <CommentsProvider>
            <ModalProvider>
              <Routes>
                <Route path="/" element={<NavBar />}>
                  <Route index element={<LandingPage />}></Route>
                  <Route path="/sign-up" element={<SignUpPage />}></Route>
                </Route>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<Feed />}></Route>
                  <Route path="create" element={<TextEditor />}></Route>
                  <Route path="prev" element={<View />}></Route>
                  <Route path="drafts" element={<Drafts />}></Route>
                  <Route
                    path="notifications"
                    element={<Notifications />}
                  ></Route>
                  <Route path="post/:id" element={<PostPage />}></Route>
                </Route>
              </Routes>
            </ModalProvider>
          </CommentsProvider>
        </TextProvider>
      </DraftsProvider>
    </UserProvider>
  );
}

export default App;
