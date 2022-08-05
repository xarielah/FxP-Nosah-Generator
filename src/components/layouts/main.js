import {
    Box,
    Container,
    Image,
    Heading,
    Divider,
    Text,
    Link,
    Flex,
} from '@chakra-ui/react';
import logo from '../../images/logo.png';

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
                <Box align='center' mt={3}>
                    <Image
                        src={logo}
                        bg='gray.200'
                        maxW='400px'
                        p={3}
                        borderRadius='md'
                        alt='category logo'
                    />
                </Box>
                <Heading align='center' mt={3} size='lg' color='cyan.400'>
                    מחולל נוסח משקיען ואשכול השבוע
                </Heading>
                <Text align='center' fontWeight='bold'>
                    קטגוריית משחקי פעולה
                </Text>
                {children}
            </Container>
            <Box w='100%' mb={10}>
                <Divider my={4} />
                <Text
                    align={'center'}
                    fontStyle='italic'
                    fontWeight={'medium'}
                    color='gray.300'
                >
                    נבנה על ידי{' '}
                    <Link
                        textDecoration={'none'}
                        target='_blank'
                        color='#0000ff'
                        href='https://www.fxp.co.il/member.php?u=749522'
                    >
                        Middleware
                    </Link>{' '}
                    - אריאל
                </Text>
            </Box>
        </Flex>
    );
};

export default MainLayout;
