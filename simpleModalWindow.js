let modalSettings = {
    "show": {
        "displayClass": "block",
        "listClass": "more-splash",
        "typeOverflow": "hidden",
        "action": "add"
    },
    
    "hide": {
        "displayClass": "none",
        "listClass": "more-splash",
        "typeOverflow": "",
        "action": "remove"
    },

    "search": {
        "buttonShow": ".more",
        "divToShow": ".overlay",
        "buttonToClose": ".popup-close"
    }
}

setClickSettings(modalSettings);

function setClickSettings(modalSettingsObj) {
    window.addEventListener("DOMContentLoaded", ()=>{

        let more = document.querySelector(modalSettingsObj.buttonShow),
            overlay = document.querySelector(modalSettingsObj.divToShow),
            close = document.querySelector(modalSettingsObj.buttonToClose);

        more.addEventListener("click", function () {
            showModalDialog(overlay, this, modalSettingsObj.show);
        });
        
        close.addEventListener("click", function() {
            showModalDialog(overlay, more, modalSettingsObj.hide);
        });
        
    });    
}

function showModalDialog(overlay, more, modalSettingsObj) {
    overlay.style.display = modalSettingsObj.displayClass;
    more.classList[modalSettingsObj.action](modalSettingsObj.listClass);
    document.body.style.overflow = modalSettingsObj.typeOverflow;
}
