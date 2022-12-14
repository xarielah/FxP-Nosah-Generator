import { Box, Select, Image, Heading, Text } from '@chakra-ui/react';
import logo from '../../images/logo.png';
import forums from '../../data/forums';

const PickForum = ({ setter, inc, forum, stage }) => {
    const onchange = (value) => {
        const id = parseInt(value);
        const forum = forums.filter((item) => item.id === id)[0];
        setter(forum);
        if (stage === 0) inc();
    };

    return (
        <Box>
            <Box align='center' mt={3}>
                <Image
                    src={logo}
                    bg='#333333'
                    w='100%'
                    p={3}
                    borderRadius='md'
                    alt='category logo'
                />
            </Box>
            <Heading align='center' mt={3} size='lg' color={'messenger.500'}>
                מחולל נוסח משקיען ואשכול השבוע
            </Heading>
            <Text align='center' fontWeight='bold'>
                קטגוריית משחקי פעולה
            </Text>
            <Select
                borderRadius={'full'}
                my={4}
                onChange={(e) => onchange(e.target.value)}
                bg={'#fafafa'}
            >
                {!forum && <option value={0}>בחר פורום מהרשימה</option>}
                {forums.map((forum, index) => (
                    <option key={index} value={forum.id}>
                        {forum.name}
                    </option>
                ))}
            </Select>
        </Box>
    );
};

export default PickForum;
