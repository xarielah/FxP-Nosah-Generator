import { Box, Button, Flex, Link, Heading } from '@chakra-ui/react';

const PmUsers = ({ weeklyUser, weeklyThread }) => {
    const pmLink = 'https://www.fxp.co.il/private.php?do=newpm&u=';
    const nosahim = 'https://www.fxp.co.il/showthread.php?t=21213781';

    function getUrl(url) {
        const urlObject = new URL('', url);
        const urlParam = new URLSearchParams(urlObject.search);
        const id = urlParam.get('u');
        if (id) {
            return `${pmLink}${id}`;
        } else return '#';
    }

    return (
        <Box mb={7}>
            <Flex
                flexDirection={'column'}
                gap={3}
                bg='#333333'
                borderRadius={'md'}
                py={5}
            >
                <Heading color='white' size='md' textDecoration={'underline'}>
                    קישורים מהירים:
                </Heading>
                <Link target='_blank' href={nosahim}>
                    <Button colorScheme={'gray'} size='sm'>
                        נוסח לשליחת הודעות פרטיות
                    </Button>
                </Link>
                <Flex gap={2} justify={'center'}>
                    {weeklyUser.length > 0 && (
                        <Link target='_blank' href={getUrl(weeklyUser[1])}>
                            <Button colorScheme={'linkedin'} size='sm'>
                                ה"פ למשקיען {weeklyUser[0]}
                            </Button>
                        </Link>
                    )}
                    {weeklyThread.length > 0 && (
                        <Link target='_blank' href={getUrl(weeklyThread[2])}>
                            <Button colorScheme={'linkedin'} size='sm'>
                                ה"פ לפותח אשכול השבוע
                            </Button>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
};

export default PmUsers;
