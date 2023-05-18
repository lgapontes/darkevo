const CONDUTAS = {
  'Forte': { campo: 'ficha_condutas_forte', sigla: '(FR)' },
  'Ágil': { campo: 'ficha_condutas_agil', sigla: '(AG)' },
  'Criativa': { campo: 'ficha_condutas_criativa', sigla: '(CR)' },
  'Carismática': { campo: 'ficha_condutas_carismatica', sigla: '(CA)' },
  'Inteligente': { campo: 'ficha_condutas_inteligente', sigla: '(IN)' },
  'Mística': { campo: 'ficha_condutas_mistica', sigla: '(MI)' }
};

const VERBETES = {
  'Abrir Fechaduras': { campo: 'abrir_fechaduras', conduta: '(IN)' },
  'Atacar Corpo-a-Corpo': { campo: 'atacar_corpo_a_corpo', conduta: '(FR)' },
  'Atacar Desarmado': { campo: 'atacar_desarmado', conduta: '(FR)' },
  'Atacar à Distância': { campo: 'atacar_a_distancia', conduta: '(AG)' },
  'Barganhar': { campo: 'barganhar', conduta: '(CA)' },
  'Cavalgar': { campo: 'cavalgar', conduta: '(AG)' },
  'Caçar': { campo: 'cacar', conduta: '(IN)' },
  'Confeccionar Armaduras Leves': { campo: 'confeccionar_armaduras_leves', conduta: '(IN)' },
  'Confeccionar Armas de Madeira': { campo: 'confeccionar_armas_de_madeira', conduta: '(IN)' },
  'Conhecer Idiomas': { campo: 'conhecer_idiomas', conduta: '(IN)' },
  'Cozinhar': { campo: 'cozinhar', conduta: '(CR)' },
  'Curar Ferimentos': { campo: 'curar_ferimentos', conduta: '(MI)' },
  'Enganar': { campo: 'enganar', conduta: '(CA)' },
  'Entreter (Cantar, Dançar, Tocar)': { campo: 'entreter', conduta: '(CR)' },
  'Equilibrar': { campo: 'equilibrar', conduta: '(AG)' },
  'Escalar': { campo: 'escalar', conduta: '(FR)' },
  'Esconder nas Sombras': { campo: 'esconder_nas_sombras', conduta: '(AG)' },
  'Esquivar e Desengajar': { campo: 'esquivar_e_desengajar', conduta: '(AG)' },
  'Falsificar': { campo: 'falsificar', conduta: '(IN)' },
  'Forjar Armaduras Pesadas': { campo: 'forjar_armaduras_pesadas', conduta: '(FR)' },
  'Forjar Armas Corpo-a-Corpo': { campo: 'forjar_armas_corpo_a_corpo', conduta: '(FR)' },
  'Forragear': { campo: 'forragear', conduta: '(IN)' },
  'Furtar': { campo: 'furtar', conduta: '(CR)' },
  'Historiar': { campo: 'historiar', conduta: '(IN)' },
  'Intimidar': { campo: 'intimidar', conduta: '(CA)' },
  'Investigar Pistas': { campo: 'investigar_pistas', conduta: '(IN)' },
  'Ler e Escrever': { campo: 'ler_e_escrever', conduta: '(IN)' },
  'Liderar': { campo: 'liderar', conduta: '(CA)' },
  'Mover Silenciosamente': { campo: 'mover_silenciosamente', conduta: '(AG)' },
  'Nadar': { campo: 'nadar', conduta: '(FR)' },
  'Navegar Barcos e Navios': { campo: 'navegar_barcos_e_navios', conduta: '(IN)' },
  'Perceber Ambiente ao Redor': { campo: 'perceber_ambiente_ao_redor', conduta: '(CR)' },
  'Persuadir': { campo: 'persuadir', conduta: '(CA)' },
  'Praticar Alquimia': { campo: 'praticar_alquimia', conduta: '(MI)' },
  'Rastrear': { campo: 'rastrear', conduta: '(CR)' },
  'Reparar Objetos': { campo: 'reparar_objetos', conduta: '(IN)' },
  'Sobreviver nos Ermos': { campo: 'sobreviver_nos_ermos', conduta: '(CR)' },
  'Treinar Animais': { campo: 'treinar_animais', conduta: '(CA)' }
};

const MAGIAS = {
  'Curatio': { campo: 'ficha_magias_curatio', traducao: '(Cura)' },
  'Daemonium': { campo: 'ficha_magias_daemonium', traducao: '(Demônio)' },
  'Fortitudo': { campo: 'ficha_magias_fortitudo', traducao: '(Fortitude)' },
  'Glacies': { campo: 'ficha_magias_glacies', traducao: '(Gelo)' },
  'Ignis': { campo: 'ficha_magias_ignis', traducao: '(Fogo)' },
  'Incantare': { campo: 'ficha_magias_incantare', traducao: '(Encantar)' },
  'Invocare': { campo: 'ficha_magias_invocare', traducao: '(Invocar)' },
  'Lux': { campo: 'ficha_magias_lux', traducao: '(Luz)' },
  'Mortus': { campo: 'ficha_magias_mortus', traducao: '(Necromancia)' },
  'Praesidium': { campo: 'ficha_magias_praesidium', traducao: '(Proteção)' },
  'Puritas': { campo: 'ficha_magias_puritas', traducao: '(Pureza)' },
  'Sanguis': { campo: 'ficha_magias_sanguis', traducao: '(Sangue)' },
  'Saxum': { campo: 'ficha_magias_saxum', traducao: '(Pedra)' },
  'Somnum': { campo: 'ficha_magias_somnum', traducao: '(Dormir)' },
  'Tempus': { campo: 'ficha_magias_tempus', traducao: '(Tempo)' },
  'Umbra': { campo: 'ficha_magias_umbra', traducao: '(Sombra)' },
  'Venenum': { campo: 'ficha_magias_venenum', traducao: '(Veneno)' },
  'Ventus': { campo: 'ficha_magias_ventus', traducao: '(Vento)' },
  'Veritas': { campo: 'ficha_magias_veritas', traducao: '(Verdade)' },
  'Visio': { campo: 'ficha_magias_visio', traducao: '(Visão)' },
  'Vita': { campo: 'ficha_magias_vita', traducao: '(Vida)' }
};

const ITENS = {
  'Itens de Sobrevivência': {
    'Água Benta': { detalhes: 'Permite afastar mortos-vivos', ouro: '25', icon: '🍶️' },
    'Agulha': { detalhes: 'Utilizada para costura', ouro: '< 1', icon: '🛠️' },
    'Algibeira': { detalhes: 'Própria para carregar moedas escondidas', ouro: '1', icon: '🛠️' },
    'Ânfora de óleo': { detalhes: 'Inflamável, queima por 3 turnos (Dano 2 B)', ouro: '2', icon: '🔥️' },
    'Apito': { detalhes: 'Confeccionado com madeira', ouro: '< 1', icon: '🛠️' },
    'Cera para Lacrar': { detalhes: '500g, para lacrar cartas com brasão', ouro: '< 1', icon: '🛠️' },
    'Coberta de Inverno': { detalhes: 'Proteger do frio', ouro: '3', icon: '🛠️' },
    'Corda de Cânhamo': { detalhes: '18 metros, capaz de sustentar 5 pessoas', ouro: '3', icon: '🛠️' },
    'Esmeril': { detalhes: 'Utilizado para afiar ferramentas e armas', ouro: '1', icon: '🛠️' },
    'Espelho de Metal': { detalhes: 'Reflete a imagem de forma fosca', ouro: '10', icon: '🛠️' },
    'Ganchos de Ferro': { detalhes: '10 unidades, para escalar ou fixar portas', ouro: '4', icon: '🛠️' },
    'Garrafa de Vidro': { detalhes: 'Comporta 1 litro, quebra facilmente', ouro: '1', icon: '🍶️' },
    'Giz': { detalhes: 'Util para riscar paredes de dungeons', ouro: '< 1', icon: '🛠️' },
    'Lanterna': { detalhes: 'Ilumina 9m², apaga com vento e chuva', ouro: '7', icon: '🔥' },
    'Lanterna Furta-Fogo': { detalhes: 'Ilumina 9m², chama protegida, pode cobrir luz', ouro: '12', icon: '🔥️' },
    'Mochila': { detalhes: 'Organiza e esconde equipamentos', ouro: '1', icon: '🎒' },
    'Panela de Ferro': { detalhes: 'Ótima para cozinhar alimentos', ouro: '1', icon: '🛠️' },
    'Papiro': { detalhes: 'Utilizado para livros, cartas ou pergaminhos', ouro: '1', icon: '📜️' },
    'Pederneira': { detalhes: 'Produz faíscas, ideal para ascender fogueiras', ouro: '1', icon: '🛠️' },
    'Perfume': { detalhes: 'Artigo de luxo de aldeões abastados', ouro: '5', icon: '🛠️' },
    'Rede de Pesca': { detalhes: '2m² de corda de cânhamo entrelaçada', ouro: '4', icon: '🛠️' },
    'Roupas Comuns': { detalhes: 'De uso comum entre os aventureiros e aldeãos', ouro: '< 1', icon: '🧝' },
    'Sabão': { detalhes: 'Feito de gordura animal, sem aromatizante', ouro: '1', icon: '🛠️' },
    'Saco de Dormir': { detalhes: 'Próprio para pernoitar nos ermos', ouro: '3', icon: '🛠️' },
    'Saco Pequeno': { detalhes: 'Útil para carregar e esconder itens', ouro: '1', icon: '🛠️' },
    'Símbolo Divino': { detalhes: 'Item dos membros da guilda Salvagentes', ouro: '25', icon: '⚜️️' },
    'Sineta': { detalhes: 'Produz barulho estridente se tocado', ouro: '1', icon: '🛠️' },
    'Tinta e Pena': { detalhes: 'Útil para escrever livros e pergaminhos', ouro: '8', icon: '🛠️' },
    'Tocha': { detalhes: 'Ilumina 9m², apaga com vento e chuva', ouro: '1', icon: '🔥' },
    'Vela': { detalhes: 'Iluminação discreta de 1m², apaga facilmente', ouro: '< 1', icon: '🛠️' },
    'Grimório': { detalhes: 'Livro de magias dos Literatos', ouro: '25', icon: '📕️' }
  },
  'Alimentos e Ervas': {
    'Açúcar Mascavo': { detalhes: '500g de açúcar petrificado de cor marrom', ouro: '1', sortear: true, icon: '🍚' },
    'Alcachofra': { detalhes: 'Erva cujas flores têm caráter esotético', ouro: '80', sortear: false, icon: '🌿' },
    'Alecrim': { detalhes: 'Planta aromática com efeito esotético', ouro: '80', sortear: false, icon: '🌿' },
    'Babosa': { detalhes: 'Erva suculenta que auxilia a cicatrização', ouro: '70', sortear: false, icon: '🌿' },
    'Calêndula': { detalhes: 'Erva cujas pétalas têm efeitos medicinais', ouro: '200', sortear: false, icon: '🌿' },
    'Camomila': { detalhes: 'Erva geralmente diluída para acalmar', ouro: '80', sortear: false, icon: '🌿' },
    'Canela': { detalhes: '500g de pó de especiaria para temperar', ouro: '3', sortear: true, icon: '🌿' },
    'Cardamomo': { detalhes: 'Erva aromática usada como especiaria', ouro: '50', sortear: false, icon: '🌿' },
    'Cimicifuga': { detalhes: 'Rizoma (caule subterrâneo) com fins medicinais', ouro: '100', sortear: false, icon: '🌿' },
    'Carne Seca': { detalhes: '500g (serve para 2 dias). Perecível (duração de 5 dias)', ouro: '2', sortear: true, icon: '🍖' },
    'Coldre de Água': { detalhes: 'Cada coldre sustenta por 1 dia', ouro: '< 1', sortear: true, icon: '🏺' },
    'Confrey': { detalhes: 'Folhas ou emplastro para fins medicinais', ouro: '50', sortear: false, icon: '🌿' },
    'Equinácea': { detalhes: 'Erva cuias raízes têm efeitos de antivenenos', ouro: '50', sortear: false, icon: '🌿' },
    'Frutas': { detalhes: '1kg para viagem (2 dias). Perecível (dura de 3 dias)', ouro: '< 1', sortear: true, icon: '🍐' },
    'Legumes Frescos': { detalhes: '500g (serve para 1 dia). Perecível (duração de 5 dias)', ouro: '< 1', sortear: true, icon: '🍅' },
    'Manteiga': { detalhes: '500g de gordura para temperar', ouro: '1', sortear: true, icon: '🍶' },
    'Odre de Mel': { detalhes: '500g de açúcar líquido viscoso', ouro: '2', sortear: true, icon: '🍯' },
    'Oleandro': { detalhes: 'Arbusto cujas folhas possuem alta toxicidade', ouro: '70', sortear: false, icon: '🐣' },
    'Ovos': { detalhes: 'Quantia suficiente para 1 dia de viagem', ouro: '1', sortear: true, icon: '🍶🍺🍞🏺🍒🌿' },
    'Pão': { detalhes: 'Suficiente para alimentar 2 pessoas por 1 dia', ouro: '< 1', sortear: true, icon: '🍞' },
    'Peixe': { detalhes: '500g (serve para 1 dia). Perecível (duração de 2 dias)', ouro: '3', sortear: true, icon: '🐟' },
    'Pimenta': { detalhes: '500g de condimento picante para temperar', ouro: '2', sortear: true, icon: '🌶' },
    'Queijo': { detalhes: '500g (serve para 1 dia). Perecível (duração de 2 dias)', ouro: '< 1', sortear: true, icon: '🧀' },
    'Ração de Viagem': { detalhes: 'Grãos para 3 dias. Não perecível', ouro: '1', sortear: true, icon: '🍪' },
    'Sal': { detalhes: '1 saco de sal moído usado para temperar', ouro: '< 1', sortear: true, icon: '🍚' },
    'Valeriana': { detalhes: 'Erva cujo extrato tem efeitos sedativos', ouro: '120', sortear: false, icon: '🌿' },
    'Verduras Frescas': { detalhes: '500g (serve para 1 dia). Perecível (duração de 4 dias)', ouro: '< 1', sortear: true, icon: '🍒' },
    'Odre de Cerveja': { detalhes: 'Se consumido em excesso pode embriagar', ouro: '2', sortear: true, icon: '🍺' },
    'Odre de Hidromel': { detalhes: 'Mais forte que cerveja, pode embriagar', ouro: '3', sortear: true, icon: '🍺' },
    'Odre de Vinho': { detalhes: 'Bebida nobre usada como acompanhamento', ouro: '5', sortear: true, icon: '🏺' }
  },
  'Instrumentos Musicais': {
    'Alaúde': { detalhes: 'Cordofone em formato de pêra com 11 cordas', ouro: '35', icon: '🎻' },
    'Charamela': { detalhes: 'Instrumento cilíndrico de sopro com extremidade aberta', ouro: '3', icon: '🎵' },
    'Flauta Doce': { detalhes: 'Instrumento cilíndrico de sopro com espessura regular', ouro: '2', icon: '🎵' },
    'Lira': { detalhes: 'Instrumento de cordas semelhante a uma harpa', ouro: '25', icon: '🎵' },
    'Tambor': { detalhes: 'Instrumento de percussão em forma de barril', ouro: '6', icon: '🎵' },
    'Trombeta': { detalhes: 'Instrumento metálico de sopro usado para guerra', ouro: '3', icon: '🎺' },
    'Viola': { detalhes: 'Cordofone pequeno com 5 pares de cordas', ouro: '30', icon: '🎻' },
    'Xilofone': { detalhes: 'Idiofone percutido com paletas de metal', ouro: '25', icon: '🎵' }
  },
  'Projéteis': {
    'Ferpas de Madeira': { detalhes: '30 unidades, Projéteis para zarabatanas, Perfuração', ouro: '< 1', detalhes_abreviado: 'Projéteis para zarabatanas, Perfuração', qtde: 30, icon: '➹' },
    'Pedras de Funda': { detalhes: '20 unidades, Projéteis para fundas, Concussão', ouro: '-', detalhes_abreviado: 'Projéteis para fundas, Concussão', qtde: 20, icon: '➹' },
    'Flechas': { detalhes: '20 unidades. Projéteis para todos os arcos, Perfuração', ouro: '3', detalhes_abreviado: 'Projéteis para todos os arcos, Perfuração', qtde: 20, icon: '➹' },
    'Virotes': { detalhes: '20 unidades. Projéteis perfurantes para bestas', ouro: '2', detalhes_abreviado: 'Projéteis perfurantes para bestas', qtde: 20, icon: '➹' },
    'Quadrelos': { detalhes: '20 projéteis sem pontas para bestas (úteis para Salvagentes)', ouro: '3', detalhes_abreviado: 'Projéteis sem pontas para bestas (úteis para Salvagentes)', qtde: 20, icon: '➹' }
  },
  'Armas Leves': {
    'Adaga': { detalhes: '+0 Dano A, Ambidestria, Corte ou Perfuração', ouro: '2', icon: '🔪' },
    'Arco Curto': { detalhes: '+0 Dano B, Duas Mãos, À Distância', ouro: '30', icon: '🏹' },
    'Besta de Mão': { detalhes: '+0 Dano A, Ambidestria, À Distância, Recarregar', ouro: '100', icon: '🏹' },
    'Chicote': { detalhes: '+0 Dano A, Ambidestria, Corte', ouro: '1', icon: '⚔️' },
    'Dardo': { detalhes: '+0 Dano A, Ambidestria, À Distância, Recarregar, Perfuração', ouro: '1', icon: '⚔️' },
    'Estrepes': { detalhes: '3 unidades. 3 ou 4 puas de ferro conectadas formando um triângulo. Não pode ser utilizada como arma. Ao invés disso, joga-se 3 Estrepes no chão e, se o adversário se aproximar, receberá +0 Dano com Lesão A. Consome Ação de Combate. Se pisadas, elas quebram', ouro: '3', icon: '⚔️' },
    'Faca': { detalhes: '+0 Dano A, Ambidestria, Corte', ouro: '1', icon: '🔪' },
    'Funda': { detalhes: '+0 Dano A, À Distância', ouro: '1', icon: '🏹' },
    'Machadinha': { detalhes: '+0 Dano A, Ambidestria, Corte', ouro: '3', icon: '🪓' },
    'Punhal': { detalhes: '+0 Dano A, Ambidestria, Perfuração', ouro: '1', icon: '🔪' },
    'Rapieira': { detalhes: '+0 Dano B, Perfuração', ouro: '15', icon: '⚔️' },
    'Zarabatana': { detalhes: '+0 Dano A, À Distância, Recarregar', ouro: '5', icon: '🏹' }
  },
  'Armas Médias': {
    'Alfange': { detalhes: '+1 Dano A, Espada Árabe Curvada, 1 gume, Corte', ouro: '12', icon: '⚔️' },
    'Aprisionador': { detalhes: 'À Distância, interrompe a próxima ação', ouro: '30', icon: '⚔️' },
    'Arco Curto Composto': { detalhes: '+1 Dano A, Duas Mãos, À Distância', ouro: '75', icon: '🏹' },
    'Armadilha de Urso': { detalhes: 'Precisa de 10 minutos para armar. Se estiver bem escondido e for pisado, causa +1 Dano A', ouro: '10', icon: '⚔️' },
    'Arpão': { detalhes: '+1 Dano A, Perfuração, possui em de corda', ouro: '20', icon: '⚔️' },
    'Azagaia': { detalhes: '+1 Dano A, À Distância, Recarregar, Perfuração', ouro: '5', icon: '⚔️' },
    'Açoite': { detalhes: '+0 Dano B, Corte', ouro: '2', icon: '⚔️' },
    'Bardiche': { detalhes: '+2 Dano A, Machado com Lança, Duas Mãos, Corte', ouro: '12', icon: '⚔️' },
    'Bastão': { detalhes: '+0 Dano A, Concussão', ouro: '1', icon: '⚔️' },
    'Besta Leve': { detalhes: '+1 Dano B, À Distância, Recarregar', ouro: '75', icon: '🏹' },
    'Bidente': { detalhes: '+1 Dano A, Duas Mãos, Perfuração', ouro: '5', icon: '⚔️' },
    'Bordona': { detalhes: '+2 Dano A, Duas Mãos, Fauchard aprimorada, Perfuração', ouro: '15', icon: '⚔️' },
    'Cajado': { detalhes: '+0 Dano A, Concussão', ouro: '1', icon: '⚔️' },
    'Cajado-Funda': { detalhes: '+0 Dano A, À Distância', ouro: '1', icon: '🏹' },
    'Cetro': { detalhes: '+0 Dano A, Concussão', ouro: '1', icon: '⚔️' },
    'Cimitarra': { detalhes: '+1 Dano A, Lâmina em forma de lua, Corte', ouro: '12', icon: '🔪' },
    'Clava': { detalhes: '+0 Dano B, Concussão', ouro: '2', icon: '⚔️' },
    'Espada Curta': { detalhes: '+1 Dano B, 2 gumes, Corte', ouro: '15', icon: '⚔️' },
    'Falchion': { detalhes: '+1 Dano A, Espada de 1 gume, Corte', ouro: '12', icon: '🔪' },
    'Fauchard': { detalhes: '+1 Dano B, Duas Mãos, Lança com 2 lâminas, Perfuração', ouro: '10', icon: '🔪' },
    'Foice': { detalhes: '+1 Dano A, Corte', ouro: '1', icon: '🔪' },
    'Gládio': { detalhes: '+1 Dano B, Espada Romana, 2 gumes, Corte', ouro: '16', icon: '🔪' },
    'Khopesh': { detalhes: '+1 Dano B, Espada Egípcia, 1 gume, Corte', ouro: '16', icon: '🔪' },
    'Machado': { detalhes: '+1 Dano B, 1 gume, Corte', ouro: '17', icon: '🪓' },
    'Machete': { detalhes: '+0 Dano B, 1 gume, Corte', ouro: '2', icon: '🔪' },
    'Mangual': { detalhes: '+1 Dano B, Concussão e Perfuração', ouro: '17', icon: '⚔️' },
    'Martelo': { detalhes: '+1 Dano B, Concussão', ouro: '17', icon: '⚒️' },
    'Maça': { detalhes: '+1 Dano A, Concussão', ouro: '12', icon: '⚔️' },
    'Maça-Estrela': { detalhes: '+1 Dano B, Concussão e Perfuração', ouro: '17', icon: '⚔️' },
    'Sabre': { detalhes: '+0 Dano B, Lâmina curvada, 1 gume, Corte', ouro: '10', icon: '🔪' }
  },
  'Armas Grandes': {
    'Alabarda': { detalhes: '+2 Dano C, Haste com Machado, Duas Mãos, Corte', ouro: '22', icon: '⚔️' },
    'Arco Longo': { detalhes: '+2 Dano B, Duas Mãos, À Distância', ouro: '75', icon: '🏹' },
    'Arco Longo Composto': { detalhes: '+2 Dano C, Duas Mãos, À Distância', ouro: '150', icon: '🏹' },
    'Bec de Corbin': { detalhes: '+1 Dano B, Haste com 2 pontas, Duas Mãos, Perfuração', ouro: '15', icon: '⚔️' },
    'Besta Pesada': { detalhes: '+2 Dano B, À Distância, Recarregar', ouro: '100', icon: '🏹' },
    'Bill-Guisarme': { detalhes: '+1 Dano C, Haste com Gancho, Duas Mãos, Corte', ouro: '24', icon: '⚔️' },
    'Clava com Espinhos': { detalhes: '+1 Dano B, Concussão e Perfuração', ouro: '5', icon: '⚔️' },
    'Claymore': { detalhes: '+3 Dano B, Duas Mãos, dois gumes, Corte', ouro: '50', icon: '⚔️' },
    'Espada Bastarda': { detalhes: '+3 Dano C, Duas Mãos, dois gumes, Corte', ouro: '80', icon: '⚔️' },
    'Espada Larga': { detalhes: '+2 Dano B, Duas Mãos, um gume, Corte', ouro: '45', icon: '⚔️' },
    'Espada Longa': { detalhes: '+2 Dano C, Duas Mãos, dois gumes, Corte', ouro: '50', icon: '⚔️' },
    'Fauchard Gancho': { detalhes: '+1 Dano C, Duas Mãos, Haste com 2 Ganchos, Corte', ouro: '22', icon: '⚔️' },
    'Flamberge': { detalhes: '+3 Dano B, Duas Mãos, dois gumes, Corte', ouro: '50', icon: '⚔️' },
    'Glaive': { detalhes: '+3 Dano B, Haste com Lâmina larga, Duas Mãos, Corte', ouro: '80', icon: '⚔️' },
    'Glaive Guisarme': { detalhes: '+3 Dano C, Haste com Lâmina e Gancho, Duas Mãos, Corte', ouro: '85', icon: '⚔️' },
    'Guisarme': { detalhes: '+1 Dano B, Haste com Gancho, Duas Mãos, Corte', ouro: '20', icon: '⚔️' },
    'Lança': { detalhes: '+2 Dano C, Haste com Ponta, Duas Mãos, Perfurante', ouro: '25', icon: '⚔️' },
    'Machado de Guerra': { detalhes: '+3 Dano C, Duas Mãos, dois gumes, Corte', ouro: '50', icon: '🪓' },
    'Machado de Lenhador': { detalhes: '+1 Dano C, um gume, Corte', ouro: '18', icon: '🪓' },
    'Martelo Lucerno': { detalhes: '+2 Dano C, Haste com Martelo, Duas Mãos, Concussão', ouro: '12', icon: '⚒️' },
    'Martelo de Batalha': { detalhes: '+2 Dano B, Concussão', ouro: '55', icon: '⚒️' },
    'Montante': { detalhes: '+3 Dano C, Duas Mãos, dois gumes, Corte', ouro: '80', icon: '⚔️' },
    'Partisan': { detalhes: '+2 Dano B, Haste com Ponta, Duas Mãos, Perfurante', ouro: '26', icon: '⚔️' },
    'Pique': { detalhes: '+3 Dano B, Haste com Ponta, Duas Mãos, Perfurante', ouro: '82', icon: '⚔️' },
    'Ranseur': { detalhes: '+2 Dano C, Haste com Ponta, Duas Mãos, Perfurante', ouro: '30', icon: '⚔️' },
    'Spetum': { detalhes: '+2 Dano B, Haste 3 pontas pequenas, Duas Mãos, Perfurante', ouro: '35', icon: '⚔️' },
    'Tridente': { detalhes: '+2 Dano C, Haste com 3 Pontas, Duas Mãos, Perfurante', ouro: '40', icon: '⚔️' },
    'Voulge': { detalhes: '+2 Dano B, Haste com Machado, Duas Mãos, Corte', ouro: '24', icon: '⚔️' }
  },
  'Armaduras Leves': {
    'Corselete de Couro': { detalhes: '+1 Proteção', ouro: '5', icon: '🧝' },
    'Corselete Acolchoado': { detalhes: '+1 Proteção, 1 Vantagem em Liderar (vestimenta nobre)', ouro: '10', icon: '🧝' },
    'Robe de Couro Nobre': { detalhes: 'Reduz 1 categoria de Lesão, pode ser usado por Literatos', ouro: '20', icon: '🧝' },
    'Gibão de Peles': { detalhes: '+1 Proteção, Reduz 1 categoria de Lesão', ouro: '50', icon: '🧝' },
    'Brigandina': { detalhes: '+1 Proteção, Reduz 1 categoria de Lesão, 1 Desvantagem em Mover Silenciosamente, 1 Vantagem em Liderar (nobre)', ouro: '80', icon: '🧝' },
    'Loriga': { detalhes: '+2 Proteções, 1 Desvantagem em Mover Silenciosamente', ouro: '120', icon: '🧝' }
  },
  'Armaduras Pesadas': {
    'Cota de Malha': { detalhes: '+1 Proteção, Reduz 2 categorias de Lesão', ouro: '75', icon: '🧥' },
    'Cota de Talas': { detalhes: '+2 Proteções, Reduz 1 categoria de Lesão', ouro: '120', icon: '🧥' },
    'Brunea': { detalhes: '+2 Proteções, Reduz 2 categorias de Lesão', ouro: '150', icon: '🧥' },
    'Loriga Segmentada': { detalhes: '+2 Proteções, Reduz 2 categorias de Lesão, evita (se forem sorteadas, nada acontece) as Lesões A2 e B2', ouro: '400', icon: '🧥' },
    'Armadura de Batalha': { detalhes: '+3 Proteções, Reduz 2 categorias de Lesão', ouro: '2000', icon: '🧥' },
    'Armadura Completa': { detalhes: '+3 Proteções, todas Lesões são de categoria A, possui Elmo', ouro: '4000', icon: '🧥' },
    'Elmo': { detalhes: 'Proteção para a cabeça que evita (se forem sorteadas, nada acontece, mas o Elmo quebra) as Lesões A4, B4, B6 e D5', ouro: '20', icon: '🧥' }
  },
  'Escudos': {
    'Escudo de Madeira': { detalhes: '+1 Proteção', ouro: '5', icon: '🔶' },
    'Escudo de Ferro': { detalhes: '+1 Proteção, 1 Desvantagem em Equilibrar', ouro: '10', icon: '🔶' }
  },
  'Ferramentas': {
    'Ferramentas de Alquimia': { detalhes: 'Um kit contendo fole, cadinho, tenaz, tesoura, tacho, balança, frascos, pederneira, funil e ingredientes básicos como água, sal, carvão, entre outros. Possibilita o uso do Verbete Praticar Alquimia', ouro: '50', icon: '🛠️' },
    'Ferramentas de Carpintaria': { detalhes: 'Um kit contendo graminho, régua, malho, alguns formões, serra e punhal. Permite Confeccionar Armas de Madeira', ouro: '30', icon: '🛠️' },
    'Ferramentas de Couraria': { detalhes: 'Itens como agulha, tiras de tecido e cânhamo, e ferramentas como sovela, martelo de madeira, unguento para colar e punhal. Viabiliza Confeccionar Armaduras Leves', ouro: '30', icon: '🛠️' },
    'Ferramentas de Ferreiro': { detalhes: 'Ferramentas contendo fole, estampas (martelos), maço, mandril, e algumas pinças. Permite a execução de Forjar Armaduras Pesadas e Forjar Armas Corpo-a-Corpo', ouro: '30', icon: '🛠️' },
    'Ferramentas de Ladrão': { detalhes: 'Kit de itens contendo giz, graxa, óleo, tesouras, gazuas, alicates, alça de metal e pregos. Permite exercer Abrir Fechaduras, do contrário receberá 2 Desvantagens', ouro: '50', icon: '🛠️' }
  },
  'Poções': {
    'Antídoto': { detalhes: 'Poção de Equinácea que cura Envenenamento de até 3 pessoas. Deve ser ingerida', custo: '50', ouro: '140', icon: '🏺️' },
    'Bomba de Fumaça': { detalhes: 'Odre de Açúcar e Sal que cria uma fumaça branca de 3m². Quem estiver dentro da área só poderá realizar sua Ação de Movimento. Dura 1d6 rodadas', custo: '30', ouro: '100', icon: '🏺️' },
    'Calmante Natural': { detalhes: 'Poção de Valeriana que adormece quem ingerir por 1 dia', custo: '100', ouro: '300', icon: '🏺️' },
    'Cura Lesões Graves': { detalhes: 'Poção de Cimicifuga que cura Lesão não permanente e anula efeitos mecânicos de Lesões permanentes', custo: '80', ouro: '270', icon: '🏺️' },
    'Cura Lesões Leves': { detalhes: 'Emplastro de Confrey que reduz Lesão em 3 dias', custo: '60', ouro: '180', icon: '🏺️' },
    'Elixir da Vontade': { detalhes: 'Poção de Alecrim que recupera todos a Vontade', custo: '50', ouro: '200', icon: '🏺️' },
    'Entorpecente': { detalhes: 'Chá ou vapor de Camomila. Concede 2 Vantagens em Condutas Carismáticas contra aquele que consumir ou inalar. Duração de 2 hora', custo: '60', ouro: '200', icon: '🏺️' },
    'Odre Explosivo': { detalhes: 'Sal de Urina, Cinzas Vulcânicas e Carvão triturados e revestidos por um odre de couro. Explode ao contato causando Dano 2 e Lesão C em uma área de 3m²', custo: '100', ouro: '300', icon: '🏺️' },
    'Poção da Verdade': { detalhes: 'Chá ou vapor de Alcachofra. Aquele que ingerir ou inalar sempre falará a verdade. Duração de 2h', custo: '60', ouro: '200', icon: '🏺️' },
    'Poção da Vida': { detalhes: 'Poção de Calêndula para estabilizar (ficam desacordados por 1 hora) personagens recém mortos (há 10 turnos)', custo: '150', ouro: '400', icon: '🏺️' },
    'Poção de Iniciativa': { detalhes: 'Poção de Cardamomo que permite agir primeiro no Combate, independente da ação. Duração 8 hora', custo: '40', ouro: '150', icon: '🏺️' },
    'Poção do Vigor': { detalhes: 'Poção de Babosa que concede +1 de Proteção por 1h', custo: '40', ouro: '120', icon: '🏺️' },
    'Veneno Natural': { detalhes: 'Veneno de Oleandro para até 3 pessoas. Se ingerido rolar 1d6 e consultar as Lesões de Envenenamentos', custo: '30', ouro: '120', icon: '🏺️' },
    'Ânfora de Ácido': { detalhes: 'Cinzas Vulcânicas oxidadas por um processo químico. Causa queimaduras em 1 alvo com Dano 3 e Lesão C', custo: '100', ouro: '300', icon: '🏺️' },
    'Ânfora de Óleo': { detalhes: 'Óleo inflamável de origem vegetal ou animal que queima por 3 turnos e causa Dano 2 e Lesão B', custo: '1', ouro: '2', icon: '🏺️' }
  }
};

const ROLAR_ITENS = {
  'Looting Pequeno': [{
    key: 'Itens de Sobrevivência',
    percentual: 90,
    quantidade: 1
  },{
    key: 'Alimentos e Ervas',
    percentual: 90,
    quantidade: 1
  },{
    key: 'Instrumentos Musicais',
    percentual: 20,
    quantidade: 1
  },{
    key: 'Projéteis',
    percentual: 70,
    quantidade: 1
  },{
    key: 'Armas Leves',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Armas Médias',
    percentual: 10,
    quantidade: 1
  },{
    key: 'Armas Grandes',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Leves',
    percentual: 20,
    quantidade: 1
  },{
    key: 'Armaduras Pesadas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Escudos',
    percentual: 40,
    quantidade: 1
  },{
    key: 'Ferramentas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Poções',
    percentual: 10,
    quantidade: 1
  }],
  'Looting Médio': [{
    key: 'Itens de Sobrevivência',
    percentual: 90,
    quantidade: 3
  },{
    key: 'Alimentos e Ervas',
    percentual: 90,
    quantidade: 3
  },{
    key: 'Instrumentos Musicais',
    percentual: 20,
    quantidade: 1
  },{
    key: 'Projéteis',
    percentual: 70,
    quantidade: 2
  },{
    key: 'Armas Leves',
    percentual: 50,
    quantidade: 2
  },{
    key: 'Armas Médias',
    percentual: 10,
    quantidade: 1
  },{
    key: 'Armas Grandes',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Leves',
    percentual: 20,
    quantidade: 1
  },{
    key: 'Armaduras Pesadas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Escudos',
    percentual: 40,
    quantidade: 1
  },{
    key: 'Ferramentas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Poções',
    percentual: 10,
    quantidade: 1
  }],
  'Looting Grande': [{
    key: 'Itens de Sobrevivência',
    percentual: 90,
    quantidade: 5
  },{
    key: 'Alimentos e Ervas',
    percentual: 90,
    quantidade: 5
  },{
    key: 'Instrumentos Musicais',
    percentual: 50,
    quantidade: 2
  },{
    key: 'Projéteis',
    percentual: 90,
    quantidade: 4
  },{
    key: 'Armas Leves',
    percentual: 90,
    quantidade: 3
  },{
    key: 'Armas Médias',
    percentual: 60,
    quantidade: 3
  },{
    key: 'Armas Grandes',
    percentual: 30,
    quantidade: 1
  },{
    key: 'Armaduras Leves',
    percentual: 30,
    quantidade: 1
  },{
    key: 'Armaduras Pesadas',
    percentual: 30,
    quantidade: 1
  },{
    key: 'Escudos',
    percentual: 60,
    quantidade: 2
  },{
    key: 'Ferramentas',
    percentual: 30,
    quantidade: 1
  },{
    key: 'Poções',
    percentual: 40,
    quantidade: 1
  }],
  'Forjas de Armas e Armaduras': [{
    key: 'Itens de Sobrevivência',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Alimentos e Ervas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Instrumentos Musicais',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Projéteis',
    percentual: 100,
    quantidade: 5
  },{
    key: 'Armas Leves',
    percentual: 100,
    quantidade: 10
  },{
    key: 'Armas Médias',
    percentual: 100,
    quantidade: 6
  },{
    key: 'Armas Grandes',
    percentual: 100,
    quantidade: 3
  },{
    key: 'Armaduras Leves',
    percentual: 100,
    quantidade: 4
  },{
    key: 'Armaduras Pesadas',
    percentual: 100,
    quantidade: 2
  },{
    key: 'Escudos',
    percentual: 100,
    quantidade: 3
  },{
    key: 'Ferramentas',
    percentual: 80,
    quantidade: 2
  },{
    key: 'Poções',
    percentual: 0,
    quantidade: 0
  }],
  'Casas de Alquimia': [{
    key: 'Itens de Sobrevivência',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Alimentos e Ervas',
    percentual: 100,
    quantidade: 5
  },{
    key: 'Instrumentos Musicais',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Projéteis',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armas Leves',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armas Médias',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armas Grandes',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Leves',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Pesadas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Escudos',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Ferramentas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Poções',
    percentual: 100,
    quantidade: 6
  }],
  'Tavernas & Estalagens': [{
    key: 'Itens de Sobrevivência',
    percentual: 100,
    quantidade: 10
  },{
    key: 'Alimentos e Ervas',
    percentual: 100,
    quantidade: 10
  },{
    key: 'Instrumentos Musicais',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Projéteis',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armas Leves',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armas Médias',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armas Grandes',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Leves',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Pesadas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Escudos',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Ferramentas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Poções',
    percentual: 0,
    quantidade: 0
  }],
  'Monastérios & Capelas': [{
    key: 'Itens de Sobrevivência',
    percentual: 100,
    quantidade: 5
  },{
    key: 'Alimentos e Ervas',
    percentual: 100,
    quantidade: 5
  },{
    key: 'Instrumentos Musicais',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Projéteis',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Armas Leves',
    percentual: 70,
    quantidade: 3
  },{
    key: 'Armas Médias',
    percentual: 30,
    quantidade: 1
  },{
    key: 'Armas Grandes',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Leves',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Pesadas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Escudos',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Ferramentas',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Poções',
    percentual: 50,
    quantidade: 1
  }],
  'Carroças de Especiarias': [{
    key: 'Itens de Sobrevivência',
    percentual: 100,
    quantidade: 3
  },{
    key: 'Alimentos e Ervas',
    percentual: 100,
    quantidade: 5
  },{
    key: 'Instrumentos Musicais',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Projéteis',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Armas Leves',
    percentual: 100,
    quantidade: 2
  },{
    key: 'Armas Médias',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armas Grandes',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Leves',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Armaduras Pesadas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Escudos',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Ferramentas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Poções',
    percentual: 100,
    quantidade: 1
  }],
  'Baús de Tesouros': [{
    key: 'Itens de Sobrevivência',
    percentual: 100,
    quantidade: 5
  },{
    key: 'Alimentos e Ervas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Instrumentos Musicais',
    percentual: 50,
    quantidade: 1
  },{
    key: 'Projéteis',
    percentual: 100,
    quantidade: 2
  },{
    key: 'Armas Leves',
    percentual: 100,
    quantidade: 2
  },{
    key: 'Armas Médias',
    percentual: 100,
    quantidade: 2
  },{
    key: 'Armas Grandes',
    percentual: 100,
    quantidade: 2
  },{
    key: 'Armaduras Leves',
    percentual: 100,
    quantidade: 1
  },{
    key: 'Armaduras Pesadas',
    percentual: 100,
    quantidade: 1
  },{
    key: 'Escudos',
    percentual: 100,
    quantidade: 1
  },{
    key: 'Ferramentas',
    percentual: 0,
    quantidade: 0
  },{
    key: 'Poções',
    percentual: 50,
    quantidade: 1
  }]
};

const ITENS_GENERICOS = [
  'Livro queimado',
  'Roupas rasgadas',
  'Rato morto',
  'Cacos de vidro',
  'Uma carta lacrada',
  'Um pergaminho velho',
  '500 gramas de lenha',
  'Penas de ganso',
  'Botas velhas',
  'Chifre bovino',
  'Uma orelha cortada',
  'Brincos de prata',
  'Rubi lascado',
  'Uma moeda prateada',
  'Manta de frio',
  'Gravetos secos',
  '100 gramas de pó dourado',
  'Fechadura de porta',
  'Corda de arco',
  'Mechas de cabelo',
  'Um dedo cortado',
  'Guarda-mão (empunhadura) de espada',
  'Lâmina lascada de adaga',
  'Uma coroa amassada',
  'Um dente de ouro',
  'Uma chave nobre',
  'Castiçal de bronze',
  'Um mapa rústico',
  'Partitura musical',
  'Odre com sangue',
  'Um fêmur',
  'Chapéu de couro',
  'Pintura de uma donzela',
  'Folhas secas de teixo',
  'Pedra de amolar',
  'Barra de ferro',
  'Haste de teixo de Calântia',
  '1 metro de Couro de Trolls',
  '1 metro de tecido nobre da Região das Vilas',
  '1 barra de Prata de Broanor',
  'Crânio humano',
  'Sementes desconhecidas',
  'Lenço de seda',
  'Cinzel enferrujado',
  'Panela de barro',
  'Cera vermelha para lacre',
  'Cordas de Alaúde',
  'Uma flauta quebrada',
  'Uma estrela do mar',
  'Asas de morcego',
  'Um anel de prata'
];

const DIVINDADES = {
  'Aquilas': { descricao: 'a Grande Águia', alinhamento: 'Neutra' },
  'Aurora': { descricao: 'a Serpente Branca', alinhamento: 'Benigna' },
  'Belqueder': { descricao: 'o Deus das Armas', alinhamento: 'Benigna' },
  'Boen': { descricao: 'o Deus das Tribos', alinhamento: 'Neutra' },
  'Cheher': { descricao: 'a Deusa das Arvores', alinhamento: 'Neutra' },
  'Éris': { descricao: 'o Deus do Fogo', alinhamento: 'Maligna' },
  'Fórticos': { descricao: 'o Deus da Forja', alinhamento: 'Benigna' },
  'Ghemlene': { descricao: 'a Deusa das Flores', alinhamento: 'Benigna' },
  'Ghohana': { descricao: 'a Deusa das Ferramentas', alinhamento: 'Neutra' },
  'Larize': { descricao: 'a Deusa das Águas', alinhamento: 'Benigna' },
  'Lazaros': { descricao: 'o Deus da Ganância', alinhamento: 'Maligna' },
  'Lúbitos': { descricao: 'o Deus da Esperança', alinhamento: 'Benigna' },
  'Mustafar': { descricao: 'o Deus da Guerra', alinhamento: 'Maligna' },
  'Poente': { descricao: 'o Deus da Perseverança', alinhamento: 'Neutra' },
  'Ridalin': { descricao: 'a Deusa das Cavernas', alinhamento: 'Maligna' },
  'Solimon': { descricao: 'o Deus dos Povos', alinhamento: 'Benigna' },
  'Tholivan': { descricao: 'o Deus dos Rios', alinhamento: 'Neutra' },
  'Zanera': { descricao: 'a Deusa da Dança', alinhamento: 'Benigna' },
  'Zúr-Natam': { descricao: 'o Deus Vampiro', alinhamento: 'Maligna' }
};

const GUILDAS = {
  'Pelejas': {
    texto: 'Especialistas em armas e combate.',
    texto_verbetes: 'Possuem 1 Ponto nos Verbetes Atacar Corpo-a-Corpo, Atacar Desarmado, Atacar à Distância, Cavalgar, Confeccionar Armaduras Leves, Escalar, Esquivar e Desengajar, Forjar Armas Corpo-a-Corpo, Intimidar, Liderar, Nadar, Perceber Ambiente ao Redor, Reparar Objetos, além de poder escolher outros 3 Verbetes de Nível 1.',
    proficiencia: 'Possuem proficiência em todas as Armas (Leves, Médias ou Pesadas), Escudos, Armaduras (Leves e Pesadas) e Elmos.',
    condutas: ['Forte', 'Ágil', 'Criativa'],
    verbetes: ['Atacar Corpo-a-Corpo', 'Atacar Desarmado', 'Atacar à Distância', 'Cavalgar', 'Confeccionar Armaduras Leves', 'Escalar', 'Esquivar e Desengajar', 'Forjar Armas Corpo-a-Corpo', 'Intimidar', 'Liderar', 'Nadar', 'Perceber Ambiente ao Redor', 'Reparar Objetos'],
    magias: [],
    equipamentos: {
      'Kit de Equipamentos 1': ['Espada Curta', 'Corselete Acolchoado', 'Escudo de Madeira', 'Pederneira', 'Queijo', 'Odre de Cerveja', 'Coldre de Água'],
      'Kit de Equipamentos 2': ['Bardiche', 'Armadilha de Urso', 'Corselete Acolchoado', 'Tocha', 'Carne Seca', 'Odre de Cerveja', 'Coldre de Água']
    },
    vontade: 5,
    protecao: {
      'Kit de Equipamentos 1': 2,
      'Kit de Equipamentos 2': 1
    }
  },
  'Corjus': {
    texto: 'Sobreviventes dos ermos e excelentes arqueiros.',
    texto_verbetes: 'Possuem 1 Ponto nos Verbetes Atacar Desarmado, Atacar à Distância, Cavalgar, Caçar, Confeccionar Armas de Madeira, Cozinhar, Curar Ferimentos, Escalar, Esquivar e Desengajar, Forragear, Mover Silenciosamente, Nadar, Perceber Ambiente ao Redor, Rastrear, Sobreviver nos Ermos, Treinar Animais, além de poder escolher outros 3 Verbetes de Nível 1.',
    proficiencia: 'Possuem proficiência em Armas Leves, Armas Médias, Arco Longo e Arco Longo Composto, Armaduras Leves e Escudos (não usa Elmos).',
    condutas: ['Ágil', 'Criativa', 'Inteligente'],
    verbetes: ['Atacar Desarmado', 'Atacar à Distância', 'Cavalgar', 'Caçar', 'Confeccionar Armas de Madeira', 'Cozinhar', 'Curar Ferimentos', 'Escalar', 'Esquivar e Desengajar', 'Forragear', 'Mover Silenciosamente', 'Nadar', 'Perceber Ambiente ao Redor', 'Rastrear', 'Sobreviver nos Ermos', 'Treinar Animais'],
    magias: [],
    equipamentos: {
      'Kit de Equipamentos 1': ['Arco Curto', 'Flechas', 'Corselete de Couro', 'Legumes Frescos', 'Coldre de Água', 'Corda de Cânhamo', 'Ferramentas de Carpintaria'],
      'Kit de Equipamentos 2': ['Zarabatana', 'Ferpas de Madeira', 'Escudo de Madeira', 'Corselete de Couro', 'Frutas', 'Coldre de Água', 'Ferramentas de Couraria']
    },
    vontade: 5,
    protecao: {
      'Kit de Equipamentos 1': 1,
      'Kit de Equipamentos 2': 2
    }
  },
  'Salvagentes': {
    texto: 'Os ordeiros clérigos que buscam salvar todos.',
    texto_verbetes: 'Possuem 1 Ponto nos Verbetes Atacar Corpo-a-Corpo, Cavalgar, Confeccionar Armaduras Leves, Conhecer Idiomas, Curar Ferimentos, Entreter (Cantar, Dançar, Tocar), Historiar, Investigar Pistas, Ler e Escrever, Nadar, Perceber Ambiente ao Redor, Persuadir, Reparar Objetos, além de mais 3 Verbetes de Nível 1.',
    proficiencia: 'Possuem proficiência em todas as Bestas (porém somente com Quadrelos), Funda, Aprisionador, Bastão, Cajado, Cajado-Funda, Cetro, Clava, Martelo, Maça, Martelo Lucerno, Martelo de Batalha, todas as Armaduras, Elmos e Escudos.',
    condutas: ['Forte', 'Carismática', 'Mística'],
    verbetes: ['Atacar Corpo-a-Corpo', 'Cavalgar', 'Confeccionar Armaduras Leves', 'Conhecer Idiomas', 'Curar Ferimentos', 'Entreter (Cantar, Dançar, Tocar)', 'Historiar', 'Investigar Pistas', 'Ler e Escrever', 'Nadar', 'Perceber Ambiente ao Redor', 'Persuadir', 'Reparar Objetos'],
    magias: ['Curatio', 'Glacies', 'Incantare', 'Lux', 'Puritas', 'Somnum', 'Tempus', 'Veritas', 'Vita'],
    equipamentos: {
      'Kit de Equipamentos 1': ['Maça', 'Corselete de Couro', 'Escudo de Madeira', 'Açúcar Mascavo', 'Peixe', 'Coldre de Água', 'Símbolo Divino'],
      'Kit de Equipamentos 2': ['Funda', 'Pedras de Funda', 'Corselete de Couro', 'Escudo de Madeira', 'Ração de Viagem', 'Coldre de Água', 'Símbolo Divino']
    },
    vontade: 6,
    protecao: {
      'Kit de Equipamentos 1': 2,
      'Kit de Equipamentos 2': 2
    }
  },
  'Mascates': {
    texto: 'Furtivos e perigosos, são os ladrões mais habilidosos.',
    texto_verbetes: 'Possuem 1 Ponto nos Verbetes Abrir Fechaduras, Atacar à Distância, Barganhar, Cavalgar, Conhecer Idiomas, Enganar, Entreter (Cantar, Dançar, Tocar), Equilibrar, Escalar, Esconder nas Sombras, Furtar, Historiar, Intimidar, Investigar Pistas, Ler e Escrever, Mover Silenciosamente, Nadar, Perceber Ambiente ao Redor, Persuadir, e pode escolher outros 3 Verbetes de Nível 1.',
    proficiencia: 'Possuem proficiência em Armas Leves e Médias, e Armaduras Leves. Escudos e Elmos os prejudicam (2 Desvantagens se usá-los).',
    condutas: ['Ágil', 'Criativa', 'Carismática'],
    verbetes: ['Abrir Fechaduras', 'Atacar à Distância', 'Barganhar', 'Cavalgar', 'Conhecer Idiomas', 'Enganar', 'Entreter (Cantar, Dançar, Tocar)', 'Equilibrar', 'Escalar', 'Esconder nas Sombras', 'Furtar', 'Historiar', 'Intimidar', 'Investigar Pistas', 'Ler e Escrever', 'Mover Silenciosamente', 'Nadar', 'Perceber Ambiente ao Redor', 'Persuadir'],
    magias: [],
    equipamentos: {
      'Kit de Equipamentos 1': ['Punhal', 'Punhal', 'Corselete de Couro', 'Flauta Doce', 'Coldre de Água', 'Carne Seca', 'Ânfora de Óleo', 'Ferramentas de Ladrão'],
      'Kit de Equipamentos 2': ['Arco Curto', 'Flechas', 'Corselete de Couro', 'Corda de Cânhamo', 'Frutas', 'Coldre de Água', 'Ferramentas de Ladrão']
    },
    vontade: 5,
    protecao: {
      'Kit de Equipamentos 1': 1,
      'Kit de Equipamentos 2': 1
    }
  },
  'Literatos': {
    texto: 'Feiticeiros que dominam a magia arcana.',
    texto_verbetes: 'Possuem 1 Ponto nos Verbetes Barganhar, Conhecer Idiomas, Cozinhar, Falsificar, Forragear, Historiar, Investigar Pistas, Ler e Escrever, Liderar, Nadar, Persuadir, Praticar Alquimia, Reparar Objetos, além de mais 3 Verbetes de Nível 1',
    proficiencia: 'Possuem proficiência em Adaga, Faca, Funda, Punhal, Bastão, Cajado, Cajado-Funda, Cetro e Robe de Couro Nobre. O uso de armaduras, elmos ou escudos impedem a conjuração.',
    condutas: ['Carismática', 'Inteligente', 'Mística'],
    verbetes: ['Barganhar', 'Conhecer Idiomas', 'Cozinhar', 'Falsificar', 'Forragear', 'Historiar', 'Investigar Pistas', 'Ler e Escrever', 'Liderar', 'Nadar', 'Persuadir', 'Praticar Alquimia', 'Reparar Objetos'],
    magias: ['Daemonium', 'Fortitudo', 'Glacies', 'Ignis', 'Incantare', 'Invocare', 'Mortus', 'Praesidium', 'Puritas', 'Sanguis', 'Saxum', 'Somnum', 'Tempus', 'Umbra', 'Venenum', 'Ventus', 'Visio'],
    equipamentos: {
      'Kit de Equipamentos 1': ['Funda', 'Pedras de Funda', 'Tinta e Pena', 'Coldre de Água', 'Pão', 'Grimório'],
      'Kit de Equipamentos 2': ['Adaga', 'Tinta e Pena', 'Papiro', 'Coldre de Água', 'Carne Seca', 'Grimório']
    },
    vontade: 6,
    protecao: {
      'Kit de Equipamentos 1': 0,
      'Kit de Equipamentos 2': 0
    }
  },
};

const NOMES = [
  'Favila', 'Villapol', 'Cefero', 'Alonso',
  'Florencio', 'Rubio', 'Aida', 'Laviada',
  'Estrella', 'Adamira', 'Berta', 'Solar',
  'Quilina', 'Sazan', 'Tzelili', 'Tritan',
  'Sylaj', 'Lumnor', 'Shafi', 'Demai',
  'Ostrala', 'Sanie', 'Lumturore', 'Hamza',
  'Naltore', 'Herdurim', 'Eldraed', 'Nusdrok',
  'Themeth', 'Hebami', 'Doralmini', 'Herselyn',
  'Brukirra', 'Thessesli', 'Tytrec', 'Shondren',
  'Labiksi', 'Nerlae', 'Thaeloc', 'Therildas',
  'Dimvide', 'Zonilnar', 'Gondie', 'Grelfuth',
  'Elvaco', 'Finrire', 'Kimrae', 'Dhiarzias',
  'Ine', 'Elodre', 'Bhadiphre', 'Onosi',
  'Namrira', 'Darunia', 'Elwarin', 'Elmer',
  'Danelis', 'Darunia', 'Ievis', 'Vamir',
  'Fenvalur', 'Niossae', 'Paran', 'Sontar',
  'Perharice', 'Goren', 'Iarkian', 'Elluin',
  'Aimer', 'Dabella', 'Lusserina', 'Bellaluna',
  'Morzana', 'Gaylia', 'Raenisa', 'Lusha',
  'Darunia', 'Ashera', 'Chaecan', 'Imizael',
  'Symania', 'Nimue', 'Rania', 'Virvalur',
  'Cardinal', 'Duke', 'Bertran', 'Alderman',
  'Gilliame', 'Jonett', 'Luned', 'Osane',
  'Gisla', 'Jana', 'Helueua', 'Aanor',
  'Thomelin', 'Enguerran', 'Terrick', 'Dreues',
  'Urius', 'Jizor', 'Wuviar', 'Qrorhan',
  'Irass', 'Lonneas', 'Izineas', 'Ephior',
  'Etazz', 'Irihann', 'Ameless', 'Cirass',
  'Eqora', 'Obelle', 'Vuqille', 'OdusCruras',
  'Cruras', 'Ezidore', 'Dhomarim', 'Zafir'
];

const SEGREDOS = {
  grupo_1: {
    bases: ['Proteger','Destruir','Salvar','Investigar','Abalar','Arruinar','Ceifar','Socorrer','Evitar'],
    frases: [
      ' a Tribo Magnus antes do ataque.',
      ' a Tribo Argus dos Herages da região.',
      ' a Família Auris.',
      ' o Salvagente Demetrius de Torralta.',
      ' a Torralta a pedido do Comodoro.',
      ' a Floresta Infestada.',
      ' as pradarias de Jaden.',
      ' os bardos do Palacete Wynn.',
      ' os cantores de Celestia.',
      ' o carregamento das adagas vermelhas.',
      ' o baú de poções de Cindi.',
      ' a diligência do Regente.',
      ' a carruagem do Barão Marjallo.',
      ' o Capitão Peleja Anor.',
      ' o Grimório do Literato Giulio.',
      ' a Literata Denali.',
      ' os pássaros do Corjus Kimber.',
      ' o Passadiço de Olwen.',
      ' a biblioteca de Starling.',
      ' o palacete de Eluna.',
      ' as casas de Alairia.',
      ' a ponte do Senhor Hesperos.',
      ' a casa de armas de Arryn.',
      ' o inventário de Estar.',
      ' os portões de Breena.',
      ' o Lago Cortesia.',
      ' os Cavalariços de Kaisa.',
      ' a gangue dos Mascates de Silvesse.',
      ' os malfeitores do Mascate Virgil.',
      ' o templo da Salvagente Acorna.',
      ' a carruagem da Senhora Candice.',
      ' o Guarda-armas do líder Calimerio.',
      ' as duas lâminas de Jada.',
      ' os ingredientes da feiticeira Vudra.',
      ' o inventário da Necromante Aga',
      ' o livro das canções de Tikala.',
      ' o alaude mágico de Reyelor.',
      ' o tesouro secreto de Aronar.',
      ' os protetores do Maestro Dorqarim.',
      ' a espada da Regedora Alurien.',
      ' o calabouço da Regente Artala.',
      ' as passagens do Calabouço de Hawlesse.',
      ' a embarcação de Liaberos.',
      ' os barcos da Casa Pazana.',
      ' a passagem do Rio-Raso.',
      ' o túmulo da Coroa Timwat.',
      ' o mausoléu da Regente Liddli.',
      ' a forja do Ministro Slaamdor.',
      ' a fortuna de Domiel.',
      ' os cavalos do Digar Azriel.'
    ]
  },
  grupo_2: {
    bases: ['Matar','Assassinar','Sacrificar','Ferir','Proteger','Salvar','Libertar','Socorrer','Defender','Acudir','Libertar','Aprisionar','Subjugar'],
    profissoes_0: [
      ' o capelão ',
      ' o Salvagente ',
      ' o Peleja ',
      ' o Corjus ',
      ' o Mascate ',
      ' o Literato ',
      ' o ferreiro ',
      ' o cartógrafo ',
      ' o alfaiate ',
      ' o tintureiro ',
      ' o curtidor ',
      ' o armeiro ',
      ' o ourives ',
      ' o artesão ',
      ' o oleiro ',
      ' o estalajadeiro ',
      ' o almocreve ',
      ' o pomareiro ',
      ' o cavalariço ',
      ' o vendedor de sal ',
      ' o vendedor de especiarias ',
      ' o regente ',
      ' o comodoro ',
      ' o tesoureiro ',
      ' o bibliotecário ',
      ' o escrivão '
    ],
    profissoes_1: [
      ' a capelã ',
      ' a Salvagente ',
      ' a Peleja ',
      ' a Corjus ',
      ' a Mascate ',
      ' a Literato ',
      ' a ferreiro ',
      ' a cartógrafo ',
      ' a alfaiate ',
      ' a tintureira ',
      ' a curtidora ',
      ' a armeira ',
      ' a ourives ',
      ' a artesã ',
      ' a aleira ',
      ' a Estalajadeira ',
      ' a almocreve ',
      ' a pomareira ',
      ' a cavalariça ',
      ' a vendedora de sal ',
      ' a vendedora de especiarias ',
      ' a regente ',
      ' a comodoro ',
      ' a tesoureira ',
      ' a bibliotecária ',
      ' a escrivã '
    ],
    nomes_0: [
      'Kalaziel',
      'Humiel',
      'Briathos',
      'Araquiel',
      'Ruman',
      'Jahoel',
      'Anael',
      'Obril',
      'Faurr',
      'Skolk',
      'Tyuvaerd',
      'Aekas',
      'Zersal',
      'Bluthos',
      'Zokag',
      'Drurvers',
      'Krum',
      'Besde',
      'Vox',
      'Remi',
      'Fouquet',
      'Jean',
      'Dominique',
      'Duret',
      'Denis',
      'Deschanel',
      'Bastiaro',
      'Carrio',
      'Valiente',
      'Jimenez',
      'Millano',
      'Gutiérrez'
    ],
    nomes_1: [
      'Anahel',
      'Azrael',
      'Layla',
      'Neriah',
      'Coretha',
      'Desh',
      'Rarkeh',
      'Rierneh',
      'Sarge',
      'Zedfur',
      'Betvog',
      'Ziam',
      'Xatag',
      'Tark',
      'Neh',
      'Broth',
      'Tivo',
      'Sylvie',
      'Gueguen',
      'Rolande',
      'Bourque',
      'Janine',
      'Lefeuvre',
      'Sonia',
      'Loupe',
      'Olaya',
      'Fierros',
      'Carulina',
      'Bonet',
      'Ayalga',
      'Cabarcos',
      'Belen'
    ]
  },
  grupo_3: {
    bases: ['Entregar','Roubar','Investigar','Localizar','Destruir'],
    auxiliar: [' a ',' de ',' de ',' de ',' de '],
    frases: [
      ' a estatueta de prata',
      ' a clepsidra de barro',
      ' a lâmina quebrada',
      ' o mapa da torre',
      ' o pergaminho queimado',
      ' o pergaminho lacrado',
      ' a adaga dourada',
      ' o elmo vermelho',
      ' o brasão do regente',
      ' o mapa da região do pavilhão',
      ' as três chaves do palacete',
      ' o alaude de ouro',
      ' a vela amaldiçoada',
      ' as sementes douradas',
      ' a haste de teixo',
      ' a espada curvada',
      ' a luneta na embarcação',
      ' o lampião azulado',
      ' a carta de aviso',
      ' a promissória de herança',
      ' os olhos ressequido',
      ' a aliança de ouro',
      ' o escudo queimado',
      ' a ampulheta real',
      ' a poção carmesim',
      ' o manto acinzentado',
      ' a capa furta-cor',
      ' a coroa de cobre',
      ' a partitura secreta',
      ' o grimório trancado',
      ' o livro vermelho',
      ' as páginas rasgadas',
      ' o tomo do sepulcro',
      ' o rubi lascado',
      ' o colar rústico',
      ' a espada enferrujada',
      ' o invólucro com sangue',
      ' o odre gázeo',
      ' as gazuas de metal',
      ' o dedo do cadáver',
      ' a estrela prateada'
    ]
  },
};
