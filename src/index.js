import './index.css';
import { OpenPage } from "./Pages/Controllers/PagesController";
import MainMenu from "./Pages/MainMenuPage";


sessionStorage.nickname = JSON.stringify('');
sessionStorage.currentPageContainerId = JSON.stringify('');
sessionStorage.currentFormId = JSON.stringify('');
sessionStorage.winner = JSON.stringify('');
sessionStorage.playerGameBoard = JSON.stringify('');
sessionStorage.machineGameboard = JSON.stringify('');
sessionStorage.selectedShip = JSON.stringify('');


OpenPage(MainMenu().id);