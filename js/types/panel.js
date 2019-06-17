var BaseCSSObject = require('./base/basecssobject.js');
var THREE = require('three');

module.exports = class Panel extends BaseCSSObject {
    
    constructor ( attrs ) {
        
        super( attrs );
        
        this.rotation.x = 0;
        this.rotation.y = attrs.direction === 'left' ? Math.PI / 2 : 0;
        
        this.position.set( attrs.x, attrs.height / 2, attrs.y );
        
    }
    
    getStyle ( attrs ) {
        
        return {
            backgroundColor: attrs.color
        }
        
    }
    
}