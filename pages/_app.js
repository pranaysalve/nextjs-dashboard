import "@/styles/globals.css";
import { Sidebar } from "../components/Sidebar";
import {
  GetAllDataContextProvider,
  GetAllDataContext,
} from "@/service/getData.context";

export default function App({ Component, pageProps }) {
  return (
    <GetAllDataContextProvider>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </GetAllDataContextProvider>
  );
}
