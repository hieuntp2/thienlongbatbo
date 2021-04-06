

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
  document.getElementById(menuName).className = document
    .getElementById(menuName)
    .className.replace(" d__none", "");
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
  document.getElementById(menuName).className = document
    .getElementById(menuName)
    .className.replace(" d__none", "");
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
  document.getElementById(menuName).className = document
    .getElementById(menuName)
    .className.replace(" d__none", "");
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
  document.getElementById(menuName).className = document
    .getElementById(menuName)
    .className.replace(" d__none", "");
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

$(document).ready(function () {
  // $(".download__section").hide();
  // $(".righ-side-bar").hide();
});

window.onscroll = function () {
  checkScrollEvent();
};

function checkScrollEvent() {
  var height =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  var body = document.body,
    html = document.documentElement;

  var windowHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  var heighPercent = height / windowHeight; // > 10% will show slider

  const topPercent = 0.1;
  const bottomPercent = 0.7;
  if (heighPercent < topPercent) {
    onTopEvent();
  } else if (heighPercent >= bottomPercent) {
    onBottomEvent();
  } else {
    onMiddleEvent();
  }

  // if (heighPercent >= topPercent && bottomPercent < bottomPercent) {
  //   onMiddleEvent();
  // }
}

function onTopEvent() {
  $(".download__section").hide();
  $(".righ-side-bar").hide();
}

function onBottomEvent() {
  $(".download__section").hide();
  $(".righ-side-bar").hide();
}

function onMiddleEvent() {
  $(".download__section").show();
  $(".righ-side-bar").show();
}
