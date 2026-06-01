// ═══════════════════════════════════════════════════════════
//  DATABASE FANTINI — Palio di Legnano
//  Modifica questo file per aggiornare le statistiche dei
//  fantini senza toccare il codice principale del gioco.
//
//  Campi per ogni fantino:
//    nome    — nome (soprannome) del fantino
//    bravura — Bravura    (1–5)
//    esp     — Esperienza (1–5)
//    mossa   — Mossa      (1–5)
//    emp     — Empatia    (1–5)
// ═══════════════════════════════════════════════════════════

const FANTINI_DB = [
  {nome:"Aceto",      bravura:5, esp:5, mossa:4, emp:4},
  {nome:"Il Pesse",   bravura:4, esp:5, mossa:2, emp:1},
  {nome:"Massimino",  bravura:3, esp:2, mossa:1, emp:4},
  {nome:"Tittia",     bravura:5, esp:5, mossa:5, emp:5},
  {nome:"Scompiglio", bravura:4, esp:1, mossa:4, emp:1},
  {nome:"Gingillo",   bravura:4, esp:5, mossa:5, emp:4},
  {nome:"Velluto",    bravura:3, esp:5, mossa:2, emp:4},
  {nome:"Brigante",   bravura:1, esp:3, mossa:1, emp:1},
  {nome:"Bighino",    bravura:3, esp:5, mossa:5, emp:3},
  {nome:"Cittino",    bravura:1, esp:1, mossa:1, emp:1},
  {nome:"Gavino",     bravura:2, esp:4, mossa:1, emp:1},
  {nome:"Ares",       bravura:1, esp:1, mossa:1, emp:1},
  {nome:"Amsicora",   bravura:5, esp:5, mossa:5, emp:5},
  {nome:"Carburo",    bravura:2, esp:1, mossa:2, emp:1},
  {nome:"Voglia",     bravura:4, esp:2, mossa:1, emp:1},
  {nome:"Bucefalo",   bravura:5, esp:2, mossa:5, emp:2},
  {nome:"Trecciolino",bravura:5, esp:5, mossa:1, emp:1},
  {nome:"Truciolo",   bravura:4, esp:4, mossa:4, emp:4}
];

// Mappa nome→stats per accesso rapido (richiesta da index.html)
const FANTINI_MAP = {};
FANTINI_DB.forEach(f => { FANTINI_MAP[f.nome] = f; });
