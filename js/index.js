function openMenuPart2(event, menuName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("list-content");
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].className.indexOf(" d__none") === -1) {
      tabcontent[i].className += " d__none";
    }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).className = document.getElementById(menuName).className.replace(" d__none", "");
  event.currentTarget.className += " active";
}

function openMenuPart3BangPhai(event, menuName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].className.indexOf(" d__none") === -1) {
      tabcontent[i].className += " d__none";
    }
  }
  tablinks = document.getElementsByClassName("menpai-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).className = document.getElementById(menuName).className.replace(" d__none", "");
  event.currentTarget.className += " active";
}

function openMenuPart3(event, menuName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].className.indexOf(" d__none") === -1) {
      tabcontent[i].className += " d__none";
    }
  }
  tablinks = document.getElementsByClassName("part3Menu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).className = document.getElementById(menuName).className.replace(" d__none", "");
  event.currentTarget.className += " active";
}

function openMenuWanfaPart3(menuName) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("wfText");
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].className.indexOf(" d__none") === -1) {
      tabcontent[i].className += " d__none";
    }
  }
  document.getElementById(menuName).className = document.getElementById(menuName).className.replace(" d__none", "");
}

function closeAllMenuWanfaPart3() {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("wfText");
  for (i = 0; i < tabcontent.length; i++) {
    if (tabcontent[i].className.indexOf(" d__none") === -1) {
      tabcontent[i].className += " d__none";
    }
  }
}

