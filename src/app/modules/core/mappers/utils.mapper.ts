export function mapArrayToMapper<T>(items: T[], mapper: (data: any) => T): T[] {
  return Array.isArray(items) ? items.map(mapper) : [];
}
