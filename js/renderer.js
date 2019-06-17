var THREE = require('three');

module.exports = class BoRenderer {
    
    constructor () {
        
        this.glRenderer = new THREE.WebGLRenderer( {antialias: true } )
        this.glRenderer.domElement.classList.add('renderer', 'renderer_gl');
        
        this.cssRenderer = new THREE.CSS3DRenderer();
        this.cssRenderer.domElement.classList.add('renderer', 'renderer_css');
        
    }
    
    setSize( w, h ) {
        
        this.glRenderer.setSize( w, h );
        this.cssRenderer.setSize( w, h );
        
    }
    
    render ( scene, camera ) {
        
        this.cssRenderer.render( scene, camera );
        this.glRenderer.render( scene, camera );
        
        
    }
    
    appendTo( element ) {
        
        element.appendChild( this.glRenderer.domElement );
        element.appendChild( this.cssRenderer.domElement );
        
    }
    
}