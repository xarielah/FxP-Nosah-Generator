import { Container, Textarea, Button, Box } from '@chakra-ui/react';
import Notes from '../general/Notes';
import getBBCode from '../../data/getBBCode';
import { useState } from 'react';

const ShowCode = ({ weeklyUser, weeklyThread, forum }) => {
    const [copied, setCopied] = useState(false);

    const fullText = getBBCode(forum, weeklyUser, weeklyThread);
    const copyText = () => navigator.clipboard.writeText(fullText);

    return (
        <Container>
            <Notes />
            <Box align='center'>
                <Button
                    mb={3}
                    size='sm'
                    bg='cyan.400'
                    color='white'
                    onClick={() => {
                        copyText();
                        setCopied(true);
                    }}
                >
                    {copied ? 'הנוסח הועתק בהצלחה! ✔️' : 'העתק נוסח ללוח'}
                </Button>
            </Box>
            <Textarea rows={10} value={fullText} readOnly />
            <Box align='center' mt={5}>
                <Button
                    colorScheme='red'
                    size='sm'
                    onClick={() => (window.location.href = '/')}
                >
                    אפס הכל
                </Button>
            </Box>
        </Container>
    );
};

export default ShowCode;
