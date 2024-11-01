$(document).ready(function () {
    // Open modal on button click
    $('[data-toggle="modal"]').click(function () {
        var modalId = $(this).data('target');
        $(modalId).modal('show');
    });

    // Close modal on close button click
    $('.close').click(function () {
        var modalId = $(this).parents('.modal');
        $(modalId).modal('hide');
    });

    // Close modal on outside click
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.modal').length) {
            $('.modal').modal('hide');
        }
    });
});