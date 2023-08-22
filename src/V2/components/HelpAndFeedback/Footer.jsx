import style from './Footerrr.module.css';
import { Contect } from './Contect';
export function Footer(){
    return(
        <footer>
            <span className={style.bFont}>&copy; 2023</span>
            <span className={style.squ}>All rights reserved by vipin chauhan</span>
            <Contect/>
        </footer>
    )
};
 