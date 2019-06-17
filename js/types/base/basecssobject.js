var THREE = require('three');

var el = document.createElement('div');

module.exports = class BaseCSSObject extends THREE.CSS3DObject {
    
    constructor ( attrs ) {
        
        super();
        
        var template = this.getTemplate( attrs );
        
        el.innerHTML = template;
        
        this.element = el.childNodes[0];
        
        if( attrs.classes ) this.element.classList.add( ...attrs.classes );
        
        var style = this.getStyle( attrs );
        
        for ( var prop in style ) {
            
            this.element.style[ prop ] = style[ prop ];
            
        }
        
        this.element.style.width = attrs.width + 'px';
        this.element.style.height = attrs.height + 'px';
        
        this.rotation.x = -Math.PI / 2;
        
        this.position.set( attrs.x + attrs.width / 2, 0, attrs.y + attrs.height / 2 );
        
    }
    
    getTemplate () {
        
        return '<div></div>';
        
    }
    
    getStyle () {
        
        return {};
        
    }

    
}