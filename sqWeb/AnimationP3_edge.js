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
                            id: 'RoundRect18',
                            type: 'rect',
                            rect: ['85.5%', '77px', '116px', '116px', 'auto', 'auto'],
                            borderRadius: ["12px", "12px", "12px", "12px 12px"],
                            fill: ["rgba(214,214,240,0.55)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect17',
                            type: 'rect',
                            rect: ['71.7%', '372px', '56px', '56px', 'auto', 'auto'],
                            borderRadius: ["8px", "8px", "8px", "8px 8px"],
                            fill: ["rgba(143,225,183,0.68)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect14',
                            type: 'rect',
                            rect: ['88.6%', '372px', '100px', '102px', 'auto', 'auto'],
                            borderRadius: ["13px", "13px", "13px", "13px 13px"],
                            fill: ["rgba(202,243,202,0.51)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect15',
                            type: 'rect',
                            rect: ['94.3%', '233px', '56px', '56px', 'auto', 'auto'],
                            borderRadius: ["13px", "13px", "13px", "13px 13px"],
                            fill: ["rgba(202,243,202,0.5098)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect13',
                            type: 'rect',
                            rect: ['82.4%', '272px', '71px', '71px', 'auto', 'auto'],
                            borderRadius: ["13px", "13px", "13px", "13px 13px"],
                            fill: ["rgba(255,230,159,0.53)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect12',
                            type: 'rect',
                            rect: ['75.5%', '330px', '116px', '116px', 'auto', 'auto'],
                            borderRadius: ["13px", "13px", "13px", "13px 13px"],
                            fill: ["rgba(221,187,218,0.45)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect11',
                            type: 'rect',
                            rect: ['71.7%', '175px', '140px', '140px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px 10px"],
                            fill: ["rgba(181,222,251,0.44)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect8',
                            type: 'rect',
                            rect: ['20.1%', '528px', '43px', '41px', 'auto', 'auto'],
                            borderRadius: ["7px", "7px", "7px", "7px 7px"],
                            fill: ["rgba(175,217,246,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect9',
                            type: 'rect',
                            rect: ['50%', '84px', '91px', '86px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px 10px"],
                            fill: ["rgba(175,217,246,0.5412)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect7',
                            type: 'rect',
                            rect: ['28.9%', '452px', '56px', '56px', 'auto', 'auto'],
                            borderRadius: ["12px", "12px", "12px", "12px 12px"],
                            fill: ["rgba(64,211,64,0.43)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect6',
                            type: 'rect',
                            rect: ['13.9%', '371px', '71px', '71px', 'auto', 'auto'],
                            borderRadius: ["12px", "12px", "12px", "12px 12px"],
                            fill: ["rgba(170,191,235,0.43)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect5',
                            type: 'rect',
                            rect: ['5.5%', '349px', '116px', '116px', 'auto', 'auto'],
                            borderRadius: ["23px", "23px", "23px", "23px 23px"],
                            fill: ["rgba(196,238,217,0.49)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect4',
                            type: 'rect',
                            rect: ['-0.5%', '149px', '100px', '102px', 'auto', 'auto'],
                            borderRadius: ["23px", "23px", "23px", "23px 23px"],
                            fill: ["rgba(210,219,230,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect3',
                            type: 'rect',
                            rect: ['17.8%', '272px', '116px', '116px', 'auto', 'auto'],
                            borderRadius: ["23px", "23px", "23px", "23px 23px"],
                            fill: ["rgba(232,210,230,0.4784)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['12%', '175px', '116px', '116px', 'auto', 'auto'],
                            borderRadius: ["23px", "23px", "23px", "23px 23px"],
                            fill: ["rgba(180,211,246,0.51)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['26.4%', '90px', '100px', '102px', 'auto', 'auto'],
                            borderRadius: ["23px", "23px", "23px", "23px 23px"],
                            fill: ["rgba(232,210,230,0.48)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect10',
                            type: 'rect',
                            rect: ['60.5%', '186px', '91px', '86px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px 10px"],
                            fill: ["rgba(199,241,199,0.49)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect16',
                            type: 'rect',
                            rect: ['83.6%', '500px', '43px', '41px', 'auto', 'auto'],
                            borderRadius: ["8px", "8px", "8px", "8px 8px"],
                            fill: ["rgba(213,171,209,0.59)"],
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("AnimationP3_edgeActions.js");
})("EDGE-769030140");
