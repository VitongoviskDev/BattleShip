import './index.css';
import { OpenPage } from "./Pages/Controllers/PagesController";
import MainMenu from "./Pages/MainMenuPage";

localStorage.nickname = JSON.stringify('');
localStorage.currentPageContainerId = JSON.stringify('');
localStorage.currentFormId = JSON.stringify('');
localStorage.nickname = JSON.stringify('');
localStorage.winner = JSON.stringify('');
localStorage.playerGameBoard = JSON.stringify('');
localStorage.machineGameboard = JSON.stringify('');
localStorage.selectedShip = JSON.stringify('');

OpenPage(MainMenu().id);