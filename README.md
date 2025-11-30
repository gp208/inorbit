# in.Orbit

Aplicativo para registrar metas semanais e monitorar o progresso até seu cumprimento. O usuário cria uma meta definindo uma atividade e sua frequência semanal e marca cada 
vez que realiza essa atividade. As metas pendentes e concluídas são listadas, juntamente com o andamento de cada uma.

Desenvolvido no evento <b>NLW Pocket: Javascript - Full-stack Intermediário</b> (09&ndash;14/09/2024) da [Rocketseat](https://github.com/rocketseat)

## Requisitos
• Node.js • Docker

## Configuração
1\. Abrir terminal e clonar o repositório:
```bash
git clone https://github.com/gp208/inorbit
```
2\. Preparar ambiente da API:
```bash
cd inorbit/api
npm install             # instala dependências
docker compose up -d    # inicia o container do banco de dados no Docker
npx drizzle-kit migrate # aplica migrações ao banco
```
(Opcional) Carregar metas predefinidas no banco de dados:
```bash
npm run seed
```
3\. Iniciar servidor da API:
```bash
npm run dev
```
4\. Abrir novo terminal e iniciar a aplicação em um navegador:
```bash
cd inorbit/web
npm install
npm run dev
```
Comandos opcionais:
- `docker ps -a` – lista os containers do Docker
- `docker logs [CONTAINER ID]` – lista os logs do container
- (Em `api/`) `npx drizzle-kit studio` – visualiza dados no banco
