import { routeAgentRequest } from 'agents'

export { Chat } from './app/agent-chat/ChatAgentDO'

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return (
      (await routeAgentRequest(request, env)) ||
      new Response("Not found", { status: 404 })
    );
  },
} satisfies ExportedHandler<Env>;
