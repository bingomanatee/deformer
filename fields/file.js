
module.exports.Field =  (function() {
  function Field() {
    Field.__super__.constructor.apply(this, arguments);
  }
  
  require('./../inherit').extends(Field, require('./../field').Field);

  Field.prototype.render_type = function() { return 'file';}
  
  return Field;
})();
