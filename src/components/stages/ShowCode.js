import { Container, Textarea, Button, Box } from '@chakra-ui/react';
import Notes from '../general/Notes';
import getBBCode from '../../data/getBBCode';
import { useState } from 'react';
import PreviewForum from './PreviewForum';

const ShowCode = ({ weeklyUser, weeklyThread, forum }) => {
    const [isOpen, setOpen] = useState(true);
    const [copied, setCopied] = useState(false);

    const fullText = getBBCode(forum, weeklyUser, weeklyThread);
    const copyText = () => navigator.clipboard.writeText(fullText);

    const close = () => setOpen(false);

    return (
        <Container>
            {isOpen && <Notes close={close} />}
            <PreviewForum forum={forum} />
            <Box align='center'>
                <Button
                    mb={3}
                    size='sm'
                    colorScheme={'messenger'}
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
