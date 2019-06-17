var THREE = require('three');
require('./vendor/three.cssrenderer.js')(THREE);

var World = require('./world.js');
var BoRenderer = require('./renderer.js');

var data = require('./world.json');

var ww = window.innerWidth;
var wh = window.innerHeight;

var renderer = new BoRenderer();
var world = new World( data );
//var camera = new THREE.PerspectiveCamera( 20, ww/wh, 1, 1000000 );
var camera = new THREE.OrthographicCamera( -ww/2, ww/2, wh/2, -wh/2, 1, 1000000 );

var a = Math.PI/4;
var d = 100000;
var z = 1;

renderer.setSize( ww, wh );
renderer.appendTo( document.body );

var focus = new THREE.Vector3();

function tick () {
    
    camera.zoom = z;
    
    camera.position.set( focus.x + Math.cos(a) * d, focus.y + d * .6, focus.z + Math.sin(a) * d );
    camera.lookAt( focus );
    
    renderer.render( world, camera );
    
    a += 0.01;
    
    requestAnimationFrame(tick);
    
}

var raycaster = new THREE.Raycaster();

var mouse = new THREE.Vector2();

var floor = new THREE.Mesh(
    new THREE.PlaneGeometry( data.attrs.width, data.attrs.height ),
    new THREE.MeshBasicMaterial({color: 'orange'})
)

window.addEventListener('click', function(){
    
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;		
	
	raycaster.setFromCamera( mouse, camera )
    
    var intersects = raycaster.intersectObjects( world.children );
    
    console.log( intersects );
    
    if( intersects.length ) {
        
        var point = intersects[0].point;
        
        focus.copy( point );
        
    }
    
    //var worldClick = mouse.clone().applyMatrix4( camera.matrixWorldInverse.clone().transpose() );
    //worldClick.z = 0;
    //worldClick.applyAxisAngle( X, Math.PI / 4 );
    
    //s.position.copy(worldClick);
    
})

tick();

window.addEventListener( 'mousewheel', e => {
    z += e.deltaY * 0.001;
    camera.updateProjectionMatrix();
})