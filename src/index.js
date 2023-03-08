import './index.css';
import { OpenPage } from "./Pages/Controllers/PagesController";
import MainMenu from "./Pages/MainMenuPage";

localStorage.nickname = JSON.stringify(null);
localStorage.currentPageContainerId = JSON.stringify(null);
localStorage.currentFormId = JSON.stringify(null);
localStorage.nickname = JSON.stringify(null);
localStorage.winner = JSON.stringify(null);
localStorage.playerGameBoard = JSON.stringify(null);
localStorage.machineGameboard = JSON.stringify(null);
localStorage.selectedShip = JSON.stringify(null);

OpenPage(MainMenu().id);