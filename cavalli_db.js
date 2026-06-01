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
//    img   — percorso immagine (es. "img/cavalli/fulmine.png")
//            Lascia "" se l'immagine non è disponibile.
// ═══════════════════════════════════════════════════════════

const CAVALLI_DB = [
  {nome:"Fulmine",     vel:2, acc:4, ten:2, res:1, ner:3, img:"img/cavalli/fulmine.png"},
  {nome:"Tempesta",   vel:4, acc:2, ten:3, res:2, ner:3, img:"img/cavalli/tempesta.png"},
  {nome:"Vento",      vel:1, acc:2, ten:2, res:1, ner:1, img:"img/cavalli/vento.png"},
  {nome:"Spirit",     vel:2, acc:1, ten:3, res:2, ner:2, img:"img/cavalli/spirit.png"},
  {nome:"Dardo",      vel:5, acc:4, ten:2, res:2, ner:4, img:"img/cavalli/dardo.png"},
  {nome:"Ombra",      vel:1, acc:4, ten:3, res:4, ner:2, img:"img/cavalli/ombra.png"},
  {nome:"Abbagliante",vel:1, acc:1, ten:4, res:5, ner:3, img:"img/cavalli/abbagliante.png"},
  {nome:"Guerriero",  vel:1, acc:1, ten:2, res:1, ner:1, img:"img/cavalli/guerriero.png"},
  {nome:"Woody",      vel:4, acc:3, ten:4, res:3, ner:2, img:"img/cavalli/woody.png"},
  {nome:"Pannocchia", vel:4, acc:4, ten:3, res:3, ner:1, img:"img/cavalli/pannocchia.png"},
  {nome:"Star",       vel:2, acc:5, ten:2, res:3, ner:4, img:"img/cavalli/star.png"},
  {nome:"Odi et Amo", vel:5, acc:4, ten:4, res:3, ner:3, img:"img/cavalli/odi_et_amo.png"},
  {nome:"Carilbom",   vel:3, acc:4, ten:2, res:3, ner:5, img:"img/cavalli/carilbom.png"},
  {nome:"El Rey",     vel:5, acc:4, ten:2, res:2, ner:3, img:"img/cavalli/el_rey.png"},
  {nome:"Farabundo",  vel:4, acc:3, ten:4, res:1, ner:3, img:"img/cavalli/farabundo.png"},
  {nome:"El Marador", vel:2, acc:1, ten:4, res:5, ner:2, img:"img/cavalli/el_marador.png"},
  {nome:"Anacleto",   vel:5, acc:4, ten:5, res:4, ner:1, img:"img/cavalli/anacleto.png"},
  {nome:"Selvaggio",  vel:1, acc:2, ten:3, res:3, ner:5, img:"img/cavalli/selvaggio.png"},
  {nome:"Eretica",    vel:5, acc:3, ten:2, res:5, ner:1, img:"img/cavalli/eretica.png"},
  {nome:"Fegone",     vel:3, acc:1, ten:3, res:1, ner:3, img:"img/cavalli/fegone.png"},
  {nome:"Fox Royale", vel:3, acc:2, ten:2, res:3, ner:2, img:"img/cavalli/fox_royale.png"},
  {nome:"Fenice",     vel:2, acc:1, ten:2, res:1, ner:4, img:"img/cavalli/fenice.png"},
  {nome:"Ambra",      vel:3, acc:3, ten:2, res:2, ner:3, img:"img/cavalli/ambra.png"},
  {nome:"Chimera",    vel:2, acc:2, ten:2, res:2, ner:2, img:"img/cavalli/chimera.png"},
  {nome:"Frankie",    vel:3, acc:2, ten:2, res:3, ner:2, img:"img/cavalli/frankie.png"},
  {nome:"Cristallo",  vel:3, acc:4, ten:2, res:2, ner:1, img:"img/cavalli/cristallo.png"},
  {nome:"Eclettico",  vel:3, acc:5, ten:3, res:5, ner:1, img:"img/cavalli/eclettico.png"},
  {nome:"Bum Bum",    vel:5, acc:5, ten:5, res:5, ner:1, img:"img/cavalli/bum_bum.png"},
  {nome:"Wakanda",    vel:4, acc:3, ten:3, res:3, ner:1, img:"img/cavalli/wakanda.png"}
];
