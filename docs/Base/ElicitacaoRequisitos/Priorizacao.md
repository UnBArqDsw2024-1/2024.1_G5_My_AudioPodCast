# Priorização

## 1. Introdução
A priorização de requisitos é essencial para que a equipe de desenvolvimento possa lidar de maneira mais eficaz com mudanças e imprevistos. No ciclo de desenvolvimento de software, é comum que novos requisitos surjam ou que requisitos previamente considerados importantes se tornem menos relevantes ao longo do tempo. A capacidade de priorizar permite que a equipe se adapte de forma ágil a essas mudanças, evitando o desperdício de recursos em funcionalidades que não são mais prioritárias.

Além disso, a priorização de requisitos traz clareza ao planejamento do projeto. Ao definir claramente quais funcionalidades são mais importantes e devem ser desenvolvidas primeiro, a equipe pode estabelecer um cronograma realista e viável. Isso auxilia na prevenção de atrasos, retrabalho e frustrações ao longo do processo de desenvolvimento, mantendo o projeto alinhado com os objetivos e prazos estabelecidos.

## 2. Metodologia (MoSCoW)
O método MoSCoW é um acrônimo que representa quatro categorias de priorização: Must have, Should have, Could have e Won't have (também conhecido como Would have, embora menos comum). Estas categorias são úteis para estabelecer claramente as prioridades e para classificar e ordenar as tarefas de acordo com sua relevância, garantindo que os elementos mais importantes do backlog sejam tratados e concluídos antes dos menos importantes.

Aqui está como você pode aplicar o método MoSCoW:

* Must have (Deve ter): Itens classificados como "Must have" são absolutamente essenciais e fundamentais para o sucesso do projeto. Representam requisitos críticos que devem ser atendidos para que o projeto seja considerado concluído com êxito.

* Should have (Deveria ter): Itens classificados como "Should have" são importantes, mas não críticos como os "Must have". São considerados requisitos secundários, embora desejáveis, para atender às necessidades dos usuários ou do projeto em geral.

* Could have (Poderia ter): Itens classificados como "Could have" são recursos ou requisitos que seriam benéficos se incluídos, mas cuja ausência não afetaria significativamente o sucesso do projeto. São considerados melhorias opcionais.

* Won't have (Não terá ou Não é necessário): Itens classificados como "Won't have" são coisas que foram discutidas, mas decididas como não sendo relevantes para o projeto no momento. Podem ser recursos que serão considerados em versões futuras ou requisitos que foram descartados.


## 3. Priorização de Requisitos

### 3.1 Requisitos Funcionais (RF)

| Identificador | Requisito                                                                                                                                                                         |   MoSCoW    |
| :-----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: |
|     RF01      | Permitir que os usuários escolham um catálogo de Podcasts de sua preferência.                                                                                                     | Should have |
|     RF02      | Permitir que os produtores de podcasts carreguem seus episódios na plataforma para distribuição.                                                                                  |  Must have  |
|     RF03      | Oferecer aos usuários a capacidade de ouvir os episódios de podcast diretamente na plataforma, sem a necessidade de fazer o download.                                             |  Must have  |
|     RF04      | Permitir que os usuários consigam realizar o download de episódios de sua preferência.                                                                                            | Should have |
|     RF05      | Permitir que os usuários consigam criar playlists personalizadas com base em seus interesses pessoas.                                                                             | Should have |
|     RF06      | Permitir que os usuários consigam aumentar a velocidade de reprodução dos episódios.                                                                                              | Could have  |
|     RF07      | Oferecer ferramentas de busca avançada e recomendação para os usuários descobrirem novos podcasts com base em seus interesses.                                                    |  Must have  |
|     RF08      | Permitir que os usuários comentem, avaliem e favoritem os episódios e podcasts, fornecendo feedback aos produtores e ajudando outros usuários a encontrar conteúdo relevante.     |  Must have  |
|     RF09      | Facilitar o compartilhamento de episódios e podcasts nas redes sociais para aumentar a visibilidade e o alcance do conteúdo.                                                      | Could have  |
|     RF10      | Fornecer aos produtores de podcast dados analíticos detalhados sobre o desempenho de seus episódios, incluindo número de ouvintes, tempo de escuta, geolocalização, entre outros. |  Must have  |
|     RF11      | Oferecer recursos de personalização para os usuários, como listas de reprodução personalizadas e recomendações com base em seu histórico de escuta.                               | Should have |
|     RF12      | Garantir que a plataforma seja acessível em diversos dispositivos, incluindo smartphones, tablets e computadores, com uma interface amigável e responsiva.                        | Should have |

<div style="text-align: center">
    <p>Tabela 1: Priorização Requisitos Funcionais (Fonte: Delziron Braz de Lima)</p>
</div>

## 3.2 Requisitos Não Funcionais (RNF)

A tabela 2 abaixo elenca os principais requisitos não funcionais da plataforma "Mundo Podcast":

| Identificador | Requisito                                                                                                                                                                                                                        |   MoSCoW    |
| :-----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: |
|     RNF01     | Garantir que a plataforma seja rápida e responsiva, mesmo com um grande número de usuários simultâneos ou altos volumes de tráfego devido ao streaming de áudio.                                                                 |  Must have  |
|     RNF02     | Assegurar que a plataforma esteja disponível e acessível para os usuários 24 horas por dia, 7 dias por semana.                                                                                                                   |  Must have  |
|     RNF03     | Projetar a plataforma de forma que possa crescer e se adaptar conforme o número de usuários e o volume de conteúdo aumentem ao longo do tempo, sem comprometer o desempenho ou a qualidade do serviço.                           | Should have |
|     RNF04     | Garantir que a plataforma seja compatível com uma ampla variedade de navegadores da web, sistemas operacionais e dispositivos, para que os usuários possam acessá-la de qualquer lugar e em qualquer dispositivo de sua escolha. |  Must have  |
|     RNF05     | Projetar uma interface de usuário intuitiva e fácil de usar, com navegação clara e recursos de acessibilidade que atendam às necessidades de todos os usuários.                                                                  | Should have |

<div style="text-align: center">
    <p>Tabela 2: Priorização Requisitos Não Funcionais (Fonte: Delziron Braz de Lima)</p>
</div>


## 4. Bibliografia

[1] DTI Digital, [Como garantir uma boa priorização de requisitos com a engenharia de valor](https://www.dtidigital.com.br/blog/priorizacao-de-requisitos-com-a-engenharia-de-valor)

[2] Souza, Patricia. [Aplicando o método MoSCoW para priorizar o Backlog em projetos.](https://www.linkedin.com/pulse/aplicando-o-m%C3%A9todo-moscow-para-priorizar-backlog-em-patricia/?originalSubdomain=pt)



## 5. Histórico de Versão

| Data       | Versão | Modificação                                               | Autor                 | Revisor        |
| ---------- | ------ | --------------------------------------------------------- | --------------------- | -------------- |
| 06/04/2024 | 0.1    | Criação do Documento                                      | Mateus Franco         | À ser revisado |
| 06/04/2024 | 0.2    | Adição da Metodologia de Priorização                      | Delziron Braz de Lima | À ser revisado |
| 07/04/2024 | 0.3    | Aplicação da metodologia Moscow nos requisitos elicitados | Delziron Braz de Lima | À ser revisado |