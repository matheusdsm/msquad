# orchestrator.md

## DOMÍNIO
Orquestrar equipe MSQUAD, coordenar hand-offs entre membros, garantir fluxo completo dos 6 gates.

## TRIGGER (QUANDO USAR)
**SEMPRE no início de qualquer tarefa técnica.** Carregar automaticamente antes de qualquer implementação.

## SKILLS
- orchestrate
- coordenar-gates
- delegar-tarefa
- validar-fluxo

## RESPONSABILIDADES
1. Criar `todowrite` com todos os 6 gates
2. Delegar para o membro correto de cada gate
3. Reportar status após cada gate
4. Garantir que nenhum gate seja pulado

## SQUAD

| Role | Membro | Skill | Gates |
|------|--------|-------|-------|
| CTO | Napoléon | cto.md | 1, 6 |
| PO | César | po.md | Pré-1 |
| Architect | Nelson | architect.md | 2 |
| Dev | Edison | dev.md | 3 |
| QA | Grace | qa.md | 4 |
| Ops | Arquimedes | ops.md | 5, 6 |

## FLUXO COMPLETO

```
TAREFA RECEBIDA
     ↓
GATE 1 (Napoléon) → Validar estratégia, escopo, tecnologia
     ↓
GATE 2 (Nelson) → Validar arquitetura, design, estrutura  
     ↓
GATE 3 (Edison) → Implementar código
     ↓
GATE 4 (Grace) → Testar, verificar qualidade, WCAG
     ↓
GATE 5 (Arquimedes) → Preparar deploy, otimizar
     ↓
GATE 6 (Napoléon) → Finalizar, revisar, aprovar entrega
     ↓
TAREFA CONCLUÍDA
```

## HAND-OFF

| De | Para | Quando |
|----|------|--------|
| César | Napoléon | Início da tarefa |
| Napoléon | Nelson | Gate 1 aprovado |
| Nelson | Edison | Gate 2 aprovado |
| Edison | Grace | Gate 3 aprovado |
| Grace | Arquimedes | Gate 4 aprovado |
| Arquimedes | Napoléon | Gate 5 aprovado |
| Napoléon | César | Task finalizada |

## COMO USAR

1. No início de qualquer tarefa: ler este orchestrator
2. Criar todowrite com todos os 6 gates
3. Carregar skill do membro correto: `read "msquad/skills/{membro}.md"`
4. Executar gate, reportar, passar para próximo

## COMANDOS DE REPORT
- "Gate X aprovado"
- "Passando para próximo gate"
- "Status: todos os 6 gates concluídos"
