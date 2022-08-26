import React from 'react'
import style from './Skills.module.css'
import {ReactComponent as JavaScriptLogo} from '../../images/logo-javascript.svg'
import {ReactComponent as ReactLogo} from '../../images/react-2.svg'
import {ReactComponent as HTMLLogo} from '../../images/html-1.svg'
import {ReactComponent as CSSLogo} from '../../images/css-3.svg'
import {ReactComponent as ReduxLogo} from '../../images/redux.svg'
import {ReactComponent as NodeJSLogo} from '../../images/nodejs-icon.svg'
import {ReactComponent as ExpressLogo} from '../../images/express-109.svg'
import {ReactComponent as SequelizeLogo} from '../../images/sequelize-svgrepo-com.svg'
import {ReactComponent as PostgreSQLLogo} from '../../images/postgresql.svg'
import {ReactComponent as SQLServerLogo} from '../../images/microsoft-sql-server-logo-svgrepo-com.svg'
import {ReactComponent as PowerBILogo} from '../../images/power-bi.svg'
import { motion, useTime, useTransform } from "framer-motion";

function Skills({technologies}) {

    const time = useTime();
    const rotate = useTransform(time, [0, 20000], [0, -1], { clamp: true });

    return (
    <>
        <div ref={technologies} className={style.all}>
            <div className={style.top}>
                <span className={style.title}> <span className={style.num}> 03. </span> Tecnologías </span>
            </div>
            <motion.div className={style.cards} style={{ rotate }} >
                <div className={style.card}>
                    <JavaScriptLogo className={style.logo} />
                    <span className={style.tech}> JavaScript </span>
                </div>
                <div className={style.card}>
                    <ReactLogo className={style.logo} />
                    <span className={style.tech}> React </span>
                </div>
                <div className={style.card}>
                    <HTMLLogo className={style.logo} />
                    <span className={style.tech}> HTML </span>
                </div>
                <div className={style.card}>
                    <CSSLogo className={style.logo} />
                    <span className={style.tech}> CSS </span>
                </div>

                <div className={style.card}>
                    <ReduxLogo className={style.logo} />
                    <span className={style.tech}> Redux </span>
                </div>
                <div className={style.card}>
                    <NodeJSLogo className={style.logo} />
                    <span className={style.tech}> NodeJS </span>
                </div>
                <div className={style.card}>
                    <ExpressLogo className={style.logo} />
                    <span className={style.tech}> Express </span>
                </div>
                <div className={style.card}>
                    <SequelizeLogo className={style.logo} />
                    <span className={style.tech}> Sequelize </span>
                </div>
                <div className={style.card}>
                    <PostgreSQLLogo className={style.logo} />
                    <span className={style.tech}> PostgreSQL </span>
                </div>
                <div className={style.card}>
                    <SQLServerLogo className={style.logo} />
                    <span className={style.tech}> Microsoft SQL Server </span>
                </div>
                <div className={style.card}>
                    <PowerBILogo className={style.logo} />
                    <span className={style.tech}> Power BI </span>
                </div>
            </motion.div>
            
        </div>
    </>
    )
}

export default Skills