// task 1

//$ ("a[href^='https://']").attr('target', '_blank');

// task 2

//$('h2.head').css('background-color', 'green').find('.inner').css('font-size','35px');

// // Task 3 



// Task 4

$('.inputs input:checkbox').click(() => { 
    let lengthEl = $('.inputs input:checkbox:checked').length;
    let checkboxCheked = $('.inputs input:checkbox:checked');
    if (lengthEl >= 3 ) {
        if (checkboxCheked !== true) {
            $('.inputs input:checkbox').not('.inputs input:checked').remove();
        }
            
    }  
});