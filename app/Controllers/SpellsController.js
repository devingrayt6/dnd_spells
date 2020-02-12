import SpellsService from "../Services/SpellsServices.js";
import Spell from '../Models/Spell.js';
import store from "../store.js";

//Private
function _draw() {
  let spells = store.State.spells;
  let allSpellsElem = document.getElementById('all-spells-view');
  let allSpellsTemplate = '';
  spells.forEach(s => {
    let url = `http://bcw-sandbox.herokuapp.com/api/spells/${s.id}`
    allSpellsTemplate += `<p class="m-2" onclick="app.spellsController.getDetails('${url}')">${s.name}</p>`
  })
  allSpellsElem.innerHTML = allSpellsTemplate;
}

function _drawActiveSpell() {
  let spell = new Spell(store.State.activeSpell);
  let detailsElem = document.getElementById('details-view');
  detailsElem.innerHTML = spell.Template;
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _draw);
    store.subscribe("activeSpell", _drawActiveSpell);
    this.getAllSpells()
  }

  getAllSpells() {
    SpellsService.getAllSpells();
  }

  getDetails(prop) {
    SpellsService.getDetails(prop);
  }
}
