import { Button, Modal as CHModal, Flex, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import Text from "src/atomic/atoms/Text"
import { formatDate } from "src/common/helpers/formatDate"
import { formatHour } from "src/common/helpers/formatHour"
import { pixelToRem } from "src/common/helpers/pixelToRem"
import { useCreateRegisterTime } from "src/features/RegisterTime/hooks/useCreateRegisterTime"
import { useMe } from "src/features/auth/hooks/useMe"
import { ClockSolidIcon } from "src/styles/Theme/Icons"

interface RegisterTimeModalProps {
}

export const RegisterTimeModal = ({ }: RegisterTimeModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { handleCreateNewRegisterTime, createNewRegisterLoading } = useCreateRegisterTime();
  const { meData } = useMe();

  const createNewRegisterTime = async () => {
    await handleCreateNewRegisterTime({
      created_by: meData?.username,
      timeRegistered: new Date(),
      user: meData?.id,
    })
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen} bg='primary' maxW={pixelToRem(200)} color='white'>Registrar ponto</Button>
      <CHModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody padding={pixelToRem(60)}>
            <Flex flexDir={'column'} gap={pixelToRem(25)} justifyContent={'center'} alignItems={'center'}>
              <Text variant="h3">Registrar novo ponto</Text>
              <Flex flexDir={'column'} gap={pixelToRem(10)} justifyContent={'center'} alignItems={'center'}>
                <ClockSolidIcon color={'primary'} fontSize={pixelToRem(100)} />
                <Text variant="h2">{formatHour(new Date())}</Text>
                <Text >{formatDate(new Date())}</Text>
              </Flex>
              <Flex flexDir={'column'} gap={pixelToRem(10)}>
                <Button onClick={createNewRegisterTime} isLoading={createNewRegisterLoading} border={'1px'} bg='primary' maxW={pixelToRem(200)} color='white'>Bater ponto</Button>
                <Button onClick={onClose} border={'1px'} bg='white' color='primary' borderColor={'primary'}>Cancelar</Button>
              </Flex>
            </Flex>

          </ModalBody>
        </ModalContent>
      </CHModal>
    </>
  )
}