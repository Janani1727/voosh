import React from 'react';
import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { FaClipboardList } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <Box backgroundColor="#3770ec" padding="4" boxShadow="md">
      <Flex
        maxW="1200px"
        margin="0 auto"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {/* Logo/Icon Section */}
        <IconButton
          aria-label="Clipboard Icon"
          icon={<FaClipboardList />}
          fontSize="30px"
          background="transparent"
          _hover={{ background: 'transparent' }}
          color="white"
        />

        {/* Button Section */}
        <Flex gap="4" alignItems="center">
          <Button colorScheme="white" color={'white'} variant="solid">
            Login
          </Button>
          <Button colorScheme="white" backgroundColor={"white"}variant="outline">
            Signup
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
