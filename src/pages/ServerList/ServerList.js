import React, { useEffect, useState } from 'react'
import { apiProvider } from 'src/apiProvider/ApiProvider';
import ServerCard from 'src/components/ServerCard/ServerCard'
import styles from "./ServerList.module.css"

const ServerList = () => {

    const [serverList, setServerList] = useState([]);

    useEffect(()=>{
        const getServerList = async () => {
            const result = await apiProvider.getServerList()
            setServerList(result)
        }

        getServerList()
    },[])

    return (
        <div className='container'> 
            <div className='row m-auto border min-vh-100'>
                <div className = {styles.server_list_header}>
                    Server List
                </div>

                {!serverList || serverList.map(server => 
                    <ServerCard 
                        name = {server.name}
                        ip = {server.ip}
                    />)
                }
            </div> 
        </div>
    )
}

export default ServerList
