import { RequestInfo } from 'rwsdk/worker'

export function Home({ ctx }: RequestInfo) {
  return (
    <div>
      <h1>Hello World</h1>
      <a href="/agent">Agent</a>
    </div>
  )
}
