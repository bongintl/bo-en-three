var THREE = require('three');

var types = {
    Region: require('./types/rect.js'),
    Rect: require('./types/rect.js'),
    Group: require('./types/rect.js'),
    Ellipse: require('./types/ellipse.js'),
    Image: require('./types/image.js'),
    Text: require('./types/text.js'),
    Panel: require('./types/panel.js'),
    Theater: require('./types/theater.js')
}

module.exports = class World extends THREE.Scene {
    
    constructor ( object ) {
        
        function create( obj ) {
            
            var Ctor = types[ obj.type ];
            
            if( !Ctor ) {
                console.warn( obj.type + ' is not a thing' );
                return;
            }
            
            var instance = new Ctor( obj.attrs );
            
            if( obj.children && obj.children.length ) {
                
                var children = obj.children.map( create ).filter( x => x )
                
                if( children.length ) instance.add( ...children );
                
            }
            
            return instance;
                
        }
        
        super();
        
        this.add( ...object.children.map( create ).filter( x => x ) );
        
    }
    
}

// var Vector2 = require('./vendor/vector2.js');
// var Box2 = require('./vendor/box2.js');
// var { PREFIXED_TRANSFORM } = require('./lib/utils.js');

// var types = {
//     Region: require('./types/region.js'),
//     Rect: require('./types/rect.js'),
//     Ellipse: require('./types/ellipse.js'),
//     Text: require('./types/text.js'),
//     Image: require('./types/image.js'),
//     Song: require('./types/song.js'),
//     Sprite: require('./types/sprite.js'),
//     Panel: require('./types/panel.js'),
//     Theater: require('./types/theater.js')
// }

// module.exports = class World {
    
//     constructor ( config, context ) {
        
//         this.position = new Vector2();
        
//         this.box = new Box2(
//             this.position,
//             new Vector2( config.attrs.width, config.attrs.height )
//         )
        
//         this.element = context.worldElement;
//         this.children = this.create( config.children, context );
        
//         //this.regions.forEach( region => this.element.appendChild(region.element) );
        
//     }
    
//     create ( config, context ) {
        
//         return config.map( cfg => {
        
//             var Ctor = types[ cfg.type ];
            
//             var instance = new Ctor( cfg.attrs, context );
            
//             instance.addChildren( this.create( cfg.children, context ) )
            
//             return instance;
            
//         });
        
//     }
    
//     each( fn ) {
        
//         var walk = ( item, i ) => {
            
//             fn( item, i );
            
//             item.children.forEach( walk );
            
//         }
        
//         this.children.forEach( walk );
        
//     }
    
//     find( fn ) {
        
//         if( typeof fn === 'string' ) {
            
//             var type = fn.toLowerCase();
            
//             fn = x => x.getName().toLowerCase() === type;
            
//         }
        
//         var found = [];
        
//         var reducer = (ret, item) => {
            
//             if( fn(item) ) ret.push( item );
            
//             return item.children.reduce( reducer, ret );
            
//         }
        
//         return this.children.reduce( reducer, [] );
        
//     }
    
// }