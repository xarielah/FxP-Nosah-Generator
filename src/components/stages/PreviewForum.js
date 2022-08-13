import { Box, Image, Flex, Link, Text, Button } from '@chakra-ui/react';

const PreviewForum = ({ forum }) => {
    return (
        <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            mb={5}
            bg={'#333333'}
            color={'white'}
            py={3}
            px={6}
            margin={'0 auto 2em'}
            borderRadius={'md'}
        >
            <Box>
                <Image src={forum.logo} maxW='20rem' />
            </Box>
            <Box>
                <Text align='center' mb={3}>
                    פורום שנבחר:{' '}
                    <Link
                        href={forum.href}
                        target={'_blank'}
                        fontWeight={'bold'}
                    >
                        {forum.name}
                    </Link>
                </Text>
                <Flex gap={3}>
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        href={forum.thread}
                        target={'_blank'}
                    >
                        <Button colorScheme={'messenger'} size='sm'>
                            קישור לאתגר
                        </Button>
                    </Link>
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        href={forum.mThread}
                        target={'_blank'}
                    >
                        <Button colorScheme={'messenger'} size='sm'>
                            קישור לדיון על הזוכים
                        </Button>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PreviewForum;
