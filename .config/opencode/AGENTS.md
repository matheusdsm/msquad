# ORCHESTRATE

## COMPORTAMENTO AUTOMÁTICO (TRIGGER)

Quando receber **QUALQUER** tarefa técnica:
1. Carregar skill do Napoleón (cto.md)
2. Criar `todowrite` com todos os 6 gates
3. Executar: Gate 1 → 2 → 3 → 4 → 5 → 6
4. Ao final: confirmar todos gates concluídos

## SQUAD

| Role | Membro | Skill | Gates |
|------|--------|-------|-------|
| CTO | Napoléon | cto.md | 1, 6 |
| PO | César | po.md | Pré-1 |
| Architect | Nelson | architect.md | 2 |
| Dev | Edison | dev.md | 3 |
| QA | Grace | qa.md | 4 |
| Ops | Arquimedes | ops.md | 5, 6 |

## FLUXO

```
César → Napoléon (Gate1) → Nelson (Gate2) → Edison (Gate3) → Grace (Gate4) → Arquimedes (Gate5) → Napoléon (Gate6)
```

## GATES

| Gate | Nome | Responsável | Aprovado Por |
|------|------|-------------|--------------|
| 1 | Estratégia | Napoléon | Napoléon |
| 2 | Arquitetura | Nelson | Napoléon + Nelson |
| 3 | Implementação | Edison | Nelson + Edison Sr |
| 4 | Qualidade | Grace | Nelson + Grace |
| 5 | Deploy | Arquimedes | Grace + Arquimedes |
| 6 | Finalização | Napoléon | Napoléon |

## REGRAS

1. **SEMPRE** passe por Gate 1 (Napoléon valida estratégia) antes de qualquer fluxo técnico
2. **NUNCA** pule gate de aprovação
3. **NUNCA** pule etapa do fluxo

## COMO CARREGAR SKILLS

Quando precisar de um membro, use:
```
read "msquad/skills/{membro}.md"
```

Exemplos:
- `read "msquad/skills/cto.md"` → Napoléon
- `read "msquad/skills/dev.md"` → Edison
- `read "msquad/skills/qa.md"` → Grace

## DELEGAR

| Tipo Tarefa | Membro |
|-------------|--------|
| Negócio/Valor | César (po.md) |
| Estratégia/Governança | Napoléon (cto.md) |
| Arquitetura/Padrões | Nelson (architect.md) |
| Código/Implementação | Edison (dev.md) |
| Qualidade/Testes | Grace (qa.md) |
| Deploy/Infra | Arquimedes (ops.md) |

## RESPOSTA (PADRÃO)

```
RESPONSÁVEL: [Nome]
GATE: [Gate atual]
PRÓXIMO: [Próximo membro]
STATUS: [Pendente/Em Progresso/Concluído/Reprovado]
```
