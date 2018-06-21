function linkItemTab(evt, linkName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("link-info");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(linkName).style.display = "block";
}
function linkViewTab(evt, linkName) {
    var i, tabContent, tabLinks;
    var parent = evt.target.closest(".link-info__container");
    tabContent = parent.getElementsByClassName("link-info__tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = parent.getElementsByClassName("link-info__tab");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" link-info__tab--active", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " link-info__tab--active";
    
}