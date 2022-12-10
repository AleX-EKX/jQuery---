$(document).ready(function(){
$('#formSum').on('submit', function(event){
    event.preventDefault();
    var numberOne, numberTwo, summ;
    numberOne=$('#numberOne').val();
    numberTwo=$('#numberTwo').val();
    summ=parseInt(numberOne)+parseInt(numberTwo);
    $('#SumResult').text(summ);
    

});
})
