import { routeAgentRequest } from 'agents'

export { ChatAgentDO } from './ChatAgentDO'

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url)

    if (url.pathname.startsWith(`/agents/${env.CHAT_AGENT_NAMESPACE_KEBABCASE}/${env.CHAT_AGENT_ID}`)) {
      return (await routeAgentRequest(request, env)) || Response.json({ msg: 'no agent here' }, { status: 404 })
    }

    return new Response('Not found', { status: 404 })
  }
} satisfies ExportedHandler<Env>
