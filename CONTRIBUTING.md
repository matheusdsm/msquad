# Guia de Contribuição

Obrigado pelo interesse em contribuir com o MSQUAD!

Este documento estabelece as diretrizes para contribuição no projeto.

---

## Padrões de Código

### Qualidade Não Negociável

- Todo código deve seguir os padrões enterprise estabelecidos
- Code review é obrigatório antes do merge
- Testes são mandatórios para novas funcionalidades
- A documentação deve ser atualizada

### Processo de Contribuição

1. **Fork** do repositório
2. Criar **branch** feature/fix descriptive
3. Implementar seguindo os gates:
   - Gate 1: Validação estratégica (Napoléon)
   - Gate 2: Validação arquitetural (Nelson)
   - Gate 3: Implementação + Code Review
   - Gate 4: Validação qualidade (Grace)
4. Submit **Pull Request**

### Commits

- Use commits atômicos e descritivos
- Formato: `tipo(descrição): mensagem`
- Tipos: feat, fix, refactor, docs, test, chore

---

## Estrutura do Projeto V2 (Lightweight)

```
msquad/
└── skills/           ← 7 skills especializadas
    ├── cto.md        ← Napoléon - Estratégia
    ├── po.md         ← César - Negócio
    ├── architect.md  ← Nelson - Arquitetura
    ├── dev.md        ← Edison - Implementação
    ├── qa.md         ← Grace - Qualidade
    ├── ops.md        ← Arquimedes - Deploy
    └── orchestrator.md ← Orquestração de gates
```

### Comparativo v1 vs v2

| Métrica | v1.0 | v2.0 | Redução |
|---------|------|------|---------|
| Arquivos core | 17 | 7 | **58.8%** |
| Pastas | 4 | 1 | **75%** |

---

## Uso e Integração

O MSQUAD é detectado automaticamente pelo OpenCode. Para integrar ao seu projeto:

```
1. Copiar pasta msquad/ para dentro do projeto
2. Usar via OpenCode com os membros especializados
3. Seguir o fluxo de gates para cada tarefa
```

---

## Perguntas?

Para dúvidas sobre contribuição, abra uma issue.

---

**MSQUAD - Execução acima de tudo**