var Base3dObject = require('./base/base3dobject.js');
var THREE = require('three');

module.exports = class Rect extends Base3dObject {
    
    getGeometry ( attrs ) {
        
        return new THREE.PlaneGeometry( attrs.width, attrs.height );
        
    }
    
}