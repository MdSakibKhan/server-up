import React from "react";

const serversPage = React.lazy(() => import('../pages/ServerList/ServerList'))

const routes = [
    {path : '/', exact : true, name : "home"},
    {path : '/servers', exact : true, name : "servers", component : serversPage}
]

export default routes;