// now we want to change the background color
// so we write a function that alternates between 2 colors

function toggle_body_background() {
    let old_color = document.querySelector("body").style.backgroundColor
    console.log(old_color)
    let new_color
    if (old_color == "darkgrey") {
        new_color = "bisque"
    } else {
        new_color = "darkgrey"
    }
    // all that is left is to actually change the DOM
    document.querySelector("body").style.backgroundColor = new_color
}

// so what we want to do on page load, it's rather this
// so that toggle_body_background gets called every second
function to_do_on_page_load() {
    setInterval(toggle_body_background, 1000)
}

// and now I can bind this callback to the 'load' event
document.addEventListener('DOMContentLoaded', to_do_on_page_load)
