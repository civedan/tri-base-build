/* Run library — extracted from triathlon-base-build6.html (source of truth). */
const RUN_LIBRARY = [
  {id:'R1', title:'Easy Run', duration:30, equipment:'Outdoor · easy effort', venue:'outdoor',
    focus:['easy','aerobic'],
    blurb:'The default run. Conversational pace throughout, no structure needed beyond just running easy.',
    exercises:[
      {name:'Easy pace running', v:'Straight through, 6:05–7:00/km'},
    ]},
  {id:'R2', title:'Long Run', duration:45, equipment:'Outdoor · easy effort', venue:'outdoor',
    focus:['long','easy','aerobic'],
    blurb:'Time on feet is the goal, not pace. Resist drifting faster just because it feels easy early on.',
    exercises:[
      {name:'Easy pace running', v:'Continuous, no walk breaks needed'},
    ]},
  {id:'R3', title:'Hill Repeat Run', duration:35, equipment:'Outdoor · hilly route', venue:'outdoor',
    focus:['hill','intensity'],
    blurb:'Your outdoor substitute for structured intervals — the gradient controls the effort so you don’t need to hit a pace.',
    exercises:[
      {name:'Warm-up jog', v:'10 min easy'},
      {name:'Uphill repeat', v:'6 × 60–90s hard, jog down for recovery'},
      {name:'Cool-down jog', v:'10 min easy'},
    ]},
  {id:'R4', title:'Fartlek Run', duration:35, equipment:'Outdoor · flat/rolling', venue:'outdoor',
    focus:['tempo','speed-play'],
    blurb:'Unstructured speed play — faster surges dropped into an easy run, no watch-checking required.',
    exercises:[
      {name:'Warm-up jog', v:'10 min easy'},
      {name:'Fartlek surge', v:'1 min faster / 2 min easy × 6–8'},
      {name:'Cool-down jog', v:'5 min easy'},
    ]},
  {id:'R5', title:'Threshold Run', duration:40, equipment:'Outdoor · flat road/track', venue:'outdoor',
    focus:['threshold','future'],
    blurb:'Future block — needs a fresh 5K/VDOT retest before the pace target means anything.',
    exercises:[
      {name:'Warm-up jog', v:'15 min easy'},
      {name:'Threshold interval', v:'3 × 8 min @ threshold pace, 2 min jog rest'},
      {name:'Cool-down jog', v:'10 min easy'},
    ]},
];
