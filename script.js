const progressbar = document.querySelector("#progress")
const container = document.querySelector(".content")
const contentHeight = container.scrollHeight

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    const scrolled = scrollTop / (scrollHeight - clientHeight) * 100
    progressbar.style.width = `${scrolled}%`
})