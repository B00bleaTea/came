var params = (new URL(document.location)).searchParams;
var base = params.get('base');
const date = new Date();

if (base) {
    try {
        if (!confirm("you will lose all of your notes, do you want to continue?")) {
            window.location = '/';
        }
        window.localStorage.clear();
        data = JSON.parse(decodeURIComponent(base))
        
        let count = 0;
        for(let _ in data) {
            ++count;
        }

        for (var i = 1; i < count; ++i) {
            if (data[i]) {
                window.localStorage[i] = data[i];
            }
        }
        window.localStorage["last"] = parseInt(date.getDate());
    } catch (e) {
        alert(e);
    }
} else {
    alert("no base supplied");
}
window.location = '/';
