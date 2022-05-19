import React, { Suspense } from 'react'
import routes from '../../routes/Routes'
import { Navigate, Routes, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <main>
                <Suspense fallback={"Loading ...."}>
                    <Routes>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key = {idx}
                                    path = {route.path}
                                    exact = {route.exact}
                                    element = {<route.component/>}
                                />
                            )
                        })}

                        <Route path="/" element={<Navigate to="/servers" replace />}/>
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}

export default Layout
