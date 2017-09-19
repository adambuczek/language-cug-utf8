'use babel';

export default {

  activate: (status) => {
    atom.packages.serviceHub.provide('pigments.expressions.colors', '1.0.0', {
      name: 'cugutf8-hex-6',
      regexpString: '\\\\\\^([a-fA-F0-9]{6})',
      scopes: ['source.cugutf8'],
      handle: function myHandle (match, expression, context) {
        let hexString = match[1];
        this.hex = hexString;
      }
    });
  },

  provideColorExpressions: (service) => {
    return {
      name: 'cugutf8-hex-6',
      regexpString: '\\\\\\^([a-fA-F0-9]{6})',
      scopes: ['*'],
      handle: function myHandle (match, expression, context) {
        let hexString = match[1];
        this.hex = hexString;
      }
    };
  }

};
