// import Functional Components from react
import {
  createTheme,
  CssBaseline,
  List,
  ListItem,
  ThemeProvider,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getWishes, Wish } from "./services/wishes";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#131924",
    },
    primary: {
      main: "#4d88ff",
    },
    secondary: {
      main: "#a9a9a9",
    },
  },
});

export const App: FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);

  console.log(wishes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <List>
        {wishes.map((wish) => {
          return <ListItem key={wish.name}>{wish.name}</ListItem>;
        })}
      </List>
    </ThemeProvider>
  );
};
