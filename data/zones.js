/* Static pace/HR reference zones — extracted from running-pace-zones.md, bike-hr-zones.md,
   and swim-pace-zones.md. These are starting points/defaults; the interactive calculators on
   each discipline page (Karvonen HR, FTP power zones, Maffetone MAF) read live numbers from
   state.bikeZones / state.runZones instead once the athlete enters their own data. */

const RUN_VDOT_ZONES = {
  vdot: 36,
  testDate: 'July 2026',
  test5k: '26:20',
  zones: [
    {id:'easy', label:'Easy (E)', purpose:'Aerobic base, recovery, long runs', pace:'6:05–7:00/km', future:false},
    {id:'marathon', label:'Marathon (M)', purpose:'Race-specific endurance — future use', pace:'~5:45/km', future:true},
    {id:'threshold', label:'Threshold (T)', purpose:'Lactate threshold / tempo — future use', pace:'~5:30/km', future:true},
    {id:'interval', label:'Interval (I)', purpose:'VO2max development — future use', pace:'~5:05/km', future:true},
    {id:'repetition', label:'Repetition (R)', purpose:'Speed & running economy — future use', pace:'~4:45/km', future:true},
  ],
  rightNow: 'Only Easy pace applies. This base block is aerobic-only by design — no quality (T/I/R) work yet. Run every session in the 6:05–7:00/km range regardless of how easy it feels; the temptation to drift faster is the most common way returning runners set themselves back.',
  retestNote: 'Every 6–8 weeks, or after any clean race effort, with a fresh 5K or 10K time trial. VDOT should climb as fitness returns — recalculate paces each time rather than assuming this table still applies after week 8 or so.',
};

const BIKE_HR_DEFAULTS = {
  restingHR: 50,
  maxHR: 185,
  note: 'Max HR of 185 is a "think," not a tested number — worth confirming with a genuine max effort when convenient (end of a hard interval, or a proper field test). Resting HR is worth re-checking periodically (first thing in the morning, several days running), since it drifts with fatigue and fitness.',
};

const SWIM_PACE_ZONES = {
  basedOnPace: '2:10/100m',
  testDate: 'July 2026',
  zones: [
    {id:'easy', label:'Easy/technique', pace:'2:15–2:25/100m', use:'Early technique-focused swims'},
    {id:'steady', label:'Steady/aerobic', pace:'~2:10/100m', use:'Continuous swim sets'},
    {id:'hard', label:'Comfortably hard', pace:'2:00–2:05/100m', use:'Future quality swim work'},
  ],
  cssFormula: 'CSS = (400m distance − 200m distance) ÷ (400m time − 200m time)',
  note: 'Estimated from a single "typical pace" data point, not a proper test — treat as a reasonable starting point, not precise zones. Not urgent while swim work stays technique-focused in this block — worth doing once swim volume starts building for real.',
};
