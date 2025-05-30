export type TCodePanel = {
  currentTab: () => 'html' | 'css'
  onSwitchTab: (tab: 'html' | 'css') => void
}
