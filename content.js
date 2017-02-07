$(document).ready(function(){

    var url = "https://docs.google.com/feeds/download/spreadsheets/Export"

    $(".spreadsheet").each(function(){
        var document_id = this.id;

        var data = {
            "key" : document_id,
            "exportFormat" : "csv",
            "gid" : 0
        };

        var callback = function(data) {
            var table = $("<table>").append("<tbody>");
            
            data.split("\n").forEach(function(row){

                var tr = $("<tr>").appendTo(table);
                row.split(",").forEach(function(cell){
                    $("<td>").appendTo(tr).text(cell);
                });
            
            });

            $("#"+document_id).replaceWith(table)
        };

        $.get(url, data, callback);
    });
});
