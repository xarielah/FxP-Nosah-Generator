import { Box, Image, Flex, Link, Text, Button } from '@chakra-ui/react';

const PreviewForum = ({ forum }) => {
    return (
        <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            mb={5}
            bg={'#33333388'}
            color={'white'}
            py={3}
            px={1}
            margin={'0 auto 2em'}
            boxShadow={'0 0 10px #33333377'}
            borderRadius={'md'}
        >
            <Box>
                <Image src={forum.logo} w='20rem' maxW={'100%'} />
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
                <Flex
                    gap={3}
                    flexDirection={{ base: 'column', sm: 'row' }}
                    align={'center'}
                >
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        href={forum.thread}
                        target={'_blank'}
                    >
                        <Button colorScheme={'blackAlpha'} size='sm'>
                            קישור לאתגר
                        </Button>
                    </Link>
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        href={forum.mThread}
                        target={'_blank'}
                    >
                        <Button colorScheme={'blackAlpha'} size='sm'>
                            קישור לדיון על הזוכים
                        </Button>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
};

export default PreviewForum;
