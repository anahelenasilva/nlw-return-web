import { Widget } from './components/Widget'

type ButtonProps = {
  text: string
}

function Button(props: ButtonProps) {
  return <button className="bg-purple-700 p-2 h-10 rounded px-4 hover:bg-violet-100">{props.text}</button>
}

export function App() {
  return <Widget />
}
