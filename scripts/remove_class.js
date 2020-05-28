const interval = setInterval(() => {
    const back = document.querySelector(".overlay")
    const box = document.querySelector(".mv-content-viewer-limitation")
    if(back && box ){
        back.remove()
        box.remove()
        clearInterval(interval)
        
    }
}, 1000
)
