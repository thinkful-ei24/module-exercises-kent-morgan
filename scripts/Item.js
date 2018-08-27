const Item = (function() {
  const validateName = function(name) {
    if (!name) {
      throw new ReferenceError('Name does not exist.');
    }
  };

  const create = function(name) {
    return {
      id: cuid(),
      name: name,
      checked: false
    }
  };
  return {
    validateName,
    create
  };
}());