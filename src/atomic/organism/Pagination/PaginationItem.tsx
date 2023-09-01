import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        aria-label={'Voltar'}
        borderWidth={1}
        bg="transparent"
        borderColor="gray1"
        color="gray1"
        _active={{ bg: 'none' }}
        _hover={{ bg: 'none' }}
        fontSize={'0.87rem'}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      aria-label={'Voltar'}
      borderWidth={1}
      bg="transparent"
      _active={{ bg: 'none' }}
      _hover={{ bg: 'none' }}
      color="grey"
      borderColor="grey"
      fontSize={'0.87rem'}
      _disabled={{
        cursor: 'default',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
