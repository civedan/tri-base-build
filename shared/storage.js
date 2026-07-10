/* Single shared localStorage layer for the whole site.
   Every page loads the full state blob, mutates only the fields it owns,
   and writes the whole blob back — that's how swap history, rotation logs,
   and completed workouts stay in sync across pages.

   NOTE: localStorage is per-origin. Opening these files individually via
   file:// gives each page its own origin (null), so nothing will sync —
   this only works when served over http(s), e.g. `python3 -m http.server`
   locally or the real GitHub Pages URL. */

const STORAGE_KEY = 'triathlon-base-build-v1';

function triDefaultState(){
  return {
    weeks: null,      // filled in by index.html from defaultPlan()
    profile: null,    // filled in by index.html ({ startDate })
    checkins: [],
    history: [],      // shared workout log: strength/run/bike/swim/yoga + swap-driven completions
    swimTests: [],     // CSS test log (400m/200m -> css pace)
    runZones: { age: 40, category: 'inconsistent', maf: null, entries: [] },
    bikeZones: { restingHR: 50, maxHR: 185, ftp: null, bodyWeightKg: null, ftpTests: [] },
  };
}

function triLoadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      const d = triDefaultState();
      if(!parsed.checkins) parsed.checkins = d.checkins;
      if(!parsed.history) parsed.history = d.history;
      if(!parsed.swimTests) parsed.swimTests = d.swimTests;
      if(!parsed.runZones) parsed.runZones = d.runZones;
      if(!parsed.bikeZones) parsed.bikeZones = d.bikeZones;
      if(!parsed.runZones.entries) parsed.runZones.entries = [];
      if(!parsed.bikeZones.ftpTests) parsed.bikeZones.ftpTests = [];
      return parsed;
    }
  }catch(e){ /* corrupt or unavailable — fall through to defaults */ }
  return triDefaultState();
}

function triSaveState(state){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  }catch(e){
    return false;
  }
}
