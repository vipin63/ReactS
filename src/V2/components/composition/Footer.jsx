import style from './Footerrr.module.css'
export function Footer(){
    return(
        <footer>
            <span className={style.bFont}>&copy; 2023</span>
            <span className={style.squ}>All rights reserved by vipin chauhan</span>
        </footer>
    )
}