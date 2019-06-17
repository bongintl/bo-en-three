var THREE = require('three');

module.exports = class Base3dObject extends THREE.Mesh {
    
    constructor( attrs ) {
        
        super();
        
        var geometry = this.getGeometry( attrs );
        
        geometry.rotateX( -Math.PI / 2 );
        
        if ( attrs.rotate ) geometry.rotateZ( THREE.Math.degToRad( attrs.rotate ) );
        
        var material = this.getMaterial( attrs );
        
        this.geometry = geometry;
        this.material = material;
        
        this.updateMorphTargets();
        
        this.position.x = attrs.x + attrs.width / 2;
        this.position.z = attrs.y + attrs.height / 2;
        
    }
    
    getMaterial ( attrs ) {
        
        return new THREE.MeshBasicMaterial({
            color: attrs.color || 'black',
            depthWrite: false
        })
        
    }
    
}