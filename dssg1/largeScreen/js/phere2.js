(function (){
  //if ( Detector && ! Detector.webgl ) Detector.addGetWebGLMessage();

  var container, stats;

  var camera, scene, renderer;

  var mesh, group1, group2, group3, light;

  var mouseX = 0, mouseY = 0;

  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;

  var geometry3;
  var textMap = {};
  var names = window.names;
  var relations = [];

  var center = 19;
  var particleSystems=[];
  var particleSystem;
  var options;
  var spawnerOptions;
  var tick = 0;
  var clock = new THREE.Clock();
  var controls;
  var tempV = new THREE.Vector3();

  window.phere2 = function(p){
	  relations = p || [];
	  init();
	  animate();
  }
  

  function init() {

    container = document.getElementById( 'lines' );

    camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1300;

    scene = new THREE.Scene();

    /*light = new THREE.DirectionalLight( 0xffffff );
     light.position.set( 0, 0, 1 );
     scene.add( light );*/

    particleSystem = new THREE.GPUParticleSystem( {
      maxParticles: 25000
    } );

    //scene.add( particleSystem );

    options = {
      position: new THREE.Vector3(),
      positionRandomness: 0,
      velocity: new THREE.Vector3(),
      velocityRandomness: 2,
      color: 0x94EEFF,
      colorRandomness: .2,
      turbulence: 0.01,
      lifetime: 2,
      size: 2,
      sizeRandomness: 1,
      maxParticles:25000
    };

    spawnerOptions = {
      spawnRate: 15000,
      horizontalSpeed: 1.5,
      verticalSpeed: 1.33,
      timeScale: 1
    };


    var faceIndices = [ 'a', 'b', 'c' ];

    var color, f, f2, f3, p, vertexIndex,

      radius = 200;

    geometry3 = new THREE.IcosahedronGeometry( radius, 1 );

    var clipPlane =  new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    var materials = [
      new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading, vertexColors: THREE.VertexColors, shininess: 0,transparent: true,opacity:0 } ),
      new THREE.MeshBasicMaterial( { color: 0x1C808F, shading: THREE.FlatShading, wireframe: true,wireframeLinewidth:3, transparent: true, clippingPlanes:[clipPlane] } )
    ];



    group3 = THREE.SceneUtils.createMultiMaterialObject( geometry3, materials );
    group3.position.x = 0;
    group3.rotation.x = 0;
    //scene.add( group3 );

    //curve
    var ARC_SEGMENTS = 200;
    var geometry = new THREE.Geometry();
    var splineMesh;
    var splines = {};
    var v1,v2,v3,angle;
    /*var positions = [];
     positions[0] = v1 = geometry3.vertices[19];
     positions[3] = v2 = geometry3.vertices[5];
     angle = v1.angleTo(v2);
     v3 = new THREE.Vector3();
     v3.crossVectors(v1,v2).normalize();
     var v4 = v1.clone();
     v4.applyAxisAngle(v3,angle*0.2);
     var v5 = v2.clone();
     v5.applyAxisAngle(v3,-angle*0.2);
     v4.setLength(v1.length()+10);
     v5.setLength(v1.length()+10);
     positions[1] = v4;
     positions[2] = v5;*/

    for(var i=0;i<relations.length;i++){
      v1 = geometry3.vertices[relations[i][0]];
      v2 = geometry3.vertices[relations[i][1]];
      angle = v1.angleTo(v2);
      v3 = new THREE.Vector3();
      v3.crossVectors(v1,v2).normalize();

      var light1 = new THREE.GPUParticleSystem( {
        maxParticles: options.maxParticles
      } );
      light1.pos = {
        v1:v1,
        v2:v2,
        n:v3,
        a:0,
        v:new THREE.Vector3(),
        maxA:angle
      }

      scene.add( light1 );

      particleSystems.push(light1)
    }


    /*var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );
     var object = new THREE.Mesh( new THREE.BoxGeometry( 20, 20, 20 ), material );
     var object1 = new THREE.Mesh( new THREE.BoxGeometry( 20, 20, 20 ), material );
     object.position = v4;
     object.castShadow = true;
     object.receiveShadow = true;
     scene.add( object );

     object1.position = v5;
     scene.add( object1 );*/

    /*for ( var i = 0; i < 4; i ++ ) {

     positions.push(  );

     }for ( var i = 0; i < ARC_SEGMENTS; i ++ ) {

     geometry.vertices.push( new THREE.Vector3() );

     }

     curve = new THREE.CatmullRomCurve3( positions );
     curve.type = 'chordal';
     curve.mesh = new THREE.Line( geometry.clone(), new THREE.LineBasicMaterial( {
     color: 0xff0000,
     opacity: 1,
     linewidth: 4
     } ) );
     curve.mesh.castShadow = true;
     splines.chordal = curve;
     scene.add( curve.mesh );

     function updateSplineOutline() {

     for ( var k in splines ) {

     var spline = splines[ k ];

     splineMesh = spline.mesh;

     for ( var i = 0; i < ARC_SEGMENTS; i ++ ) {

     var p = splineMesh.geometry.vertices[ i ];
     p.copy( spline.getPoint( i /  ( ARC_SEGMENTS - 1 ) ) );

     }

     splineMesh.geometry.verticesNeedUpdate = true;

     }


     }

     updateSplineOutline();*/

    //curve end



    renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
    //renderer.setClearColor( 0xffffff );
    renderer.setPixelRatio( window.devicePixelRatio );
    //renderer.setSize( window.useWidth,window.useHeight);//window.innerWidth, window.innerHeight );
    window.onWindowResized(windowHalfX,windowHalfY,camera,renderer)
    container.appendChild( renderer.domElement );

    //stats = new Stats();
    //container.appendChild( stats.dom );



    //document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    //

    window.addEventListener( 'resize', onWindowResize, false );

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 5.0;
    controls.zoomSpeed = 2.2;
    controls.panSpeed = 1;
    controls.dynamicDampingFactor = 0.3;

  }

  function onWindowResize() {

    window.onWindowResized(windowHalfX,windowHalfY,camera,renderer);
  }

  function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );

  }



  //
  function animate() {

    requestAnimationFrame( animate );

    controls.update();

    var delta = clock.getDelta() * spawnerOptions.timeScale;

    tick += delta;

    if ( tick < 0 ) tick = 0;

    if ( delta > 0 ) {

      options.position.x = Math.sin( tick * spawnerOptions.horizontalSpeed ) * 200;
      options.position.y = Math.sin( tick * spawnerOptions.verticalSpeed ) * 200;
      options.position.z = Math.sin( tick * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed ) * 50;

      for ( var x = 0; x < spawnerOptions.spawnRate * delta; x++ ) {

        // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
        // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below

        particleSystem.spawnParticle( options );

      }

    }
    particleSystem.update( tick );

    if ( delta > 0 ) {
      var p = new THREE.Plane(tempV.copy(camera.position).normalize(),0);
      for(var i=0;i<particleSystems.length;i++){
        var pos = particleSystems[i].pos;
        if(p.distanceToPoint(pos.v1)<0&&p.distanceToPoint(pos.v2)<0){
          particleSystems[i].visible=false;
          continue;
        }
        particleSystems[i].visible=true;
        pos.a += 0.01;
        if(!pos.ca) pos.ca = pos.maxA/2;
        var ca = pos.ca;
        if(pos.a>pos.maxA){
          pos.a = 0;
        }
        pos.v.copy(pos.v1).applyAxisAngle(pos.n,pos.a);//.setLength(pos.v1.length()*(1.1-0.1*Math.abs(ca-pos.a)/ca))
        options.position.x = pos.v.x;
        options.position.y = pos.v.y
        options.position.z = pos.v.z;

        for ( var x = 0; x < spawnerOptions.spawnRate * delta; x++ ) {

          // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
          // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below

          particleSystems[i].spawnParticle( options );

        }
        particleSystems[i].update( tick );
      }


    }





    render();
    //stats.update();

  }



  function render(pos) {
    camera.position.copy(window._cameraPos);

    camera.lookAt( scene.position );

    renderer.render( scene, camera );

  }

  window.render1 = {
    animate:animate,
    camera:camera,
    render:render
  }

})()