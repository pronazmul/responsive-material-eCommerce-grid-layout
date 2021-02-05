import { ThemeProvider } from "@material-ui/core";
import CustomTheme from "./CustomTheme";
import MainRouting from "./MainRouting/MainRouting";
import "./styles.css";

export default function App() {
  return (
    // <ThemeProvider theme={CustomTheme}>
    <MainRouting />
    // </ThemeProvider>
  );
}
