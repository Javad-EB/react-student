    let auth = false
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if (userInfo) {
        auth = true
    }

export { auth }