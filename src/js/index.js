var textbox = document.getElementById("textbox");       
var main_div = document.getElementById("cals");


function ev_add() {
    if (textbox.value.trim()) {
        var today = new Date();

        if ("last" in window.localStorage) {
            if (window.localStorage["last"] == today.getDate()) {
                alert("you have already contributed here today");
                textbox.focus();
                return;
            } else {
                window.localStorage["last"] = parseInt(today.getDate());
            }
        } else {
            window.localStorage["last"] = parseInt(today.getDate());
        }

        today = `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
    
        var new_event = document.createElement("div");
        var text = document.createElement("p");
        var date = document.createElement("p");
    
        new_event.setAttribute("class", "event");
        
        text.setAttribute("class", "text");
        text.innerText = textbox.value;
    
        date.setAttribute("class", "date");
        date.innerText = today;
    
        new_event.appendChild(text);
        new_event.appendChild(date);
    
        main_div.insertAdjacentElement("afterbegin", new_event);

        window.localStorage[window.localStorage.length] = JSON.stringify({
            "text": textbox.value,
            "date": today
        });

        textbox.value = null;
        textbox.focus();
    }
}


function ev_restore() {
    main_div.innerHTML = null;
    for (var i = 1; i < window.localStorage.length; ++i) {
        var data = JSON.parse(window.localStorage[window.localStorage.length - i]);

        var new_event = document.createElement("div");
        var text = document.createElement("p");
        var date = document.createElement("p");

        new_event.setAttribute("class", "event");
    
        text.setAttribute("class", "text");
        text.innerText = data["text"];
    
        date.setAttribute("class", "date");
        date.innerText = data["date"];
    
        new_event.appendChild(text);
        new_event.appendChild(date);
    
        main_div.appendChild(new_event);
    }
}


function ev_export() {
    if (window.localStorage.length > 0) {
        textbox.value = `${window.location}page/rec/?base=${encodeURIComponent(JSON.stringify(window.localStorage))}`
    } else {
        alert("you have nothing to export");
    }
}


window.onload = ev_restore;
textbox.onkeypress = function (e) {
    if (!e) {
        e = window.event;
    }
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        ev_add();
    }
}
