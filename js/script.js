function searchJob() {
    $('#search').keyup(function () {
        $.getJSON("example.json", function (data) {
            var search = $('#search').val();
            var regex = new RegExp(search, 'i');
            var output;
            var googleadd = "https://google.com/maps/place/";
            $.each(data, function (key, val) {
                if ((val.project.search(regex) != -1)) {
                    output += "<tr>";
                    output += "<td project='" + key + "'>" + val.project + "</td>";
                    output += "<td project='" + key + "'>" + "<a id='number' href='concrete.html'>" + val.job_no + "</a></td>";
                    output += "<td project='" + key + "'>" + "<a href='" + googleadd + val.address + "'>" + val.address + "</a></td>";
                    output += "<td project='" + key + "'>" + val.permit + "</td>";
                    output += "<td project='" + key + "'>" + val.contractor + "</td>";
                    output += "<td project='" + key + "'>" + val.phone + "</td>";
                    output += "<td project='" + key + "'>" + val.manager + "</td>";
                    output += "</tr>";
                }
            });
            $('tbody').html(output);
        });
    });
}

function concreteForm() {
    $('#number').onload(function() {
        $.getJSON("example.json", function (data) {
            var num = $('#number').val();
            var regex = new RegExp(num, 'i');
            var output;
            $.each(data, function (key, val) {
                if ((val.job_no.num(regex) != -1)) {
                    output += "<tr>";
                    output += "<td Job Number='" + key + "'>" + val.job_no + "</td>";
                }
            })
        });
    });
}
