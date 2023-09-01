import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { IconButton, Stack } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
}

export const Pagination = ({
  currentPage = 1,
  onPageChange,
  hasNextPage,
}: PaginationProps) => {

  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      align={'center'}
      justifyContent={'space-between'}
      spacing="6"
    >
      <Stack direction="row" spacing="2">
        <IconButton
          icon={<ArrowBackIcon w="1rem" h="1rem" color="grey" />}
          aria-label={'Voltar'}
          bg="transparent"
          borderWidth={1}
          borderColor="grey"
          isDisabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          _active={{ bg: 'none' }}
          _hover={{ bg: 'none' }}
        />

        {currentPage > 1 && (
          <PaginationItem
            onPageChange={onPageChange}
            number={currentPage - 1}
            isCurrent={false}
          />
        )}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {hasNextPage && (
          <PaginationItem
            onPageChange={onPageChange}
            number={currentPage + 1}
            isCurrent={false}
          />
        )}

        <IconButton
          icon={<ArrowForwardIcon w="1rem" h="1rem" color="grey" />}
          aria-label={'Avançar'}
          borderWidth={1}
          borderColor="grey"
          bg="transparent"
          isDisabled={!hasNextPage}
          onClick={() => onPageChange(currentPage + 1)}
          _active={{ bg: 'none' }}
          _hover={{ bg: 'none' }}
        />
      </Stack>
    </Stack>
  );
};

