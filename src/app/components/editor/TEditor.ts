export interface TEditor {
  type: 'HTML' | 'CSS'
  text: () => string
  setText: (text: string) => void
  Lang: any
}
