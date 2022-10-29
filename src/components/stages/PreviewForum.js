import { Box, Image, Flex, Link, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

const PreviewForum = ({ forum, highlightLink }) => {
    const [firstClickedLink, setFirstClickedLink] = useState(false);
    const [secondClickedLink, setSecondClickedLink] = useState(false);

    return (
        <Flex
            flexDirection={'column'}
            justify={'center'}
            align={'center'}
            bg={'#33333355'}
            color={'white'}
            py={3}
            px={1}
            maxH={{ base: '200px', md: 'max-content' }}
            margin={'0 auto 2em'}
            boxShadow={'0 0 10px #33333377'}
            borderRadius={'md'}
        >
            <Box>
                <Image
                    src={forum.logo}
                    w={{ base: '50%', md: '15em' }}
                    maxW={'100%'}
                    m={'0 auto'}
                />
            </Box>
            <Flex flexDirection={'column'} gap={3} align={'center'}>
                <Flex
                    gap={3}
                    flexDirection={{ base: 'column', sm: 'row' }}
                    align={'center'}
                >
                    <Link
                        _hover={{ textDecoration: 'none' }}
                        href={forum.mThread}
                        target={'_blank'}
                    >
                        <Button
                            borderRadius={'full'}
                            border={
                                highlightLink &&
                                firstClickedLink &&
                                !secondClickedLink &&
                                '2px solid red'
                            }
                            boxShadow={
                                highlightLink &&
                                firstClickedLink &&
                                !secondClickedLink &&
                                '0 0 10px #fafafa'
                            }
                            colorScheme={
                                firstClickedLink && highlightLink
                                    ? `${
                                          secondClickedLink
                                              ? 'whatsapp'
                                              : 'yellow'
                                      }`
                                    : 'blackAlpha'
                            }
                            size='sm'
                            onClick={() => setSecondClickedLink(true)}
                        >
                            קישור לדיון על הזוכים{' '}
                            {firstClickedLink &&
                                highlightLink &&
                                `${secondClickedLink ? '👌' : '✋'}`}
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default PreviewForum;
