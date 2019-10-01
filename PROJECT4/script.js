//1. Display an empty box to input any unit number
//2. User enters unit number
//3. Once user enters unit number, the conversion for lbs, grams, oz and kilograms are displayed simultaneously
//4. When a user modifies the number in the main input box, all unit conversions change simultaneously

$('#output').css('visibility', 'hidden');
$('#lbsInput').keyup(function () {
    $('#output').css('visibility', 'visible');
    const unit = $('#lbsInput').val();
    const selected = $("#options").val();
    doCalculation(unit, selected);
});

$('#options').change(function () {
    const selected = $("#options").val();
    const unit = $('#lbsInput').val();
    doCalculation(unit, selected);
});

function doCalculation(unit, selected) {

    if (selected === "lbs") {
        lbs(unit);
    } else if (selected === "g") {
        g(unit)
    } else if (selected === "kg") {
        kg(unit)
    } else if (selected === "oz") {
        oz(unit)
    }

}

function lbs(pounds) {
    $('#lbsOutput').html(pounds);
    $('#gramsOutput').html(Math.floor(pounds * 453.59237));
    $('#kgOutput').html((pounds * 0.45359237).toFixed(2));
    $('#ozOutput').html(Math.floor(pounds * 16));
}

function g(grams) {
    $('#lbsOutput').html(Math.floor(grams / 453.59237));
    $('#gramsOutput').html(grams);
    $('#kgOutput').html(Math.floor(grams / 1000));
    $('#ozOutput').html(Math.floor(grams / 28.34952));
}

function kg(kilograms) {
    $('#lbsOutput').html(Math.floor(kilograms / 0.45359237));
    $('#gramsOutput').html(Math.floor(kilograms * 1000));
    $('#kgOutput').html(kilograms);
    $('#ozOutput').html(Math.floor(kilograms / 0.02834952));
}

function oz(ounces) {
    $('#lbsOutput').html(Math.floor(ounces / 16));
    $('#gramsOutput').html(Math.floor(ounces * 28.34952));
    $('#kgOutput').html(Math.floor(ounces * 0.02834952))
    $('#ozOutput').html(ounces);
}




//to.fixed(2)


