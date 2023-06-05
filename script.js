const progressbar = document.querySelector("#progress")
const container = document.querySelector(".content")
const html = document.querySelector('html')
const scrollHeight = document.documentElement.scrollHeight



window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY
    const clientHeight = document.documentElement.clientHeight
    const scrolled = scrollTop / (scrollHeight-clientHeight) * 100

    progressbar.style.width = `${scrolled}%`
})
