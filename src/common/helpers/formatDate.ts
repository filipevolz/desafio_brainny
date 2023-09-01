export const formatDate = (date: Date | string) => {

  if(!date) return ''

  if(typeof date === 'string') {
    date = new Date(date)
  }
  
  return date.toLocaleDateString('pt-BR').replace(/\//g, '/')
}