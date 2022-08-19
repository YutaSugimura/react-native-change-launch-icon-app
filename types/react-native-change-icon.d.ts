declare module 'react-native-change-icon' {
  async function changeIcon(iconName: string): Promise<string | boolean>;
  async function getIcon(): Promise<string>;
}
