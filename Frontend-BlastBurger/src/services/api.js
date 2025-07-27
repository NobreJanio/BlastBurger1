import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3002",
})

// para interceptor
api.interceptors.request.use((config => {
    const token = localStorage.getItem('token')
    
    // Não enviar token para rotas públicas
    const publicRoutes = ['/users', '/session']
    const isPublicRoute = publicRoutes.some(route => config.url.includes(route))
    
    if (token && !isPublicRoute) {
        config.headers.authorization = `Bearer ${token}`
    }

    return config
}))