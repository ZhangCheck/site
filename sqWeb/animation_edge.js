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
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['78%', '95%', '243', '35', 'auto', 'auto']
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
                    duration: 4250,
                    autoPlay: true,
                    data: [
                        [
                            "eid90",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Symbol_2}",
                            '95%',
                            '95%'
                        ],
                        [
                            "eid91",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Symbol_2}",
                            '77.96%',
                            '77.96%'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-67.7%', '-282.7%', '519px', '117px', 'auto', 'auto'],
                            id: 'house3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/house.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '230px', '6px', 'auto', 'auto'],
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['13px', '6px', '230px', '6px', 'auto', 'auto'],
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['15px', '17px', '148px', '6px', 'auto', 'auto'],
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['61px', '23px', '113px', '6px', 'auto', 'auto'],
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['179px', '17px', '39px', '6px', 'auto', 'auto'],
                            fill: ['rgba(240,240,240,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['102px', '29px', '26px', '6px', 'auto', 'auto'],
                            fill: ['rgba(240,240,240,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '243px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 2855,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "width",
                            250,
                            1062,
                            "easeInOutQuad",
                            "${Rectangle2Copy3}",
                            '148px',
                            '230px'
                        ],
                        [
                            "eid66",
                            "width",
                            1312,
                            1188,
                            "easeInOutQuad",
                            "${Rectangle2Copy3}",
                            '230px',
                            '148px'
                        ],
                        [
                            "eid7",
                            "left",
                            393,
                            1042,
                            "easeInOutQuad",
                            "${Rectangle2Copy2}",
                            '13px',
                            '67px'
                        ],
                        [
                            "eid10",
                            "left",
                            1435,
                            1227,
                            "easeInOutQuad",
                            "${Rectangle2Copy2}",
                            '67px',
                            '13px'
                        ],
                        [
                            "eid69",
                            "width",
                            566,
                            1023,
                            "easeInOutQuad",
                            "${Rectangle2Copy}",
                            '230px',
                            '342px'
                        ],
                        [
                            "eid70",
                            "width",
                            1589,
                            1266,
                            "easeInOutQuad",
                            "${Rectangle2Copy}",
                            '342px',
                            '230px'
                        ],
                        [
                            "eid56",
                            "width",
                            0,
                            908,
                            "easeInOutQuad",
                            "${Rectangle2Copy6}",
                            '26px',
                            '47px'
                        ],
                        [
                            "eid57",
                            "width",
                            908,
                            1092,
                            "easeInOutQuad",
                            "${Rectangle2Copy6}",
                            '47px',
                            '26px'
                        ],
                        [
                            "eid20",
                            "left",
                            158,
                            908,
                            "easeInOutQuad",
                            "${Rectangle2Copy4}",
                            '58px',
                            '53px'
                        ],
                        [
                            "eid21",
                            "left",
                            1065,
                            1239,
                            "easeInOutQuad",
                            "${Rectangle2Copy4}",
                            '53px',
                            '58px'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            908,
                            "easeInOutQuad",
                            "${Rectangle2Copy6}",
                            '102px',
                            '75px'
                        ],
                        [
                            "eid26",
                            "left",
                            908,
                            1092,
                            "easeInOutQuad",
                            "${Rectangle2Copy6}",
                            '75px',
                            '102px'
                        ],
                        [
                            "eid81",
                            "left",
                            2000,
                            463,
                            "easeInOutQuad",
                            "${Rectangle2Copy6}",
                            '102px',
                            '115px'
                        ],
                        [
                            "eid82",
                            "left",
                            2463,
                            392,
                            "easeInOutQuad",
                            "${Rectangle2Copy6}",
                            '115px',
                            '102px'
                        ],
                        [
                            "eid73",
                            "width",
                            393,
                            1042,
                            "easeInOutQuad",
                            "${Rectangle2Copy2}",
                            '230px',
                            '304px'
                        ],
                        [
                            "eid74",
                            "width",
                            1435,
                            1227,
                            "easeInOutQuad",
                            "${Rectangle2Copy2}",
                            '304px',
                            '230px'
                        ],
                        [
                            "eid61",
                            "width",
                            158,
                            907,
                            "easeInOutQuad",
                            "${Rectangle2Copy4}",
                            '113px',
                            '190px'
                        ],
                        [
                            "eid62",
                            "width",
                            1065,
                            1239,
                            "easeInOutQuad",
                            "${Rectangle2Copy4}",
                            '190px',
                            '113px'
                        ],
                        [
                            "eid3",
                            "left",
                            566,
                            1023,
                            "easeInOutQuad",
                            "${Rectangle2Copy}",
                            '0px',
                            '-99px'
                        ],
                        [
                            "eid4",
                            "left",
                            1589,
                            1266,
                            "easeInOutQuad",
                            "${Rectangle2Copy}",
                            '-99px',
                            '0px'
                        ],
                        [
                            "eid12",
                            "left",
                            250,
                            1062,
                            "easeInOutQuad",
                            "${Rectangle2Copy3}",
                            '18px',
                            '-7px'
                        ],
                        [
                            "eid13",
                            "left",
                            1312,
                            1188,
                            "easeInOutQuad",
                            "${Rectangle2Copy3}",
                            '-7px',
                            '18px'
                        ],
                        [
                            "eid76",
                            "left",
                            104,
                            0,
                            "easeInOutQuad",
                            "${Rectangle2Copy5}",
                            '187px',
                            '208px'
                        ],
                        [
                            "eid77",
                            "left",
                            104,
                            861,
                            "easeInOutQuad",
                            "${Rectangle2Copy5}",
                            '208px',
                            '156px'
                        ],
                        [
                            "eid17",
                            "left",
                            965,
                            1173,
                            "easeInOutQuad",
                            "${Rectangle2Copy5}",
                            '156px',
                            '181px'
                        ],
                        [
                            "eid84",
                            "left",
                            2139,
                            361,
                            "easeInOutQuad",
                            "${Rectangle2Copy5}",
                            '181px',
                            '184px'
                        ],
                        [
                            "eid85",
                            "left",
                            2500,
                            355,
                            "easeInOutQuad",
                            "${Rectangle2Copy5}",
                            '184px',
                            '181px'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'wave',
                            symbolName: 'Symbol_1',
                            opacity: '0.96',
                            rect: ['-49.8%', '-100%', '243', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '243px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: true,
                    data: [
                        [
                            "eid78",
                            "left",
                            0,
                            2250,
                            "easeInOutQuad",
                            "${wave}",
                            '-47.57%',
                            '-42.14%'
                        ],
                        [
                            "eid80",
                            "left",
                            2250,
                            2000,
                            "easeInOutQuad",
                            "${wave}",
                            '-42.14%',
                            '-49.76%'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            2250,
                            "easeInOutQuad",
                            "${wave}",
                            '-100%',
                            '-108.57%'
                        ],
                        [
                            "eid83",
                            "top",
                            2250,
                            2000,
                            "easeInOutQuad",
                            "${wave}",
                            '-108.57%',
                            '-100%'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            0,
                            0,
                            "swing",
                            "${wave}",
                            '0deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'word_index_t',
                            opacity: '0',
                            rect: ['-163px', '-35px', '350px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/word_index_t.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '350px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 830,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "top",
                            0,
                            830,
                            "swing",
                            "${word_index_t}",
                            '-134px',
                            '-25px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            290,
                            "easeInOutSine",
                            "${word_index_t}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("animation_edgeActions.js");
})("EDGE-603670204");
