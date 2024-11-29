export default function copyTextToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text);
}
