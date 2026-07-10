/* Bike library — extracted from triathlon-base-build6.html (source of truth). */
const BIKE_VENUE_OPTIONS = [['all','All'],['outdoor','Outdoor'],['indoor','Indoor']];

const BIKE_LIBRARY = [
  {id:'B1', title:'Easy Spin (Outdoor)', duration:30, equipment:'Outdoor · flat/rolling', venue:'outdoor',
    focus:['easy','aerobic'],
    blurb:'Flat or rolling terrain, conversational effort. Zone 2 by heart rate.',
    exercises:[
      {name:'Steady riding', v:'Zone 2 by HR, conversational'},
    ]},
  {id:'B2', title:'Long Ride (Outdoor)', duration:60, equipment:'Outdoor · flat/rolling', venue:'outdoor',
    focus:['long','easy'],
    blurb:'Your Sunday staple. Some Zone 3 drift on climbs is fine — that’s terrain, not a sign to back off.',
    exercises:[
      {name:'Steady riding', v:'Zone 2 by HR, drift on climbs OK'},
    ]},
  {id:'B3', title:'Hill Repeat Ride (Outdoor)', duration:45, equipment:'Outdoor · hilly route', venue:'outdoor',
    focus:['hill','intensity'],
    blurb:'The outdoor answer to structured intervals — the climb controls the effort for you.',
    exercises:[
      {name:'Warm-up', v:'15 min easy'},
      {name:'Climb repeat', v:'5–8 × 3–5 min hard, spin down to recover'},
      {name:'Cool-down', v:'10 min easy'},
    ]},
  {id:'B4', title:'Easy Spin (Zwift, ERG)', duration:30, equipment:'Indoor · Zwift ERG mode', venue:'indoor',
    focus:['easy','erg'],
    blurb:'ERG mode locks the power target regardless of gear or cadence — good for holding an exact easy effort.',
    exercises:[
      {name:'ERG steady effort', v:'Zone 2 power, cadence 85–95rpm'},
    ]},
  {id:'B5', title:'Recovery Spin (Zwift)', duration:20, equipment:'Indoor · Zwift ERG mode', venue:'indoor',
    focus:['recovery'],
    blurb:'Very light legs-only spin, no pressure on cadence or power.',
    exercises:[
      {name:'ERG light effort', v:'Easy legs-only spin'},
    ]},
  {id:'B6', title:'Sweet Spot Ride (Zwift, ERG)', duration:50, equipment:'Indoor · Zwift ERG mode', venue:'indoor',
    focus:['tempo','future'],
    blurb:'Future block — needs an FTP test first so the power target actually means something.',
    exercises:[
      {name:'Warm-up', v:'15 min easy'},
      {name:'Sweet spot block', v:'2 × 15 min @ 88–94% FTP, 5 min easy between'},
      {name:'Cool-down', v:'10 min easy'},
    ]},
  {id:'B7', title:'Threshold Intervals (Zwift, ERG)', duration:45, equipment:'Indoor · Zwift ERG mode', venue:'indoor',
    focus:['threshold','future'],
    blurb:'Future block — needs an FTP test first.',
    exercises:[
      {name:'Warm-up', v:'15 min easy'},
      {name:'Threshold block', v:'3 × 8 min @ threshold power, 3 min easy between'},
      {name:'Cool-down', v:'10 min easy'},
    ]},
  {id:'B8', title:'VO2max Intervals (Zwift, ERG)', duration:40, equipment:'Indoor · Zwift ERG mode', venue:'indoor',
    focus:['vo2','future'],
    blurb:'Future block, once base fitness and FTP are established.',
    exercises:[
      {name:'Warm-up', v:'15 min easy'},
      {name:'VO2 block', v:'5 × 3 min @ VO2max power, 3 min easy between'},
      {name:'Cool-down', v:'10 min easy'},
    ]},
];
