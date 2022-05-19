import React from "react";

const serverListPage = React.lazy(() => import('./pages/ServerList/ServerList'))

const routes = [
    {path : '/', exact : true, name : "home"},
    {path : '/servers', exact : true, name : "servers", component : serverListPage}
]

export default routes;