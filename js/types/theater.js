var Panel = require('./panel.js');
var embed = require('video-embed');

module.exports = class Theater extends Panel {
    
    constructor( attrs ) {
        
        attrs.height = (attrs.width / 16) * 9;
        
        super( attrs );
        
    }
    
    getStyle ( attrs ) {
        
        return {
            backgroundColor: 'black'
        };
        
    }
    
    getTemplate ( attrs ) {
        
        return `<div><iframe src=${ attrs.src }</iframe></div>`;
        
    }
    
};