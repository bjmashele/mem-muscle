let preloadedState = {
    auth: { authenticated: localStorage.getItem('token') }
}

export default preloadedState;