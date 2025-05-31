/* eslint-disable no-unused-vars -- it doesn't think text is used... */
export interface TEditor {
  type: 'HTML' | 'CSS'
  text: () => string
  setText: (text: string) => void
  Lang: any
}
