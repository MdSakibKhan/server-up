import React from 'react'
import styles from "./ServerCard.module.css"

const ServerCard = (props) => {

    const name = props.name || "N/A"
    const ip = props.ip || "N/A"

    return (
        <div className='col card mt-auto mb-auto'>
            <div className={styles.server_name}> Server Name {name} </div>
            <div className={styles.server_ip}> Server IP {ip} </div>
        </div>
    )
}

export default ServerCard
