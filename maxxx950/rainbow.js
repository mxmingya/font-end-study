// document.writeln("<div class=\"violet_square\">Violet</div>");
// document.writeln("<div class=\"indigo_square\">Indigo</div>");
// document.writeln("<div class=\"blue_square\">Blue</div>");
// document.writeln(("<div class=\"green_square\">Green</div>"));
// document.writeln(("<div class=\"yellow_square\">Yellow</div>"));
// document.writeln(("<div class=\"orange_square\">Orange</div>"));
// document.writeln(("<div class=\"red_square\">Red</div>"));

var square_names = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

var square_names_lowercase = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

for (var i = 0; i < 7; i++) {
    document.writeln("<div class=" + square_names_lowercase[i] + "_square>" + square_names[i] + "</div>");
}


document.writeln(("<div class=\"black_square\">Im not a color of the rainbow</div>"));