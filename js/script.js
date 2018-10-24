var colors = {1: 'green', 2: 'blue', 3: 'red', 4: 'aqua', 5: 'blueviolet',6 : 'chartreuse'};

function changecolor(divelement) {
    color = Math.floor(Math.random() * 6) + 1;
    divelement.style.backgroundColor = colors[color];
}
var grid = jQuery('#pixelgrid');

for (i = 0; i < 16; i++) 
{
    var row = '<div class="oneRow">';

    for (j = 0; j < 16; j++)
        row += '<div class="square" onmouseover="changecolor(this)"></div>';

    row += '</div>';

    grid.append(row);
}