/** YAML single-quoted strings do not interpret `\uXXXX`; decode at load time. */
export function decodeUnicodeEscapes(value: string): string {
  return value.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
    String.fromCodePoint(parseInt(hex, 16)),
  );
}
