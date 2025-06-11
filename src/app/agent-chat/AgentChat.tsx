'use client'
import { MessageList } from './MessageList'
import { MessageInput } from './MessageInput'
import { ChatLayout } from './ChatLayout'
import { useAgent } from 'agents/react'
import { useAgentChat } from 'agents/ai-react'

export function AgentChat() {
  const agent = useAgent({
    agent: 'chat',
    name: 'agent'
  })

  const { messages, handleSubmit, clearHistory, setInput } = useAgentChat({
    agent
  })

  const onSubmit = async (prompt: string) => {
    setInput(prompt)
    handleSubmit()
  }

  const onClear = async () => {
    clearHistory()
  }

  return (
    <ChatLayout title="RedwoodSDK Agent Chat">
      <MessageList messages={messages} />
      <MessageInput onSubmit={onSubmit} onClear={onClear} />
    </ChatLayout>
  )
}
