export const formatHour = (date: Date | string) => {

  if(!date) return ''

  if(typeof date === 'string') {
    date = new Date(date)
  }

  return date.toLocaleTimeString('pt-BR').replace(/(\d{2}:\d{2}):\d{2}/g, '$1')
}