function searchJob() {
    $('#search').keyup(function () {
        $.getJSON("projectjson.json", function (data) {
            var search = $('#search').val();
            var regex = new RegExp(search, 'i');
            var output;
            $.each(data, function (key, val) {
                if ((val.project.search(regex) != -1)) {
                    output += "<tr>";
                    output += "<td project='" + key + "'>" + val.project + "</td>";
                    output += "<td project='" + key + "'>" + val.job_no + "</td>";
                    output += "<td project='" + key + "'>" + val.address + "</td>";
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
