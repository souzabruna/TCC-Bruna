var Modal = (function(){

  var hideModal = function(selector){
    const modal = document.querySelector(selector);
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
  };

  return {
    open: function(selector){

      const modal = document.querySelector(selector);

    close: function(selector){
      hideModal(selector);

      const modalContent = document.querySelector(selector + ' .js-modalContent');
      modalContent.classList.remove('is-open');
    },

  };

})();