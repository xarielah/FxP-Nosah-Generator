import { Container, Flex, Link, Text, Box } from '@chakra-ui/react';
import Updates from '../general/Updates';
import bg from '../../images/bg.jpg';
import AnimationWrapper from './animation';
import ContentAnimation from './contentAnimation';

const MainLayout = ({ children }) => {
    return (
        <Flex
            flexDirection='column'
            minH='100vh'
            justify='center'
            align='center'
            as='main'
            style={{
                backgroundImage: `url('${bg}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <AnimationWrapper>
                <ContentAnimation>
                    <Container
                        minW={{ base: '', sm: '400px', md: '700px' }}
                        w={{ base: '90%', md: '100%' }}
                        h={'max-content'}
                        mb={{ base: 0, md: 14 }}
                        p={2}
                        border={'1px solid #fafafa55'}
                        borderRadius={'md'}
                        bg={'#fafafa11'}
                        backdropFilter={'blur(3px)'}
                        boxShadow={'0 0 30px #33333322'}
                    >
                        <Box>{children}</Box>
                        <Text
                            textAlign={'center'}
                            fontSize={'.7rem'}
                            fontWeight={'bold'}
                            color={'#3e3e3e'}
                        >
                            תאריך עדכון אחרון: 10/2022
                        </Text>
                        <Text textAlign={'center'} opacity={0.7}>
                            הכלי נוצר על ידי{' '}
                            <Link
                                color={'blue'}
                                fontWeight={'bold'}
                                href={
                                    'https://www.fxp.co.il/member.php?u=749522'
                                }
                                target={'_blank'}
                                _hover={{ textDecoration: 'none' }}
                            >
                                Middleware
                            </Link>
                        </Text>
                    </Container>
                </ContentAnimation>
            </AnimationWrapper>
        </Flex>
    );
};

export default MainLayout;
