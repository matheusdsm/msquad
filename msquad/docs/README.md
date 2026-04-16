# INSTALAÇÃO

## quick start

1. Copiar pasta msquad para projeto
2. Opencode detecta automaticamente
3. Pronto para usar

---

## Projetos novos

```
1. Criar projeto
   npm init [projeto]
   cargo init [projeto]
   dotnet new [projeto]

2. Copiar msquad/ para dentro do projeto

3. Iniciar uso
```

---

## Projetos existentes

```
1. Copiar msquad/ para dentro do projeto

2. Verificar detecção do opencode

3. Usar squad normalmente
```

---

## Estrutura integrada

```
MeuProjeto/
├── agents/     ← do msquad
├── skills/    ← do msquad
├── docs/      ← do msquad
└── src/      ← seu código
```

---

## Uso

- Envie request
- ORCHESTRATE analisa
- Team correto executa
- Resultado retornado

---

## teams disponíveis

| Team | Membro | Função |
|------|-------|-------|
| po | César | Requisitos, negócio |
| techlead | Napoleão | Orquestração |
| architect | Nelson | Arquitetura |
| dev | Edison | Código |
| qa | Grace | Qualidade |
| ops | Arquimedes | Deploy |