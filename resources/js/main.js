const $shareContainer = $('#share-container');
const $shareButton = $('#share-button');

$(document).ready(() => {
  $(document).on('click', ".off", () => {
    $shareButton.addClass('on');
    $shareContainer.removeClass('inactive');
    $shareContainer.addClass('active');
    $shareButton.removeClass('off');
  })

  $(document).on('click', ".on", () => {
    $shareButton.addClass('off');
    $shareContainer.removeClass('active');
    $shareContainer.addClass('inactive');
    $shareButton.removeClass('on');
  });

});
