var Rect = require('./rect.js');
var THREE = require('three');

var loader = new THREE.TextureLoader();

module.exports = class Image extends Rect {
    
    constructor ( attrs ) {
        
        super( attrs );
        
        this.srcs = attrs.src;
        
    }
    
    getMaterial( attrs ) {
        
        return new THREE.MeshBasicMaterial({
            map: loader.load( attrs.src[0] ),
            depthWrite: false
        })
        
    }
    
}