export const formatStatus = (status) => {
    const formatStatus = {
        Concluido: 'Concluído',
        NaoIniciado: 'Não iniciado',
        EmAndamento: 'Em andamento'
    }

    return formatStatus[status]
}