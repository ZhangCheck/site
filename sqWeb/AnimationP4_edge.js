/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle16',
                            type: 'rect',
                            rect: ['1170px', '236px', '17px', '145px', 'auto', 'auto'],
                            fill: ["rgba(226,241,226,0.56)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle15',
                            type: 'rect',
                            rect: ['87.1%', '382px', '13px', '90px', 'auto', 'auto'],
                            fill: ["rgba(243,202,223,0.57)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14',
                            type: 'rect',
                            rect: ['95.5%', '2px', '21px', '161px', 'auto', 'auto'],
                            fill: ["rgba(234,214,232,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy2',
                            type: 'rect',
                            rect: ['15.5%', '-110px', '21px', '161px', 'auto', 'auto'],
                            fill: ["rgba(234,214,232,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy',
                            type: 'rect',
                            rect: ['1.9%', '-430px', '21px', '161px', 'auto', 'auto'],
                            fill: ["rgba(234,214,232,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle12',
                            type: 'rect',
                            rect: ['83.8%', '229px', '21px', '136px', 'auto', 'auto'],
                            fill: ["rgba(246,234,194,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle11',
                            type: 'rect',
                            rect: ['929px', '126px', '10px', '161px', 'auto', 'auto'],
                            fill: ["rgba(141,222,179,0.58)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle11Copy',
                            type: 'rect',
                            rect: ['64.4%', '-430px', '10px', '161px', 'auto', 'auto'],
                            fill: ["rgba(141,222,179,0.58)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13',
                            type: 'rect',
                            rect: ['89.7%', '40px', '28px', '222px', 'auto', 'auto'],
                            fill: ["rgba(209,234,209,0.57)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8',
                            type: 'rect',
                            rect: ['63.1%', '-42px', '21px', '90px', 'auto', 'auto'],
                            fill: ["rgba(211,234,211,0.57)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9',
                            type: 'rect',
                            rect: ['69.5%', '2px', '10px', '209px', 'auto', 'auto'],
                            fill: ["rgba(235,250,235,0.53)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle10',
                            type: 'rect',
                            rect: ['915px', '25px', '28px', '161px', 'auto', 'auto'],
                            fill: ["rgba(226,242,251,0.53)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['21.6%', '48px', '28px', '209px', 'auto', 'auto'],
                            fill: ["rgba(208,223,243,0.56)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5Copy',
                            type: 'rect',
                            rect: ['90.9%', '-394px', '28px', '209px', 'auto', 'auto'],
                            fill: ["rgba(208,223,243,0.56)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['28.5%', '215px', '21px', '109px', 'auto', 'auto'],
                            fill: ["rgba(145,229,145,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6Copy',
                            type: 'rect',
                            rect: ['6.3%', '-138px', '21px', '109px', 'auto', 'auto'],
                            fill: ["rgba(145,229,145,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            type: 'rect',
                            rect: ['35.7%', '-42px', '21px', '109px', 'auto', 'auto'],
                            fill: ["rgba(244,227,175,0.52)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['10.1%', '314px', '28px', '136px', 'auto', 'auto'],
                            fill: ["rgba(197,214,240,0.50)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['15.5%', '280px', '21px', '136px', 'auto', 'auto'],
                            fill: ["rgba(217,241,229,0.61)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy2',
                            type: 'rect',
                            rect: ['28.5%', '-394px', '21px', '136px', 'auto', 'auto'],
                            fill: ["rgba(217,241,229,0.61)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['11.3%', '184px', '10px', '191px', 'auto', 'auto'],
                            fill: ["rgba(235,218,234,0.47)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['3%', '0px', '17px', '236px', 'auto', 'auto'],
                            fill: ["rgba(216,223,229,0.52)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle4Copy',
                            type: 'rect',
                            rect: ['77.6%', '-274px', '21px', '136px', 'auto', 'auto'],
                            fill: ["rgba(217,241,229,0.61)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle12Copy',
                            type: 'rect',
                            rect: ['11.7%', '-247px', '21px', '136px', 'auto', 'auto'],
                            fill: ["rgba(246,234,194,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("AnimationP4_edgeActions.js");
})("EDGE-811303426");
