// ═══════════════════════════════════════════════════════════
//  DATABASE CAVALLI — Palio di Legnano
//  Modifica questo file per aggiornare le statistiche dei
//  cavalli senza toccare il codice principale del gioco.
//
//  Campi per ogni cavallo:
//    nome  — nome univoco del cavallo
//    vel   — Velocità       (1–5)
//    acc   — Accelerazione  (1–5)
//    ten   — Tenuta curva   (1–5)
//    res   — Resistenza     (1–5)
//    ner   — Nervosismo     (1–5, più alto = peggio)
// ═══════════════════════════════════════════════════════════

const CAVALLI_DB = [
  {nome:"Fulmine",    vel:2, acc:4, ten:2, res:1, ner:3},
  {nome:"Tempesta",  vel:4, acc:2, ten:3, res:2, ner:3},
  {nome:"Vento",     vel:1, acc:2, ten:2, res:1, ner:1},
  {nome:"Spirit",    vel:2, acc:1, ten:3, res:2, ner:2},
  {nome:"Dardo",     vel:5, acc:4, ten:2, res:2, ner:4},
  {nome:"Ombra",     vel:1, acc:4, ten:3, res:4, ner:2},
  {nome:"Abbagliante",vel:1,acc:1, ten:4, res:5, ner:3},
  {nome:"Guerriero", vel:1, acc:1, ten:2, res:1, ner:1},
  {nome:"Woody",     vel:4, acc:3, ten:4, res:3, ner:2},
  {nome:"Pannocchia",vel:4, acc:4, ten:3, res:3, ner:1},
  {nome:"Star",      vel:2, acc:5, ten:2, res:3, ner:4},
  {nome:"Odi et Amo",vel:5, acc:4, ten:4, res:3, ner:3},
  {nome:"Carilbom",  vel:3, acc:4, ten:2, res:3, ner:5},
  {nome:"El Rey",    vel:5, acc:4, ten:2, res:2, ner:3},
  {nome:"Farabundo", vel:4, acc:3, ten:4, res:1, ner:3},
  {nome:"El Marador",vel:2, acc:1, ten:4, res:5, ner:2},
  {nome:"Anacleto",  vel:5, acc:4, ten:5, res:4, ner:1},
  {nome:"Selvaggio", vel:1, acc:2, ten:3, res:3, ner:5},
  {nome:"Eretica",   vel:5, acc:3, ten:2, res:5, ner:1},
  {nome:"Fegone",    vel:3, acc:1, ten:3, res:1, ner:3},
  {nome:"Fox Royale",vel:3, acc:2, ten:2, res:3, ner:2},
  {nome:"Fenice",    vel:2, acc:1, ten:2, res:1, ner:4},
  {nome:"Ambra",     vel:3, acc:3, ten:2, res:2, ner:3},
  {nome:"Chimera",   vel:2, acc:2, ten:2, res:2, ner:2},
  {nome:"Frankie",   vel:3, acc:2, ten:2, res:3, ner:2},
  {nome:"Cristallo", vel:3, acc:4, ten:2, res:2, ner:1},
  {nome:"Eclettico", vel:3, acc:5, ten:3, res:5, ner:1},
  {nome:"Bum Bum",   vel:5, acc:5, ten:5, res:5, ner:1},
  {nome:"Wakanda",   vel:4, acc:3, ten:3, res:3, ner:1}
];
