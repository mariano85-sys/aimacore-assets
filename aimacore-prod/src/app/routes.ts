import { createBrowserRouter } from "react-router";
import { AimaCoreLayout } from "./components/AimaCoreLayout";
import { AimaCoreLanding } from "./pages/AimaCoreLanding";
import { EmailSignatureGenerator } from "./pages/EmailSignatureGenerator";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AimaCoreLayout,
    children: [
      { index: true, Component: AimaCoreLanding },
      { path: "tools/signature", Component: EmailSignatureGenerator },
    ],
  },
]);
