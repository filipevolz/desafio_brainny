import React from "react";
import { Box, Button, Flex, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { Logo } from "src/atomic/atoms/Logo";
import { pixelToRem } from "src/common/helpers/pixelToRem";
import { CalenderIcon, DashboardIcon, LogoutIcon } from "src/styles/Theme/Icons";
import Link from "next/link";
import { useUserAuthContext } from "src/features/auth/context/UserAuthContext";
import { useRouter } from 'next/navigation';
import { useMe } from "src/features/auth/hooks/useMe";

interface SidebarProps {
  children: React.ReactNode,
  route?: '',
}

export const SidebarTemplate = ({ children }: SidebarProps) => {
  const { logout } = useUserAuthContext();
  const { push } = useRouter()
  const { isAdmin, loading, meData } = useMe();

  const handleLogout = () => {
    logout()
    push('/')
  }

  return (
    <Flex bg='#f2f2f2' h={['auto', 'auto', '100vh']} gap={[pixelToRem(10), pixelToRem(15), pixelToRem(30)]} pr={[pixelToRem(10), pixelToRem(15), pixelToRem(30)]}>
      <Flex shadow={'lg'} maxW={pixelToRem(180)} bg='white' flexDir={'column'} justifyContent={'space-between'}>
        <Box>
          <Box px={pixelToRem(23)} py={pixelToRem(40)}>
            <Logo maxW={pixelToRem(134)} />
          </Box>
          <List spacing={3}>
            {(isAdmin && !loading && meData) && (
              <Link href={'/private/dashboard'}>
                <ListItem
                  color='primary'
                  display={'flex'}
                  cursor={'pointer'}
                  borderY={'1px'}
                  borderColor={'gray300'}
                  py={pixelToRem(40)}
                  px={pixelToRem(10)}
                  alignItems={'center'}
                  borderLeft={'4px'}
                  borderLeftColor={'primary'}>
                  <ListIcon as={DashboardIcon} fontSize={pixelToRem(24)} />
                  DashBoard
                </ListItem>
              </Link>
            )}
            {(!isAdmin && !loading && meData) && (
              <Link href={'/private/meus-registros'}>
                <ListItem
                  color='primary'
                  display={'flex'}
                  cursor={'pointer'}
                  borderY={'1px'}
                  borderColor={'gray300'}
                  py={pixelToRem(40)}
                  px={pixelToRem(10)}
                  alignItems={'center'}
                  borderLeft={'4px'}
                  borderLeftColor={'primary'}>
                  <ListIcon as={CalenderIcon} fontSize={pixelToRem(24)} />
                  Meus registros
                </ListItem>
              </Link>
            )}
          </List>
        </Box>
        <Button onClick={handleLogout} mb={pixelToRem(20)} color='black' display={'flex'} justifyContent={'start'} leftIcon={<Icon as={LogoutIcon} fontSize={pixelToRem(24)} />}>Sair</Button>
      </Flex>
      <Flex flexDir={'column'} w='full' pb={pixelToRem(30)}>
        {children}
      </Flex>
    </Flex>
  );
}
