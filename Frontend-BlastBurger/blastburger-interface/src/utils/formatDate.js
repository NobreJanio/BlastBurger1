export function formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR', { // Corrigido 'pt-Br' para 'pt-BR'
        year: '2-digit',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}