function searchJob() {
    $('#search').keyup(function () {
        $.getJSON("projectjson.json", function (data) {
            var search = $('#search').val();
            var regex = new RegExp(search, 'i');
            var output;
            var googleadd = "https://google.com/maps/place/";
            $.each(data, function (key, val) {
                if ((val.project.search(regex) != -1)) {
                    output += "<tr>";
                    output += "<td project='" + key + "'>" + val.project + "</td>";
                    output += "<td project='" + key + "'>" + "<a id='number' href='concrete.html' onclick='storeJobNo()'>" + val.job_no + "</a></td>";
                    output += "<td project='" + key + "'>" + "<a href='" + googleadd + val.address + "'>" + val.address + "</a></td>";
                    output += "<td project='" + key + "'>" + val.permit + "</td>";
                    output += "<td project='" + key + "'>" +  val.contractor + "</td>";
                    output += "<td project='" + key + "'>" + "<a href='tel:" + val.phone + "'>" + val.phone + "</a></td>";
                    output += "<td project='" + key + "'>" + val.manager + "</td>"; 
                    output += "</tr>";
                }
            });
            $('tbody').html(output);
        });
    });
}

document.getElementById("number").onclick = function () {
    fillForm()
};


function createCookie(jobno, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = jobno + "=" + value + expires + "; path=/";
}

function readCookie(jobno) {
    var jobnoEQ = jobno + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(jobnoEQ) == 0) return c.substring(jobnoEQ.length, c.length);
    }
    return null;
}

function eraseCookie(jobno) {
    createCookie(jobno, "", -1);
}
