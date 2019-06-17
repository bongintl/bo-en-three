var Base3dObject = require('./base/base3dobject.js');
var THREE = require('three');

module.exports = class Ellipse extends Base3dObject {
    
    getGeometry ( attrs ) {
        
        var geometry = new THREE.CircleGeometry( .5, 32 );
        
        geometry.scale( attrs.width, attrs.height, 1 );
        
        return geometry;
        
    }
    
}