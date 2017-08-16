(function () {
  if (!Detector.webgl) Detector.addGetWebGLMessage();

  var container, stats;

  var camera, scene, renderer;

  var mesh, group1, group2, group3, light;

  var mouseX = 0, mouseY = 0;

  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;

  var geometry;
  var textMap = {};
  var tempV = new THREE.Vector3();
  var names = {};
  var centers = [];
  var showIndex = false;
  var rotate = true;
  var particleSystems=[];
  var lightSystems=[];
  var relations = [];
  var clock = new THREE.Clock();
  var tick = 0;
  var PI2 = Math.PI * 2;
  var alpha = 0.2;

  var material = new THREE.SpriteCanvasMaterial( {
    color: 0x168DA3,
    opacity:1,
    program: function ( context ) {
      context.beginPath();
      context.arc( 0, 0, 0.5, 0, PI2, true );
      context.fill();
    }
  } );
  var material0 = new THREE.SpriteCanvasMaterial( {
    color: 0x168DA3,
    opacity:alpha,
    program: function ( context ) {
      context.beginPath();
      context.arc( 0, 0, 0.5, 0, PI2, true );
      context.fill();
    }
  } );

  window.phere1 = function (p, c, rs, i, r) {
    relations = rs || relations;
    names = p || names;
    centers = c || centers;
    showIndex = i || showIndex;
    rotate = r === undefined ? rotate : r;
    init();
    animate();
  }


  function init() {
    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1300;
    window.cameraPos = camera.position;

    scene = new THREE.Scene();
    var color, f, f2, f3, p, vertexIndex,
      radius = 200;

    geometry = new THREE.IcosahedronGeometry(radius, 1);

    var clipPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    var texture = new THREE.TextureLoader().load("textures/sprites/disc.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    var materials = [
      new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading,
        vertexColors: THREE.VertexColors,
        shininess: 0,
        transparent: true,
        opacity: 0
      }),
      new THREE.MeshBasicMaterial({
        color: 0x168DA3,
        shading: THREE.FlatShading,
        wireframe: true,
        wireframeLinewidth: 2,
        transparent: true,
        clippingPlanes: [clipPlane]
      })
    ];

    group3 = THREE.SceneUtils.createMultiMaterialObject(geometry, materials);
    group3.position.x = 0;
    group3.rotation.x = 0;
    scene.add(group3);

    var vertices = geometry.vertices;

    var particle;

    function generateSprite() {
      var canvas = document.createElement( 'canvas' );
      canvas.width = 20;
      canvas.height = 20;
      var context = canvas.getContext( '2d' );
      var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
      gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
      gradient.addColorStop( 0.2, 'rgba(0,255,255,1)' );
      gradient.addColorStop( 0.4, 'rgba(0,0,64,1)' );
      gradient.addColorStop( 1, 'rgba(0,0,0,1)' );
      context.fillStyle = gradient;
      context.fillRect( 0, 0, canvas.width, canvas.height );
      return canvas;
    }
    var material1 = new THREE.SpriteMaterial( {
      map: new THREE.CanvasTexture( generateSprite() ),
      blending: THREE.AdditiveBlending
    } );

    var vector = new THREE.Vector3();
    var m = material;
    for ( var i = 0; i < vertices.length; i ++ ) {
      particle = new THREE.Sprite( m );
      vector.copy(vertices[i]);
      //vector.addScalar(1);
      particle.position.x = vector.x
      particle.position.y = vector.y
      particle.position.z = vector.z
      particle.scale.x = particle.scale.y = m==material?8:20;
      scene.add( particle );
      particleSystems.push(particle);

    }


    //light
    var ARC_SEGMENTS = 200;
    var splineMesh;
    var splines = {};
    var v1,v2,v3,angle;

    if(!window.rootCjs) debugger;
    for(var i=0;i<relations.length;i++){
      v1 = geometry.vertices[relations[i][0]];
      v2 = geometry.vertices[relations[i][1]];
      angle = v1.angleTo(v2);
      v3 = new THREE.Vector3();
      v3.crossVectors(v1,v2).normalize();

      var light1 = new window.glow.GlowLine();
      light1.pos = {
        v1:v1,
        v2:v2,
        i:relations[i],
        n:v3,
        a:0,
        v:new THREE.Vector3(),
        maxA:angle
      }
      light1.visible = false;
      rootCjs.addChild(light1);
      lightSystems.push(light1);
    }

    //renderer = new THREE.WebGLRenderer( { antialias: true, alpha:true } );
    renderer = new THREE.CanvasRenderer( { antialias: true, alpha:true });
    //renderer.enable(THREE.GL_POINT_ SPRITE);
    renderer.setPixelRatio(window.devicePixelRatio);
    //renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    window.onWindowResized(windowHalfX, windowHalfY, camera, renderer)
    container.appendChild(renderer.domElement);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    window.onWindowResized(windowHalfX, windowHalfY, camera, renderer);
  }

  function onDocumentMouseMove(event) {
    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );
  }

  //
  function animate() {
    requestAnimationFrame(animate);

    var delta = clock.getDelta();

    tick += delta;

    if ( tick < 0 ) tick = 0;

    if ( true || delta > 0 ) {
      var p = new THREE.Plane(tempV.copy(camera.position).normalize(),0);
      var widthHalf = 0.5*$('#container').width();
      var heightHalf = 0.5*$('#container').height();

      var spaceX = ($('#canvas').width()-$('#container').width())/2-5;//parseFloat($('#container').css('left').replace('px'))-parseFloat($('#animation_container').css('left').replace('px'));
      var spaceY = parseFloat($('#container').css('top').replace('px'));//parseFloat($('#container').css('top').replace('px'))
      var vector = new THREE.Vector3();
      var v2= new THREE.Vector3();
      var v3= new THREE.Vector2();
      var n = new THREE.Vector3(1,0,0);


      for(var i=0;i<lightSystems.length;i++){
        var l = lightSystems[i]

        if(p.distanceToPoint(l.pos.v1)<100&&p.distanceToPoint(l.pos.v2)<100){
          l.visible=false;
          continue;
        }
        l.visible=true;

        vector.copy(l.pos.v1);
        vector.project(camera);

        v2.copy(l.pos.v2);
        v2.project(camera);

        vector.x = (( vector.x * widthHalf ) + widthHalf+spaceX)/window.scaleBoth;
        vector.y = (- ( vector.y * heightHalf ) + heightHalf+spaceY)/window.scaleBoth;
        vector.z = 0;

        v2.x = (( v2.x * widthHalf ) + widthHalf + spaceX)/window.scaleBoth;
        v2.y = (- ( v2.y * heightHalf ) + heightHalf+spaceY)/window.scaleBoth;
        v2.z = 0;

        var v11 = new THREE.Vector2(vector.x,vector.y);
        var v22 = new THREE.Vector2(v2.x,v2.y);

        v3.lerpVectors(v22,v11,0.5);

        l.x = v3.x;
        l.y = v3.y;

        v3.subVectors(v22,v11);
        l.rotation = v3.angle()*180/Math.PI;
        l.scaleX = v3.length()/132;
        l.scaleY = 1.5/window.scaleBoth;
        l.visible = true;
      }

      geometry.vertices.forEach(function (v, i) {
        var d = p.distanceToPoint(v)
        if (d < 80) {
          particleSystems[i].material = material0
        } else if (d > -20) {
          particleSystems[i].material = material
        }

        if (!names[i] && !showIndex) return;
        vector.copy(v);
        vector.project(camera);
        vector.x = (( vector.x * widthHalf ) + widthHalf+spaceX)/window.scaleBoth;
        vector.y = (- ( vector.y * heightHalf ) + heightHalf+spaceY)/window.scaleBoth;
        vector.z = 0;

        if (!textMap['v_' + i]) {
          var node = textMap['v_' + i] = new window.glow.NodeSmall();
          node.nameTx.text = (showIndex ? i : '') + (names[i] || '');
          if(centers.indexOf(i)!=-1){
            node.nameTx.color = '#F3F600';
          }
          node.bg.scaleX = (node.nameTx.getMeasuredWidth()+20)/68.35;
          node.alpha = 0;

          window.rootCjs.addChild(node);
        }

        node = textMap['v_' + i];
        node.y = vector.y;
        node.x = vector.x;


        if (d < 80) {
          if (node.alpha > 0) node.alpha += (alpha - node.alpha) * 0.02;
          node.scaleX = -1;
        } else if (d > -20) {
          if (node.alpha < 1) node.alpha += (1 - node.alpha) * 0.02;
          node.scaleX = 1;
        }
      })
    }

    render();
  }

  function render() {
    if (!rotate) {
      camera.position = window.cameraPos;
    } else {
      camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.005);
    }
    window._cameraPos = camera.position;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);

    /*if(window.render1){
     window.render1.render(camera.position);
     }*/
  }
})()