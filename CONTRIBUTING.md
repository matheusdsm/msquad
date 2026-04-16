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

## Estrutura do Projeto

```
msquad/
├── agents/       ← Agentes IA
├── skills/       ← Skills especializadas
├── docs/         ← Documentação
├── brand/        ← Assets de marca
└── [arquivos]   ← Raiz (LICENSE, README, etc)
```

---

## Perguntas?

Para dúvidas sobre contribuição, abra uma issue.

---

**MSQUAD - Execução acima de tudo**