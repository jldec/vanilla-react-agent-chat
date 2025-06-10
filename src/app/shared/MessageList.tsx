import type { Message } from './askAI'
import markdownit from 'markdown-it'

const md = markdownit({
  linkify: true
})

// No hooks - component can run in both RSC and client
export function MessageList({ messages }: { messages: Message[] }) {
  return (
    <div id="message-list" className="flex flex-col gap-2">
      {messages.map((message) => (
        <div
          className="border-gray-200 p-2 prose prose-p:my-2 bg-gray-100"
          key={message.id}
          dangerouslySetInnerHTML={{ __html: md.render(message.content) }}
        />
      ))}
    </div>
  )
}
