# Diagrama de Comunicação para o Site "Mundo Podcast"

Este diagrama mostra as interações entre os componentes principais do site, incluindo o usuário, navegador, servidor web, página do podcast, serviço de streaming de áudio e o servidor de banco de dados.

![Diagrama de Comunicação Simplificado](//diagrama.pdf)




#### Sequência de Mensagens

1. **User** -> **Browser**: Solicitação da página do podcast (Mensagem 1)
2. **Browser** -> **Web Server**: Requisição da página do podcast (Mensagem 2)
3. **Web Server** -> **Podcast Page**: Retorna a página do podcast (Mensagem 3)
4. **Browser** -> **Web Server**: Solicitação de streaming de áudio (Mensagem 4)
5. **Web Server** -> **Audio Stream**: Obtenção do streaming de áudio (Mensagem 5)
6. **Web Server** -> **Database Server**: Consulta informações adicionais (Mensagem 6)
7. **Database Server** -> **Web Server**: Retorno das informações solicitadas (Mensagem 7)
8. **Web Server** -> **Browser**: Envio das informações adicionais (Mensagem 8)

Esses graus de relacionamento assumem uma comunicação simples e direta entre os componentes, cada um interagindo com um único outro componente por vez.
