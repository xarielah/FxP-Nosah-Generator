import { Box, Container, Divider, Text, Link, Flex } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
    return (
        <Flex
            flexDirection='column'
            h='100vh'
            justify='space-between'
            align='center'
            as='main'
        >
            <Container
                maxW='container.md'
                style={{
                    border: '1px #cccccc55 solid',
                    borderRadius: '8px',
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-60%)',
                    width: '95%',
                    padding: '2em 0',
                }}
            >
                {children}
            </Container>
            <Box
                w='100%'
                mb={10}
                bg={'#333333'}
                p={10}
                position={'absolute'}
                top={'88vh'}
            >
                <Text
                    align={'center'}
                    fontWeight={'bold'}
                    bg='white'
                    w='max-content'
                    margin='0 auto'
                    py={2}
                    px={4}
                    borderRadius={'md'}
                >
                    נבנה על ידי{' '}
                    <Link
                        textDecoration={'none'}
                        target='_blank'
                        color='#0000ff'
                        href='https://www.fxp.co.il/member.php?u=749522'
                    >
                        Tony Black
                    </Link>{' '}
                    - אריאל
                </Text>
            </Box>
        </Flex>
    );
};

export default MainLayout;
