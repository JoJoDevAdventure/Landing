// stores/appState.js
import { proxy } from "valtio";

const appState = proxy({
  isOnAbout: false,
});

export default appState;