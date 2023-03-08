import { setMachineGameboard, setPlayerGameBoard } from "../../Components/Controllers/GameBoardController";
import MainMenu from "../MainMenuPage"
import ResignForm from '../ResignForm'
import { OpenPage, CloseForm} from "./PagesController"

const HandleConfirmButtonClicked = () =>
{
    ResetGame();
    OpenPage(MainMenu().id);
    HandleCancelButtonClicked();
}

const HandleCancelButtonClicked = () =>
{
    CloseForm();
}

const ResetGame = () =>{
    setPlayerGameBoard(null);
    setMachineGameboard(null);
    localStorage.nickname = JSON.stringify("");
}
export {HandleConfirmButtonClicked, HandleCancelButtonClicked, ResetGame}