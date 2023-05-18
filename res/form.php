<?php

$mock = <<<XML
{
  "ficha_jogador": "Mad",
  "ficha_personagem": "Max",
  "ficha_guilda": "Pelejas",
  "ficha_nivel": "1",
  "ficha_pontos": "0",
  "ficha_detalhes": "detalhes guilda",
  "ficha_segredo": "Segredo 1",
  "ficha_lesao": "1d",
  "ficha_lesao_detalhes": "detalhes lesão",
  "ficha_vontade_maxima": "5",
  "ficha_vontade": "5",
  "ficha_protecao_1": true,
  "ficha_protecao_2": true,
  "ficha_protecao_3": true,
  "ficha_protecao_4": true,
  "ficha_condutas_forte_1": true,
  "ficha_condutas_forte_2": true,
  "ficha_condutas_agil_1": true,
  "ficha_condutas_agil_2": true,
  "ficha_condutas_criativa_1": true,
  "ficha_condutas_criativa_2": true,
  "ficha_condutas_carismatica_1": true,
  "ficha_condutas_carismatica_2": true,
  "ficha_condutas_inteligente_1": true,
  "ficha_condutas_inteligente_2": true,
  "ficha_condutas_mistica_1": true,
  "ficha_condutas_mistica_2": true,
  "ficha_verbetes_abrir_fechaduras_1": true,
  "ficha_verbetes_abrir_fechaduras_2": true,
  "ficha_verbetes_atacar_corpo_a_corpo_1": true,
  "ficha_verbetes_atacar_corpo_a_corpo_2": true,
  "ficha_verbetes_atacar_desarmado_1": true,
  "ficha_verbetes_atacar_desarmado_2": true,
  "ficha_verbetes_atacar_a_distancia_1": true,
  "ficha_verbetes_atacar_a_distancia_2": true,
  "ficha_verbetes_barganhar_1": true,
  "ficha_verbetes_barganhar_2": true,
  "ficha_verbetes_cavalgar_1": true,
  "ficha_verbetes_cavalgar_2": true,
  "ficha_verbetes_cacar_1": true,
  "ficha_verbetes_cacar_2": true,
  "ficha_verbetes_confeccionar_armaduras_leves_1": true,
  "ficha_verbetes_confeccionar_armaduras_leves_2": true,
  "ficha_verbetes_confeccionar_armas_de_madeira_1": true,
  "ficha_verbetes_confeccionar_armas_de_madeira_2": true,
  "ficha_verbetes_conhecer_idiomas_1": true,
  "ficha_verbetes_conhecer_idiomas_2": true,
  "ficha_verbetes_cozinhar_1": true,
  "ficha_verbetes_cozinhar_2": true,
  "ficha_verbetes_curar_ferimentos_1": true,
  "ficha_verbetes_curar_ferimentos_2": true,
  "ficha_verbetes_enganar_1": true,
  "ficha_verbetes_enganar_2": true,
  "ficha_verbetes_entreter_1": true,
  "ficha_verbetes_entreter_2": true,
  "ficha_verbetes_equilibrar_1": true,
  "ficha_verbetes_equilibrar_2": true,
  "ficha_verbetes_escalar_1": true,
  "ficha_verbetes_escalar_2": true,
  "ficha_verbetes_esconder_nas_sombras_1": true,
  "ficha_verbetes_esconder_nas_sombras_2": true,
  "ficha_verbetes_esquivar_e_desengajar_1": true,
  "ficha_verbetes_esquivar_e_desengajar_2": true,
  "ficha_verbetes_falsificar_1": true,
  "ficha_verbetes_falsificar_2": true,
  "ficha_verbetes_forjar_armaduras_pesadas_1": true,
  "ficha_verbetes_forjar_armaduras_pesadas_2": true,
  "ficha_verbetes_forjar_armas_corpo_a_corpo_1": true,
  "ficha_verbetes_forjar_armas_corpo_a_corpo_2": true,
  "ficha_verbetes_forragear_1": true,
  "ficha_verbetes_forragear_2": true,
  "ficha_verbetes_furtar_1": true,
  "ficha_verbetes_furtar_2": true,
  "ficha_verbetes_historiar_1": true,
  "ficha_verbetes_historiar_2": true,
  "ficha_verbetes_intimidar_1": true,
  "ficha_verbetes_intimidar_2": true,
  "ficha_verbetes_investigar_pistas_1": true,
  "ficha_verbetes_investigar_pistas_2": true,
  "ficha_verbetes_ler_e_escrever_1": true,
  "ficha_verbetes_ler_e_escrever_2": true,
  "ficha_verbetes_liderar_1": true,
  "ficha_verbetes_liderar_2": true,
  "ficha_verbetes_mover_silenciosamente_1": true,
  "ficha_verbetes_mover_silenciosamente_2": true,
  "ficha_verbetes_nadar_1": true,
  "ficha_verbetes_nadar_2": true,
  "ficha_verbetes_navegar_barcos_e_navios_1": true,
  "ficha_verbetes_navegar_barcos_e_navios_2": true,
  "ficha_verbetes_perceber_ambiente_ao_redor_1": true,
  "ficha_verbetes_perceber_ambiente_ao_redor_2": true,
  "ficha_verbetes_persuadir_1": true,
  "ficha_verbetes_persuadir_2": true,
  "ficha_verbetes_praticar_alquimia_1": true,
  "ficha_verbetes_praticar_alquimia_2": true,
  "ficha_verbetes_rastrear_1": true,
  "ficha_verbetes_rastrear_2": true,
  "ficha_verbetes_reparar_objetos_1": true,
  "ficha_verbetes_reparar_objetos_2": true,
  "ficha_verbetes_sobreviver_nos_ermos_1": true,
  "ficha_verbetes_sobreviver_nos_ermos_2": true,
  "ficha_verbetes_treinar_animais_1": true,
  "ficha_verbetes_treinar_animais_2": true,
  "ficha_ouro": 10,
  "ficha_inventario_item_1": "1",
  "ficha_inventario_detalhes_1": "1",
  "ficha_inventario_qtde_1": "1",
  "ficha_inventario_item_2": "2",
  "ficha_inventario_detalhes_2": "2",
  "ficha_inventario_qtde_2": "2",
  "ficha_inventario_item_3": "3",
  "ficha_inventario_detalhes_3": "3",
  "ficha_inventario_qtde_3": "3",
  "ficha_inventario_item_4": "4",
  "ficha_inventario_detalhes_4": "4",
  "ficha_inventario_qtde_4": "4",
  "ficha_inventario_item_5": "5",
  "ficha_inventario_detalhes_5": "5",
  "ficha_inventario_qtde_5": "5",
  "ficha_inventario_item_6": "6",
  "ficha_inventario_detalhes_6": "6",
  "ficha_inventario_qtde_6": "6",
  "ficha_inventario_item_7": "7",
  "ficha_inventario_detalhes_7": "7",
  "ficha_inventario_qtde_7": "7",
  "ficha_inventario_item_8": "8",
  "ficha_inventario_detalhes_8": "8",
  "ficha_inventario_qtde_8": "8",
  "ficha_inventario_item_9": "9",
  "ficha_inventario_detalhes_9": "9",
  "ficha_inventario_qtde_9": "9",
  "ficha_magias_curatio_1": true,
  "ficha_magias_curatio_2": true,
  "ficha_magias_curatio_3": true,
  "ficha_magias_daemonium_1": true,
  "ficha_magias_daemonium_2": true,
  "ficha_magias_daemonium_3": true,
  "ficha_magias_fortitudo_1": true,
  "ficha_magias_fortitudo_2": true,
  "ficha_magias_fortitudo_3": true,
  "ficha_magias_glacies_1": true,
  "ficha_magias_glacies_2": true,
  "ficha_magias_glacies_3": true,
  "ficha_magias_ignis_1": true,
  "ficha_magias_ignis_2": true,
  "ficha_magias_ignis_3": true,
  "ficha_magias_incantare_1": true,
  "ficha_magias_incantare_2": true,
  "ficha_magias_incantare_3": true,
  "ficha_magias_invocare_1": true,
  "ficha_magias_invocare_2": true,
  "ficha_magias_invocare_3": true,
  "ficha_magias_lux_1": true,
  "ficha_magias_lux_2": true,
  "ficha_magias_lux_3": true,
  "ficha_magias_mortus_1": true,
  "ficha_magias_mortus_2": true,
  "ficha_magias_mortus_3": true,
  "ficha_magias_praesidium_1": true,
  "ficha_magias_praesidium_2": true,
  "ficha_magias_praesidium_3": true,
  "ficha_magias_puritas_1": true,
  "ficha_magias_puritas_2": true,
  "ficha_magias_puritas_3": true,
  "ficha_magias_sanguis_1": true,
  "ficha_magias_sanguis_2": true,
  "ficha_magias_sanguis_3": true,
  "ficha_magias_saxum_1": true,
  "ficha_magias_saxum_2": true,
  "ficha_magias_saxum_3": true,
  "ficha_magias_somnum_1": true,
  "ficha_magias_somnum_2": true,
  "ficha_magias_somnum_3": true,
  "ficha_magias_tempus_1": true,
  "ficha_magias_tempus_2": true,
  "ficha_magias_tempus_3": true,
  "ficha_magias_umbra_1": true,
  "ficha_magias_umbra_2": true,
  "ficha_magias_umbra_3": true,
  "ficha_magias_venenum_1": true,
  "ficha_magias_venenum_2": true,
  "ficha_magias_venenum_3": true,
  "ficha_magias_ventus_1": true,
  "ficha_magias_ventus_2": true,
  "ficha_magias_ventus_3": true,
  "ficha_magias_veritas_1": true,
  "ficha_magias_veritas_2": true,
  "ficha_magias_veritas_3": true,
  "ficha_magias_visio_1": true,
  "ficha_magias_visio_2": true,
  "ficha_magias_visio_3": true,
  "ficha_magias_vita_1": true,
  "ficha_magias_vita_2": true,
  "ficha_magias_vita_3": true
}
XML;

$obj = NULL;

$recebeu_post = FALSE;

if (isset($_POST['hidden_character_sheet'])) {
    $recebeu_post = TRUE;
}

if ($recebeu_post == FALSE) {
    $obj = json_decode($mock, true);
} else {
    $obj = array(
    "ficha_jogador" => $_POST['ficha_jogador'],
    "ficha_personagem" => $_POST['ficha_personagem'],
    "ficha_guilda" => $_POST['ficha_guilda'],
    "ficha_nivel" => $_POST['ficha_nivel'],
    "ficha_pontos" => $_POST['ficha_pontos'],
    "ficha_detalhes" => nl2br($_POST['ficha_detalhes']),
    "ficha_segredo" => $_POST['ficha_segredo'],
    "ficha_lesao" => $_POST['ficha_lesao'],
    "ficha_lesao_detalhes" => nl2br($_POST['ficha_lesao_detalhes']),
    "ficha_vontade_maxima" => $_POST['ficha_vontade_maxima'],
    "ficha_vontade" => $_POST['ficha_vontade'],
    "ficha_protecao_1" => $_POST['ficha_protecao_1'] == "on",
    "ficha_protecao_2" => $_POST['ficha_protecao_2'] == "on",
    "ficha_protecao_3" => $_POST['ficha_protecao_3'] == "on",
    "ficha_protecao_4" => $_POST['ficha_protecao_4'] == "on",
    "ficha_condutas_forte_1" => $_POST['ficha_condutas_forte_1'] == "on",
    "ficha_condutas_forte_2" => $_POST['ficha_condutas_forte_2'] == "on",
    "ficha_condutas_agil_1" => $_POST['ficha_condutas_agil_1'] == "on",
    "ficha_condutas_agil_2" => $_POST['ficha_condutas_agil_2'] == "on",
    "ficha_condutas_criativa_1" => $_POST['ficha_condutas_criativa_1'] == "on",
    "ficha_condutas_criativa_2" => $_POST['ficha_condutas_criativa_2'] == "on",
    "ficha_condutas_carismatica_1" => $_POST['ficha_condutas_carismatica_1'] == "on",
    "ficha_condutas_carismatica_2" => $_POST['ficha_condutas_carismatica_2'] == "on",
    "ficha_condutas_inteligente_1" => $_POST['ficha_condutas_inteligente_1'] == "on",
    "ficha_condutas_inteligente_2" => $_POST['ficha_condutas_inteligente_2'] == "on",
    "ficha_condutas_mistica_1" => $_POST['ficha_condutas_mistica_1'] == "on",
    "ficha_condutas_mistica_2" => $_POST['ficha_condutas_mistica_2'] == "on",
    "ficha_verbetes_abrir_fechaduras_1" => $_POST['ficha_verbetes_abrir_fechaduras_1'] == "on",
    "ficha_verbetes_abrir_fechaduras_2" => $_POST['ficha_verbetes_abrir_fechaduras_2'] == "on",
    "ficha_verbetes_atacar_corpo_a_corpo_1" => $_POST['ficha_verbetes_atacar_corpo_a_corpo_1'] == "on",
    "ficha_verbetes_atacar_corpo_a_corpo_2" => $_POST['ficha_verbetes_atacar_corpo_a_corpo_2'] == "on",
    "ficha_verbetes_atacar_desarmado_1" => $_POST['ficha_verbetes_atacar_desarmado_1'] == "on",
    "ficha_verbetes_atacar_desarmado_2" => $_POST['ficha_verbetes_atacar_desarmado_2'] == "on",
    "ficha_verbetes_atacar_a_distancia_1" => $_POST['ficha_verbetes_atacar_a_distancia_1'] == "on",
    "ficha_verbetes_atacar_a_distancia_2" => $_POST['ficha_verbetes_atacar_a_distancia_2'] == "on",
    "ficha_verbetes_barganhar_1" => $_POST['ficha_verbetes_barganhar_1'] == "on",
    "ficha_verbetes_barganhar_2" => $_POST['ficha_verbetes_barganhar_2'] == "on",
    "ficha_verbetes_cavalgar_1" => $_POST['ficha_verbetes_cavalgar_1'] == "on",
    "ficha_verbetes_cavalgar_2" => $_POST['ficha_verbetes_cavalgar_2'] == "on",
    "ficha_verbetes_cacar_1" => $_POST['ficha_verbetes_cacar_1'] == "on",
    "ficha_verbetes_cacar_2" => $_POST['ficha_verbetes_cacar_2'] == "on",
    "ficha_verbetes_confeccionar_armaduras_leves_1" => $_POST['ficha_verbetes_confeccionar_armaduras_leves_1'] == "on",
    "ficha_verbetes_confeccionar_armaduras_leves_2" => $_POST['ficha_verbetes_confeccionar_armaduras_leves_2'] == "on",
    "ficha_verbetes_confeccionar_armas_de_madeira_1" => $_POST['ficha_verbetes_confeccionar_armas_de_madeira_1'] == "on",
    "ficha_verbetes_confeccionar_armas_de_madeira_2" => $_POST['ficha_verbetes_confeccionar_armas_de_madeira_2'] == "on",
    "ficha_verbetes_conhecer_idiomas_1" => $_POST['ficha_verbetes_conhecer_idiomas_1'] == "on",
    "ficha_verbetes_conhecer_idiomas_2" => $_POST['ficha_verbetes_conhecer_idiomas_2'] == "on",
    "ficha_verbetes_cozinhar_1" => $_POST['ficha_verbetes_cozinhar_1'] == "on",
    "ficha_verbetes_cozinhar_2" => $_POST['ficha_verbetes_cozinhar_2'] == "on",
    "ficha_verbetes_curar_ferimentos_1" => $_POST['ficha_verbetes_curar_ferimentos_1'] == "on",
    "ficha_verbetes_curar_ferimentos_2" => $_POST['ficha_verbetes_curar_ferimentos_2'] == "on",
    "ficha_verbetes_enganar_1" => $_POST['ficha_verbetes_enganar_1'] == "on",
    "ficha_verbetes_enganar_2" => $_POST['ficha_verbetes_enganar_2'] == "on",
    "ficha_verbetes_entreter_1" => $_POST['ficha_verbetes_entreter_1'] == "on",
    "ficha_verbetes_entreter_2" => $_POST['ficha_verbetes_entreter_2'] == "on",
    "ficha_verbetes_equilibrar_1" => $_POST['ficha_verbetes_equilibrar_1'] == "on",
    "ficha_verbetes_equilibrar_2" => $_POST['ficha_verbetes_equilibrar_2'] == "on",
    "ficha_verbetes_escalar_1" => $_POST['ficha_verbetes_escalar_1'] == "on",
    "ficha_verbetes_escalar_2" => $_POST['ficha_verbetes_escalar_2'] == "on",
    "ficha_verbetes_esconder_nas_sombras_1" => $_POST['ficha_verbetes_esconder_nas_sombras_1'] == "on",
    "ficha_verbetes_esconder_nas_sombras_2" => $_POST['ficha_verbetes_esconder_nas_sombras_2'] == "on",
    "ficha_verbetes_esquivar_e_desengajar_1" => $_POST['ficha_verbetes_esquivar_e_desengajar_1'] == "on",
    "ficha_verbetes_esquivar_e_desengajar_2" => $_POST['ficha_verbetes_esquivar_e_desengajar_2'] == "on",
    "ficha_verbetes_falsificar_1" => $_POST['ficha_verbetes_falsificar_1'] == "on",
    "ficha_verbetes_falsificar_2" => $_POST['ficha_verbetes_falsificar_2'] == "on",
    "ficha_verbetes_forjar_armaduras_pesadas_1" => $_POST['ficha_verbetes_forjar_armaduras_pesadas_1'] == "on",
    "ficha_verbetes_forjar_armaduras_pesadas_2" => $_POST['ficha_verbetes_forjar_armaduras_pesadas_2'] == "on",
    "ficha_verbetes_forjar_armas_corpo_a_corpo_1" => $_POST['ficha_verbetes_forjar_armas_corpo_a_corpo_1'] == "on",
    "ficha_verbetes_forjar_armas_corpo_a_corpo_2" => $_POST['ficha_verbetes_forjar_armas_corpo_a_corpo_2'] == "on",
    "ficha_verbetes_forragear_1" => $_POST['ficha_verbetes_forragear_1'] == "on",
    "ficha_verbetes_forragear_2" => $_POST['ficha_verbetes_forragear_2'] == "on",
    "ficha_verbetes_furtar_1" => $_POST['ficha_verbetes_furtar_1'] == "on",
    "ficha_verbetes_furtar_2" => $_POST['ficha_verbetes_furtar_2'] == "on",
    "ficha_verbetes_historiar_1" => $_POST['ficha_verbetes_historiar_1'] == "on",
    "ficha_verbetes_historiar_2" => $_POST['ficha_verbetes_historiar_2'] == "on",
    "ficha_verbetes_intimidar_1" => $_POST['ficha_verbetes_intimidar_1'] == "on",
    "ficha_verbetes_intimidar_2" => $_POST['ficha_verbetes_intimidar_2'] == "on",
    "ficha_verbetes_investigar_pistas_1" => $_POST['ficha_verbetes_investigar_pistas_1'] == "on",
    "ficha_verbetes_investigar_pistas_2" => $_POST['ficha_verbetes_investigar_pistas_2'] == "on",
    "ficha_verbetes_ler_e_escrever_1" => $_POST['ficha_verbetes_ler_e_escrever_1'] == "on",
    "ficha_verbetes_ler_e_escrever_2" => $_POST['ficha_verbetes_ler_e_escrever_2'] == "on",
    "ficha_verbetes_liderar_1" => $_POST['ficha_verbetes_liderar_1'] == "on",
    "ficha_verbetes_liderar_2" => $_POST['ficha_verbetes_liderar_2'] == "on",
    "ficha_verbetes_mover_silenciosamente_1" => $_POST['ficha_verbetes_mover_silenciosamente_1'] == "on",
    "ficha_verbetes_mover_silenciosamente_2" => $_POST['ficha_verbetes_mover_silenciosamente_2'] == "on",
    "ficha_verbetes_nadar_1" => $_POST['ficha_verbetes_nadar_1'] == "on",
    "ficha_verbetes_nadar_2" => $_POST['ficha_verbetes_nadar_2'] == "on",
    "ficha_verbetes_navegar_barcos_e_navios_1" => $_POST['ficha_verbetes_navegar_barcos_e_navios_1'] == "on",
    "ficha_verbetes_navegar_barcos_e_navios_2" => $_POST['ficha_verbetes_navegar_barcos_e_navios_2'] == "on",
    "ficha_verbetes_perceber_ambiente_ao_redor_1" => $_POST['ficha_verbetes_perceber_ambiente_ao_redor_1'] == "on",
    "ficha_verbetes_perceber_ambiente_ao_redor_2" => $_POST['ficha_verbetes_perceber_ambiente_ao_redor_2'] == "on",
    "ficha_verbetes_persuadir_1" => $_POST['ficha_verbetes_persuadir_1'] == "on",
    "ficha_verbetes_persuadir_2" => $_POST['ficha_verbetes_persuadir_2'] == "on",
    "ficha_verbetes_praticar_alquimia_1" => $_POST['ficha_verbetes_praticar_alquimia_1'] == "on",
    "ficha_verbetes_praticar_alquimia_2" => $_POST['ficha_verbetes_praticar_alquimia_2'] == "on",
    "ficha_verbetes_rastrear_1" => $_POST['ficha_verbetes_rastrear_1'] == "on",
    "ficha_verbetes_rastrear_2" => $_POST['ficha_verbetes_rastrear_2'] == "on",
    "ficha_verbetes_reparar_objetos_1" => $_POST['ficha_verbetes_reparar_objetos_1'] == "on",
    "ficha_verbetes_reparar_objetos_2" => $_POST['ficha_verbetes_reparar_objetos_2'] == "on",
    "ficha_verbetes_sobreviver_nos_ermos_1" => $_POST['ficha_verbetes_sobreviver_nos_ermos_1'] == "on",
    "ficha_verbetes_sobreviver_nos_ermos_2" => $_POST['ficha_verbetes_sobreviver_nos_ermos_2'] == "on",
    "ficha_verbetes_treinar_animais_1" => $_POST['ficha_verbetes_treinar_animais_1'] == "on",
    "ficha_verbetes_treinar_animais_2" => $_POST['ficha_verbetes_treinar_animais_2'] == "on",
    "ficha_ouro" => $_POST['ficha_ouro'],
    "ficha_inventario_item_1" => $_POST['ficha_inventario_item_1'],
    "ficha_inventario_detalhes_1" => $_POST['ficha_inventario_detalhes_1'],
    "ficha_inventario_qtde_1" => $_POST['ficha_inventario_qtde_1'],
    "ficha_inventario_item_2" => $_POST['ficha_inventario_item_2'],
    "ficha_inventario_detalhes_2" => $_POST['ficha_inventario_detalhes_2'],
    "ficha_inventario_qtde_2" => $_POST['ficha_inventario_qtde_2'],
    "ficha_inventario_item_3" => $_POST['ficha_inventario_item_3'],
    "ficha_inventario_detalhes_3" => $_POST['ficha_inventario_detalhes_3'],
    "ficha_inventario_qtde_3" => $_POST['ficha_inventario_qtde_3'],
    "ficha_inventario_item_4" => $_POST['ficha_inventario_item_4'],
    "ficha_inventario_detalhes_4" => $_POST['ficha_inventario_detalhes_4'],
    "ficha_inventario_qtde_4" => $_POST['ficha_inventario_qtde_4'],
    "ficha_inventario_item_5" => $_POST['ficha_inventario_item_5'],
    "ficha_inventario_detalhes_5" => $_POST['ficha_inventario_detalhes_5'],
    "ficha_inventario_qtde_5" => $_POST['ficha_inventario_qtde_5'],
    "ficha_inventario_item_6" => $_POST['ficha_inventario_item_6'],
    "ficha_inventario_detalhes_6" => $_POST['ficha_inventario_detalhes_6'],
    "ficha_inventario_qtde_6" => $_POST['ficha_inventario_qtde_6'],
    "ficha_inventario_item_7" => $_POST['ficha_inventario_item_7'],
    "ficha_inventario_detalhes_7" => $_POST['ficha_inventario_detalhes_7'],
    "ficha_inventario_qtde_7" => $_POST['ficha_inventario_qtde_7'],
    "ficha_inventario_item_8" => $_POST['ficha_inventario_item_8'],
    "ficha_inventario_detalhes_8" => $_POST['ficha_inventario_detalhes_8'],
    "ficha_inventario_qtde_8" => $_POST['ficha_inventario_qtde_8'],
    "ficha_inventario_item_9" => $_POST['ficha_inventario_item_9'],
    "ficha_inventario_detalhes_9" => $_POST['ficha_inventario_detalhes_9'],
    "ficha_inventario_qtde_9" => $_POST['ficha_inventario_qtde_9'],
    "ficha_magias_curatio_1" => $_POST['ficha_magias_curatio_1'] == "on",
    "ficha_magias_curatio_2" => $_POST['ficha_magias_curatio_2'] == "on",
    "ficha_magias_curatio_3" => $_POST['ficha_magias_curatio_3'] == "on",
    "ficha_magias_daemonium_1" => $_POST['ficha_magias_daemonium_1'] == "on",
    "ficha_magias_daemonium_2" => $_POST['ficha_magias_daemonium_2'] == "on",
    "ficha_magias_daemonium_3" => $_POST['ficha_magias_daemonium_3'] == "on",
    "ficha_magias_fortitudo_1" => $_POST['ficha_magias_fortitudo_1'] == "on",
    "ficha_magias_fortitudo_2" => $_POST['ficha_magias_fortitudo_2'] == "on",
    "ficha_magias_fortitudo_3" => $_POST['ficha_magias_fortitudo_3'] == "on",
    "ficha_magias_glacies_1" => $_POST['ficha_magias_glacies_1'] == "on",
    "ficha_magias_glacies_2" => $_POST['ficha_magias_glacies_2'] == "on",
    "ficha_magias_glacies_3" => $_POST['ficha_magias_glacies_3'] == "on",
    "ficha_magias_ignis_1" => $_POST['ficha_magias_ignis_1'] == "on",
    "ficha_magias_ignis_2" => $_POST['ficha_magias_ignis_2'] == "on",
    "ficha_magias_ignis_3" => $_POST['ficha_magias_ignis_3'] == "on",
    "ficha_magias_incantare_1" => $_POST['ficha_magias_incantare_1'] == "on",
    "ficha_magias_incantare_2" => $_POST['ficha_magias_incantare_2'] == "on",
    "ficha_magias_incantare_3" => $_POST['ficha_magias_incantare_3'] == "on",
    "ficha_magias_invocare_1" => $_POST['ficha_magias_invocare_1'] == "on",
    "ficha_magias_invocare_2" => $_POST['ficha_magias_invocare_2'] == "on",
    "ficha_magias_invocare_3" => $_POST['ficha_magias_invocare_3'] == "on",
    "ficha_magias_lux_1" => $_POST['ficha_magias_lux_1'] == "on",
    "ficha_magias_lux_2" => $_POST['ficha_magias_lux_2'] == "on",
    "ficha_magias_lux_3" => $_POST['ficha_magias_lux_3'] == "on",
    "ficha_magias_mortus_1" => $_POST['ficha_magias_mortus_1'] == "on",
    "ficha_magias_mortus_2" => $_POST['ficha_magias_mortus_2'] == "on",
    "ficha_magias_mortus_3" => $_POST['ficha_magias_mortus_3'] == "on",
    "ficha_magias_praesidium_1" => $_POST['ficha_magias_praesidium_1'] == "on",
    "ficha_magias_praesidium_2" => $_POST['ficha_magias_praesidium_2'] == "on",
    "ficha_magias_praesidium_3" => $_POST['ficha_magias_praesidium_3'] == "on",
    "ficha_magias_puritas_1" => $_POST['ficha_magias_puritas_1'] == "on",
    "ficha_magias_puritas_2" => $_POST['ficha_magias_puritas_2'] == "on",
    "ficha_magias_puritas_3" => $_POST['ficha_magias_puritas_3'] == "on",
    "ficha_magias_sanguis_1" => $_POST['ficha_magias_sanguis_1'] == "on",
    "ficha_magias_sanguis_2" => $_POST['ficha_magias_sanguis_2'] == "on",
    "ficha_magias_sanguis_3" => $_POST['ficha_magias_sanguis_3'] == "on",
    "ficha_magias_saxum_1" => $_POST['ficha_magias_saxum_1'] == "on",
    "ficha_magias_saxum_2" => $_POST['ficha_magias_saxum_2'] == "on",
    "ficha_magias_saxum_3" => $_POST['ficha_magias_saxum_3'] == "on",
    "ficha_magias_somnum_1" => $_POST['ficha_magias_somnum_1'] == "on",
    "ficha_magias_somnum_2" => $_POST['ficha_magias_somnum_2'] == "on",
    "ficha_magias_somnum_3" => $_POST['ficha_magias_somnum_3'] == "on",
    "ficha_magias_tempus_1" => $_POST['ficha_magias_tempus_1'] == "on",
    "ficha_magias_tempus_2" => $_POST['ficha_magias_tempus_2'] == "on",
    "ficha_magias_tempus_3" => $_POST['ficha_magias_tempus_3'] == "on",
    "ficha_magias_umbra_1" => $_POST['ficha_magias_umbra_1'] == "on",
    "ficha_magias_umbra_2" => $_POST['ficha_magias_umbra_2'] == "on",
    "ficha_magias_umbra_3" => $_POST['ficha_magias_umbra_3'] == "on",
    "ficha_magias_venenum_1" => $_POST['ficha_magias_venenum_1'] == "on",
    "ficha_magias_venenum_2" => $_POST['ficha_magias_venenum_2'] == "on",
    "ficha_magias_venenum_3" => $_POST['ficha_magias_venenum_3'] == "on",
    "ficha_magias_ventus_1" => $_POST['ficha_magias_ventus_1'] == "on",
    "ficha_magias_ventus_2" => $_POST['ficha_magias_ventus_2'] == "on",
    "ficha_magias_ventus_3" => $_POST['ficha_magias_ventus_3'] == "on",
    "ficha_magias_veritas_1" => $_POST['ficha_magias_veritas_1'] == "on",
    "ficha_magias_veritas_2" => $_POST['ficha_magias_veritas_2'] == "on",
    "ficha_magias_veritas_3" => $_POST['ficha_magias_veritas_3'] == "on",
    "ficha_magias_visio_1" => $_POST['ficha_magias_visio_1'] == "on",
    "ficha_magias_visio_2" => $_POST['ficha_magias_visio_2'] == "on",
    "ficha_magias_visio_3" => $_POST['ficha_magias_visio_3'] == "on",
    "ficha_magias_vita_1" => $_POST['ficha_magias_vita_1'] == "on",
    "ficha_magias_vita_2" => $_POST['ficha_magias_vita_2'] == "on",
    "ficha_magias_vita_3" => $_POST['ficha_magias_vita_3'] == "on"
    );

    $obj['ficha_detalhes'] = str_replace('<br />', '&#xA;', $obj['ficha_detalhes']);
    $obj['ficha_lesao_detalhes'] = str_replace('<br />', '&#xA;', $obj['ficha_lesao_detalhes']);
}

?>

<style type="text/css">
body {
  margin: 0;
  padding: 0;
  border: 0;
}

#page {
  background-image: url(img/ficha.jpg);
  background-repeat: no-repeat;
  background-position: left top;
  /* font-family: Georgia, serif; */

  position: relative;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  border: 0;

  width: 1240px;
  height: 1754px;
}

#page input[type=text] {
  /* font-family: font-family: Georgia, serif; */
}

input[type=checkbox] {
  width: 23.5px;
  height: 23.5px;
}

#ficha_personagem {
  position: absolute;
  border: 0;
  text-align: left;

  left: 256px;
  top: 252px;
  width: 330px;
  height: 57px;
  font-size: 30px;
}

#ficha_pontos {
  position: absolute;
  border: 0;
  text-align: center;

  left: 608px;
  top: 262px;
  width: 89px;
  height: 45px;
  font-size: 30px;
}

#ficha_nivel {
  position: absolute;
  border: 0;
  text-align: center;

  left: 713px;
  top: 232px;
  width: 90px;
  height: 90px;
  font-size: 50px;
}

#ficha_jogador {
  position: absolute;
  border: 0;
  text-align: left;

  left: 820px;
  top: 242px;
  width: 350px;
  height: 57px;
  font-size: 35px;
}

#ficha_guilda {
  position: absolute;
  border: 0;
  text-align: left;

  left: 196px;
  top: 332px;
  width: 396px;
  height: 57px;
  font-size: 28px;
}

#ficha_segredo {
  position: absolute;
  border: 0;
  text-align: left;

  left: 750px;
  top: 336px;
  width: 420px;
  height: 45px;
  font-size: 20px;
}

#ficha_detalhes {
  position: absolute;
  left: 192px;
  top: 402px;

  font-size: 16px;

  overflow-y: scroll;
  border: 0;
}

#ficha_lesao {
  position: absolute;
  border: 0;
  text-align: center;

  left: 774px;
  top: 410px;
  width: 70px;
  height: 72px;
  font-size: 30px;
}

#ficha_lesao_detalhes {
  position: absolute;
  left: 858px;
  top: 395px;

  font-size: 16px;

  overflow-y: scroll;
  border: 0;
}

#ficha_vontade {
  position: absolute;
  border: 0;
  text-align: center;

  left: 296px;
  top: 540px;
  width: 72px;
  height: 72px;
  font-size: 40px;
}

#ficha_vontade_maxima {
  position: absolute;
  border: 0;
  text-align: center;

  left: 425px;
  top: 552px;
  width: 54px;
  height: 52px;
  font-size: 32px;
}

#ficha_protecao_1 {
  position: absolute;
  left: 854px;
  top: 538px;

  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 30px;
}

#ficha_protecao_2 {
  position: absolute;
  left: 902px;
  top: 537px;

  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 30px;
}

#ficha_protecao_3 {
  position: absolute;
  left: 950px;
  top: 537px;

  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 30px;
}

#ficha_protecao_4 {
  position: absolute;
  left: 998px;
  top: 537px;

  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 30px;
}

#ficha_condutas_forte_1 {
  position: absolute;
  left: 86px;
  top: 731px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_forte_2 {
  position: absolute;
  left: 124px;
  top: 730px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_agil_1 {
  position: absolute;
  left: 86px;
  top: 785px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_agil_2 {
  position: absolute;
  left: 126px;
  top: 785px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_criativa_1 {
  position: absolute;
  left: 86px;
  top: 839px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_criativa_2 {
  position: absolute;
  left: 126px;
  top: 839px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_carismatica_1 {
  position: absolute;
  left: 86px;
  top: 893px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_carismatica_2 {
  position: absolute;
  left: 126px;
  top: 893px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_inteligente_1 {
  position: absolute;
  left: 86px;
  top: 950px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_inteligente_2 {
  position: absolute;
  left: 126px;
  top: 950px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_mistica_1 {
  position: absolute;
  left: 86px;
  top: 1003px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

#ficha_condutas_mistica_2 {
  position: absolute;
  left: 126px;
  top: 1003px;

  text-align: center;
  width: 32px;
  height: 32px;
  font-size: 22px;
}

/*#ficha_verbetes_abrir_fechaduras_1 { position: absolute; left: 472px; top: 724px; }*/
#ficha_verbetes_abrir_fechaduras_1 { position: absolute; left: 480px; top: 731px; }
#ficha_verbetes_abrir_fechaduras_2 { position: absolute; left: 506px; top: 731px; }
#ficha_verbetes_atacar_corpo_a_corpo_1 { position: absolute; left: 480px; top: 756px; }
#ficha_verbetes_atacar_corpo_a_corpo_2 { position: absolute; left: 506px; top: 756px; }
#ficha_verbetes_atacar_desarmado_1 { position: absolute; left: 480px; top: 780px; }
#ficha_verbetes_atacar_desarmado_2 { position: absolute; left: 506px; top: 780px; }
#ficha_verbetes_atacar_a_distancia_1 { position: absolute; left: 480px; top: 804px; }
#ficha_verbetes_atacar_a_distancia_2 { position: absolute; left: 506px; top: 804px; }
#ficha_verbetes_barganhar_1 { position: absolute; left: 480px; top: 828px; }
#ficha_verbetes_barganhar_2 { position: absolute; left: 506px; top: 828px; }
#ficha_verbetes_cavalgar_1 { position: absolute; left: 480px; top: 852px; }
#ficha_verbetes_cavalgar_2 { position: absolute; left: 506px; top: 852px; }
#ficha_verbetes_cacar_1 { position: absolute; left: 480px; top: 876px; }
#ficha_verbetes_cacar_2 { position: absolute; left: 506px; top: 876px; }
#ficha_verbetes_confeccionar_armaduras_leves_1 { position: absolute; left: 480px; top: 900px; }
#ficha_verbetes_confeccionar_armaduras_leves_2 { position: absolute; left: 506px; top: 900px; }
#ficha_verbetes_confeccionar_armas_de_madeira_1 { position: absolute; left: 480px; top: 924px; }
#ficha_verbetes_confeccionar_armas_de_madeira_2 { position: absolute; left: 506px; top: 924px; }
#ficha_verbetes_conhecer_idiomas_1 { position: absolute; left: 480px; top: 948px; }
#ficha_verbetes_conhecer_idiomas_2 { position: absolute; left: 506px; top: 948px; }
#ficha_verbetes_cozinhar_1 { position: absolute; left: 480px; top: 972px; }
#ficha_verbetes_cozinhar_2 { position: absolute; left: 506px; top: 972px; }
#ficha_verbetes_curar_ferimentos_1 { position: absolute; left: 480px; top: 996px; }
#ficha_verbetes_curar_ferimentos_2 { position: absolute; left: 506px; top: 996px; }
#ficha_verbetes_enganar_1 { position: absolute; left: 480px; top: 1020px; }
#ficha_verbetes_enganar_2 { position: absolute; left: 506px; top: 1020px; }
#ficha_verbetes_entreter_1 { position: absolute; left: 480px; top: 1044px; }
#ficha_verbetes_entreter_2 { position: absolute; left: 506px; top: 1044px; }
#ficha_verbetes_equilibrar_1 { position: absolute; left: 480px; top: 1068px; }
#ficha_verbetes_equilibrar_2 { position: absolute; left: 506px; top: 1068px; }
#ficha_verbetes_escalar_1 { position: absolute; left: 480px; top: 1092px; }
#ficha_verbetes_escalar_2 { position: absolute; left: 506px; top: 1092px; }
#ficha_verbetes_esconder_nas_sombras_1 { position: absolute; left: 480px; top: 1116px; }
#ficha_verbetes_esconder_nas_sombras_2 { position: absolute; left: 506px; top: 1116px; }

#ficha_verbetes_esquivar_e_desengajar_1 { position: absolute; left: 857px; top: 636px; }
#ficha_verbetes_esquivar_e_desengajar_2 { position: absolute; left: 883px; top: 636px; }
#ficha_verbetes_falsificar_1 { position: absolute; left: 857px; top: 660px; }
#ficha_verbetes_falsificar_2 { position: absolute; left: 883px; top: 660px; }
#ficha_verbetes_forjar_armaduras_pesadas_1 { position: absolute; left: 857px; top: 685px; }
#ficha_verbetes_forjar_armaduras_pesadas_2 { position: absolute; left: 883px; top: 685px; }
#ficha_verbetes_forjar_armas_corpo_a_corpo_1 { position: absolute; left: 857px; top: 709px; }
#ficha_verbetes_forjar_armas_corpo_a_corpo_2 { position: absolute; left: 883px; top: 709px; }
#ficha_verbetes_forragear_1 { position: absolute; left: 857px; top: 732px; }
#ficha_verbetes_forragear_2 { position: absolute; left: 883px; top: 732px; }
#ficha_verbetes_furtar_1 { position: absolute; left: 857px; top: 757px; }
#ficha_verbetes_furtar_2 { position: absolute; left: 883px; top: 757px; }
#ficha_verbetes_historiar_1 { position: absolute; left: 857px; top: 781px; }
#ficha_verbetes_historiar_2 { position: absolute; left: 883px; top: 781px; }
#ficha_verbetes_intimidar_1 { position: absolute; left: 857px; top: 804px; }
#ficha_verbetes_intimidar_2 { position: absolute; left: 883px; top: 804px; }
#ficha_verbetes_investigar_pistas_1 { position: absolute; left: 857px; top: 829px; }
#ficha_verbetes_investigar_pistas_2 { position: absolute; left: 883px; top: 829px; }
#ficha_verbetes_ler_e_escrever_1 { position: absolute; left: 857px; top: 852px; }
#ficha_verbetes_ler_e_escrever_2 { position: absolute; left: 883px; top: 852px; }
#ficha_verbetes_liderar_1 { position: absolute; left: 857px; top: 877px; }
#ficha_verbetes_liderar_2 { position: absolute; left: 883px; top: 877px; }
#ficha_verbetes_mover_silenciosamente_1 { position: absolute; left: 857px; top: 901px; }
#ficha_verbetes_mover_silenciosamente_2 { position: absolute; left: 883px; top: 901px; }
#ficha_verbetes_nadar_1 { position: absolute; left: 857px; top: 925px; }
#ficha_verbetes_nadar_2 { position: absolute; left: 883px; top: 925px; }
#ficha_verbetes_navegar_barcos_e_navios_1 { position: absolute; left: 857px; top: 949px; }
#ficha_verbetes_navegar_barcos_e_navios_2 { position: absolute; left: 883px; top: 949px; }
#ficha_verbetes_perceber_ambiente_ao_redor_1 { position: absolute; left: 857px; top: 973px; }
#ficha_verbetes_perceber_ambiente_ao_redor_2 { position: absolute; left: 883px; top: 973px; }
#ficha_verbetes_persuadir_1 { position: absolute; left: 857px; top: 997px; }
#ficha_verbetes_persuadir_2 { position: absolute; left: 883px; top: 997px; }
#ficha_verbetes_praticar_alquimia_1 { position: absolute; left: 857px; top: 1021px; }
#ficha_verbetes_praticar_alquimia_2 { position: absolute; left: 883px; top: 1021px; }
#ficha_verbetes_rastrear_1 { position: absolute; left: 857px; top: 1045px; }
#ficha_verbetes_rastrear_2 { position: absolute; left: 883px; top: 1045px; }
#ficha_verbetes_reparar_objetos_1 { position: absolute; left: 857px; top: 1069px; }
#ficha_verbetes_reparar_objetos_2 { position: absolute; left: 883px; top: 1069px; }
#ficha_verbetes_sobreviver_nos_ermos_1 { position: absolute; left: 857px; top: 1093px; }
#ficha_verbetes_sobreviver_nos_ermos_2 { position: absolute; left: 883px; top: 1093px; }
#ficha_verbetes_treinar_animais_1 { position: absolute; left: 857px; top: 1117px; }
#ficha_verbetes_treinar_animais_2 { position: absolute; left: 883px; top: 1117px; }

#ficha_ouro {
  position: absolute;
  border: 0;
  text-align: center;

  left: 291px;
  top: 1101px;
  width: 166px;
  height: 50px;
  font-size: 36px;
}

/* #ficha_inventario_item_1 { top: 1199px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; } */
#ficha_inventario_item_1 { top: 1208px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_1 { top: 1208px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_1 { top: 1208px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_2 { top: 1265px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_2 { top: 1265px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_2 { top: 1265px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_3 { top: 1320px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_3 { top: 1320px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_3 { top: 1320px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_4 { top: 1376px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_4 { top: 1376px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_4 { top: 1376px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_5 { top: 1434px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_5 { top: 1434px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_5 { top: 1434px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_6 { top: 1491px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_6 { top: 1491px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_6 { top: 1491px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_7 { top: 1547px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_7 { top: 1547px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_7 { top: 1547px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_8 { top: 1605px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_8 { top: 1605px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_8 { top: 1605px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_inventario_item_9 { top: 1661px; position: absolute; border: 0; text-align: left; left: 64px; width: 246px; height: 38px; font-size: 18px; }
#ficha_inventario_detalhes_9 { top: 1661px; position: absolute; border: 0; text-align: left; left: 326px; width: 339px; height: 38px; font-size: 16px; }
#ficha_inventario_qtde_9 { top: 1661px; position: absolute; border: 0; text-align: center; left: 679px; width: 40px; height: 38px; font-size: 18px; }

#ficha_magias_curatio_1 { position: absolute; left: 902px; top: 1203px; }
#ficha_magias_curatio_2 { position: absolute; left: 928px; top: 1203px; }
#ficha_magias_curatio_3 { position: absolute; left: 954px; top: 1203px; }

#ficha_magias_daemonium_1 { position: absolute; left: 902px; top: 1227px; }
#ficha_magias_daemonium_2 { position: absolute; left: 928px; top: 1227px; }
#ficha_magias_daemonium_3 { position: absolute; left: 954px; top: 1227px; }

#ficha_magias_fortitudo_1 { position: absolute; left: 902px; top: 1252px; }
#ficha_magias_fortitudo_2 { position: absolute; left: 928px; top: 1252px; }
#ficha_magias_fortitudo_3 { position: absolute; left: 954px; top: 1252px; }

#ficha_magias_glacies_1 { position: absolute; left: 902px; top: 1276px; }
#ficha_magias_glacies_2 { position: absolute; left: 928px; top: 1276px; }
#ficha_magias_glacies_3 { position: absolute; left: 954px; top: 1276px; }

#ficha_magias_ignis_1 { position: absolute; left: 794px; top: 1300px; }
#ficha_magias_ignis_2 { position: absolute; left: 821px; top: 1300px; }
#ficha_magias_ignis_3 { position: absolute; left: 846px; top: 1300px; }

#ficha_magias_incantare_1 { position: absolute; left: 794px; top: 1324px; }
#ficha_magias_incantare_2 { position: absolute; left: 821px; top: 1324px; }
#ficha_magias_incantare_3 { position: absolute; left: 846px; top: 1324px; }

#ficha_magias_invocare_1 { position: absolute; left: 794px; top: 1348px; }
#ficha_magias_invocare_2 { position: absolute; left: 821px; top: 1348px; }
#ficha_magias_invocare_3 { position: absolute; left: 846px; top: 1348px; }

#ficha_magias_lux_1 { position: absolute; left: 794px; top: 1371px; }
#ficha_magias_lux_2 { position: absolute; left: 821px; top: 1371px; }
#ficha_magias_lux_3 { position: absolute; left: 846px; top: 1371px; }

#ficha_magias_mortus_1 { position: absolute; left: 794px; top: 1396px; }
#ficha_magias_mortus_2 { position: absolute; left: 821px; top: 1396px; }
#ficha_magias_mortus_3 { position: absolute; left: 846px; top: 1396px; }

#ficha_magias_praesidium_1 { position: absolute; left: 794px; top: 1420px; }
#ficha_magias_praesidium_2 { position: absolute; left: 821px; top: 1420px; }
#ficha_magias_praesidium_3 { position: absolute; left: 846px; top: 1420px; }

#ficha_magias_puritas_1 { position: absolute; left: 794px; top: 1444px; }
#ficha_magias_puritas_2 { position: absolute; left: 821px; top: 1444px; }
#ficha_magias_puritas_3 { position: absolute; left: 846px; top: 1444px; }

#ficha_magias_sanguis_1 { position: absolute; left: 794px; top: 1468px; }
#ficha_magias_sanguis_2 { position: absolute; left: 821px; top: 1468px; }
#ficha_magias_sanguis_3 { position: absolute; left: 846px; top: 1468px; }

#ficha_magias_saxum_1 { position: absolute; left: 794px; top: 1492px; }
#ficha_magias_saxum_2 { position: absolute; left: 821px; top: 1492px; }
#ficha_magias_saxum_3 { position: absolute; left: 846px; top: 1492px; }

#ficha_magias_somnum_1 { position: absolute; left: 794px; top: 1516px; }
#ficha_magias_somnum_2 { position: absolute; left: 821px; top: 1516px; }
#ficha_magias_somnum_3 { position: absolute; left: 846px; top: 1516px; }

#ficha_magias_tempus_1 { position: absolute; left: 794px; top: 1540px; }
#ficha_magias_tempus_2 { position: absolute; left: 821px; top: 1540px; }
#ficha_magias_tempus_3 { position: absolute; left: 846px; top: 1540px; }

#ficha_magias_umbra_1 { position: absolute; left: 794px; top: 1564px; }
#ficha_magias_umbra_2 { position: absolute; left: 821px; top: 1564px; }
#ficha_magias_umbra_3 { position: absolute; left: 846px; top: 1564px; }

#ficha_magias_venenum_1 { position: absolute; left: 794px; top: 1588px; }
#ficha_magias_venenum_2 { position: absolute; left: 821px; top: 1588px; }
#ficha_magias_venenum_3 { position: absolute; left: 846px; top: 1588px; }

#ficha_magias_ventus_1 { position: absolute; left: 794px; top: 1612px; }
#ficha_magias_ventus_2 { position: absolute; left: 821px; top: 1612px; }
#ficha_magias_ventus_3 { position: absolute; left: 846px; top: 1612px; }

#ficha_magias_veritas_1 { position: absolute; left: 794px; top: 1636px; }
#ficha_magias_veritas_2 { position: absolute; left: 821px; top: 1636px; }
#ficha_magias_veritas_3 { position: absolute; left: 846px; top: 1636px; }

#ficha_magias_visio_1 { position: absolute; left: 794px; top: 1660px; }
#ficha_magias_visio_2 { position: absolute; left: 821px; top: 1660px; }
#ficha_magias_visio_3 { position: absolute; left: 846px; top: 1660px; }

#ficha_magias_vita_1 { position: absolute; left: 794px; top: 1684px; }
#ficha_magias_vita_2 { position: absolute; left: 821px; top: 1684px; }
#ficha_magias_vita_3 { position: absolute; left: 846px; top: 1684px; }

</style>
<div id="page">
      <input id="ficha_personagem" type="text" value="<?=$obj['ficha_personagem']?>">
      <input id="ficha_pontos" type="text" value="<?=$obj['ficha_pontos']?>">
      <input id="ficha_nivel" type="text" value="<?=$obj['ficha_nivel']?>">
      <input id="ficha_jogador" type="text" value="<?=$obj['ficha_jogador']?>">

      <input id="ficha_guilda" type="text" value="<?=$obj['ficha_guilda']?>">
      <input id="ficha_segredo" type="text" value="<?=$obj['ficha_segredo']?>">

      <textarea id="ficha_detalhes" rows="3" cols="45"><?=$obj['ficha_detalhes']?> </textarea>
      <input id="ficha_lesao" type="text" value="<?=$obj['ficha_lesao']?>">
      <textarea id="ficha_lesao_detalhes" rows="3" cols="30"><?=$obj['ficha_lesao_detalhes']?> </textarea>

      <input id="ficha_vontade" type="text" value="<?=$obj['ficha_vontade']?>">
      <input id="ficha_vontade_maxima" type="text" value="<?=$obj['ficha_vontade_maxima']?>">

      <input id="ficha_protecao_1" type="input" value="<?php if ($obj['ficha_protecao_1'] === TRUE) echo "X"; ?>">
      <input id="ficha_protecao_2" type="input" value="<?php if ($obj['ficha_protecao_2'] === TRUE) echo "X"; ?>">
      <input id="ficha_protecao_3" type="input" value="<?php if ($obj['ficha_protecao_3'] === TRUE) echo "X"; ?>">
      <input id="ficha_protecao_4" type="input" value="<?php if ($obj['ficha_protecao_4'] === TRUE) echo "X"; ?>">

      <input id="ficha_condutas_forte_1" type="input" value="<?php if ($obj['ficha_condutas_forte_1'] === TRUE) echo "X"; ?>">
      <input id="ficha_condutas_forte_2" type="input" value="<?php if ($obj['ficha_condutas_forte_2'] === TRUE) echo "X"; ?>">

      <input id="ficha_condutas_agil_1" type="input" value="<?php if ($obj['ficha_condutas_agil_1'] === TRUE) echo "X"; ?>">
      <input id="ficha_condutas_agil_2" type="input" value="<?php if ($obj['ficha_condutas_agil_2'] === TRUE) echo "X"; ?>">

      <input id="ficha_condutas_criativa_1" type="input" value="<?php if ($obj['ficha_condutas_criativa_1'] === TRUE) echo "X"; ?>">
      <input id="ficha_condutas_criativa_2" type="input" value="<?php if ($obj['ficha_condutas_criativa_2'] === TRUE) echo "X"; ?>">

      <input id="ficha_condutas_carismatica_1" type="input" value="<?php if ($obj['ficha_condutas_carismatica_1'] === TRUE) echo "X"; ?>">
      <input id="ficha_condutas_carismatica_2" type="input" value="<?php if ($obj['ficha_condutas_carismatica_2'] === TRUE) echo "X"; ?>">

      <input id="ficha_condutas_inteligente_1" type="input" value="<?php if ($obj['ficha_condutas_inteligente_1'] === TRUE) echo "X"; ?>">
      <input id="ficha_condutas_inteligente_2" type="input" value="<?php if ($obj['ficha_condutas_inteligente_2'] === TRUE) echo "X"; ?>">

      <input id="ficha_condutas_mistica_1" type="input" value="<?php if ($obj['ficha_condutas_mistica_1'] === TRUE) echo "X"; ?>">
      <input id="ficha_condutas_mistica_2" type="input" value="<?php if ($obj['ficha_condutas_mistica_2'] === TRUE) echo "X"; ?>">

      <input id="ficha_verbetes_abrir_fechaduras_1" type="checkbox" <?php if ($obj['ficha_verbetes_abrir_fechaduras_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_abrir_fechaduras_2" type="checkbox" <?php if ($obj['ficha_verbetes_abrir_fechaduras_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_atacar_corpo_a_corpo_1" type="checkbox" <?php if ($obj['ficha_verbetes_atacar_corpo_a_corpo_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_atacar_corpo_a_corpo_2" type="checkbox" <?php if ($obj['ficha_verbetes_atacar_corpo_a_corpo_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_atacar_desarmado_1" type="checkbox" <?php if ($obj['ficha_verbetes_atacar_desarmado_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_atacar_desarmado_2" type="checkbox" <?php if ($obj['ficha_verbetes_atacar_desarmado_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_atacar_a_distancia_1" type="checkbox" <?php if ($obj['ficha_verbetes_atacar_a_distancia_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_atacar_a_distancia_2" type="checkbox" <?php if ($obj['ficha_verbetes_atacar_a_distancia_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_barganhar_1" type="checkbox" <?php if ($obj['ficha_verbetes_barganhar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_barganhar_2" type="checkbox" <?php if ($obj['ficha_verbetes_barganhar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_cavalgar_1" type="checkbox" <?php if ($obj['ficha_verbetes_cavalgar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_cavalgar_2" type="checkbox" <?php if ($obj['ficha_verbetes_cavalgar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_cacar_1" type="checkbox" <?php if ($obj['ficha_verbetes_cacar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_cacar_2" type="checkbox" <?php if ($obj['ficha_verbetes_cacar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_confeccionar_armaduras_leves_1" type="checkbox" <?php if ($obj['ficha_verbetes_confeccionar_armaduras_leves_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_confeccionar_armaduras_leves_2" type="checkbox" <?php if ($obj['ficha_verbetes_confeccionar_armaduras_leves_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_confeccionar_armas_de_madeira_1" type="checkbox" <?php if ($obj['ficha_verbetes_confeccionar_armas_de_madeira_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_confeccionar_armas_de_madeira_2" type="checkbox" <?php if ($obj['ficha_verbetes_confeccionar_armas_de_madeira_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_conhecer_idiomas_1" type="checkbox" <?php if ($obj['ficha_verbetes_conhecer_idiomas_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_conhecer_idiomas_2" type="checkbox" <?php if ($obj['ficha_verbetes_conhecer_idiomas_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_cozinhar_1" type="checkbox" <?php if ($obj['ficha_verbetes_cozinhar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_cozinhar_2" type="checkbox" <?php if ($obj['ficha_verbetes_cozinhar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_curar_ferimentos_1" type="checkbox" <?php if ($obj['ficha_verbetes_curar_ferimentos_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_curar_ferimentos_2" type="checkbox" <?php if ($obj['ficha_verbetes_curar_ferimentos_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_enganar_1" type="checkbox" <?php if ($obj['ficha_verbetes_enganar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_enganar_2" type="checkbox" <?php if ($obj['ficha_verbetes_enganar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_entreter_1" type="checkbox" <?php if ($obj['ficha_verbetes_entreter_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_entreter_2" type="checkbox" <?php if ($obj['ficha_verbetes_entreter_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_equilibrar_1" type="checkbox" <?php if ($obj['ficha_verbetes_equilibrar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_equilibrar_2" type="checkbox" <?php if ($obj['ficha_verbetes_equilibrar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_escalar_1" type="checkbox" <?php if ($obj['ficha_verbetes_escalar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_escalar_2" type="checkbox" <?php if ($obj['ficha_verbetes_escalar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_esconder_nas_sombras_1" type="checkbox" <?php if ($obj['ficha_verbetes_esconder_nas_sombras_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_esconder_nas_sombras_2" type="checkbox" <?php if ($obj['ficha_verbetes_esconder_nas_sombras_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_esquivar_e_desengajar_1" type="checkbox" <?php if ($obj['ficha_verbetes_esquivar_e_desengajar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_esquivar_e_desengajar_2" type="checkbox" <?php if ($obj['ficha_verbetes_esquivar_e_desengajar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_falsificar_1" type="checkbox" <?php if ($obj['ficha_verbetes_falsificar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_falsificar_2" type="checkbox" <?php if ($obj['ficha_verbetes_falsificar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_forjar_armaduras_pesadas_1" type="checkbox" <?php if ($obj['ficha_verbetes_forjar_armaduras_pesadas_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_forjar_armaduras_pesadas_2" type="checkbox" <?php if ($obj['ficha_verbetes_forjar_armaduras_pesadas_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_forjar_armas_corpo_a_corpo_1" type="checkbox" <?php if ($obj['ficha_verbetes_forjar_armas_corpo_a_corpo_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_forjar_armas_corpo_a_corpo_2" type="checkbox" <?php if ($obj['ficha_verbetes_forjar_armas_corpo_a_corpo_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_forragear_1" type="checkbox" <?php if ($obj['ficha_verbetes_forragear_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_forragear_2" type="checkbox" <?php if ($obj['ficha_verbetes_forragear_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_furtar_1" type="checkbox" <?php if ($obj['ficha_verbetes_furtar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_furtar_2" type="checkbox" <?php if ($obj['ficha_verbetes_furtar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_historiar_1" type="checkbox" <?php if ($obj['ficha_verbetes_historiar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_historiar_2" type="checkbox" <?php if ($obj['ficha_verbetes_historiar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_intimidar_1" type="checkbox" <?php if ($obj['ficha_verbetes_intimidar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_intimidar_2" type="checkbox" <?php if ($obj['ficha_verbetes_intimidar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_investigar_pistas_1" type="checkbox" <?php if ($obj['ficha_verbetes_investigar_pistas_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_investigar_pistas_2" type="checkbox" <?php if ($obj['ficha_verbetes_investigar_pistas_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_ler_e_escrever_1" type="checkbox" <?php if ($obj['ficha_verbetes_ler_e_escrever_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_ler_e_escrever_2" type="checkbox" <?php if ($obj['ficha_verbetes_ler_e_escrever_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_liderar_1" type="checkbox" <?php if ($obj['ficha_verbetes_liderar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_liderar_2" type="checkbox" <?php if ($obj['ficha_verbetes_liderar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_mover_silenciosamente_1" type="checkbox" <?php if ($obj['ficha_verbetes_mover_silenciosamente_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_mover_silenciosamente_2" type="checkbox" <?php if ($obj['ficha_verbetes_mover_silenciosamente_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_nadar_1" type="checkbox" <?php if ($obj['ficha_verbetes_nadar_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_nadar_2" type="checkbox" <?php if ($obj['ficha_verbetes_nadar_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_navegar_barcos_e_navios_1" type="checkbox" <?php if ($obj['ficha_verbetes_navegar_barcos_e_navios_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_navegar_barcos_e_navios_2" type="checkbox" <?php if ($obj['ficha_verbetes_navegar_barcos_e_navios_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_perceber_ambiente_ao_redor_1" type="checkbox" <?php if ($obj['ficha_verbetes_perceber_ambiente_ao_redor_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_perceber_ambiente_ao_redor_2" type="checkbox" <?php if ($obj['ficha_verbetes_perceber_ambiente_ao_redor_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_persuadir_1" type="checkbox" <?php if ($obj['ficha_verbetes_persuadir_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_persuadir_2" type="checkbox" <?php if ($obj['ficha_verbetes_persuadir_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_praticar_alquimia_1" type="checkbox" <?php if ($obj['ficha_verbetes_praticar_alquimia_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_praticar_alquimia_2" type="checkbox" <?php if ($obj['ficha_verbetes_praticar_alquimia_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_rastrear_1" type="checkbox" <?php if ($obj['ficha_verbetes_rastrear_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_rastrear_2" type="checkbox" <?php if ($obj['ficha_verbetes_rastrear_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_reparar_objetos_1" type="checkbox" <?php if ($obj['ficha_verbetes_reparar_objetos_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_reparar_objetos_2" type="checkbox" <?php if ($obj['ficha_verbetes_reparar_objetos_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_sobreviver_nos_ermos_1" type="checkbox" <?php if ($obj['ficha_verbetes_sobreviver_nos_ermos_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_sobreviver_nos_ermos_2" type="checkbox" <?php if ($obj['ficha_verbetes_sobreviver_nos_ermos_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_verbetes_treinar_animais_1" type="checkbox" <?php if ($obj['ficha_verbetes_treinar_animais_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_verbetes_treinar_animais_2" type="checkbox" <?php if ($obj['ficha_verbetes_treinar_animais_2'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_ouro" type="text" value="<?=$obj['ficha_ouro']?>">

      <input id="ficha_inventario_item_1" type="text" value="<?=$obj['ficha_inventario_item_1']?>">
      <input id="ficha_inventario_detalhes_1" type="text" value="<?=$obj['ficha_inventario_detalhes_1']?>">
      <input id="ficha_inventario_qtde_1" type="text" value="<?=$obj['ficha_inventario_qtde_1']?>">

      <input id="ficha_inventario_item_2" type="text" value="<?=$obj['ficha_inventario_item_2']?>">
      <input id="ficha_inventario_detalhes_2" type="text" value="<?=$obj['ficha_inventario_detalhes_2']?>">
      <input id="ficha_inventario_qtde_2" type="text" value="<?=$obj['ficha_inventario_qtde_2']?>">

      <input id="ficha_inventario_item_3" type="text" value="<?=$obj['ficha_inventario_item_3']?>">
      <input id="ficha_inventario_detalhes_3" type="text" value="<?=$obj['ficha_inventario_detalhes_3']?>">
      <input id="ficha_inventario_qtde_3" type="text" value="<?=$obj['ficha_inventario_qtde_3']?>">

      <input id="ficha_inventario_item_4" type="text" value="<?=$obj['ficha_inventario_item_4']?>">
      <input id="ficha_inventario_detalhes_4" type="text" value="<?=$obj['ficha_inventario_detalhes_4']?>">
      <input id="ficha_inventario_qtde_4" type="text" value="<?=$obj['ficha_inventario_qtde_4']?>">

      <input id="ficha_inventario_item_5" type="text" value="<?=$obj['ficha_inventario_item_5']?>">
      <input id="ficha_inventario_detalhes_5" type="text" value="<?=$obj['ficha_inventario_detalhes_5']?>">
      <input id="ficha_inventario_qtde_5" type="text" value="<?=$obj['ficha_inventario_qtde_5']?>">

      <input id="ficha_inventario_item_6" type="text" value="<?=$obj['ficha_inventario_item_6']?>">
      <input id="ficha_inventario_detalhes_6" type="text" value="<?=$obj['ficha_inventario_detalhes_6']?>">
      <input id="ficha_inventario_qtde_6" type="text" value="<?=$obj['ficha_inventario_qtde_6']?>">

      <input id="ficha_inventario_item_7" type="text" value="<?=$obj['ficha_inventario_item_7']?>">
      <input id="ficha_inventario_detalhes_7" type="text" value="<?=$obj['ficha_inventario_detalhes_7']?>">
      <input id="ficha_inventario_qtde_7" type="text" value="<?=$obj['ficha_inventario_qtde_7']?>">

      <input id="ficha_inventario_item_8" type="text" value="<?=$obj['ficha_inventario_item_8']?>">
      <input id="ficha_inventario_detalhes_8" type="text" value="<?=$obj['ficha_inventario_detalhes_8']?>">
      <input id="ficha_inventario_qtde_8" type="text" value="<?=$obj['ficha_inventario_qtde_8']?>">

      <input id="ficha_inventario_item_9" type="text" value="<?=$obj['ficha_inventario_item_9']?>">
      <input id="ficha_inventario_detalhes_9" type="text" value="<?=$obj['ficha_inventario_detalhes_9']?>">
      <input id="ficha_inventario_qtde_9" type="text" value="<?=$obj['ficha_inventario_qtde_9']?>">

      <input id="ficha_magias_curatio_1" type="checkbox" <?php if ($obj['ficha_magias_curatio_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_curatio_2" type="checkbox" <?php if ($obj['ficha_magias_curatio_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_curatio_3" type="checkbox" <?php if ($obj['ficha_magias_curatio_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_daemonium_1" type="checkbox" <?php if ($obj['ficha_magias_daemonium_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_daemonium_2" type="checkbox" <?php if ($obj['ficha_magias_daemonium_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_daemonium_3" type="checkbox" <?php if ($obj['ficha_magias_daemonium_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_fortitudo_1" type="checkbox" <?php if ($obj['ficha_magias_fortitudo_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_fortitudo_2" type="checkbox" <?php if ($obj['ficha_magias_fortitudo_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_fortitudo_3" type="checkbox" <?php if ($obj['ficha_magias_fortitudo_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_glacies_1" type="checkbox" <?php if ($obj['ficha_magias_glacies_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_glacies_2" type="checkbox" <?php if ($obj['ficha_magias_glacies_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_glacies_3" type="checkbox" <?php if ($obj['ficha_magias_glacies_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_ignis_1" type="checkbox" <?php if ($obj['ficha_magias_ignis_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_ignis_2" type="checkbox" <?php if ($obj['ficha_magias_ignis_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_ignis_3" type="checkbox" <?php if ($obj['ficha_magias_ignis_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_incantare_1" type="checkbox" <?php if ($obj['ficha_magias_incantare_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_incantare_2" type="checkbox" <?php if ($obj['ficha_magias_incantare_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_incantare_3" type="checkbox" <?php if ($obj['ficha_magias_incantare_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_invocare_1" type="checkbox" <?php if ($obj['ficha_magias_invocare_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_invocare_2" type="checkbox" <?php if ($obj['ficha_magias_invocare_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_invocare_3" type="checkbox" <?php if ($obj['ficha_magias_invocare_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_lux_1" type="checkbox" <?php if ($obj['ficha_magias_lux_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_lux_2" type="checkbox" <?php if ($obj['ficha_magias_lux_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_lux_3" type="checkbox" <?php if ($obj['ficha_magias_lux_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_mortus_1" type="checkbox" <?php if ($obj['ficha_magias_mortus_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_mortus_2" type="checkbox" <?php if ($obj['ficha_magias_mortus_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_mortus_3" type="checkbox" <?php if ($obj['ficha_magias_mortus_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_praesidium_1" type="checkbox" <?php if ($obj['ficha_magias_praesidium_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_praesidium_2" type="checkbox" <?php if ($obj['ficha_magias_praesidium_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_praesidium_3" type="checkbox" <?php if ($obj['ficha_magias_praesidium_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_puritas_1" type="checkbox" <?php if ($obj['ficha_magias_puritas_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_puritas_2" type="checkbox" <?php if ($obj['ficha_magias_puritas_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_puritas_3" type="checkbox" <?php if ($obj['ficha_magias_puritas_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_sanguis_1" type="checkbox" <?php if ($obj['ficha_magias_sanguis_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_sanguis_2" type="checkbox" <?php if ($obj['ficha_magias_sanguis_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_sanguis_3" type="checkbox" <?php if ($obj['ficha_magias_sanguis_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_saxum_1" type="checkbox" <?php if ($obj['ficha_magias_saxum_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_saxum_2" type="checkbox" <?php if ($obj['ficha_magias_saxum_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_saxum_3" type="checkbox" <?php if ($obj['ficha_magias_saxum_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_somnum_1" type="checkbox" <?php if ($obj['ficha_magias_somnum_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_somnum_2" type="checkbox" <?php if ($obj['ficha_magias_somnum_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_somnum_3" type="checkbox" <?php if ($obj['ficha_magias_somnum_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_tempus_1" type="checkbox" <?php if ($obj['ficha_magias_tempus_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_tempus_2" type="checkbox" <?php if ($obj['ficha_magias_tempus_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_tempus_3" type="checkbox" <?php if ($obj['ficha_magias_tempus_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_umbra_1" type="checkbox" <?php if ($obj['ficha_magias_umbra_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_umbra_2" type="checkbox" <?php if ($obj['ficha_magias_umbra_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_umbra_3" type="checkbox" <?php if ($obj['ficha_magias_umbra_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_venenum_1" type="checkbox" <?php if ($obj['ficha_magias_venenum_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_venenum_2" type="checkbox" <?php if ($obj['ficha_magias_venenum_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_venenum_3" type="checkbox" <?php if ($obj['ficha_magias_venenum_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_ventus_1" type="checkbox" <?php if ($obj['ficha_magias_ventus_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_ventus_2" type="checkbox" <?php if ($obj['ficha_magias_ventus_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_ventus_3" type="checkbox" <?php if ($obj['ficha_magias_ventus_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_veritas_1" type="checkbox" <?php if ($obj['ficha_magias_veritas_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_veritas_2" type="checkbox" <?php if ($obj['ficha_magias_veritas_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_veritas_3" type="checkbox" <?php if ($obj['ficha_magias_veritas_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_visio_1" type="checkbox" <?php if ($obj['ficha_magias_visio_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_visio_2" type="checkbox" <?php if ($obj['ficha_magias_visio_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_visio_3" type="checkbox" <?php if ($obj['ficha_magias_visio_3'] === TRUE) echo "checked=checked"; ?>>

      <input id="ficha_magias_vita_1" type="checkbox" <?php if ($obj['ficha_magias_vita_1'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_vita_2" type="checkbox" <?php if ($obj['ficha_magias_vita_2'] === TRUE) echo "checked=checked"; ?>>
      <input id="ficha_magias_vita_3" type="checkbox" <?php if ($obj['ficha_magias_vita_3'] === TRUE) echo "checked=checked"; ?>>

</div>
