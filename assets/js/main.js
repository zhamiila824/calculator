document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const sum = document.getElementById('sum');

    function addRowHandlers() {
        var table = document.getElementById("table");
        var rows = table.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
            var currentRow = table.rows[i];
            var createClickHandler = function(row) {
            return function() {
                
                var cell = row.getElementsByTagName("td")[0];
                var id = cell.innerHTML;
                alert("id:" + id);
              };
            };
            currentRow.onclick = createClickHandler(currentRow);
        }
    }


})