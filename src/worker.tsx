import { defineApp } from 'rwsdk/worker'
import { index, render, route } from 'rwsdk/router'
import { Document } from '@/app/Document'
import { Home } from '@/app/pages/Home'
import { setCommonHeaders } from '@/app/headers'
import { Agent } from '@/app/pages/Agent'

export { ChatAgentDurableObject } from '@/app/shared/ChatAgentDO'

export type AppContext = {}

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx
  },
  render(Document, [index([Home]), route('/agent', Agent)])
])
