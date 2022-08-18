import { Container, Flex, Link, Text } from '@chakra-ui/react';
import Updates from '../general/Updates';
import bg from '../../images/bg.jpg';
import AnimationWrapper from './animation';
import ContentAnimation from './contentAnimation';

const MainLayout = ({ children }) => {
    return (
        <Flex
            flexDirection='column'
            h='100vh'
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
                <Container
                    maxW='container.md'
                    w={{ base: '90%', md: '100%' }}
                    mb={{ base: 0, md: 14 }}
                    py={10}
                    border={'1px solid #fafafa55'}
                    borderRadius={'md'}
                    bg={'#fafafa22'}
                    backdropFilter={'blur(5px)'}
                    boxShadow={'0 0 30px #33333322'}
                >
                    <ContentAnimation>{children}</ContentAnimation>
                    {/* <Updates /> */}
                    <Text
                        textAlign={'center'}
                        fontSize={'.7rem'}
                        fontWeight={'bold'}
                        color={'#3e3e3e'}
                    >
                        תאריך עדכון אחרון: 18/08/22
                    </Text>
                    <Text textAlign={'center'} mt={5} mb={-5} opacity={0.7}>
                        הכלי נוצר על ידי{' '}
                        <Link
                            color={'blue'}
                            fontWeight={'bold'}
                            href={'https://www.fxp.co.il/member.php?u=749522'}
                            target={'_blank'}
                            _hover={{ textDecoration: 'none' }}
                        >
                            Tony Black
                        </Link>
                    </Text>
                </Container>
            </AnimationWrapper>
        </Flex>
    );
};

export default MainLayout;
