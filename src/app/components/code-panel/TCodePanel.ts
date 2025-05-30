export interface CodePanelProps {
  currentTab: () => 'html' | 'css'
  onSwitchTab: (tab: 'html' | 'css') => void
}
