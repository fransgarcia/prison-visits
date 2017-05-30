(function () {

  'use strict';

  moj.Modules.SubmitOnce = {
    el: '.js-SubmitOnce',

    init: function () {
      this.cacheEls();
      this.bindEvents();
      this.options = {
        alt: this.$el.data('alt') || 'Please wait…'
      };
    },

    cacheEls: function () {
      this.$el = $(this.el);
      this.$submit = this.$el.find('[type=submit], button');
    },

    bindEvents: function () {
      this.$el.on('submit', $.proxy(this.disable, this));
    },

    disable: function () {
      switch(this.$submit[0].tagName) {
        case 'INPUT':
        case 'BUTTON':
          this.$submit.val(this.options.alt);
          break;
        default:
          this.$submit.text(this.options.alt);
      }
      this.$submit.prop('disabled', true);
    }
  };
}());
