# 📊 Estrutura de Tabelas do Valdyrheim

Este documento detalha as tabelas do banco de dados do Valdyrheim, explicando o propósito de cada uma, principais campos, exemplos de uso e ideias para expansões futuras.

---

## eras

**Propósito:**
Armazena as diferentes eras/temporadas do jogo. Cada era representa um ciclo de partidas, rankings e eventos.

**Principais campos:**

- `id` (uuid): Identificador único
- `name` (text): Nome da era (ex: "Era of Thunder")
- `total_turns` (int): Quantidade total de turnos
- `current_turn` (int): Turno atual
- `current` (bool): Indica se a era está ativa
- `started_at`, `ended_at`, `created_at` (timestamp)

**Exemplo de uso:**

- Consultar qual era está ativa
- Exibir ranking por era

**Possíveis expansões:**

- Adicionar campos para eventos especiais, modificadores de regras, etc.

---

## turns

**Propósito:**
Rastreia o estado de cada turno dentro de uma era.

**Principais campos:**

- `id` (uuid)
- `era_id` (uuid): Referência à era
- `turn_number` (int): Número sequencial do turno
- `processed_at` (timestamp): Quando o turno foi processado
- `generated_at` (timestamp)

**Exemplo de uso:**

- Saber se um turno já foi processado
- Buscar dados de produção por turno

**Possíveis expansões:**

- Adicionar logs de eventos do turno

---

## drottgardrs

**Propósito:**
Representa os feudos/jogadores principais do jogo.

**Principais campos:**

- `id` (uuid)
- ... (campos de identificação, nome, dono, etc.)

**Exemplo de uso:**

- Associar produções, trabalhadores, recursos a um feudo

**Possíveis expansões:**

- Adicionar status, upgrades, conquistas

---

## drottgardrs_resources

**Propósito:**
Armazena os recursos atuais de cada drottgardr.

**Principais campos:**

- `drottgardr_id` (uuid)
- `resource_id` (uuid)
- `amount` (int)

**Exemplo de uso:**

- Consultar saldo de recursos

**Possíveis expansões:**

- Histórico de variação de recursos

---

## drottgardr_worker_allocations

**Propósito:**
Rastreia como os trabalhadores de um drottgardr estão alocados em cada turno.

**Principais campos:**

- `drottgardr_id`, `era_id`, `turn` (uuid/int)
- `eitrkorn_workers`, `steinarr_workers`, `gladrheim_workers`, `vordrblot_workers` (int)
- `total_workers` (int, gerado)
- `auto_generated` (bool)
- `recorded_at` (timestamp)

**Exemplo de uso:**

- Saber como cada jogador distribuiu seus trabalhadores
- Analisar estratégias de produção

**Possíveis expansões:**

- Adicionar logs de realocação, motivos de auto geração

---

## drottgardr_turn_production

**Propósito:**
Armazena o que foi produzido por um drottgardr em cada turno.

**Principais campos:**

- `era_id`, `turn_id`, `drottgardr_id` (uuid)
- `produced_eitrkorn`, `produced_steinarr`, `produced_gladrheim`, `produced_vordrblot` (int)
- `created_at` (timestamp)

**Exemplo de uso:**

- Exibir histórico de produção
- Calcular eficiência de alocação

**Possíveis expansões:**

- Rastrear bônus/malus de produção, eventos especiais

---

## resources

**Propósito:**
Define os tipos de recursos do jogo.

**Principais campos:**

- `id` (uuid)
- `name` (text)
- `type` (enum/text)

**Exemplo de uso:**

- Listar recursos disponíveis

**Possíveis expansões:**

- Adicionar novos tipos de recursos

---

## workers

**Propósito:**
Define os tipos de trabalhadores disponíveis.

**Principais campos:**

- `id` (uuid)
- `name` (text)
- `effect` (text)

**Exemplo de uso:**

- Exibir opções de contratação

**Possíveis expansões:**

- Novas classes de trabalhadores

---

## profiles

**Propósito:**
Armazena dados dos jogadores/usuários.

**Principais campos:**

- `id` (uuid)
- `username` (text)
- ...

**Exemplo de uso:**

- Login, ranking, preferências

**Possíveis expansões:**

- Personalização de perfil, conquistas

---

## xp_table

**Propósito:**
Define a progressão de experiência (XP) para evoluir feudos, tropas, etc.

**Principais campos:**

- `level` (int)
- `xp_required` (int)

**Exemplo de uso:**

- Calcular evolução de Dróttgardr

**Possíveis expansões:**

- Tabelas separadas para diferentes entidades

---

# 💡 Possíveis Aplicações Futuras

- Sistema de batalhas e logs de combate
- Histórico detalhado de recursos e produção
- Eventos globais por era
- Estatísticas avançadas para análise de estratégias
- Sistema de conquistas e missões

---

_Para dúvidas ou sugestões, consulte o README principal ou abra uma issue._
