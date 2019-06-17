var THREE = require('three');

class Group extends THREE.Object3D {
    
    constructor( attrs ) {
        
        super();
        
        this.position.set( attrs.x - attrs.width / 2, 0, attrs.y - attrs.height - 2 );
        
    }
    
}