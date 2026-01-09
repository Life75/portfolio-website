export default function useLinkHandler(url: string) {
    return () => window.open(url, "_blank");
}
