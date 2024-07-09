# Diagrama de Estados

## Introdução

A Linguagem de modelagem unificada (UML) foi criada para estabelecer uma linguagem de modelagem visual comum, semanticamente e sintaticamente rica, para arquitetura, design e implementação de sistemas de software complexos, tanto estruturalmente quanto para comportamentos. Temos diversos tipos de diagramas estruturais UML, sendo assim, este artefato tem como objetivo abordar a diagramação UML de _estados_ afim de promover uma melhor organização para o código do projeto.

## Diagrama de estados

É um diagrama comportamental e dinâmico. O diagrama de estados consiste em estados, transições, eventos e atividades. Eles são importantes na modelagem de comportamentos de interface,
classe ou colaboração. Ele enfatiza a ordem dos eventos do comportamento de um objeto.
Esse tipo de diagrama tem diversos usos, entre eles:

- Descrever objetos orientados a eventos em um sistema reativo;
- Ilustrar cenários de caso de uso em um contexto de negócios;
- Descrever como um objeto se move por vários estados em seu tempo vida;
- Mostrar o comportamento geral de uma máquina de estados ou o comportamento de um conjunto relacionado de máquinas de estados.

Como componentes básicos podemos citar Estados; Primeiro estado; Transições; Ações de estado; Estado composto; Pseudoestado de escolha; Evento; Ponto de saída; Proteção; Subestado; Exterminador; Comportamento transicional; Acionador.

## Metodologia

Para a confecção dos diagramas de estados, foram selecionadas os fluxos e funcionalidades principais do site de podcast. Além disso, foi usado a ferramenta [LucidChart](https://www.lucidchart.com/pages/?) para a elaboração dos seguintes diagramas.

- Podcast: Relacionado a parte em que o usuário deseja consumir algum tipo de podcast na plataforma.
- Artigos: Relacionado a parte de artigos publicados.

## Diagramas

### Consumir Podcast
<center>
    <img src="./Modelagem/assets/estado-podcast.jpeg" style="border-radius: 5px"/>
    <p> Imagem 1: Diagrama de estados de "Consumir podcast". Fonte: Bruno Henrique</p> 
</center>

### Artigos
<center>
    <img src="./Modelagem/assets/estado-artigo.jpeg" style="border-radius: 5px"/>
    <p> Imagem 2: Diagrama de estados de "Artigos". Fonte: Bruno Henrique</p> 
</center>

## Bibliografia

> [1] O que é um diagrama UML? Lucidchart. Disponível em: <https://www.lucidchart.com/pages/pt/o-que-e-uml>. Acesso em: 09 de Julho 2024.
>
> [2] O que é diagrama UML e como fazer? Veja tipos, modelos e exemplos. https://miro.com/. Disponível em: <https://miro.com/pt/diagrama/o-que-e-uml/>. Acesso em: 09 de Julho 2024.

## Histórico de versão

| Versão |    Data    |      Descrição       |                        Autor                         |    Revisor     |
|:------:|:----------:|:--------------------:|:----------------------------------------------------:|:--------------:|
| `1.0`  | 09/07/2024 | Criação do documento | [Bruno Henrique](https://github.com/BrunoHenrique00) | Pedro e Samuel |