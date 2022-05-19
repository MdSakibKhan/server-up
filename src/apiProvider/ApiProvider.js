import axios from "axios"

//Reponse Handlers

const successHandler = (response) => {
    return response.data 
}

const errorHandler = (error) => {
    const status = error.response.status
    //Redirect To Error Page
}


//Common HTTP Methods

const get = (url) => axios.get(url).then(successHandler).catch(errorHandler)

const post = (url, data) => axios.post(url, data).then(successHandler).catch(errorHandler)

const put = (url, data) => axios.put(url, data).then(successHandler).catch(errorHandler)

const remove = (url, data) => axios.delete(url, data).then(successHandler).catch(errorHandler)


//List of Custom Methods For Calling the API

const getServerList = () => get("/servers")

const updateServer = (serverId, data) => post(`/servers/${serverId}`, data)


//Export All the Custom API Call Methods

export const apiProvider = {
    getServerList,
    updateServer
}