document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    var sum = document.getElementById("total_sum");

    $("tr").click(function(){
        $(this).toggleClass("selected");
        var price = $(this).find("span").text();
        if($(this).hasClass("selected")){
            var new_sum = parseInt($(sum).text()) + parseInt(price);
            $(sum).html(new_sum);
        } else{
            var new_sum = parseInt($(sum).text()) - parseInt(price);
            $(sum).html(new_sum);
        }
    });

    // function addRowHandlers() {
    //     var table = document.getElementById("table");
    //     var rows = table.getElementsByTagName("tr");
    //     for (i = 0; i < rows.length; i++) {
    //         var currentRow = table.rows[i];
    //         var createClickHandler = function(row) {
    //         return function() {
    //             var cell = row.getElementsByTagName("td")[0];
    //             var price = cell.getElementByTagName("span");
    //             var id = price.innerHTML;
    //             sum.innerHTML = sum.innerHTML + id;
    //           };
    //         };
    //         currentRow.onclick = createClickHandler(currentRow);
    //     }
    // }


})