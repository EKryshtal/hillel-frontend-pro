$(document).ready(function () {
  const $modal = $("#my-modal");
  const $openBtn = $("#open-btn");
  const $closeBtn = $("#close-btn");
  const stateSelector = 'show';
  
  $openBtn.click(() => {
    $modal.addClass(stateSelector)
  });
  $closeBtn.click(() => {
    $modal.removeClass(stateSelector);
  });
});
