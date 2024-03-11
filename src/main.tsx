import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./fonts/Mulish/Mulish-Italic-VariableFont_wght.ttf";
import "./fonts/Mulish/Mulish-VariableFont_wght.ttf";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
