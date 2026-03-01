# ReUse - Aplicativo Mobile (React Native)

## Contexto da Sprint

Este projeto foi desenvolvido durante a Sprint de desenvolvimento mobile com o objetivo de criar a tela inicial do aplicativo **ReUse** utilizando **React Native com Expo**.

O ReUse é uma plataforma que incentiva a reutilização de objetos em bom estado, conectando pessoas interessadas em reduzir o desperdício.

A tela inicial apresenta o nome do aplicativo, sua proposta de valor e uma breve explicação do problema do descarte de produtos reutilizáveis.

---

## Decisões de Interface e Organização

A interface foi desenvolvida com foco em simplicidade e organização visual.

Principais decisões:

- Layout vertical e leitura simples
- Nome do aplicativo com ícone no topo
- Banner ilustrativo representando sustentabilidade
- Texto explicando a proposta do aplicativo
- Botão indicando futuras funcionalidades
- Uso de componentes reutilizáveis

Componentes criados:

- **Header** – Exibe o nome e ícone do aplicativo  
  Arquivo: components/Header.tsx
  
  Responsável por exibir:
  - Ícone de reciclagem (MaterialIcons)
  - Nome do aplicativo "ReUse"
  
  Características técnicas:
  - flexDirection: "row" para alinhar ícone e texto
  - Uso de @expo/vector-icons
  - Componente isolado para facilitar reutilização futura

- **BannerCard** – Exibe a imagem principal
  Arquivo: components/BannerCard.tsx
  
  Responsável por exibir:
  - Imagem ilustrativa representando sustentabilidade
  
  Características técnicas:
  - Uso de Image
  - borderRadius: 16
  - overflow: "hidden" para manter bordas arredondadas
  - Largura 100% responsiva
  
  Este componente poderá futuramente receber props para tornar-se dinâmico.

---

## Estrutura do Projeto

reuse-app/
├── app/(tabs)/index.tsx
├── components/
│ ├── Header.tsx
│ └── BannerCard.tsx
├── assets/images/banner-reuse.png
├── app.json
└── package.json

---

## Estrutura da Tela Principal

Arquivo: app/(tabs)/index.tsx

A tela principal utiliza:
- SafeAreaView
- View
- Text
- StyleSheet
- Componentes personalizados (Header e BannerCard)

Elementos apresentados:
- Header (nome + ícone)
- Banner ilustrativo
- Proposta de valor
- Explicação do problema
- Botão estático "Em breve..."

A ausência de navegação foi uma decisão alinhada ao escopo da Sprint.
