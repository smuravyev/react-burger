import PropTypes from 'prop-types';

const ingredientsPropTypes = PropTypes.shape({
      "_id" : function(props, propName, componentName) {
          if (!/^[a-z0-9]+$/.test(props[propName])) {
              return new Error(
                  'Prop `' + propName + '` of the' +
                  ' `' + componentName + '` has invalid value.');
           }
      },
      "name" : PropTypes.string.isRequired,
      "type" : PropTypes.oneOf(["main", "bun", "sauce"]).isRequired,
      "proteins" : PropTypes.number.isRequired,
      "fat" : PropTypes.number.isRequired,
      "carbohydrates" : PropTypes.number.isRequired,
      "calories" : PropTypes.number.isRequired,
      "price" : PropTypes.number.isRequired,
      "image" : PropTypes.string.isRequired,
      "image_mobile" : PropTypes.string,
      "image_large" : PropTypes.string,
      "__v" : PropTypes.number
});

export default ingredientsPropTypes;