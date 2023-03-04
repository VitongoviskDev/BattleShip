import SetupBoard from "../SetupBoardPage";
import { OpenPage } from "./PagesController";

const HandlePlayButtonClick = () =>{
    const input = document.querySelector('input');
    if(input.value == ''){
        input.classList.add('invalid');
    }else{

        localStorage.nickname = JSON.stringify(input.value);
        
        document.querySelector('.page-root').classList.add('leave');
        OpenPage(SetupBoard().id);
    }
}

const HandleInputChange = () =>{
    const input = document.querySelector('input');
    input.classList.remove('invalid');
}

export {HandlePlayButtonClick, HandleInputChange};