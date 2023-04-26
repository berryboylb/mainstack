import { lazy } from "react";
import { initFontAwesome } from "../utils/initFontawesome";

//pages
const Home = lazy(() => import("./Home"));
const NotFound = lazy(() => import("../components/NotFound/NotFound"))

export { Home, NotFound, initFontAwesome };
