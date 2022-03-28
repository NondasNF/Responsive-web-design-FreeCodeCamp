function toggleNavChildren(visibility) {
  let navChildren = document.querySelectorAll("#navbar > *");
  for (var i = 0; i < navChildren.length; i++) {
    navChildren[i].style.display = visibility
  }
}

function toggleInput(nextInput) {
  if (nextInput == "open") {
    document.getElementById("open-nav").style.display = "block"
    document.getElementById("close-nav").style.display = "none"
  } else {
    document.getElementById("open-nav").style.display = "none"
    document.getElementById("close-nav").style.display = "block"
  }
}

function openNav() {
  document.getElementById("navbar").style.width = "250px"
  document.getElementById("main-doc").style.marginLeft = "250px"
  toggleInput("close")
  toggleNavChildren("block")
}

function closeNav() {
  document.getElementById("navbar").style.width = "0"
  document.getElementById("main-doc").style.marginLeft = "40px"
  toggleInput("open")
  toggleNavChildren("none")
}
