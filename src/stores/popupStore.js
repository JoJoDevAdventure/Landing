// stores/popupStore.js
import { proxy, snapshot } from "valtio";

const popupState = proxy({ isOpen: false });

export const openPopup = () => (popupState.isOpen = true);
export const closePopup = () => (popupState.isOpen = false);

export const usePopupState = () => snapshot(popupState);

export default popupState;