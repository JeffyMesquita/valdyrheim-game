# Valdyrheim — base de design e escopo

Consolidação em português, revisada em **04/10/2026**. Base para discutir viabilidade, manter,
cortar, adiar e implementar. Não constitui especificação fechada nem comprovação de jogo funcionando.

## Índice

- [Fontes e status](#fontes-e-status)
- [Propósito e ciclo da era](#propósito-e-ciclo-da-era)
- [Regras recuperadas](#regras-recuperadas)
- [Lore e nomenclatura](#lore-e-nomenclatura)
- [Classes e clãs sociais](#classes-e-clãs-sociais)
- [Ranking](#ranking)
- [Combate e defesa](#combate-e-defesa)
- [Modelagem e rastreabilidade](#modelagem-e-rastreabilidade)
- [Estado local encontrado](#estado-local-encontrado)
- [Divergências e decisões abertas](#divergências-e-decisões-abertas)
- [Critérios para manter, cortar ou adiar](#critérios-para-manter-cortar-ou-adiar)
- [Cobertura histórica](#cobertura-histórica)
- [Recapitulação e próximas decisões](#recapitulação-e-próximas-decisões)

## Fontes e status

- **H — Histórico:** [Jogo de Turnos Estratégico](https://chatgpt.com/c/6833868b-d82c-8009-8f49-b7d14b323155), conversa de 25 e 31/05/2025. Solicitações e aceites humanos indicam intenção; respostas do assistente são propostas até haver aceite. Inventário ao final.
- **A — Discussão atual:** [conversa de origem desta consolidação](codex://threads/01a10863-5ad2-7ef3-86a6-0ecae10d52d3), conforme contexto recebido nesta tarefa. Distingue decisões humanas, lembranças e propostas atuais; não foi relida integralmente nesta tarefa.
- **L — Evidência local:** arquivos inspecionados no worktree, base Git `7d2875b270d85b1c81e08c3b4e75e747d9b609e4`. Documento, constante, tipo e interface não comprovam execução ou implantação.
- **P — Proposta:** hipótese ou sugestão, sem aprovação final ou balanceamento demonstrado. Cortes e sequência sugeridos neste documento também são P.

Não houve consulta nem alteração do banco remoto. Não foram executados app, autenticação, produção
ou combate. Referências externas e precisão linguística dos nomes não foram verificadas.

## Propósito e ciclo da era

**A — Intenção humana:** construir por paixão um jogo nostálgico e uma comunidade. Principal valor:
interação e coordenação de ataques dentro de clãs. Receita poderá ser considerada se houver escala;
financiar pequenos prêmios com receita futura é possibilidade, sem modelo comercial, preços ou
regulamento aprovado. Grupo histórico de dez pessoas é lembrança, sem fixar limite do novo jogo.

**H — Intenção humana:** estratégia por turnos, gerenciamento de feudo, alianças, ataques e defesa
de aliados. Inspiração citada na primeira mensagem: **Ryudragon e Ryujin, da Decadium studios**,
com pedido explícito de originalidade e cuidado para não copiar. Na discussão atual aparece
“Blue Dragon”; o [README](README.md) escreve “Ryudradon”. O histórico esclarece o nome escrito
na época, mas não verifica externamente essas referências nem resolve a lembrança oral.

**Ciclo pretendido, reunindo H e A:**

1. Entrar numa era, configurar perfil e iniciar feudo com trabalhadores e recursos iniciais.
2. Alocar trabalhadores; receber produção na virada do turno; contratar, construir e treinar.
3. Coordenar clã, atacar, defender e apoiar aliados; usar XP para evoluir e liberar capacidades.
4. Competir pelo desenvolvimento total do feudo, com composição de pontuação visível.
5. Encerrar a era, registrar ranking histórico e medalhas, reiniciar recursos e tropas.

**H — Intenção humana:** eras com total de turnos definido antecipadamente; **900 turnos era exemplo**.
Intervalo e duração total permanecem abertos. **A — Decisão humana:** rankings históricos e medalhas
de colocação persistem; recursos e tropas reiniciam. Persistência de XP, nível, trabalhadores,
construções, classe e clã social ainda precisa ser definida.

**A — Lembrança:** ataques viajavam no original; intervalo lembrado de aproximadamente 20 minutos.
Distâncias, velocidade, chegada, retorno e resolução de ataques no Valdyrheim não estão definidos.

**A — Exploração atual de ritmo:** turnos mais longos e menos turnos totais; 30 minutos foi exemplo,
sem parâmetro final aprovado. Viagem lembrada de 18 turnos de ida + 18 de volta, ou talvez 9 + 9.
Contas abaixo pressupõem turnos contínuos e são cenários, sem fixar regra do Valdyrheim:

| Turno | Viagem lembrada | Ida | Volta | Total |
| --- | --- | --- | --- | --- |
| 20 min | 18 + 18 turnos | 6 h | 6 h | 12 h |
| 20 min | 9 + 9 turnos | 3 h | 3 h | 6 h |
| 30 min | 18 + 18 turnos | 9 h | 9 h | 18 h |
| 30 min | 9 + 9 turnos | 4 h 30 | 4 h 30 | 9 h |

## Regras recuperadas

| Elemento | Intenção humana recuperada | Evidência e limite |
| --- | --- | --- |
| Conta e perfil | Conta para acesso; configuração de perfil vinculada à conta; cada jogador tem Dróttgardr | H08; existe código local, sem validação de execução |
| Trabalhadores iniciais | Seis, após proposta inicial de três a seis | H04; README, configuração e onboarding usam seis |
| Recursos iniciais | Zero de todos os recursos no nível 1 | H03; onboarding não cria saldos |
| Alocação | Trabalhadores podem mudar de recurso a cada turno, sem vínculo permanente | H01–H02; não há fluxo local de alocação |
| Capacidade | Nível atual × 120 trabalhadores | H02 e README; aplicação do limite não encontrada |
| Progressão | Histórico pede níveis 1–15; XP por ataque, defesa própria e de aliados | H01, H08; nível 10 na lembrança atual gera questão aberta |
| Tecnologia | Subir nível concede pontos tecnológicos; progressão libera construções/tropas | H02; quantidade de pontos, árvore e custos indefinidos |
| Fé | Produção exige nível 5+ e Templo | Correção humana H03; substitui sugestão antiga de nível 3 |
| Infantaria | Quartel disponível desde nível 1, permitindo combate inicial e evolução | Correção humana H03; substitui sugestão antiga de nível 2 |
| Outras tropas | Edificações militares necessárias; ataque e defesa como atributos mínimos; intenção inicial de tropas únicas por classe | H01–H02; nomes, custos, outros atributos e combate não fechados |

**H02/H11 — Taxas humanas, também presentes em [configt.ts](src/game/configt.ts):**

| Recurso | Uso básico | Produção por trabalhador/turno |
| --- | --- | ---: |
| Eitrkorn | Alimento | 15 |
| Steinarr | Construção | 8 |
| Gladrheim | Comércio | 4 |
| Vördrblót | Fé, após desbloqueio | 2 |

**Contratação:** H04 aceitou inicialmente 60 alimento + 20 comércio. H05 pediu ajuste para permitir
um trabalhador no turno seguinte com boa alocação. Assistente sugeriu **60 Eitrkorn + 8 Gladrheim**,
valor mantido no README. Quatro trabalhadores em alimento e dois em comércio produzem exatamente
60/8 após um turno, sem bônus ou outros gastos. Com custo 60/20, os seis iniciais não conseguem
atingir ambos em um único turno: seriam necessários quatro em alimento e cinco em comércio.
H20 voltou a sugerir 60/20; configuração local repete esse valor. Meta humana está recuperada;
custo final exige reconciliação. Não alterar código por inferência.

Manutenção de tropas, moral, raridade, especialização de trabalhadores, custos progressivos,
bônus coletivos, eventos e construções compartilhadas vieram de propostas do assistente.
Não são requisitos aprovados apenas por constarem no histórico.

## Lore e nomenclatura

**H04 — Escolha humana:** temática nórdica. **H18 — Nome humano:** Valdyrheim.
**H06–H07 — Proposta narrativa, incorporada ao README:** séculos após Ragnarok, fragmentos dos nove
mundos se unem numa terra de fiordes, gelo, montanhas e runas. Líderes dos Dróttgardrs buscam
restaurar ordem, sob observação dos deuses. Guerra, fé e estratégia moldam destino dos clãs.

| Nome | Pronúncia editorial no README | Função e descrição narrativa |
| --- | --- | --- |
| Valdyrheim | /VAL-dir-rraim/ | Mundo do jogo; “lar dos senhores-valentes” na proposta original |
| Dróttgardr | /DROT-gar-dur/ | Feudo/base evolutiva; “Fortaleza do Senhor” na proposta |
| Fólksmenn | /FOLKS-men/ | Trabalhadores: camponeses, mineradores, comerciantes e acólitos |
| Eitrkorn | /EI-tr-korn/ | Grãos associados às bênçãos de Freyr |
| Steinarr | /STÉI-nar/ | Pedra rúnica associada aos ossos de Ymir |
| Gladrheim | /GLÁD-rraim/ | Cristais para trocas, tributos e feiras |
| Vördrblót | /VUR-dur-blot/ | Essência ritual colhida após construção de Templo |

Pronúncias e significados são escolhas editoriais recuperadas, sem comprovação de tradução ou
autenticidade nórdica. Jarl aparece no README como líder do clã/premium; **A:** título, distintivo,
liderança social e assinatura ainda precisam ser distinguidos.

## Classes e clãs sociais

**H29 — Pedido humano:** cinco ou seis classes baseadas em ideais, com bônus moderados e mini-lore.
Classe/facção escolhida pelo jogador e clã social formado por jogadores são conceitos distintos;
o histórico usa “classes/clãs” para ambos. Nomenclatura final, possibilidade de troca e efeitos
nas tropas permanecem abertos. Nenhuma definição dessas classes foi encontrada no código local.

**P — Proposta do assistente em H29; todos os números abaixo são históricos, sem aceite final ou teste:**

| Classe e pronúncia sugerida | Ideal e mini-lore resumida | Bônus propostos na época |
| --- | --- | --- |
| Skjaldarheim — SKYAL-dar-haim | Defesa/resiliência; povo das montanhas que encontra poder na resistência e nas fortalezas | +10% resistência de tropas defensivas; quartéis/muralhas 8% mais baratos |
| Vargheim — VAR-g-haim | Ataque/conquista; herdeiros dos lobos de guerra que perseguem glória em batalha | +10% dano de tropas ofensivas; primeira tropa um nível antes |
| Gladrfæll — GLAD-ur-fell | Comércio/riqueza; domínio das rotas e mercados entre fiordes | +15% produção de comércio; trabalhadores 10% mais baratos |
| Yndrlundr — IN-dur-lun-dr | Natureza; comunhão com florestas ancestrais e colheitas abençoadas | +10% produção de alimento; fazendas/moinhos 10% mais baratos |
| Vördrsynir — VUR-dur-sin-ir | Fé/mistério; povo guiado por presságios, visões e rituais | +20% produção de fé; Templo no nível 4 em vez de 5 |
| Dómvarr — DOM-var | Equilíbrio/estratégia/justiça; sábios que planejam sem se prender a extremos | +5% produção de todos os recursos; realocar dois trabalhadores grátis a cada dez turnos |

**A — Descartado/rever:** vantagem de realocação gratuita de Dómvarr é redundante, pois alocação
já é mecânica básica. **A — Direção conceitual discutida:** generalista inspirado numa classe do
original, com bônus de outras classes em menor intensidade: produção, ataque, defesa e flexibilidade,
com menor especialização. Não há números finais; bônus combinados precisam teste. Fraquezas
podem resultar do menor bônus especializado, sem exigir penalidades explícitas.

**P — Pontos a revisar:** “primeira tropa um nível antes” precisa fazer sentido com Quartel no nível 1.
Bônus de custo/produção podem acelerar crescimento cumulativo. A afirmação antiga de que tudo era
equilibrado e não era pay to win não tinha evidência. Classes não foram vinculadas ao premium por
decisão comprovada. Arquétipos antigos Guardião/Falcão/Lobo/Dragão/Serpente/Sábio eram outra proposta,
sem escolha humana demonstrada; não se somam automaticamente às seis classes acima.

## Ranking

**A — Objetivo humano confirmado:** avaliar desenvolvimento do feudo como um todo, com caminhos
competitivos diferentes; uma só dimensão não deve determinar campeão. “Recursos” inclui tropas,
além de estoques. Desejo de considerar estoques, tropas, pontos de ataque e XP. XP pode seguir
acumulando depois do teto de nível e contar no ranking. **Composição da pontuação visível ao
jogador foi aceita explicitamente.** Fórmula, pesos, desempates e valor de cada tropa/recurso abertos.

[README](README.md) descreve ranking somente por quantidade de recursos; não documenta a composição
ampliada. Não há implementação local de ranking encontrada.

**P — Avaliação discutida, ainda não validada:** comparar perfis econômico, militar e equilibrado
numa mesma era, com dedicação semelhante. Considerar custo e tempo de aquisição, risco de perdas,
conversão de estoque em tropas e relação entre pontos de ataque e XP. Se uma ação gera ambos,
examinar contagem conjunta antes de decidir fórmula. Nenhum peso ou resultado de balanceamento
é assumido. Estoque bruto de recursos com taxas diferentes não tem valor equivalente por definição.

**A — Eras e reconhecimento:** medalhas de colocação e ranking histórico persistentes; 1º/2º/3º
citados para premiação, sem regra formal. Distintivo premium diferente é lembrança do original.

## Combate e defesa

**A — Nova intenção humana:** defesa bem-sucedida preserva recursos; resultado relativamente parelho
pode causar perdas mínimas; derrota esmagadora causa perdas maiores e pode perder trabalhadores.
Defesa deve conceder XP. O objetivo é incentivar defesa e tornar retirada deliberada das tropas
defensivas uma vulnerabilidade com consequências reais. Taxas, limites, critérios de resultado,
saque, destino dos trabalhadores e fórmula de combate não foram aprovados.

**P — Análise do assistente:** classificar resultado pela força efetiva e resolução do combate,
sem usar presença online como critério. Perder trabalhadores pode reduzir produção e provocar
espiral de queda; avaliar limites e recuperação para evitar eliminação prática por ataques repetidos.
XP defensiva proporcional à contribuição, inclusive de aliados, é proposta alinhada à intenção
histórica de recompensar defesa e ajuda, sem taxas definidas. Automação por objetivo deve considerar
saldo e trabalhadores após perdas; política de recálculo permanece aberta.

**A — Nova lembrança do original:** clãs calculavam ataques para chegar ao feudo adversário no turno
em que retornavam as tropas enviadas por ele. Assim, adversário não conseguia retirar/reenviar tropas
a tempo de evitar combate. Referência lembrada de 18 turnos de ida e 18 de volta continua sem fixar
parâmetro do Valdyrheim. Trata-se de chegada ao feudo no retorno, sem interceptação no caminho;
não é mecânica aprovada para o novo jogo.

**P — Questão temporal aberta:** definir ordenação na virada entre retornos, chegadas/combates e
novas partidas; quem vê informações de retorno; cancelamento/retirada e janelas de ordens.
Regra temporal clara e determinística pode favorecer planejamento por turnos e evitar resultado
dependente de rapidez de clique. A ordem concreta de resolução ainda precisa ser discutida.

## Modelagem e rastreabilidade

**H09/H17 — Intenção humana:** nomes de colunas em inglês; PostgreSQL no Supabase; Next.js para
web e API. App React Native é possibilidade futura, sem compromisso de implementação.

**H13 — Intenção humana:** catálogo `resources` separado dos saldos de cada feudo; login Google
considerado; possibilidade de roubo/transferência de trabalhadores foi pergunta exploratória.
**H21–H28:** associar dados às eras/turnos, registrar alocações e produção, com índices e histórico.
O usuário pediu `drottgardr_turn_production` e questionou registro da era e unicidade por turno.

[TABELAS.md](TABELAS.md) descreve `eras`, `turns`, `drottgardrs`, `drottgardrs_resources`,
`drottgardr_worker_allocations`, `drottgardr_turn_production`, `resources`, `workers`, `profiles`
e `xp_table`. Trata-se de modelagem documentada, sem migrations locais que comprovem sua aplicação.

**P — Fluxo histórico sugerido:** ler alocação do turno, calcular produção, atualizar saldos e guardar
produção daquele turno. Copiar alocação anterior quando jogador não altera foi proposta do assistente.
SQL sugeriu unicidade `(era_id, turn_number)` para turnos, `(drottgardr_id, era_id, turn)` para
alocações e `(drottgardr_id, turn_id)` para produção. `era_id` redundante precisa corresponder à era
do turno/feudo; esse vínculo não é automaticamente garantido por FKs separadas.

**P — Limites para futura implementação:** unicidade do histórico não garante sozinha que saldo não
seja creditado duas vezes. Alocação automática inalterada continua produzindo em cada turno válido.
Histórico de produção/alocação ajuda auditoria, mas não garante rollback de gastos, batalhas e outras
ações. Reprocessamento, atomicidade, concorrência, permissões, retenção e recuperação exigem desenho
e validação próprios. Snapshots, participação por era e histórico premium foram propostas, não
implantação comprovada. Não reutilizar cegamente SQL antigo: há versões inconsistentes e seeds que
geraram erro `42P01: relation "users" does not exist` relatado pelo usuário em H16.

**A — Delegação:** no original, premium permitia delegar ataques/realocação a outro membro do clã
na ausência do dono. Implementação e exclusividade premium no Valdyrheim estão em aberto.
Permissões por ação são proposta atual, com ações autorizadas e sem compartilhar senhas.

### Automação por objetivo

**A — Proposta exploratória humana:** disponibilizar várias automações na primeira era, possivelmente
cobradas como premium em eras seguintes. Exemplo central: jogador escolhe construção específica ou
treinamento de tropas; sistema realoca trabalhadores nas viradas conforme recursos faltantes para
aproximar-se do custo desse objetivo, mantendo a dinâmica durante ausência. Não há autorização de
implementação, algoritmo aprovado, cobrança definida ou promessa de otimização perfeita.

**P — Pontos da análise atual:** executar um plano escolhido e otimizar decisões automaticamente
têm impactos diferentes. Benefício econômico durante ausência pode afetar ranking e tornar premium
uma vantagem competitiva. Avaliar transparência da alocação/previsão, controle para trocar ou cancelar
objetivo, condição de conclusão e interação com outros gastos, ataques e perdas. Não estão definidos
compra automática ao atingir custo, prioridade entre objetivos ou tratamento de recursos insuficientes.
Esses pontos são questões para discussão, sem regras aprovadas.

## Estado local encontrado

| Evidência inspecionada | O que existe no arquivo | O que isso não comprova |
| --- | --- | --- |
| [package.json](package.json) | Next.js 15.3.2, React 19, TypeScript, Supabase, Tailwind 4, ESLint e Prettier declarados | Dependências instaladas, build, deploy ou viabilidade de escala |
| [configt.ts](src/game/configt.ts) | Nível máximo 15; seis iniciais; taxas 15/8/4/2; custo 60/20; tabela XP até 9.000 | Busca das constantes encontrou apenas declarações; aplicação das regras não demonstrada |
| [Tipos Supabase](src/types/supabase.ts) | `drottgardrs`, `drottgardrs_resources`, `profiles`, `resources`, `workers`, `xp_table`; `Functions` vazio | Estado remoto; tipos não incluem eras, turnos, alocações, produção, tropas ou classes |
| [Cadastro](src/app/api/auth/register/route.ts), [login](src/app/api/auth/login/route.ts), [Google](src/app/api/auth/google/route.ts) e [callback](src/app/auth/callback/route.ts) | Chamadas de autenticação Supabase e criação de perfil | Cadastro, OAuth, cookies, rollback de cadastro ou permissões funcionando |
| [Onboarding](src/app/dashboard/onboarding/page.tsx) | Atualiza username/bio; insere feudo nível 1, XP 0, `worker_count: 6` | Não insere seis linhas em `workers`, saldos ou era; não marca `onboarding_completed` |
| [Dashboard](src/app/dashboard/page.tsx) | Busca perfil; redireciona quando `onboarding_completed` é falso; mostra recursos 0 e trabalhadores 2/2/2 fixos | Feudo carregado, economia real, alocação ou encerramento do onboarding |
| [Sidebar](src/components/layout/Sidebar.tsx) | Links de trabalhadores, recursos, construções e perfil | As quatro páginas correspondentes não foram encontradas no inventário local |
| [Middleware raiz](middleware.ts) e [middleware em src](src/middleware.ts) | Duas estratégias de sessão, com comportamentos diferentes | Qual comportamento efetivo de proteção foi validado em execução |
| [supabase/config.toml](supabase/config.toml) | Configuração local Supabase | Não foram encontradas migrations, seeds ou processador de turnos no diretório |

**Conclusão da inspeção estática:** há base de interface/autenticação/onboarding, com lacunas;
não há evidência local de ciclo completo de produção, contratação, construção, tropas, ataques,
clãs, classes, ranking ou encerramento de era funcionando. Não equivale a afirmar ausência dessas
estruturas no banco remoto, que não foi consultado.

## Divergências e decisões abertas

| Tema | Fontes divergentes ou incompletas | Próxima decisão necessária |
| --- | --- | --- |
| Inspiração | H01: Ryudragon/Ryujin; A: Blue Dragon; README: Ryudradon | Reconciliar referência, preservando identidade própria |
| Turno/era | H: 20/30/60 min e exemplo de 900 turnos; README: exemplo de 10 min; A: lembrança ~20 min | Intervalo, duração, horários e ritmo de participação |
| Teto de nível | H01/H08 e L: 15; A: lembrança de 10 | Confirmar teto do Valdyrheim e XP além dele |
| Curva de XP | Respostas históricas variaram: nível 15 em 14.000, 15.000 e 9.000; L usa 9.000 | Curva final e concessão de XP; tipos `xp_table` não informam seus dados |
| Contratação | Meta humana H05; README e proposta: 60/8; proposta posterior e L: 60/20 | Custo coerente com meta de crescimento inicial |
| Recursos e trabalhadores | Desenho: quatro recursos e realocação; dashboard: madeira/pedra/comida; tipos de worker: woodcutter/miner/farmer | Modelo final; relação entre linhas individuais e `worker_count` |
| Nomes de campos | TABELAS: saldo `amount`, XP `xp_required`; tipos: `quantity`, `required_xp`; catálogo também difere | Reconciliar modelo antes de migration ou regeneração de tipos |
| Resets/persistência | A confirma recursos/tropas reiniciados e ranking/medalhas mantidos | XP, nível, trabalhadores, feudo, edifícios, classe, clã e participação |
| Combate e clãs | Intenção de cooperação; defesa preserva recursos e concede XP; derrotas podem perder recursos/trabalhadores; 5/10 membros em H indefinidos | Critérios de resultado, limites/perdas/recuperação, saque, destino dos trabalhadores, chegada, ajuda e limite social |
| Classes | Bônus históricos sem testes; Dómvarr realocação descartada | Nomes finais, tropas exclusivas, generalista e efeitos mensuráveis |
| Ranking | Dimensões desejadas conhecidas, pesos desconhecidos | Valoração, fórmula pública, dupla contagem e desempates |
| Fé/tecnologia | Desbloqueios recuperados, utilidade e árvore abertas | Benefício jogável, custo e prioridade no primeiro ciclo |
| Premium/premiação | Jarl no README; H exemplifica premium por cinco eras; A lembra delegação/distintivo | Produto, duração, acesso, títulos, eventual receita e regras de prêmios |
| Automação por objetivo | A propõe várias automações na primeira era e possível premium nas seguintes; exemplo de realocação para construção/tropas | Plano versus otimização, algoritmo, conclusão/cancelamento, conflitos de gastos e impacto competitivo; cobrança aberta |

## Critérios para manter, cortar ou adiar

**P — Critérios para discussão, sem aprovar cortes automaticamente:**

- **Manter no núcleo:** o que cria escolha de alocação, crescimento, cooperação e competição por era.
  Cada mecânica precisa de ação do jogador, consequência observável e custo de operação conhecido.
- **Cortar ou rever:** vantagem redundante, efeito sem utilidade, complexidade sem escolha nova ou
  regra que impede progressão inicial. Realocação gratuita de Dómvarr já foi identificada pelo usuário.
- **Adiar:** capacidade cujo benefício depende de escala ou de um ciclo ainda inexistente, como app
  mobile, estatísticas avançadas, eventos, árvore extensa, monetização e prêmios. Registrar hipótese
  e condição de retorno; não preparar abstrações ou tabelas apenas “para depois”.

**P — Ordem mínima para avaliar implementação:** primeiro provar conta/perfil/feudo e produção real
por turno; depois contratação/progressão; em seguida combate e cooperação; fechar uma era com
ranking transparente e reset. Cortar combate/clãs do teste de produto impediria avaliar o principal
valor social, mesmo que um protótipo econômico isolado sirva para validar a base técnica.

Antes de estimar a próxima camada: escolher decisões que a bloqueiam, identificar o que será testado
e definir critério de aceite observável. Exemplos proporcionais: repetição do mesmo processamento
não duplica saldo; alocação não excede trabalhadores; dois jogadores não alteram feudos alheios;
contratação obedece custo/limite; uma era encerrada mantém ranking e reseta apenas dados definidos.

Viabilidade técnica, ritmo e balanceamento permanecem **não demonstrados**. Uso da stack e exemplos
antigos de volume não substituem medição. Comparar perfis com dedicação semelhante, esforço de
participação e custos reais antes de afirmar viabilidade comercial ou equilíbrio competitivo.

**P — Teste conceitual discutido em A:** era curta com comunidade pequena; observar coordenação
espontânea, participação até o fim e vontade de retornar. Examinar se o ritmo exige presença constante
ou acordar de madrugada. São propostas de teste, sem decisão aprovada sobre duração, público ou cortes.

## Recapitulação e próximas decisões

**P — Pontos fortes do conceito, apoiados nas intenções H/A, ainda sem validação de produto:**
coordenação social dá propósito à guerra; eras combinam renovação com reconhecimento persistente;
alocação de trabalhadores e recursos cria escolhas; classes e ranking visível podem sustentar
caminhos competitivos variados. A presença dessas intenções não demonstra retenção ou equilíbrio.

**L — Fragilidades observadas:** ciclo real ainda não comprovado; regras, tipos e interface divergem.
**P — Riscos a testar:** intervalos/viagens podem exigir disponibilidade excessiva; crescimento
econômico e bônus podem acumular vantagem; pontuação pode favorecer farming e dupla contagem;
perdas de trabalhadores podem dificultar recuperação; premium com benefício econômico pode alterar
competição; escopo amplo pode atrasar a prova do núcleo. Viabilidade técnica/comercial não comprovada.

**P — Ordem sugerida para revisão, aberta à discussão:**

1. **Ritmo da era:** intervalo, total de turnos e viagem. Determinam duração, participação e janelas
   de coordenação; definir experiência desejada antes de fixar números.
2. **Economia e recuperação:** custo de contratação, crescimento e resposta a perdas de trabalhadores.
   Sustentam entrada e retorno à disputa; reconciliar meta do primeiro turno com 60/8 versus 60/20.
3. **Combate e pontuação:** resultados defensivos, XP/saque e dimensões do ranking. Definem incentivos
   e riscos de farming; discutir perdas e dupla contagem antes de pesos e fórmulas.
4. **Classes e premium:** calibrar diferenciais e automações sobre base já definida. Avaliar efeitos
   combinados e vantagem por ausência/pagamento antes de decidir bônus ou cobrança.

Nenhuma porcentagem, data, estimativa de implementação ou fórmula é determinada por esta ordem.
Em paralelo às decisões, conferir execução de conta/perfil/feudo e produção antes de tratar o código
atual como base funcional. Implementação continua fora do escopo desta consolidação.

## Cobertura histórica

Leitura realizada em 04/10/2026. `read_thread` com limite 10 e até 20.000 caracteres por item
retornou somente cinco turnos finais, `hasMore: false`, sem cursor. Tentativa de limite 100 foi
rejeitada: máximo 10. Esse retorno **não** provava leitura integral.

Navegador interno abriu ChatGPT sem sessão e não carregou a conversa. Exceção justificada:
consultada aba Chrome já aberta e autenticada com título/URL exatos. Rolagem ascendente carregou
blocos sobrepostos, do final até primeira mensagem de 25/05/2025 às 18:06 exibida pela página.
Foram lidas mensagens humanas e respostas completas disponíveis nesses blocos; três mensagens
humanas com “Mostrar mais” foram expandidas. Primeiro bloco sem indicador de mensagens anteriores
continha a solicitação inicial. Final recuperado é proposta das seis classes de H29, também lida
pelo conector. Inventário contabiliza **29 pares de solicitação/resposta na sequência exibida**:

| Identificação | Mensagens humanas em ordem cronológica |
| --- | --- |
| H01–H05 | Criar game/inspirações; fé/capacidade/taxas/tecnologia; Templo 5 e Quartel 1/zero recursos; temática nórdica/custo 60/20/seis iniciais; ajustar custo para contratar no turno seguinte |
| H06–H10 | Nome do jogo/trabalhadores/feudo e MD; pronúncias/descrição/lore; banco inicial/XP 1–15; colunas em inglês/Supabase/Next.js/app futuro; gerar SQL e sugerir nome do banco |
| H11–H15 | Corrigir nomes/taxas de recursos e pedido de senha; atualizar dump; Google/catálogo resources/possível transferência de workers; gerar SQL ajustado; gerar seed |
| H16–H20 | Erro relation users does not exist; criar Next.js com linter moderado; nome Valdyrheim; criar projeto primeiro; projeto criado |
| H21–H24 | Retomar core de eras/turnos predefinidos/ranking/premium/rastreabilidade; alocações por feudo e turno; gerar alocações com índices e base para produção; pedir eras e turns antes |
| H25–H29 | Overview de productions; confirmar histórico após virada; gerar com índices; renomear drottgardr_turn_production/era/unicidade; cinco ou seis classes por ideais e mini-lore |

**Limites:** cobertura da sequência exibida no chat, sem auditar ramificações ou versões editadas.
Código e SQL expostos nas mensagens foram lidos como propostas; arquivos antigos anexos
`norse_realms_db_init.sql` e `norse_realms_seed.sql` não foram baixados nem executados. Conteúdo
textual de geração desses arquivos estava disponível nas mensagens. Senhas sugeridas no histórico
foram excluídas desta documentação. Não falta trecho da sequência exibida conhecido nesta leitura;
eventuais ramificações/anexos diferentes exigem exportação específica para auditoria além dessa cobertura.

Para atualizar esta base: registrar fonte e aceite humano; manter perguntas sem resposta como abertas;
substituir afirmações de implementação apenas após conferir código e evidência atual de execução.
