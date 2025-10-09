export const loadInstalled = () => {
    try {
        const data = localStorage.getItem("installed")
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}


export const addInstallation = (app) => {
    const installed = loadInstalled()
    try {
        const isDuplicate = installed.some(a => a.id === app.id)
        if(isDuplicate) return alert("App already installed")
        const updated = [...installed, app]
        localStorage.setItem("installed", JSON.stringify(updated))
        
    } catch (err) {
        console.log(err)
    }
}

export const removeInstallation = (id) => {
    const installed = loadInstalled()
    try {
        const updated = installed.filter(a => a.id !== id)
        localStorage.setItem("installed", JSON.stringify(updated))
        
    } catch (err) {
        console.log(err)
    }
} 