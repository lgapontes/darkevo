function obterFichaPersonagemEmBranco() {
  let ficha = {
    ficha_jogador: '',
    ficha_personagem: '',
    ficha_guilda: '',
    ficha_nivel: '1',
    ficha_pontos: '0',
    ficha_detalhes: '',
    ficha_segredo: '',
    ficha_lesao: '',
    ficha_lesao_detalhes: '',
    ficha_vontade_maxima: '',
    ficha_vontade: '',
    ficha_protecao_1: false,
    ficha_protecao_2: false,
    ficha_protecao_3: false,
    ficha_protecao_4: false,
    ficha_condutas_forte_1: false,
    ficha_condutas_forte_2: false,
    ficha_condutas_agil_1: false,
    ficha_condutas_agil_2: false,
    ficha_condutas_criativa_1: false,
    ficha_condutas_criativa_2: false,
    ficha_condutas_carismatica_1: false,
    ficha_condutas_carismatica_2: false,
    ficha_condutas_inteligente_1: false,
    ficha_condutas_inteligente_2: false,
    ficha_condutas_mistica_1: false,
    ficha_condutas_mistica_2: false,
    ficha_verbetes_abrir_fechaduras_1: false,
    ficha_verbetes_abrir_fechaduras_2: false,
    ficha_verbetes_atacar_corpo_a_corpo_1: false,
    ficha_verbetes_atacar_corpo_a_corpo_2: false,
    ficha_verbetes_atacar_desarmado_1: false,
    ficha_verbetes_atacar_desarmado_2: false,
    ficha_verbetes_atacar_a_distancia_1: false,
    ficha_verbetes_atacar_a_distancia_2: false,
    ficha_verbetes_barganhar_1: false,
    ficha_verbetes_barganhar_2: false,
    ficha_verbetes_cavalgar_1: false,
    ficha_verbetes_cavalgar_2: false,
    ficha_verbetes_cacar_1: false,
    ficha_verbetes_cacar_2: false,
    ficha_verbetes_confeccionar_armaduras_leves_1: false,
    ficha_verbetes_confeccionar_armaduras_leves_2: false,
    ficha_verbetes_confeccionar_armas_de_madeira_1: false,
    ficha_verbetes_confeccionar_armas_de_madeira_2: false,
    ficha_verbetes_conhecer_idiomas_1: false,
    ficha_verbetes_conhecer_idiomas_2: false,
    ficha_verbetes_cozinhar_1: false,
    ficha_verbetes_cozinhar_2: false,
    ficha_verbetes_curar_ferimentos_1: false,
    ficha_verbetes_curar_ferimentos_2: false,
    ficha_verbetes_enganar_1: false,
    ficha_verbetes_enganar_2: false,
    ficha_verbetes_entreter_1: false,
    ficha_verbetes_entreter_2: false,
    ficha_verbetes_equilibrar_1: false,
    ficha_verbetes_equilibrar_2: false,
    ficha_verbetes_escalar_1: false,
    ficha_verbetes_escalar_2: false,
    ficha_verbetes_esconder_nas_sombras_1: false,
    ficha_verbetes_esconder_nas_sombras_2: false,
    ficha_verbetes_esquivar_e_desengajar_1: false,
    ficha_verbetes_esquivar_e_desengajar_2: false,
    ficha_verbetes_falsificar_1: false,
    ficha_verbetes_falsificar_2: false,
    ficha_verbetes_forjar_armaduras_pesadas_1: false,
    ficha_verbetes_forjar_armaduras_pesadas_2: false,
    ficha_verbetes_forjar_armas_corpo_a_corpo_1: false,
    ficha_verbetes_forjar_armas_corpo_a_corpo_2: false,
    ficha_verbetes_forragear_1: false,
    ficha_verbetes_forragear_2: false,
    ficha_verbetes_furtar_1: false,
    ficha_verbetes_furtar_2: false,
    ficha_verbetes_historiar_1: false,
    ficha_verbetes_historiar_2: false,
    ficha_verbetes_intimidar_1: false,
    ficha_verbetes_intimidar_2: false,
    ficha_verbetes_investigar_pistas_1: false,
    ficha_verbetes_investigar_pistas_2: false,
    ficha_verbetes_ler_e_escrever_1: false,
    ficha_verbetes_ler_e_escrever_2: false,
    ficha_verbetes_liderar_1: false,
    ficha_verbetes_liderar_2: false,
    ficha_verbetes_mover_silenciosamente_1: false,
    ficha_verbetes_mover_silenciosamente_2: false,
    ficha_verbetes_nadar_1: false,
    ficha_verbetes_nadar_2: false,
    ficha_verbetes_navegar_barcos_e_navios_1: false,
    ficha_verbetes_navegar_barcos_e_navios_2: false,
    ficha_verbetes_perceber_ambiente_ao_redor_1: false,
    ficha_verbetes_perceber_ambiente_ao_redor_2: false,
    ficha_verbetes_persuadir_1: false,
    ficha_verbetes_persuadir_2: false,
    ficha_verbetes_praticar_alquimia_1: false,
    ficha_verbetes_praticar_alquimia_2: false,
    ficha_verbetes_rastrear_1: false,
    ficha_verbetes_rastrear_2: false,
    ficha_verbetes_reparar_objetos_1: false,
    ficha_verbetes_reparar_objetos_2: false,
    ficha_verbetes_sobreviver_nos_ermos_1: false,
    ficha_verbetes_sobreviver_nos_ermos_2: false,
    ficha_verbetes_treinar_animais_1: false,
    ficha_verbetes_treinar_animais_2: false,
    ficha_ouro: 10,
    ficha_inventario_item_1: '',
    ficha_inventario_detalhes_1: '',
    ficha_inventario_qtde_1: '',
    ficha_inventario_item_2: '',
    ficha_inventario_detalhes_2: '',
    ficha_inventario_qtde_2: '',
    ficha_inventario_item_3: '',
    ficha_inventario_detalhes_3: '',
    ficha_inventario_qtde_3: '',
    ficha_inventario_item_4: '',
    ficha_inventario_detalhes_4: '',
    ficha_inventario_qtde_4: '',
    ficha_inventario_item_5: '',
    ficha_inventario_detalhes_5: '',
    ficha_inventario_qtde_5: '',
    ficha_inventario_item_6: '',
    ficha_inventario_detalhes_6: '',
    ficha_inventario_qtde_6: '',
    ficha_inventario_item_7: '',
    ficha_inventario_detalhes_7: '',
    ficha_inventario_qtde_7: '',
    ficha_inventario_item_8: '',
    ficha_inventario_detalhes_8: '',
    ficha_inventario_qtde_8: '',
    ficha_inventario_item_9: '',
    ficha_inventario_detalhes_9: '',
    ficha_inventario_qtde_9: '',
    ficha_magias_curatio_1: false,
    ficha_magias_curatio_2: false,
    ficha_magias_curatio_3: false,
    ficha_magias_daemonium_1: false,
    ficha_magias_daemonium_2: false,
    ficha_magias_daemonium_3: false,
    ficha_magias_fortitudo_1: false,
    ficha_magias_fortitudo_2: false,
    ficha_magias_fortitudo_3: false,
    ficha_magias_glacies_1: false,
    ficha_magias_glacies_2: false,
    ficha_magias_glacies_3: false,
    ficha_magias_ignis_1: false,
    ficha_magias_ignis_2: false,
    ficha_magias_ignis_3: false,
    ficha_magias_incantare_1: false,
    ficha_magias_incantare_2: false,
    ficha_magias_incantare_3: false,
    ficha_magias_invocare_1: false,
    ficha_magias_invocare_2: false,
    ficha_magias_invocare_3: false,
    ficha_magias_lux_1: false,
    ficha_magias_lux_2: false,
    ficha_magias_lux_3: false,
    ficha_magias_mortus_1: false,
    ficha_magias_mortus_2: false,
    ficha_magias_mortus_3: false,
    ficha_magias_praesidium_1: false,
    ficha_magias_praesidium_2: false,
    ficha_magias_praesidium_3: false,
    ficha_magias_puritas_1: false,
    ficha_magias_puritas_2: false,
    ficha_magias_puritas_3: false,
    ficha_magias_sanguis_1: false,
    ficha_magias_sanguis_2: false,
    ficha_magias_sanguis_3: false,
    ficha_magias_saxum_1: false,
    ficha_magias_saxum_2: false,
    ficha_magias_saxum_3: false,
    ficha_magias_somnum_1: false,
    ficha_magias_somnum_2: false,
    ficha_magias_somnum_3: false,
    ficha_magias_tempus_1: false,
    ficha_magias_tempus_2: false,
    ficha_magias_tempus_3: false,
    ficha_magias_umbra_1: false,
    ficha_magias_umbra_2: false,
    ficha_magias_umbra_3: false,
    ficha_magias_venenum_1: false,
    ficha_magias_venenum_2: false,
    ficha_magias_venenum_3: false,
    ficha_magias_ventus_1: false,
    ficha_magias_ventus_2: false,
    ficha_magias_ventus_3: false,
    ficha_magias_veritas_1: false,
    ficha_magias_veritas_2: false,
    ficha_magias_veritas_3: false,
    ficha_magias_visio_1: false,
    ficha_magias_visio_2: false,
    ficha_magias_visio_3: false,
    ficha_magias_vita_1: false,
    ficha_magias_vita_2: false,
    ficha_magias_vita_3: false
  };
  return ficha;
}

function closeLoading() {
  document.getElementById('loading').style.display = 'none';
}

function openLoading() {
  document.getElementById('loading').style.display = 'block';
}

function roll1d6(callback) {
  let result = (Math.floor(Math.random() * 6) + 1);
  callback(result);
}

function randomArray(array,callback) {
  if ( (array == undefined) || (array == null) ) {
    callback(null,-1);
  } else {
    if (array.length == 0) {
      callback(null,-1);
    } else if (array.length == 1) {
      callback(array[0],0);
    } else {
      let index = (Math.floor(Math.random() * array.length));
      callback(array[index],index);
    }
  }
}

function arrayMenosArray(array_total,array_parcial,callback) {
  if ( (array_total == undefined) || (array_total == null) || (array_parcial == undefined) || (array_parcial == null) ) {
    callback([]);
  } else {
    let diferenca = array_total.filter(x => !array_parcial.includes(x));
    callback(diferenca);
  }
}

function sortearMagias(guilda,callback) {
  let array_magias_guilda = JSON.parse(JSON.stringify(GUILDAS[guilda].magias)); // clone

  if (array_magias_guilda.length == 0) {
    callback([]);
  } else {
    let magias_sorteadas = [];
    let qtde_magias = (guilda == 'Salvagentes') ? [0,1] : [0,1,2];
    qtde_magias.forEach((numero, index_qtde_magias) => {

      let index_sorteado = (Math.floor(Math.random() * array_magias_guilda.length));
      magias_sorteadas.push(array_magias_guilda[index_sorteado]);
      array_magias_guilda.splice(index_sorteado, 1);

      if (index_qtde_magias == (qtde_magias.length - 1)) {
        callback(magias_sorteadas);
      }
    });
  }
}

function sortearNome(callback) {
  let nomes = NOMES.concat(SEGREDOS.grupo_2.nomes_0.concat(SEGREDOS.grupo_2.nomes_1));
  let index_nomes = (Math.floor(Math.random() * nomes.length));
  callback(nomes[index_nomes]);
}

function sortearSegredo(callback) {
  let array_grupo_segredos = Object.keys(SEGREDOS);
  let index_array_grupo_segredos = (Math.floor(Math.random() * array_grupo_segredos.length));
  let grupo_segredo = array_grupo_segredos[index_array_grupo_segredos];
  let grupo_segredo_dados = JSON.parse(JSON.stringify(SEGREDOS[grupo_segredo])); // clone

  let index_bases = (Math.floor(Math.random() * grupo_segredo_dados.bases.length));

  if (grupo_segredo == 'grupo_1') {
    let index_frases = (Math.floor(Math.random() * grupo_segredo_dados.frases.length));
    let segredo = grupo_segredo_dados.bases[index_bases] + grupo_segredo_dados.frases[index_frases];
    callback(segredo);
  } else if (grupo_segredo == 'grupo_2') {
    let numero = Math.floor(Math.random() * 2);
    let index_profissoes = (Math.floor(Math.random() * grupo_segredo_dados['profissoes_' + numero].length));
    let index_nomes = (Math.floor(Math.random() * grupo_segredo_dados['nomes_' + numero].length));
    let segredo =
      grupo_segredo_dados.bases[index_bases] +
      grupo_segredo_dados['profissoes_' + numero][index_profissoes] +
      grupo_segredo_dados['nomes_' + numero][index_nomes] + '.';
    callback(segredo);
  } else if (grupo_segredo == 'grupo_3') {
    let index_frases = (Math.floor(Math.random() * grupo_segredo_dados.frases.length));
    let nomes = SEGREDOS.grupo_2.nomes_0.concat(SEGREDOS.grupo_2.nomes_1);
    let index_nomes = (Math.floor(Math.random() * nomes.length));
    let segredo =
      grupo_segredo_dados.bases[index_bases] +
      grupo_segredo_dados.frases[index_frases] +
      grupo_segredo_dados.auxiliar[index_bases] +
      nomes[index_nomes] + '.';
    callback(segredo);
  }
}

function roll2d6(callback) {
  roll1d6(d1 => {
    roll1d6(d2 => {
      callback(d1 + d2);
    });
  });
}

function createOption(value) {
  let option = document.createElement('option');
  option.value = value;
  option.innerHTML = value;
  return option;
}

function createOptionDivindade(divindade) {
  if (divindade == 'Nenhuma Divindade Selecionada') {
    let option = document.createElement('option');
    option.value = divindade;
    option.innerHTML = divindade;
    return option;
  } else {
    let descricao = DIVINDADES[divindade].descricao;
    let alinhamento = DIVINDADES[divindade].alinhamento;

    let option = document.createElement('option');
    option.value = divindade;
    option.innerHTML = `${divindade}, ${descricao} (${alinhamento})`;
    return option;
  }
}

function preencherSelect(id,dict,callback) {
  let select = document.getElementById(id);
  select.innerHTML = '';
  let itens = (Object.prototype.toString.call(dict) === '[object Array]') ? dict : Object.keys(dict);

  let nao_aplicavel = false;
  let guilda = obterGuidaSelecionada();
  if ( (itens.length == 0) || ( ( id == 'criar_personagem_magia3' ) && (guilda == 'Salvagentes') ) ) {
    nao_aplicavel = true;
  }

  if (nao_aplicavel) {
    let selecione = createOption('Não Aplicável');
    select.appendChild(selecione);
    callback();
  } else {
    itens.forEach((item, index) => {
      if (index == 0) {
        let selecione = createOption('Selecione');
        select.appendChild(selecione);
      }

      let option = createOption(item);
      select.appendChild(option);
      if (index == (itens.length - 1)) {
        callback();
      }
    });
  }
}

function preencherSelectLooting(callback) {
  let select = document.getElementById('rolar_itens_tipo');
  select.innerHTML = '';
  let itens = Object.keys(ROLAR_ITENS);

  itens.forEach((item, index) => {
    let option = createOption(item);
    select.appendChild(option);
    if (index == (itens.length - 1)) {
      callback();
    }
  });
}

function marcarCheckbox(event) {
  let marcado = event.target.getAttribute('checked') == "true";
  event.target.setAttribute('checked',!marcado);
}

function mostrarItem(id) {
  document.getElementById(id).style.display = 'block';
}

function esconderItem(id) {
  document.getElementById(id).style.display = 'none';
}

function mostrarFicha() {
  [ 1, 2, 3, 4 ].forEach((numero) => {
    document.getElementById(`ficha_protecao_${numero}`).addEventListener('click',marcarCheckbox);
  });

  [...document.querySelectorAll('div.campos > div.checkbox[checked]')].forEach((checkbox, index) => {
    checkbox.addEventListener('click',marcarCheckbox);
  });

  mostrarItem('ficha');
}

function esconderFicha() {
  [ 1, 2, 3, 4 ].forEach((numero) => {
    document.getElementById(`ficha_protecao_${numero}`).removeEventListener('click',marcarCheckbox);
  });

  [...document.querySelectorAll('div.campos > div.checkbox[checked]')].forEach((checkbox, index) => {
    checkbox.removeEventListener('click',marcarCheckbox);
  });

  esconderItem('ficha');
}

document.getElementById('criar_personagem_guilda').addEventListener('input',event=>{
  event.preventDefault();
  let select = event.target;
  let guilda = select.options[select.selectedIndex].innerHTML;

  if (guilda == 'Selecione') {
    document.getElementById('criar_personagem_texto_guilda').innerHTML = 'Selecione a Guilda para visualizar seus detalhes.';
  } else {
    let texto_condutas = 'Possuem 1 Ponto nas Condutas ';
    let condutas = JSON.parse(JSON.stringify(GUILDAS[guilda].condutas)); // clone
    let ultima_conduta = condutas.pop();
    texto_condutas += condutas.join(', ') + ' e ' + ultima_conduta;

    let texto = `<span class="bold">Detalhes:</span> ${GUILDAS[guilda].texto}
    <br><br><span class="bold">Condutas iniciais:</span> ${texto_condutas}
    <br><br><span class="bold">Verbetes iniciais:</span> ${GUILDAS[guilda].texto_verbetes}
    <br><br><span class="bold">Proficiência em armas:</span> ${GUILDAS[guilda].proficiencia}`;
    document.getElementById('criar_personagem_texto_guilda').innerHTML = texto;
  }

  preencherVerbete1CriarPersonagens(()=>{
    preencherMagia1CriarPersonagens(()=>{
      limparSelecoesKitDeEquipamentos(()=>{
        definirKitsDeEquipamentos(()=>{
          let div_restricao_magias = document.getElementById('criar_personagem_restricao_magias');

          if (guilda == 'Salvagentes') {
            div_restricao_magias.style.display = 'none';
          } else if (guilda == 'Literatos') {
            div_restricao_magias.style.display = 'none';
          } else {
            div_restricao_magias.style.display = 'block';
          }
        });
      });
    });
  });
});

document.getElementById('criar_personagem_verbete1').addEventListener('input',event=>{
  event.preventDefault();
  preencherVerbete2CriarPersonagens(()=>{});
});

document.getElementById('criar_personagem_verbete2').addEventListener('input',event=>{
  event.preventDefault();
  preencherVerbete3CriarPersonagens(()=>{});
});

document.getElementById('criar_personagem_magia1').addEventListener('input',event=>{
  event.preventDefault();
  preencherMagia2CriarPersonagens(()=>{});
});

document.getElementById('criar_personagem_magia2').addEventListener('input',event=>{
  event.preventDefault();
  preencherMagia3CriarPersonagens(()=>{});
});

['criar_personagem_kit1','criar_personagem_kit2'].forEach((id, i) => {
  document.getElementById(id).addEventListener('click',event=>{
    event.preventDefault();
    let guilda = obterGuidaSelecionada();
    if (guilda != 'Selecione') {
      limparSelecoesKitDeEquipamentos(()=>{
        if (!event.target.classList.contains('box-selecionado')) {
          event.target.classList.add('box-selecionado');
        }
      });
    }
  });
});

function criarCampoEscondido(id) {
  let input = document.createElement('input');
  input.setAttribute("type", 'hidden');      
  input.setAttribute("id", id);
  input.setAttribute("name", id);
  return input;
}

function imprimirFicha() {
  let form_pdf = document.getElementById('invisible_form');
  form_pdf.innerHTML = '';
  let hidden_input = criarCampoEscondido('hidden_character_sheet');
  hidden_input.value = 'true';
  form_pdf.appendChild(hidden_input);
  
  let ficha = obterFichaPersonagemEmBranco();
  let lista_ids = Object.keys(ficha);
  lista_ids.forEach((id, index_id) => {
    let tag = document.getElementById(id);    

    if (tag.tagName == 'INPUT') {      
      let input = criarCampoEscondido(id);      
      input.value = tag.value;
      form_pdf.appendChild(input);
    } else if (tag.tagName == 'SELECT') {
      let select = criarCampoEscondido(id);
      select.value = tag.options[tag.selectedIndex].value;
      form_pdf.appendChild(select);
    } else if (tag.tagName == 'TEXTAREA') {
      
      let textarea = criarCampoEscondido(id);
      //console.log(tag.value);
      //console.log(tag.value.includes('\t')); // <br />
      textarea.value = tag.value.replaceAll('\n', '<br />');
      form_pdf.appendChild(textarea); 

    } else if (tag.tagName == 'DIV') {
      let checkbox = criarCampoEscondido(id);
      checkbox.value = (tag.getAttribute('checked') == 'true') ? 'on' : 'off';
      form_pdf.appendChild(checkbox);
    } else {
      console.error('Tag não encontrada: ID ' + id + ', Type: ' + tag.tagName);
    }

    if (index_id == (lista_ids.length - 1)) {
      form_pdf.submit();
      form_pdf.innerHTML = '';
    }
  });
}

document.getElementById('criar_personagem_button_pdf').addEventListener('click',event=>{
  imprimirFicha();
});

document.getElementById('rolar_personagem_button_pdf').addEventListener('click',event=>{
  imprimirFicha();
});

document.getElementById('branco_personagem_button_pdf').addEventListener('click',event=>{
  imprimirFicha();
});

document.getElementById('criar_personagem_button_voltar').addEventListener('click',event=>{
  voltarAoInicio();
});

document.getElementById('rolar_personagem_button_voltar').addEventListener('click',event=>{
  voltarAoInicio();
});

document.getElementById('branco_personagem_button_voltar').addEventListener('click',event=>{
  voltarAoInicio();
});

document.getElementById('rolar_itens_button_voltar').addEventListener('click',event=>{
  voltarAoInicio();
});

document.getElementById('rolar_itens_button_copiar').addEventListener('click',event=>{
  let div_itens = document.querySelector('#itens div.borda');

  /* Clipboard */
  let copyText = div_itens.innerText;
  let el = document.createElement('textarea');
  el.value = copyText;
  el.setAttribute('readonly', '');
  el.style = {
      position: 'absolute',
      left: '-9999px'
  };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
});

document.getElementById('rolar_personagem_button_rolar').addEventListener('click',event=>{
  openLoading();
  rolarPersonagem(()=>{
    closeLoading();
  });
});

document.getElementById('rolar_itens_button_rolar').addEventListener('click',event=>{
  rolarItens(todos_itens_sorteados=>{
    exibirItensRolados(todos_itens_sorteados,()=>{});
  });
});

document.getElementById('criar_personagem_button_gerar').addEventListener('click',event=>{
  event.preventDefault();

  let guilda = obterGuidaSelecionada();
  if (guilda == 'Selecione') {
    exibirToast('Faltou selecionar a Guilda :(');
  } else {
    let verbete1 = obterValorSelecionado('criar_personagem_verbete1');
    let verbete2 = obterValorSelecionado('criar_personagem_verbete2');
    let verbete3 = obterValorSelecionado('criar_personagem_verbete3');

    if ( (verbete1 == 'Selecione') || (verbete2 == 'Selecione') || (verbete3 == 'Selecione') ) {
      exibirToast('Não se esqueça de escolher os 3 verbetes!');
    } else {
      let magia1 = obterValorSelecionado('criar_personagem_magia1');
      let magia2 = obterValorSelecionado('criar_personagem_magia2');
      let magia3 = obterValorSelecionado('criar_personagem_magia3');
      let magias_validas = true;

      if (guilda == 'Salvagentes') {
        if ( (magia1 == 'Selecione') || (magia2 == 'Selecione') ) {
          magias_validas = false;
        }
      }
      if (guilda == 'Literatos') {
        if ( (magia1 == 'Selecione') || (magia2 == 'Selecione') || (magia3 == 'Selecione') ) {
          magias_validas = false;
        }
      }

      if (magias_validas == false) {
        if (guilda == 'Salvagentes') {
          exibirToast('Os Salvagentes devem ter 2 magias!');
        } else {
          exibirToast('Os Literatos devem ter 3 magias!');
        }
      } else {
        let kit1 = document.getElementById('criar_personagem_kit1');
        let kit2 = document.getElementById('criar_personagem_kit2');
        let kit_selecionado = '';

        if (kit1.classList.contains('box-selecionado')) {
          kit_selecionado = 'Kit de Equipamentos 1';
        }
        if (kit2.classList.contains('box-selecionado')) {
          kit_selecionado = 'Kit de Equipamentos 2';
        }

        if (kit_selecionado == '') {
          exibirToast('Escolha um dos Kits de Equipamentos!');
        } else {
          let divindade = obterValorSelecionado('criar_personagem_divindade');

          if ( (guilda == 'Salvagentes') && (divindade == 'Nenhuma Divindade Selecionada') ) {
            exibirToast('Os Salvagentes devem ter uma Divindade!');
          } else {
            /* Dados válidos */
            console.log('Dados do personagem validados com sucesso!');

            ajustarArray([ verbete1, verbete2, verbete3 ],arrayVerbetes=>{
              ajustarArray([ magia1, magia2, magia3 ],arrayMagias=>{

                let personagem = {
                  guilda: ajustarValores(guilda),
                  verbetes: arrayVerbetes,
                  magias: arrayMagias,
                  kit: kit_selecionado,
                  divindade: ajustarValores(divindade),
                  nome: document.getElementById('criar_personagem_nome').value,
                  segredo: document.getElementById('criar_personagem_segredo').value
                };

                preencherFichaComPersonagemCriado(personagem,()=>{
                  mostrarItem('criar_personagem_button_pdf');
                });

              });
            });

            /* Dados válidos */
          }
        }
      }
    }
  }
});

function marcarCheckboxEscolhidos(prefixo,dados,ficha,lista,callback) {
  if (lista.length == 0) {
    callback();
  } else {
    lista.forEach((item, index) => {
      ficha[prefixo + dados[item].campo + '_1'] = true;

      if (index == (lista.length - 1)) {
        callback();
      }
    });
  }
}

function buscarEquipamento(key,callback) {
  let item_encontrado = false;
  let itens = Object.keys(ITENS);
  itens.forEach((item, index_item) => {

    if (key in ITENS[item]) {
      item_encontrado = true;
      callback(ITENS[item][key]);
      return;
    }

    if (index_item == (itens.length - 1)) {
      if (!item_encontrado) {
        console.error('Erro ao encontrar um equipamento!');
        callback({ detalhes: '', ouro: '0', detalhes_abreviado: '', qtde: 0 });
      }
    }
  });
}

function preencherDetalhesComDadosEscolhidos(ficha,personagem,callback) {

  let texto = '';
  if (personagem.divindade != '') {
    texto += `${personagem.divindade}, ${DIVINDADES[personagem.divindade].descricao} (${DIVINDADES[personagem.divindade].alinhamento})\n`;
  }

  texto += GUILDAS[personagem.guilda].proficiencia + '\n';

  let condutas = GUILDAS[personagem.guilda].condutas;
  condutas.forEach((conduta, index_conduta) => {
    ficha[CONDUTAS[conduta].campo + '_1'] = true;

    if (index_conduta == (condutas.length - 1)) {

        let equipamentos = GUILDAS[personagem.guilda].equipamentos[personagem.kit];
        equipamentos.forEach((equipamento, index_equipamento) => {

          buscarEquipamento(equipamento,dados_equipamento=>{
            let contador = (index_equipamento + 1);

            if ( (equipamento == 'Flechas') || (equipamento == 'Ferpas de Madeira') || (equipamento == 'Pedras de Funda') ) {
              ficha['ficha_inventario_item_' + contador] = equipamento;
              ficha['ficha_inventario_detalhes_' + contador] = dados_equipamento.detalhes_abreviado;
              ficha['ficha_inventario_qtde_' + contador] = dados_equipamento.qtde;
            } else {
              ficha['ficha_inventario_item_' + contador] = equipamento;
              ficha['ficha_inventario_detalhes_' + contador] = dados_equipamento.detalhes;
              ficha['ficha_inventario_qtde_' + contador] = 1;
            }

            if (index_equipamento == (equipamentos.length - 1)) {
              ficha.ficha_detalhes = texto;
              callback();
            }
          });

        });
    }
  });
}

function preencherFicha(ficha,callback) {
  let lista_ids = Object.keys(ficha);
  lista_ids.forEach((id, index_id) => {
    let tag = document.getElementById(id);
    let valor = ficha[id];

    if (tag.tagName == 'INPUT') {
      tag.value = valor;
    } else if (tag.tagName == 'SELECT') {
      let tempIndex = [...tag.options].findIndex(x => x.value == valor);
      let indexSelect = (tempIndex > -1) ? tempIndex : 0;
      tag.selectedIndex = indexSelect;
    } else if (tag.tagName == 'TEXTAREA') {
      tag.value = valor;
    } else if (tag.tagName == 'DIV') {
      tag.setAttribute('checked',valor);
    } else {
      console.error('Tag não encontrada: ID ' + id + ', Type: ' + tag.tagName);
    }

    if (index_id == (lista_ids.length - 1)) {
      callback();
    }
  });
}

function preencherFichaComPersonagemCriado(personagem,callback) {
  personagemEmBranco((ficha)=>{
    ficha.ficha_guilda = personagem.guilda;
    personagem.verbetes = personagem.verbetes.concat(GUILDAS[personagem.guilda].verbetes);

    marcarCheckboxEscolhidos('ficha_verbetes_',VERBETES,ficha,personagem.verbetes,()=>{
      marcarCheckboxEscolhidos('',MAGIAS,ficha,personagem.magias,()=>{

        preencherDetalhesComDadosEscolhidos(ficha,personagem,()=>{
          ficha.ficha_personagem = personagem.nome;
          ficha.ficha_segredo = personagem.segredo;
          ficha.ficha_vontade_maxima = GUILDAS[personagem.guilda].vontade;
          ficha.ficha_vontade = GUILDAS[personagem.guilda].vontade;

          let protecao = GUILDAS[personagem.guilda].protecao[personagem.kit];
          if (protecao == 1) {
            ficha.ficha_protecao_1 = true;
          } else if (protecao == 2) {
            ficha.ficha_protecao_1 = true;
            ficha.ficha_protecao_2 = true;
          }

          preencherFicha(ficha,callback);
        });

      });
    });
  });
}

function ajustarArray(array,callback) {
  if (array.length == 0) {
    callback([]);
  } else {
    let novo = [];
    array.forEach((item, index) => {
      let valor = ajustarValores(item);
      if (valor != '') {
        novo.push(valor);
      }

      if (index == (array.length - 1)) {
        callback(novo);
      }
    });
  }
}

function ajustarValores(valor) {
  if (
      (valor == undefined) ||
      (valor == null) ||
      (valor == '') ||
      (valor == 'Selecione') ||
      (valor == 'Não Aplicável') ||
      (valor == 'Nenhuma Divindade Selecionada')
    ) {
    return '';
  } else {
    return valor;
  }
}

function exibirToast(msg) {
  vanillaToast.default(msg,{ duration: 10000 });
}

function obterValorSelecionado(id) {
  let campo = document.getElementById(id);
  let valor = campo.options[campo.selectedIndex].value;
  return valor;
}

function obterGuidaSelecionada() {
  let select = document.getElementById('criar_personagem_guilda');
  if ([...select.options].length > 0) {
    let guilda = select.options[select.selectedIndex].innerHTML;
    return guilda;
  } else {
    return 'Selecione';
  }
}

function obterTipoLootingSelecionado() {
  let select = document.getElementById('rolar_itens_tipo');
  let tipo = select.options[select.selectedIndex].value;
  return tipo;
}

function removerItensArray(lista,itens_para_remover,callback) {
  let nova = [];

  if (lista.length == 0) {
    callback(nova);
  } else {
    lista.forEach((item_lista, index_lista) => {

      if (!itens_para_remover.includes(item_lista)) {
        nova.push(item_lista);
      }

      if (index_lista == (lista.length - 1)) {
        callback(nova);
      }
    });
  }
}

function preencherVerbete1CriarPersonagens(callback) {
  let guilda = obterGuidaSelecionada();
  let itens_para_remover = [];
  if (guilda != 'Selecione') {
    itens_para_remover = GUILDAS[guilda].verbetes;
  }
  let verbetes = Object.keys(VERBETES);
  removerItensArray(verbetes,itens_para_remover,verbetes1=>{
    preencherSelect('criar_personagem_verbete1',verbetes1,()=>{
      preencherVerbete2CriarPersonagens(()=>{
        preencherVerbete3CriarPersonagens(()=>{
          callback();
        });
      });
    });
  });
}

function preencherVerbete2CriarPersonagens(callback) {
  let guilda = obterGuidaSelecionada();
  let itens_para_remover = [];
  if (guilda != 'Selecione') {
    itens_para_remover = GUILDAS[guilda].verbetes;
  }

  let verbete1 = obterValorSelecionado('criar_personagem_verbete1');
  if (verbete1 != 'Selecione') {
    itens_para_remover.push(verbete1);
  }

  let verbetes = Object.keys(VERBETES);
  removerItensArray(verbetes,itens_para_remover,verbetes2=>{
    preencherSelect('criar_personagem_verbete2',verbetes2,()=>{
      preencherVerbete3CriarPersonagens(()=>{
        callback();
      });
    });
  });
}

function preencherVerbete3CriarPersonagens(callback) {
  let guilda = obterGuidaSelecionada();
  let itens_para_remover = [];
  if (guilda != 'Selecione') {
    itens_para_remover = GUILDAS[guilda].verbetes;
  }

  let verbete1 = obterValorSelecionado('criar_personagem_verbete1');
  if (verbete1 != 'Selecione') {
    itens_para_remover.push(verbete1);
  }

  let verbete2 = obterValorSelecionado('criar_personagem_verbete2');
  if (verbete2 != 'Selecione') {
    itens_para_remover.push(verbete2);
  }

  let verbetes = Object.keys(VERBETES);
  removerItensArray(verbetes,itens_para_remover,verbetes3=>{
    preencherSelect('criar_personagem_verbete3',verbetes3,()=>{
      callback();
    });
  });
}

function preencherMagia1CriarPersonagens(callback) {
  let guilda = obterGuidaSelecionada();
  let magias = [];

  if (guilda != 'Selecione') {
    magias = GUILDAS[guilda].magias;
  }

  preencherSelect('criar_personagem_magia1',magias,()=>{
    preencherMagia2CriarPersonagens(()=>{
      callback();
    });
  });
}

function preencherMagia2CriarPersonagens(callback) {
  let guilda = obterGuidaSelecionada();
  let magias = [];

  if (guilda != 'Selecione') {
    magias = GUILDAS[guilda].magias;
  }

  let magia1 = obterValorSelecionado('criar_personagem_magia1');
  let magias_para_remover = [];

  if ( (magia1 != 'Selecione') && (magia1 != 'Não Aplicável') ) {
    magias_para_remover.push(magia1);
  }

  removerItensArray(magias,magias_para_remover,magias2=>{
    preencherSelect('criar_personagem_magia2',magias2,()=>{
      preencherMagia3CriarPersonagens(()=>{
        callback();
      });
    });
  });
}

function preencherMagia3CriarPersonagens(callback) {
  let guilda = obterGuidaSelecionada();
  let magias = [];

  if (guilda != 'Selecione') {
    magias = GUILDAS[guilda].magias;
  }

  let magia1 = obterValorSelecionado('criar_personagem_magia1');
  let magias_para_remover = [];

  if ( (magia1 != 'Selecione') && (magia1 != 'Não Aplicável') ) {
    magias_para_remover.push(magia1);
  }

  let magia2 = obterValorSelecionado('criar_personagem_magia2');

  if ( (magia2 != 'Selecione') && (magia2 != 'Não Aplicável') ) {
    magias_para_remover.push(magia2);
  }

  removerItensArray(magias,magias_para_remover,magias3=>{
    preencherSelect('criar_personagem_magia3',magias3,()=>{
      callback();
    });
  });
}

function definirKitsDeEquipamentos(callback) {
  let guilda = obterGuidaSelecionada();
  ['Kit de Equipamentos 1','Kit de Equipamentos 2'].forEach((kit, index) => {
    definirKitEquipamentos(guilda,kit,texto=>{
      let div = document.getElementById(`criar_personagem_kit${index+1}`);
      div.innerHTML = texto;

      if (index == 1) {
        callback();
      }
    });
  });
}

function limparSelecoesKitDeEquipamentos(callback) {
  ['criar_personagem_kit1','criar_personagem_kit2'].forEach((id, index) => {
    let div = document.getElementById(id);
    if (div.classList.contains('box-selecionado')) {
      div.classList.remove('box-selecionado');
    }
    if (index == 1) {
      callback();
    }
  });
}

function definirKitEquipamentos(guilda,kit,callback) {
  if (guilda == 'Selecione') {
    callback(`<span class="bold">${kit}:</span> Selecione a Guilda`);
  } else {
    let itens = GUILDAS[guilda].equipamentos[kit];
    let texto = `<span class="bold">${kit}:</span> `;

    itens.forEach((item, index) => {
      if (index < (itens.length - 1)) {
        texto += (index == 0 ? '' : ', ') + item;
      } else {
        texto += ' e ' + item;
        callback(texto);
      }
    });
  }
}

function preencherDivindades(callback) {
  let select = document.getElementById('criar_personagem_divindade');
  select.innerHTML = '';
  let divindades = Object.keys(DIVINDADES);

  divindades.forEach((divindade, index) => {
    if (index == 0) {
      let selecione = createOptionDivindade('Nenhuma Divindade Selecionada');
      select.appendChild(selecione);
    }

    let option = createOptionDivindade(divindade);
    select.appendChild(option);
    if (index == (divindades.length - 1)) {
      callback();
    }
  });
}

function personagemEmBranco(callback) {
  let ficha = obterFichaPersonagemEmBranco();
  preencherFicha(ficha,()=>{
    callback(ficha);
  });
}

function rolarPersonagem(callback) {  
  let personagem = {
    guilda: '',
    verbetes: [],
    magias: [],
    kit: '',
    divindade: '',
    nome: '',
    segredo: ''
  };

  let array_guildas = Object.keys(GUILDAS);
  randomArray(array_guildas,(guilda)=>{
    personagem.guilda = guilda;

    let array_todos_verbetes = Object.keys(VERBETES);
    let array_verbetes_guilda = JSON.parse(JSON.stringify(GUILDAS[guilda].verbetes)); // clone
    personagem.verbetes = JSON.parse(JSON.stringify(GUILDAS[guilda].verbetes)); // clone

    arrayMenosArray(array_todos_verbetes,array_verbetes_guilda,verbetes_sortear=>{
      randomArray(verbetes_sortear,(verbete1,index_verbete1)=>{
          personagem.verbetes.push(verbete1);
          verbetes_sortear.splice(index_verbete1, 1);

          randomArray(verbetes_sortear,(verbete2,index_verbete2)=>{
              personagem.verbetes.push(verbete2);
              verbetes_sortear.splice(index_verbete2, 1);

              randomArray(verbetes_sortear,(verbete3,index_verbete3)=>{
                  personagem.verbetes.push(verbete3);

                  sortearMagias(guilda,magias_sorteadas=>{
                    personagem.magias = magias_sorteadas;

                    let kits = ['Kit de Equipamentos 1','Kit de Equipamentos 2'];
                    let index_kit_sorteado = (Math.floor(Math.random() * kits.length));
                    personagem.kit = kits[index_kit_sorteado];

                    let array_divindades = Object.keys(DIVINDADES);
                    let index_array_divindades = (Math.floor(Math.random() * array_divindades.length));
                    if (guilda == 'Salvagentes') {
                      personagem.divindade = array_divindades[index_array_divindades];
                    } else {
                      if ((Math.floor(Math.random() * 4)) > 2) {
                        personagem.divindade = array_divindades[index_array_divindades];
                      }
                    }

                    sortearSegredo(segredo=>{
                      personagem.segredo = segredo;

                      sortearNome(nome=>{
                        personagem.nome = nome;

                        preencherFichaComPersonagemCriado(personagem,callback);
                      });

                    });
                  });
              });
          });
      });
    });
  });
}

/*
{
  key: 'Itens de Sobrevivência',
  percentual: 90,
  quantidade: 3
}
*/

function sortearRelacaoItens(tipo,relacao_itens,callback) {
  if (relacao_itens.percentual > 0) {

    let podeSortear = (Math.floor(Math.random() * 100) + 1) <= relacao_itens.percentual;

    if (podeSortear) {
      let itens = [];
      let quantidade = (Math.floor(Math.random() * relacao_itens.quantidade) + 1);
      let array_quantidade = [...Array(quantidade).keys()];
      array_quantidade.forEach((item, index_array_quantidade) => {

        let array_itens_para_sortear = Object.keys(ITENS[relacao_itens.key]);
        let index_array_itens_para_sortear = (Math.floor(Math.random() * array_itens_para_sortear.length));
        let nome_item = array_itens_para_sortear[index_array_itens_para_sortear];
        let item_sorteado = JSON.parse(JSON.stringify(ITENS[relacao_itens.key][nome_item]));
        item_sorteado['nome'] = nome_item;

        if (relacao_itens.key == 'Projéteis') {
          item_sorteado['quantidade'] = (Math.floor(Math.random() * item_sorteado.qtde) + 1);
          item_sorteado['detalhes'] = item_sorteado['detalhes_abreviado'] + ', quantidade: ' + item_sorteado['quantidade'];
          if (item_sorteado['quantidade'] < (item_sorteado.qtde - 5)) {
            if (item_sorteado.ouro != '-') {
              item_sorteado.ouro = '< 1';
            }
          }
        }

        /* Texto para exibir */
        let ouro = item_sorteado.ouro + ' moedas';
        let virgula_ouro = ', ';
        if ( (item_sorteado.ouro == 1) || (item_sorteado.ouro == '1') || (item_sorteado.ouro == '< 1') ) {
          ouro = item_sorteado.ouro + ' moeda';
        }
        if ( item_sorteado.ouro == '-' ) {
          ouro = '';
          virgula_ouro = '';
        }

        if (relacao_itens.key == 'Itens Genéricos') {          
          item_sorteado['html'] = `<div class="label">${item_sorteado.icon}<span class="strong"> ${item_sorteado.nome}</span>${virgula_ouro}<span class="ouro">${ouro}</span></div>`;  
        } else {
          item_sorteado['html'] = `<div class="label">${item_sorteado.icon}<span class="strong"> ${item_sorteado.nome}</span>, ${item_sorteado.detalhes}${virgula_ouro}<span class="ouro">${ouro}</span></div>`;
        }      

        if ('sortear' in item_sorteado) {
          if ((item_sorteado.sortear) && (tipo != 'Casa de Alquimia')) {
            itens.push(item_sorteado);
          } else if ((!item_sorteado.sortear) && (tipo == 'Casa de Alquimia')) {
            itens.push(item_sorteado);
          }
        } else {
          itens.push(item_sorteado);
        }

        if (index_array_quantidade == (array_quantidade.length - 1)) {
          callback(itens);
        }
      });

    } else {
      callback([]);
    }

  } else {
    callback([]);
  }
}

function rolarItens(callback) {
  let tipo = obterTipoLootingSelecionado();
  let todas_relacoes_itens = JSON.parse(JSON.stringify(ROLAR_ITENS[tipo])); // clone
  let todos_itens_sorteados = [];

  todas_relacoes_itens.forEach((relacao_itens, index_todas_relacoes_itens) => {

    if (index_todas_relacoes_itens == 0) {
      let qtde_maxima_moedas = 0;

      if (tipo == 'Looting Pequeno') {
        qtde_maxima_moedas = 10;
      } else if (tipo == 'Looting Médio') {
        qtde_maxima_moedas = 100;
      } else if (tipo == 'Looting Grande') {
        qtde_maxima_moedas = 200;
      } else if (tipo == 'Baús de Tesouros') {
        qtde_maxima_moedas = 200;
      }

      if (qtde_maxima_moedas > 0) {
        let quantidade_moedas = (Math.floor(Math.random() * qtde_maxima_moedas) + 1);
        let item_moedas = {};
        item_moedas['html'] = `<div class="label">💰<span class="strong"> Moedas de ouro: <span class="ouro">${quantidade_moedas}</span></div>`;
        todos_itens_sorteados.push(item_moedas);
      }
    }



    sortearRelacaoItens(tipo,relacao_itens,(itens_sorteados)=>{
      todos_itens_sorteados = todos_itens_sorteados.concat(itens_sorteados);

      if (index_todas_relacoes_itens == (todas_relacoes_itens.length - 1)) {
        callback(todos_itens_sorteados);
      }
    });
  });
}

function preencherOpcoesCriarPersonagens(callback) {
  /* Limpar */
  document.getElementById('criar_personagem_guilda').selectedIndex = -1;
  document.getElementById('criar_personagem_verbete1').selectedIndex = -1;
  document.getElementById('criar_personagem_verbete2').selectedIndex = -1;
  document.getElementById('criar_personagem_verbete3').selectedIndex = -1;
  document.getElementById('criar_personagem_magia1').selectedIndex = -1;
  document.getElementById('criar_personagem_magia2').selectedIndex = -1;
  document.getElementById('criar_personagem_magia3').selectedIndex = -1;
  document.getElementById('criar_personagem_nome').value = '';
  document.getElementById('criar_personagem_segredo').value = '';
  document.getElementById('criar_personagem_divindade').value = '';
  document.getElementById('criar_personagem_texto_guilda').innerHTML = 'Selecione a Guilda para visualizar seus detalhes.';

  limparSelecoesKitDeEquipamentos(()=>{

    preencherSelect('criar_personagem_guilda',GUILDAS,()=>{
      preencherVerbete1CriarPersonagens(()=>{
        preencherVerbete2CriarPersonagens(()=>{
          preencherVerbete3CriarPersonagens(()=>{
            preencherMagia1CriarPersonagens(()=>{
              definirKitsDeEquipamentos(()=>{
                preencherDivindades(()=>{
                  callback();
                });
              });
            });
          });
        });
      });
    });

  });
}

function opcaoCriarPersonagem() {
  openLoading();
  esconderItem('opcoes');
  mostrarItem('formulario');
  esconderItem('criar_personagem_button_pdf');
  mostrarFicha();

  preencherOpcoesCriarPersonagens(()=>{
    closeLoading();
  });
}

function opcaoRolarPersonagem() {
  openLoading();
  esconderItem('opcoes');
  mostrarItem('formulario_aleatorio');
  mostrarFicha();
  rolarPersonagem(()=>{
    closeLoading();
  });
}

function opcaoPersonagemEmBranco() {
  esconderItem('opcoes');
  mostrarItem('formulario_branco');
  mostrarFicha();
}

function exibirItensRolados(todos_itens_sorteados,callback) {
  let div_itens = document.querySelector('#itens div.borda');
  div_itens.innerHTML = '';
  let html_itens = '';

  if (todos_itens_sorteados.length == 0) {
    div_itens.innerHTML = `<div class="label"><span class="strong">Nenhum item encontrado!</span></div>`;
    callback();
  } else {
    todos_itens_sorteados.forEach((item, index) => {
      html_itens += item.html;

      if (index == (todos_itens_sorteados.length - 1)) {
        div_itens.innerHTML = html_itens;
        callback();
      }
    });
  }
}

function opcaoRolarItens() {
  preencherSelectLooting(()=>{
    esconderItem('opcoes');
    mostrarItem('formulario_itens');
    mostrarItem('itens');

    rolarItens(todos_itens_sorteados=>{
      exibirItensRolados(todos_itens_sorteados,()=>{});
    });
  });
}

function voltarAoInicio() {
  mostrarItem('opcoes');
  esconderItem('formulario');
  esconderItem('formulario_aleatorio');
  esconderItem('formulario_branco');
  esconderItem('formulario_itens');
  esconderFicha();
  esconderItem('itens');
  personagemEmBranco(()=>{});
}

document.getElementById('opcoes_criar_personagem').addEventListener('click',event=>{
  event.preventDefault();
  opcaoCriarPersonagem();
});

document.getElementById('opcoes_rolar_personagem').addEventListener('click',event=>{
  event.preventDefault();
  opcaoRolarPersonagem();
});

document.getElementById('opcoes_branco_personagem').addEventListener('click',event=>{
  event.preventDefault();
  opcaoPersonagemEmBranco();
});

document.getElementById('opcoes_rolar_itens').addEventListener('click',event=>{
  event.preventDefault();
  opcaoRolarItens();
});

preencherSelect('ficha_guilda',GUILDAS,()=>{
  closeLoading();
});
