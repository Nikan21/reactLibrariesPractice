import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/headerLogo.png'
import styles from './header.module.sass'

export default function Header() {
    return(
        <Fragment>
            <div className={styles.header}>
                <img className={styles.headerLogo} src={logo} alt="Logo" />
                <Link className={styles.headerLink} to='/'>Home</Link>
                <Link className={styles.headerLink} to='/squares'>Squares</Link>
            </div>
        </Fragment>
    )
}