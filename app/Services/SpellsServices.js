import store from "../store.js";
import Spell from "../Models/Spell.js";



// @ts-ignore
let _allSpellsApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/spells',
  timeout: 15000
})

// // @ts-ignore
// let _spellDetailsApi = axios.create({
//   baseURL: 'http://bcw-sandbox.herokuapp.com/api/mark/spells',
//   timeout: 15000
// })
class SpellsService {


  getAllSpells() {
    _allSpellsApi.get('')
      .then(res => {
        store.commit('spells', res.data)
      })
  }

  getDetails(prop) {
    _allSpellsApi.get(prop)
      .then(res => {
        let newSpell = new Spell(res.data)
        store.commit('activeSpell', newSpell)
      })
  }
}

const service = new SpellsService();
export default service;
